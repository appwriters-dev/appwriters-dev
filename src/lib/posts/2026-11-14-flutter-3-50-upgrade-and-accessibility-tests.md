---
title: "Upgrading to Flutter 3.50, and the accessibility bugs our tests found"
slug: flutter-3-50-upgrade-and-accessibility-tests
date: 2026-11-14
excerpt: "An Android build break in Flutter 3.50, a contrast bug left behind by the wide-gamut Color change, and a text-size cap hiding in plain sight. What broke, why, and the tests that now guard it."
keywords: Flutter,Flutter 3.50,Dart,Android,Gradle,applicationIdSuffix,accessibility,a11y,WCAG,contrast,text scaling,widget testing,meetsGuideline
coverImage: /images/flutter_3_50_accessibility_cover.svg
coverWidth: 16
coverHeight: 9
categories: [Flutter]
---

<base target="_blank" />

I recently moved a project onto Flutter 3.50 (released 9 November). The upgrade itself broke one thing on Android. Building an accessibility baseline afterwards turned up more. Some problems I found by reading the code, and three only showed up once the new tests ran. None of those had anything to do with the new release; they had been sitting in the code for a while.

None of these are exotic. If you have a Flutter app with a `.dev` build flavour, a hand-rolled "pick a readable text colour" helper, or a text-size setting, there is a fair chance at least one of them is in your codebase too. Here is what each one looked like, why it happened, and how it was fixed.

## 1. `applicationIdSuffix` on the profile build type breaks every Android build

A common trick is to give debug and profile builds their own application id, so they install *beside* the copy from the Play Store instead of replacing it:

```kotlin
// android/app/build.gradle.kts
buildTypes {
    getByName("profile") {
        applicationIdSuffix = ".dev"
    }
}
```

On Flutter 3.50 every Android build fails during configuration:

```
A problem occurred configuring project ':device_info_plus'.
> Library projects cannot set applicationIdSuffix. applicationIdSuffix is set to '.dev' in build type 'profile'.
```

Note the project name: the error is in a *plugin*, not your app.

### Why it happens

The Flutter Gradle plugin now copies your app's build types onto each plugin's library project, so the plugin's variants resolve (`copyAppBuildTypesToPlugin` in `PluginHandler.kt`). It does that with `initWith`, for every app build type the plugin does not already have. Plugins have a `debug` build type but not a `profile` one, so `profile` gets copied over, suffix included. A library cannot have an `applicationIdSuffix`, and AGP rejects it.

That is also why the same suffix on `debug` keeps working: the plugin already has `debug`, so nothing is copied.

### The fix: use the variant API

Instead of setting the suffix on the build type, set the application id on the app's own `profile` variant. The variant API only touches the app module, so nothing leaks into plugins:

```kotlin
// android/app/build.gradle.kts, after the android { } block
check(android.buildTypes.findByName("profile") != null) {
    "Flutter no longer creates a profile build type; move the .dev suffix"
}

androidComponents {
    onVariants(selector().withBuildType("profile")) { variant ->
        variant.applicationId.set("com.example.myapp.dev")
    }
}
```

The `check()` matters. `withBuildType("profile")` silently matches nothing if the build type ever goes away. Without the check, a future Flutter release could drop your suffix without a word, and the next profile build would install over the store app and its data. With it, the build fails and tells you why.

The `debug` build type can keep its plain `applicationIdSuffix`.

### Aside: flutter_local_notifications 23 needs compileSdk 37

If you use `flutter_local_notifications`, version 23 compiles against Android SDK 37, one level above Flutter 3.50's default. This keeps following Flutter's default once it catches up:

```kotlin
android {
    compileSdk = maxOf(flutter.compileSdkVersion, 37)
}
```

## 2. A contrast bug that is probably in other codebases too

Since Flutter's wide-gamut `Color`, the `r`, `g` and `b` getters return **doubles from 0 to 1**, not integers from 0 to 255. Any code written against the old API that still divides by 255 keeps compiling and quietly computes the wrong thing.

Our shared design system had this helper to pick the text colour on a filled background:

```dart
/// Pick a legible on-color for a filled background.
static Color _onColor(Color bg) {
  final l = (0.2126 * bg.r + 0.7152 * bg.g + 0.0722 * bg.b) / 255;
  return l > 0.62 ? PbTokens.n900 : Colors.white;
}
```

With channels in 0–1, `l` can never be more than about 0.004, so it is never above 0.62, and the helper **always picks white**. In the light theme, with dark accents, that happens to look fine. In the dark theme, where the accents are light pastels, it put white text on light buttons: between 1.6:1 and 2.9:1 across our accent colours, against the 4.5:1 that WCAG AA asks for.

The same design system's danger colour was also 3.5:1 on the light surface.

Nobody noticed either by eye. An automated test that checks every accent in both themes against 4.5:1 found both on its first run.

### The fix: `computeLuminance()` and an actual contrast ratio

Don't hand-roll luminance. `Color.computeLuminance()` does the WCAG relative-luminance calculation, gamma correction included, and is correct for the new `Color`. Then, rather than comparing luminance to a tuned threshold, pick whichever candidate has the better contrast ratio:

```dart
double contrast(Color a, Color b) {
  final la = a.computeLuminance();
  final lb = b.computeLuminance();
  return la > lb ? (la + 0.05) / (lb + 0.05) : (lb + 0.05) / (la + 0.05);
}

Color onColor(Color background) =>
    contrast(dark, background) > contrast(Colors.white, background)
        ? dark
        : Colors.white;
```

For the danger colour, we darken it (light theme) or lighten it (dark theme) in small HSL lightness steps until it reaches 4.5:1 on the surface. A colour that already passes is left alone.

Worth a search in your own project: `/ 255` next to `.r`, `.g` or `.b`.

## 3. Testing accessibility instead of claiming it

`flutter_test` ships accessibility guidelines you can assert against any pumped screen:

```dart
Future<void> expectGuidelines(WidgetTester tester) async {
  await expectLater(tester, meetsGuideline(androidTapTargetGuideline));
  await expectLater(tester, meetsGuideline(iOSTapTargetGuideline));
  await expectLater(tester, meetsGuideline(labeledTapTargetGuideline));
  await expectLater(tester, meetsGuideline(textContrastGuideline));
}
```

We run that on every screen, in the light and the dark theme, at a phone size and a desktop size. Call `tester.ensureSemantics()` first, and dispose the handle at the end of the test. Adding a screen to the suite is one entry in a map of "how to get to this screen from a fresh app".

While building the baseline, I also fixed a few things just by reading the code: password visibility toggles with no label, text-size options that a screen reader announced as "A" four times, and accent swatches at 44dp instead of 48. The tests now guard two of those. Remove a toggle's tooltip and `labeledTapTargetGuideline` fails; shrink the swatches and the tap-target guidelines fail. The "A" fix is not enforced, because those segments also have tooltips, and a tooltip counts as a label.

The suite also taught us two less obvious lessons.

### Trap 1: desktop-sized tests must run as a desktop platform

Widget tests run as Android by default. Setting a desktop *size* doesn't change that. But Flutter only shrinks tap targets and tightens visual density on desktop *platforms*. Android keeps padded targets at any size, so a desktop-sized test on Android passes a theme that fails the 48dp check on desktop platforms.

The fix in the test is to run the desktop cases as a desktop platform:

```dart
final phoneOnly = TargetPlatformVariant.only(TargetPlatform.android);
final desktopOnly = TargetPlatformVariant.only(TargetPlatform.windows);

testWidgets('settings meets the guidelines on a desktop', (tester) async {
  // pump the app at a desktop size, open the screen, check the guidelines
}, variant: desktopOnly);
```

The fix in the theme is to opt out of the desktop shrinking. Take these two lines out and six of the desktop guideline tests fail when they run as Windows. Run the same tests as Android and they still pass:

```dart
theme.copyWith(
  materialTapTargetSize: MaterialTapTargetSize.padded,
  visualDensity: VisualDensity.standard,
);
```

### Trap 2: mutation-check your tests

A test that passes is only interesting if it would fail without the fix. So after each fix, put the bug back and check that some test goes red.

That caught a weak test. We had a desktop test that pressed Tab repeatedly and asserted that focus walked through the navigation before entering the content. With the fix (separate `FocusTraversalGroup`s for navigation and content) removed, it **still passed**. Flutter's default reading order happened to give the right answer for the screens we have today, because nothing in the content sat level with the top of the navigation. Add a search field at the top of a screen and the two would interleave, row by row.

So we added a structural test alongside it, one that fails as soon as the groups are missing:

```dart
Finder nearestGroup(Finder of) => find
    .ancestor(of: of, matching: find.byType(FocusTraversalGroup))
    .first;

expect(
  find.descendant(of: nearestGroup(navigation), matching: content),
  findsNothing,
);
expect(
  find.descendant(of: nearestGroup(content), matching: navigation),
  findsNothing,
);
```

## 4. Text scaling, silently capped at 160%

This one I found by reading the code, not with a test. It's a common pattern: apply an in-app text size on top of the device setting, with a clamp so layouts don't blow up:

```dart
MediaQuery(
  data: media.copyWith(
    textScaler: media.textScaler.clamp(
      minScaleFactor: settings.textScale,
      maxScaleFactor: settings.textScale * 1.6,
    ),
  ),
  child: child,
);
```

That clamp caps the *device* setting. A user who has set their phone to 200% text gets 160% in your app, short of WCAG's "resize text up to 200%". They chose 200% for a reason.

### The fix: multiply, don't clamp

A small `TextScaler` that multiplies the platform's scaler by the in-app factor:

```dart
@immutable
class UserTextScaler extends TextScaler {
  const UserTextScaler({required this.platform, required this.factor});

  /// What the device asked for, from `MediaQuery.textScalerOf`.
  final TextScaler platform;

  /// The in-app text size from Settings.
  final double factor;

  @override
  double scale(double fontSize) => platform.scale(fontSize) * factor;

  // Still required by the interface, although deprecated.
  @override
  // ignore: deprecated_member_use
  double get textScaleFactor => platform.textScaleFactor * factor;

  @override
  bool operator ==(Object other) =>
      other is UserTextScaler &&
      other.platform == platform &&
      other.factor == factor;

  @override
  int get hashCode => Object.hash(platform, factor);
}
```

Because the platform scaler still does the per-size work, Android 14's nonlinear font scaling (large text grows less than small text) is kept. A plain `TextScaler.linear(...)` would throw that away.

Uncapping it is only half of the job; every screen then has to actually lay out at 200%. So the suite pumps each screen with a 2.0 platform text scale, at a normal phone size and at a desktop size. An overflow is reported as an exception, so a clean pump is the assertion:

```dart
testWidgets('settings lays out at 200% on a phone', (tester) async {
  // pump the app with a platform text scale of 2.0, open the screen
  expect(tester.takeException(), isNull);
});
```

It found a real overflow straight away: on a wide window, the inline navigation drawer was too narrow for its labels at 200%. The fix was to widen the drawer with the text, and to fall back to the modal drawer once a drawer that wide would crowd the content.

## Wrapping up

None of these showed up by looking at the app. The Gradle break at least fails loudly. The text-size cap and the unlabelled controls took a careful read of the code. The two contrast defects and the drawer overflow only appeared once a test checked for them. The tests themselves only held up after two more steps. They had to run the way real devices do: as a desktop platform, and at the user's real text size. And each fix had to be removed again to see a test fail.

All of this landed in [beej](https://pub.dev/packages/beej) 1.3.0 and 1.4.0. beej is a Dart CLI I build that generates complete Flutter apps, so every app it generates now starts with these fixes and this test suite. The source is on [GitHub](https://github.com/lohanidamodar/beej), but none of the fixes above depend on it.

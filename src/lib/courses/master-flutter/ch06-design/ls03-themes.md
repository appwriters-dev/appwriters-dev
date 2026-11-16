---
id: ls03-themes
title: Themes
description: Use ThemeData and Material 3 color schemes to change the look and feel of your whole app in one place.
---

Theming allows you to change the look and feel of your application. It is a useful feature that allows you to change the appearance of your whole application in one place, instead of styling every widget. You can customize your application's colors, fonts, and other visual elements.

Since Flutter 3.16, apps use Material 3 by default. The easiest way to create a matching set of colors is to generate a color scheme from a single seed color:

```dart
MaterialApp(
  theme: ThemeData(
    colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo),
  ),
  darkTheme: ThemeData(
    colorScheme: ColorScheme.fromSeed(
      seedColor: Colors.indigo,
      brightness: Brightness.dark,
    ),
  ),
  home: const HomePage(),
);
```

Widgets then read colors and text styles from the theme, for example `Theme.of(context).colorScheme.primary` or `Theme.of(context).textTheme.headlineMedium`.

## Projects

### 1. Understanding Theme

Create a new Flutter project. Update the theme so that the scaffold background color is `white` and the `AppBar` background color is `lime`. Update the existing `Text` widget to use the `displayLarge` style (check `Theme.of(context).textTheme`).

### 2. Text Theme

Create a new Flutter project. Update the `AppBar` theme so that the background color is `indigo`. Also update the AppBar title text style so that the font size is `20` and the weight is `bold`. Update the text theme of the application so that the `bodyMedium` text size is `16` and the `displayLarge`, `displayMedium`, `displaySmall`, `headlineLarge`, `headlineMedium` and `headlineSmall` sizes are `28, 26, 24, 22, 20, 18` respectively.

Finally, create a simple home page with an AppBar and multiple text widgets in the body that use these six styles and also the normal body text.

> **Note:** Older tutorials use the names `headline1` to `headline6` and `bodyText1`/`bodyText2`. These were removed from Flutter; use the Material 3 names above instead.

## Resources

- [MaterialApp.theme](https://api.flutter.dev/flutter/material/MaterialApp/theme.html)
- [ThemeData](https://api.flutter.dev/flutter/material/ThemeData-class.html)
- [MaterialApp.darkTheme](https://api.flutter.dev/flutter/material/MaterialApp/darkTheme.html)
- [ThemeData.dark](https://api.flutter.dev/flutter/material/ThemeData/ThemeData.dark.html)
- [ThemeData.light](https://api.flutter.dev/flutter/material/ThemeData/ThemeData.light.html)
- [ColorScheme.fromSeed](https://api.flutter.dev/flutter/material/ColorScheme/ColorScheme.fromSeed.html)
- [Use themes to share colors and font styles **(Official)**](https://docs.flutter.dev/cookbook/design/themes)


# Image and Font Assets

1. Learn about adding image assets in a Flutter app and how to display them.
2. Understand the different types of image assets that can be added, such as PNG, JPEG, and GIF.
3. Experiment with different ways of displaying images, such as using the Image widget, NetworkImage widget, and AssetImage widget.
4. Learn about adding custom fonts to a Flutter app and how to use them in the app.
5. Explore the different types of font files that can be added, such as TrueType fonts and OpenType fonts.
6. Use the FontFamily and FontWeight properties to customize the display of text in the app.

**Resources:**

1. Flutter documentation on adding assets: https://flutter.dev/docs/development/ui/assets-and-images
2. Flutter and Dart tutorial on using images in Flutter: https://medium.com/flutter-community/flutter-image-widget-decoded-e319d21a044d
3. Flutter and Dart tutorial on using custom fonts in Flutter: https://medium.com/flutter-community/working-with-custom-fonts-in-flutter-275ccc2ea8f6
4. Google Fonts library for downloading and using fonts in a Flutter app: https://pub.dev/packages/google_fonts
5. Flutter and Dart tutorial on creating beautiful text in Flutter using custom fonts: https://medium.com/flutter-community/creating-beautiful-text-in-flutter-3bd5f8531efe

# User Interface Design - Part 2

1. Review the basics of Flutter app development from Day 8-10.

2. Learn about more advanced widgets, such as the ListView and GridView widgets. These widgets are used to display lists and grids of items.

3. Experiment with different layouts and designs using these widgets. For example, you can create a list of items with images and text, or a grid of items with varying sizes.

4. Create a more advanced app with a custom user interface using the widgets you've learned about.

5. Run the app on an emulator or physical device to see the changes.

Sure, here are some code examples for Day 11:

1. ListView Widget:

```dart
ListView(
  children: <Widget>[
    ListTile(
      leading: Icon(Icons.map),
      title: Text('Map'),
    ),
    ListTile(
      leading: Icon(Icons.photo_album),
      title: Text('Album'),
    ),
    ListTile(
      leading: Icon(Icons.phone),
      title: Text('Phone'),
    ),
  ],
)
```

2. GridView Widget:

```dart
GridView.count(
  crossAxisCount: 2,
  children: List.generate(4, (index) {
    return Center(
      child: Text(
        'Item $index',
        style: Theme.of(context).textTheme.headline6,
      ),
    );
  }),
)
```


By the end of this day, you should have a better understanding of how to use image and font assets in your Flutter application.
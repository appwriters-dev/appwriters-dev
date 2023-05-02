# Assets: Images and Fonts

Image and font assets play a crucial role in the design and functionality of Flutter applications. They contribute to a visually appealing UI, improve overall design, and can establish the tone and branding of the app. By optimizing images and selecting appropriate fonts, app developers can enhance the user experience and differentiate their app from others in the market.

> **Project** - Quotes UI
>
> Build the following UI, use two custom fonts (choose any from [Google Fonts](https://fonts.google.com) or use your own), use seperate font for the quote and the author name.
> 
> <img src="https://github.com/lohanidamodar/flutter_ui_challenges/raw/master/screenshots/quotes1.png" alt="quotes ui" />
> **Tip**: Try once without using any packages, and again using the [google_fonts](https://pub.dev/packages/google_fonts) package.

By the end of the day, you should have a better understanding of the importance of image and font assets in Flutter apps. You will have learned how to add and display different types of image assets, and how to add and use custom fonts to your apps.

## Tips

- Adding Image Assets

  - Create a directory in your project's root directory to store your image assets.
  - Add your image files (e.g. PNG, JPEG, or GIF files) to this directory.
  - In your app's `pubspec.yaml` file, specify the location of the image assets directory and the images you want to use, like so:

```yaml
flutter:
  assets:
    - assets/images/
```

     - To display an image in your app, use the `Image` widget and specify the location of the image file, like so:

```dart
Image.asset('assets/images/my_image.png')
```

    Alternatively, you can use the `NetworkImage` widget to display an image from a URL or the `AssetImage` widget to display an image from an asset bundle.

- Adding Custom Fonts
    - Create a directory in your project's root directory to store your font files.
    - Add your font files (e.g. TrueType or OpenType font files) to this directory.
    - In your app's `pubspec.yaml` file, specify the location of the font files directory and the fonts you want to use, like so:

```yaml
flutter:
  fonts:
    - family: MyCustomFont
      fonts:
        - asset: assets/fonts/my_custom_font.ttf
          weight: 400
```

    - To use a custom font in your app, specify the font family and weight when creating a `TextStyle`, like so:

```dart
Text(
  'Hello, World!',
  style: TextStyle(
    fontFamily: 'MyCustomFont',
    fontWeight: FontWeight.w400,
  ),
)
```

> More practice projects
>
> - [Using image assets](https://masterflutter.appwriters.dev/ch08-assets/ls01-images)
> - [Using custom fonts](https://masterflutter.appwriters.dev/ch08-assets/ls02-fonts)
> 

## Resources

- [Flutter documentation on adding assets](https://flutter.dev/docs/development/ui/assets-and-images)
- [Image Widget](https://api.flutter.dev/flutter/widgets/Image-class.html)
- [Image.asset](https://api.flutter.dev/flutter/widgets/Image/Image.asset.html)
- [Flutter documentation on using custom font](https://docs.flutter.dev/cookbook/design/fonts)
- [Google Fonts](https://fonts.google.com/) - free custom fonts
- [Fonts in Pubspec](https://docs.flutter.dev/cookbook/design/fonts#2-declare-the-font-in-the-pubspec)
- [Google Fonts package](https://pub.dev/packages/google_fonts)

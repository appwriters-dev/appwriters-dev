# Setting up the Environment

Set up your development environment to work with Flutter and Dart. This will allow you to create and run Dart and Flutter projects on your computer.

> **Project**
> 
> Create and run the default **Dart** console application
> 

By the end of this day, you should be able to create and run a new dart console project.

## Tips

-   Install the latest stable version of the Flutter SDK. The Dart SDK comes bundled with Flutter, so you don't need to install it separately.
    -   The easiest way is to follow the official install guide ([https://docs.flutter.dev/install](https://docs.flutter.dev/install)). It walks you through installing VS Code with the Flutter extension, which can download the Flutter SDK for you.
    -   Alternatively, on Windows, macOS or Linux, you can download the Flutter SDK archive from the official website, extract it, and add the `flutter/bin` folder to your `PATH`.
-   Configure your IDE or code editor to work with Flutter and Dart.
    -   If you're using Android Studio or IntelliJ IDEA, install the Flutter and Dart plugins from the marketplace.
    -   If you're using Visual Studio Code, install the Flutter and Dart extensions from the marketplace.
    -   If you're using another IDE or code editor, check the official Flutter documentation for instructions on how to set it up.
Once you have installed and configured everything, check your setup using the following command:

`flutter doctor`

This should display the status of your Flutter installation and list any remaining dependencies that are required to complete the setup. If you're missing any dependencies, follow the instructions provided by the command to install them.

Finally, create and run the default Dart console application with `dart create hello_dart`, then `cd hello_dart` and `dart run`.

### 📚 Resources

- [Official Flutter Installation Guide](https://docs.flutter.dev/install)
- [Dart Tutorial Install Dart on Windows](https://dart-tutorial.com/introduction-and-basics/dart-install/)
- [Flutter Doctor](https://docs.flutter.dev/reference/flutter-cli)
- [Visual Studio Code Installation](https://code.visualstudio.com/docs/getstarted/overview)
- [Flutter and Dart plugins for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter)
- [Installing Android Studio](https://developer.android.com/studio/install)
- [Installing Xcode](https://developer.apple.com/xcode/resources/)

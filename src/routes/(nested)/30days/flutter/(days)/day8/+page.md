# Dependency Management

Dependency management is an essential aspect of any software development project. It involves managing the external libraries or packages that your project relies on to function correctly. In Dart, you can use a tool called `pub` and a configuration file called `pubspec.yaml` to manage dependencies for your project.

> **Project** - Console Dictionary
> 
> Create a Dart console dictionary that accepts a word and prints the definition and other information about the word to the console.
>
> Packages: [http](https://pub.dev/packages/http), with the [Free Dictionary API](https://dictionaryapi.dev/) (no API key needed)

By the end of this day, you should have a good understanding of how to use pub and pubspec to manage Dart project dependencies, and know the basics of how to import and use packages in Dart.

## Tips

- `pub` is a package manager that comes bundled with the Dart SDK, and it allows you to search for and download external packages from the Dart package repository. You can also use it to install, upgrade, and remove packages as needed for your project.

- To add a package to your project, run `dart pub add <package>` (for example `dart pub add http`). This adds the latest compatible version to your `pubspec.yaml` and downloads it. Run `dart pub get` after editing `pubspec.yaml` by hand.

- The `pubspec.yaml` file is where you define your project's dependencies and other metadata about your project, such as its name, version, and description. This file is used by `pub` to manage your project's dependencies and ensure that your project has the correct versions of packages installed.

- To import and use packages in your Dart project, you can use the `import` statement to bring in the package's functionality into your project. For example, to use the `http` package, you would add the following line to your Dart file:

```dart
import 'package:http/http.dart';
```

This would allow you to use the `http` package's functions and classes in your code.


## Resources

- [Pub tool](https://dart.dev/tools/pub/cmd)
- [Pubspec format](https://dart.dev/tools/pub/pubspec)
- [Dart package repository](https://pub.dev/) - a repository of Dart packages
- [Master Flutter: Dependency Management](/courses/master-flutter/ch03-dependency-management)
- [Official Dart documentation on Packages](https://dart.dev/tools/pub/packages)

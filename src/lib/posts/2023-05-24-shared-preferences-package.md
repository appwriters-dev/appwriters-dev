---
title: A Beginner's Guide to Persisting Data with Shared Preferences in Flutter
slug: a-beginners-guide-to-persisting-data-with-shared-preferences-in-flutter
date: 2023-05-24
excerpt: Explore how to use the shared_preferences plugin in Flutter for local data storage. Learn the ins and outs of saving, reading, and removing data for a smooth user experience.
keywords: Flutter, Shared Preferences, Data Persistence, Local Storage, User Preferences, Mobile App Development, Flutter Tutorial, Shared Preferences Plugin
coverImage: /images/flpackage_shared_preferences_cover.svg
coverWidth: 16
coverHeight: 9
categories: [Flutter]
---

In mobile app development, there's often a need to persist data locally on a device. For example, you may want to save user preferences, keep a user logged in, or save app state data between sessions. Flutter provides a plugin called `shared_preferences` that simplifies this task. 

`shared_preferences` is a wrapper around the shared preferences API on Android and NSUserDefaults on iOS, allowing for simple persistent storage of primitive data types (`bool, double, int, String, and List<String>`). 

## The Importance of Data Persistence

Data persistence is crucial for a wide range of applications. It allows users to pick up where they left off, maintaining their settings, progress, and personalization. Without data persistence, users would have to start from scratch every time they open the app, leading to a frustrating user experience.

## What Kind of Data is Suitable for Shared Preferences?

As `shared_preferences` is designed for lightweight data storage, it's perfect for storing small amounts of data such as:

- User settings (e.g., theme preference, language selection)
- Simple app state (e.g., whether a user is logged in)
- Primitive data types (`bool, double, int, String, and List<String>`)

Remember, `shared_preferences` isn't suitable for storing large amounts of structured data or sensitive information. For these cases, a database or secure storage solution would be more appropriate.

## Using Shared Preferences in Flutter

To use `shared_preferences` in your Flutter project, you need to add the dependency to your `pubspec.yaml` file:

```dart
dependencies:
  flutter:
    sdk: flutter

  shared_preferences: ^2.0.6
```

Then run `flutter packages get` to fetch the package.

### Saving Data

Let's start with saving data. Here is how you can save a string value:

```dart
import 'package:shared_preferences/shared_preferences.dart';

savePreference() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  prefs.setString('username', 'FlutterDev');
}
```

### Reading Data

To read the data, you can use the following code:

```dart
import 'package:shared_preferences/shared_preferences.dart';

readPreference() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  String? username = prefs.getString('username');
  print(username);
}
```

### Removing Data

Finally, to remove the data, you can do:

```dart
import 'package:shared_preferences/shared_preferences.dart';

removePreference() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  prefs.remove('username');
}
```

## Pros and Cons

### Pros

1. **Ease of Use**: Shared Preferences is relatively simple to use with straightforward getter and setter methods for different data types.
2. **Cross-Platform**: It works seamlessly across Android and iOS, providing a unified way to store data locally.
3. **Ideal for Small Data**: If you only need to store small amounts of data, like user settings or simple app state, Shared Preferences is an excellent choice.

### Cons

1. **Limited Data Types**: Shared Preferences only supports primitive data types. It's not suitable for complex objects or large datasets.
2. **Not Ideal for Sensitive Data**: Shared Preferences isn't encrypted, so it's not suitable for storing sensitive data.
3. **No Structured Storage**: Unlike a database, Shared Preferences doesn't provide a way to structure or query your data.

## Alternatives

While Shared Preferences is a powerful tool, it may not be suitable for every scenario. Here are some alternatives:

1. **SQLite**: A self-contained, serverless, and zero-configuration database engine. Use the `sqflite` package for Flutter.
2. **Hive**: A lightweight and fast NoSQL database in pure Dart. Hive is a great option if you need more structure than Shared Preferences can provide, but don't need the full power of SQLite.
3. **Flutter Secure Storage**: If you need to store sensitive data, such as user tokens, consider using a package like `flutter_secure_storage`, which provides a secure storage space.
4. **Appwrite**: A secure end-to-end backend server for Web, Mobile, and Flutter. Appwrite provides a simple way to store data remotely, with support for authentication, file storage, and more.
5. **Firebase**: If you want to sync data across devices or users, consider using a cloud-based database like Firebase.


## Conclusion

In conclusion, Shared Preferences is an invaluable tool in the Flutter developer's toolkit, perfect for persisting lightweight data with ease and simplicity. Its cross-platform support and straightforward usage make it an ideal choice for many applications. However, it's essential to remember that every project has unique needs and requirements. For storing more complex data structures or sensitive information, it's necessary to explore other robust solutions such as SQLite, Hive, for offline Firebase, Appwrite, or other similar services as well as your own back-end for remote storage. The key lies in understanding your application's requirements and selecting the right tool that aligns with them, ensuring a smooth and secure user experience.
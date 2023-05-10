# Introduction to Persistence

Persistence refers to the ability to store data locally on a device so that it can be accessed later, even when the app is closed or the device is restarted. Shared preferences is one of the simplest approach to persist data locally in a Flutter app. It provides a simple way to store key-value pairs of data locally in a Flutter app. It is simple to use and suitable in various cases where you need to store small amounts of data locally on a device.

> **Project** - Favorite Quote
>
> Update the quotes app to include a favorite quote feature. When a user taps on the heart icon, the quote should be added to the favorites list. The favorites list should be persisted locally on the device so that the user can access it later, even when the app is closed or the device is restarted.
>
> - Use the [shared_preferences](https://pub.dev/packages/shared_preferences) package to store the list of favorite quotes locally on the device.
> - Use the state management approach you have implemented in the [previous day](/30days/flutter/day24) to manage the list of favorite quotes.

By the end of this day, you will learn about persistence in Flutter and how to use the [shared_preferences](https://pub.dev/packages/shared_preferences) package to store data locally on a device.

## Tips

- Shared preference is a simple way to store key-value pairs of data locally in a Flutter app.
- Shared preferences is suitable for storing small amounts of data locally on a device.
- Adding shared preferences to a Flutter app is easy

```yaml
dependencies:
  shared_preferences: <latest version>
```

- Import the package in your Dart code

```dart
import 'package:shared_preferences/shared_preferences.dart';
```

- Create an instance of SharedPreferences

```dart
SharedPreferences prefs = await SharedPreferences.getInstance();
```

- Using shared preferences to store and read data

```dart
// Reading and writing an integer value
int counter = prefs.getInt('counter') ?? 0; // Get the counter value from shared preferences, or 0 if it doesn't exist
prefs.setInt('counter', counter + 1); // Increment the counter value and save it to shared preferences

// Reading and writing a string value
String username = prefs.getString('username') ?? ''; // Get the username from shared preferences, or an empty string if it doesn't exist
prefs.setString('username', 'John'); // Set the username to 'John' and save it to shared preferences

// Reading and writing a boolean value
bool isDarkModeEnabled = prefs.getBool('isDarkModeEnabled') ?? false; // Get the boolean value from shared preferences, or false if it doesn't exist
prefs.setBool('isDarkModeEnabled', true); // Set the boolean value to true and save it to shared preferences
```

### Resources
- [Flutter official documentation on shared_preferences](https://flutter.dev/docs/cookbook/persistence/key-value)
- [Shared preferences package](https://pub.dev/packages/shared_preferences)

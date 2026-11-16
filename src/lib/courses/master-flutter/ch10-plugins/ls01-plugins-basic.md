---
id: ls01-plugins-basic
title: Basics of Plugins
description: Use your first plugin, path_provider, to save and read files on the device.
---

## Projects

### 1. Note Taking App [Part 1]

Write a Flutter program that provides a multiline text field, a save button and a cancel button. Whenever the user presses the save button, anything written in the text box should be saved to a file in the application's documents folder on the device. If the user presses cancel, the text box should be cleared.

> Note: use `await getApplicationDocumentsDirectory()` from [path_provider](https://pub.dev/packages/path_provider) to get the application folder path. Use `File` class from [dart:io](https://api.flutter.dev/flutter/dart-io/dart-io-library.html) to write to the file.

### 2. Note Taking App [Part 2]

Update the above program to add a new button that when clicked goes to next page, where the user can see all the notes saved in the application's documents folder. Make the design beautiful.

> Note: use [ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html) and [ListTile](https://api.flutter.dev/flutter/material/ListTile-class.html) to show the list of notes.

### 3. Note Taking App [Part 3]

If you want to go even further, in the list page add an action to each list item. When the list item is clicked, the user can see the note in a dialog box, which also has a delete button to delete the note.

### 4. Note Taking App [Part 4]

Please publish your app to [GitHub](https://github.com) with a README file that has the screenshots of the application, project description with features, and technologies used to build the application.

### 5. Path Provider

Write a tutorial on how to use the [path_provider](https://pub.dev/packages/path_provider) plugin to access the device's directories and files. Publish your article on [Medium](https://medium.com) or [Dev.to](https://dev.to) and share the link in social media.

## Resources

- [Using Flutter Plugins](https://docs.flutter.dev/packages-and-plugins/using-packages)
- [Path Provider](https://pub.dev/packages/path_provider)
- [File](https://api.flutter.dev/flutter/dart-io/File-class.html)
- [ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html)
- [TextField](https://api.flutter.dev/flutter/material/TextField-class.html)
- [ElevatedButton](https://api.flutter.dev/flutter/material/ElevatedButton-class.html)

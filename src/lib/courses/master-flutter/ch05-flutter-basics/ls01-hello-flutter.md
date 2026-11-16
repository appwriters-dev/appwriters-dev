---
id: ls01-hello-flutter
title: Hello Flutter
description: Write your first Flutter app in DartPad, install Flutter and run an app on your own machine.
---

This first lesson will teach us how to get started with the Flutter framework.

## Projects

### 1. Hello Flutter

Head over to [DartPad](https://dartpad.dev/), clear everything in the editor and paste the following code. DartPad detects that the code imports Flutter and shows the result in the UI output panel when you press **Run**.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    const Center(
      child: Text(
        'Hello, Flutter!',
        style: TextStyle(color: Color(0xffffffff)),
        textDirection: TextDirection.ltr,
      ),
    ),
  );
}
```

### 2. Install Flutter

Head over to the [Flutter installation guide](https://docs.flutter.dev/install), choose your operating system, and follow the instructions to install Flutter on your machine. Use the `flutter doctor` command to verify that everything is set up correctly.

### 3. Install Visual Studio Code and Flutter Extension

Head over to [Visual Studio Code](https://code.visualstudio.com/) and download the latest version of Visual Studio Code for your operating system. Then install the Flutter extension (it also installs the Dart extension) from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter).

### 4. Hello Again Flutter

Create a new Flutter project in Visual Studio Code (open the Command Palette and run **Flutter: New Project**, or run `flutter create hello_flutter` in a terminal). Open the `lib/main.dart` file and replace the code with the following code. Now run the code on web and desktop (also on mobile if you have Android or iOS set up).

> **Tip:** Before replacing it, read through the generated counter app in `main.dart`. You will understand all of it by the end of this course.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    const Center(
      child: Text(
        'Hello, Flutter!',
        style: TextStyle(color: Color(0xffffffff)),
        textDirection: TextDirection.ltr,
      ),
    ),
  );
}
```

## Resources

- [Flutter](https://flutter.dev/)
- [DartPad](https://dartpad.dev/)
- [Flutter installation guide](https://docs.flutter.dev/install)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter)
- [Flutter CLI and flutter doctor](https://docs.flutter.dev/reference/flutter-cli)

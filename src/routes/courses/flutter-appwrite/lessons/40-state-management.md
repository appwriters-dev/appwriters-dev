---
title: State management
id: state-management
subtitle: In this lesson, we will learn how to setup riverpod for state management in our application.
videoId: 8k42p7HK8v0
---

In this lesson, we will learn how to setup [riverpod](https://riverpod.dev) for state management in our application.

## What is state?

State is the data that is used to render the UI of an application and state can change over time based on user interaction or other factors such as network response.

Some data is local to the screen and some data are shared across application. Managing data local to individual screen is easy but managing data shared across application is difficult. So, we need a better way to manage state in our application. That is where state management libraries come into play.


## What is state management?

State management is a technique to manage the state of an application for effectively updating the UI whenever the change occurs. There are various ways to manage state in Flutter. Starting from the simplest is the `StatefulWidget` which is used to manage state locally in a widget. Then, we have `InheritedWidget` which is used to share state across the widget tree.

We can use these simple state management techniques for small applications. But as the application grows, it becomes difficult to manage state using these techniques. So, we need a better way to manage state in our application. That's where state management libraries come into play. There are various state management libraries available for Flutter. In this lesson, we will learn to use [riverpod](https://riverpod.dev) for state management in our application.

## Setting up riverpod

To setup riverpod, we need to add the following dependency to our `pubspec.yaml` file:

```yaml
dependencies:
  flutter_riverpod: ^2.4.9
```

We can also do the same from the terminal. First, open the terminal and navigate to the `flappwrite_tracker` folder. Then, run the following command to add the dependency:

```bash
flutter pub add flutter_riverpod
```

Finally, run the following command to install the dependency:

```bash
flutter pub get
```

Once the dependency is installed, we need to import the `flutter_riverpod` package in our `main.dart` file. So, we will add the following code to the `main.dart` file:

```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';
```

And, we also need to wrap our `MaterialApp` widget with `ProviderScope` widget. So, we will add the following code to the `main.dart` file:

```dart
void main() {
  initDependencies();
  runApp(
    ProviderScope(
      child: MainApp(),
    ),
  );
}
```

With this we should be able to use riverpod for sharing state across our application. Which we will do in the next lesson.
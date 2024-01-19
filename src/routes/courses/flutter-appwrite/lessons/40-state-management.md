---
title: State management
id: state-management
subtitle: In this lesson, we will learn how to setup riverpod for state management in our application.
videoId: 8k42p7HK8v0
---

In this lesson, we will learn how to setup [riverpod](https://riverpod.dev) for state management in our application.

## What is state?

State is the data that is used to render the UI of an application
- State can change over time 
- State can changed based on user interaction or other factors such as network response.
- State can be local to a widget or shared across the application


## What is state management?

State management is a technique to manage the state of an application for effectively updating the UI whenever the change occurs. 
- The simplest way to manage state is the `StatefulWidget` which is used to manage state locally in a widget.
- `InheritedWidget` which is used to share state across the widget tree.
- We can use these simple state management techniques for small applications.
- For complex state shared across multiple screens, we need state management libraries
- State management libraries provide a way to share state across the application and update the UI whenever the state changes.
- They help manage the state in a predictable way and make it easier to maintain and make changes to the application.

## Setting up riverpod

To setup riverpod, we need to add the following dependency to our `pubspec.yaml` file:

```yaml
dependencies:
  flutter_riverpod: ^2.4.9
```

We can also do the same from the terminal.

```bash
flutter pub add flutter_riverpod
```

Finally, run the following command to install the dependency:

```bash
flutter pub get
```

Next, we need to import the `flutter_riverpod` package in our `main.dart` file.

```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';
```

And, we also need to wrap our root widget with `ProviderScope` widget.

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
---
id: ls01-basic-interactivity
title: Basic Interactivity
description: Use stateful widgets and setState to make your Flutter apps respond to the user.
---

You've been using Stateless Widgets up until now, which is fine unless you're creating static layouts. However, in order to create dynamic layouts and add interactivity to your app, you must use Stateful Widgets.

## Projects

### 1. The Famous Counter App

Create a new Flutter project. By default it comes with a stateful widget. Explore how the `+` button increments the counter and how the widget rebuilds to display the new count. It is important to note that the `setState()` method is called to rebuild the UI. Also note that `setState()` can only be used in the `State` of a stateful widget.

### 2. Dice App

Create a dice app that displays a random dice number (between 1-6) when the `Roll` button is clicked. The number should be displayed in the center of the screen in large font size. The `Roll` button should be displayed at the bottom of the screen. Use Dart's [Random](https://api.dart.dev/dart-math/Random-class.html) class (from `dart:math`) to generate a random number.

### 3. Quiz App

Create a new Flutter project, clear `main.dart` and paste the following code. Complete the following code to build the UI as shown below. Then add the functionality to change the background color of the button when clicked as described below.

**Starter Code**

```dart
import 'package:flutter/material.dart';

void main() => runApp(const QuizApp());

class QuizApp extends StatelessWidget {
  const QuizApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.grey.shade900,
        body: const SafeArea(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 10.0),
            child: Quiz(),
          ),
        ),
      ),
    );
  }
}

class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() => _QuizState();
}

class _QuizState extends State<Quiz> {
  int questionNumber = 0;
  List<Icon> scoreKeeper = [];

  @override
  Widget build(BuildContext context) {
    Map<String, dynamic> question = {
      'question': 'Flutter stable version was launched in November 2018',
      'options': ['Yes', 'No'],
      'answer': 'No',
    };

    return Scaffold(); // complete the UI
  }
}
```

When one of the buttons is clicked, change the background color of the clicked button to green if the answer was correct and red otherwise.

## Resources

- [Stateful vs Stateless Widgets](https://medium.com/flutter-community/flutter-stateful-vs-stateless-widgets-7f8a5e3d7b5b)
- [Adding interactivity **(Official)**](https://docs.flutter.dev/ui/interactivity)
- [setState()](https://api.flutter.dev/flutter/widgets/State/setState.html)
- [initState()](https://api.flutter.dev/flutter/widgets/State/initState.html)
- [StatefulWidget](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html)
- [ElevatedButton](https://api.flutter.dev/flutter/material/ElevatedButton-class.html)
- [ElevatedButton.styleFrom](https://api.flutter.dev/flutter/material/ElevatedButton/styleFrom.html)
# Interactive UI

A **StatefulWidget** in Flutter is a widget that can change over time based on changes to its internal state. This enables developers to create interactive user interfaces where the display updates in response to user interactions or changes in the app's data.

> **Project** - Dice Roller
>
> Build a Flutter app to roll a dice.
>
> - initially it should display a **Roll Dice** button
> - every time user taps on the button, it should update a **dice** variable with a random number between 1 and 6
> - use the value of **dice** variable to display the corresponding dice image

## Tips

- It's a good practice to keep stateful widgets **small and focused** on a single responsibility. This makes the widget easier to understand, test, and maintain.
- When you need to update the internal state of a stateful widget, use the `setState()` method. This method triggers a rebuild of the widget, updating its display based on the new state.

- Here's a simple example of a stateful widget that increments a counter every time the user taps on it:

```dart
class CounterWidget extends StatefulWidget {
  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: _incrementCounter,
      child: Text('Counter: $_counter'),
    );
  }
}
```


## Resources

- [Flutter documentation on Stateful Widgets](https://flutter.dev/docs/development/ui/widgets/stateful-widget)
- [Stateful vs Stateless Widget](https://medium.com/flutter-community/flutter-stateful-vs-stateless-widgets-7f8a5e3d7b5b)
- [setState() documentation](https://api.flutter.dev/flutter/widgets/State/setState.html)
- [initState() documentation](https://api.flutter.dev/flutter/widgets/State/initState.html)
- [ElevatedButton documentation](https://api.flutter.dev/flutter/material/ElevatedButton-class.html)
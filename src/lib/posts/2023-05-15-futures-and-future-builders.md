---
title: Diving Deeper into Asynchronous Programming with Futures in Flutter
slug: diving-deeper-int-asynchronous-programming-with-futures-in-flutter
date: 2023-05-15
excerpt: Boost your Flutter skills with this comprehensive guide on asynchronous programming. Learn about Dart Futures, chaining, FutureBuilder, and error handling with real-world examples.
keywords: Asynchronous Programming, Flutter, Dart, Futures, FutureBuilder, Mobile App Development, UI, Error Handling, Multitasking, http package
coverImage:
coverWidth:
coverHeight:
categories: [Flutter]
---

Welcome back! In [Part 1](/blog/making-friends-with-asynchronous-programming-and-futures-in-flutter), we ventured into the world of asynchronous programming in Flutter, why it matters, and showcased a real-life example of using Futures for managing asynchronous operations. Now, in Part 2, we'll dig deeper, presenting more use cases of Futures, and we'll get hands-on with the `FutureBuilder` widget to craft dynamic UIs. Let's get to it!

## Expanding Your Arsenal: More Ways to Use Futures in Flutter

Let's learn more about Futures with a couple of practical examples:

### Example 1: A Function That Returns a Future

```dart
Future<int> delayedCount() async {
  await Future.delayed(Duration(seconds: 2));
  return 5;
}

void main() async {
  print('Starting...');
  final result = await delayedCount();
  print('Count: $result');
}
```

In this snippet, we're defining a function `delayedCount()`, which is a tad special because it returns a Future. This function takes a two-second break using `Future.delayed()`, and then returns the value 5. Finally, we call this function using the `await` keyword. This keyword ensures that we patiently wait for the result before moving ahead, which is then printed to the console.

### Example 2: Linking Futures Together

```dart
Future<int> addNumbers(int a, int b) async {
  await Future.delayed(Duration(seconds: 1));
  return a + b;
}

Future<int> multiplyNumbers(int a, int b) async {
  await Future.delayed(Duration(seconds: 1));
  return a * b;
}

void main() async {
  final sum = await addNumbers(2, 3);
  final product = await multiplyNumbers(sum, 4);
  print('Result: $product');
}
```

Here, we're chaining two Futures together. It starts by calling the `addNumbers()` function, which pauses for a second and then returns the sum of two numbers. This result is then passed to the `multiplyNumbers()` function, which, after waiting for a second, returns the product of two numbers. The final result is printed to the console.

## Crafting Dynamic UIs with FutureBuilder

The `FutureBuilder` widget is a fantastic tool in Flutter's toolbox. It builds its UI based on the latest snapshot of a Future's interaction, allowing for dynamic UIs. It's important to note that the Future should be obtained earlier (e.g., during State.initState, State.didUpdateWidget, or State.didChangeDependencies), not during the `build` method. This ensures the asynchronous task doesn't restart every time the FutureBuilder's parent is rebuilt.

Let's see `FutureBuilder` in action:

```dart
class MyWidget extends StatelessWidget {
  Future<String> fetchData() async {
    final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/todos/1'));
    return response.body;
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<String>(
      future: fetchData(),
      builder: (BuildContext context, AsyncSnapshot<String> snapshot) {
        if (snapshot.connectionState == ConnectionState.done) {
          if (snapshot.hasData) {
            return Text(snapshot.data!);
          } else {
            return Text('Failed to load data');
          }
        } else {
          return CircularProgressIndicator();
        }
      },
    );
  }
}
```

In this example, `MyWidget` fetches data using the `http` package. The result of this asynchronous operation is passed to the `FutureBuilder` widget using the `future

The `builder` is a function that takes two arguments: `BuildContext` and `AsyncSnapshot`. This function returns a widget that gets built based on the latest snapshot of interaction with a `Future` or a `Stream`. 

Here is an example of how to use it:

```dart
FutureBuilder<String>(
  future: _calculation, // a Future<String> or null
  builder: (BuildContext context, AsyncSnapshot<String> snapshot) {
    switch (snapshot.connectionState) {
      case ConnectionState.none:
        return Text('Press button to start.');
      case ConnectionState.active:
      case ConnectionState.waiting:
        return Text('Awaiting result...');
      case ConnectionState.done:
        if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        }
        return Text('Result: ${snapshot.data}');
    }
  },
)
```

In this example, `_calculation` is a `Future` that is set to the result of a function that returns a `Future<String>`. This `Future` is what the `FutureBuilder` is listening to. The `builder` function is the function that gets called every time the connection state changes, which can be one of four states: `none`, `waiting`, `active`, or `done`.

The `AsyncSnapshot` object passed to the `builder` function contains the current state of the asynchronous computation the `FutureBuilder` is connected to. It includes the current `connectionState`, any `error` that might have occurred, and the `data` (if any).

In the `builder` function, you can decide what to display based on the current state of the `Future`. In the example above, it displays a different message based on whether the `Future` is still waiting, completed, or has an error.

You can use the `FutureBuilder` to create a widget that will update itself based on the state of an asynchronous computation, such as a network request or a database query. This can be very useful for creating dynamic UIs that can handle asynchronous operations in a clean and concise way.

You can find more information about `FutureBuilder` on the official Flutter documentation page: [https://api.flutter.dev/flutter/widgets/FutureBuilder-class.html](https://api.flutter.dev/flutter/widgets/FutureBuilder-class.html).

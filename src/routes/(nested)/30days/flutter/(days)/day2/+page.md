# First Dart app

By the end of this day, you should have a basic understanding of the Dart syntax and how to write a simple console application using it.

> **Project** - Greet User
> 
> Create a Dart console application that asks the user for their name and prints a greeting message to the console.
> 
> `hello <name>`

To Get user input in Dart, you can use the `stdin.readLineSync()` function. For example:

```dart
import 'dart:io';

void main() {
  print('What is your name?');
  String name = stdin.readLineSync();
  print('Hello $name!');
}
```


## Resources

- [Dart Tutorial User Input](https://dart-tutorial.com/introduction-and-basics/user-input-in-dart/)
- [The official Dart documentation](https://dart.dev/guides)
- [DartPad](https://dartpad.dev/)


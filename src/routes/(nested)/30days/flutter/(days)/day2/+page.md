# First Dart app

Create and run your first Dart console application. This will allow you to get familiar with the Dart syntax and how to write a simple console application using it.

> **Project** - Greet User
> 
> Create a Dart console application that asks the user for their name and prints a greeting message to the console.
> 
> `Hello <name>!`

By the end of this day, you should have a basic understanding of the Dart syntax and how to write a simple console application using it.

## Tips

- To create a new Dart console application, you can use the `dart create` command. The default template is a console application.

```bash
dart create greet_user
cd greet_user
dart run
```


- To get user input in Dart, you can use the `stdin.readLineSync()` function. For example:

```dart
import 'dart:io';

void main() {
  print("Enter anything:");
  String? input = stdin.readLineSync();
  print("You entered: $input");
}
```

- `readLineSync()` returns a nullable `String?`, because there may be no input. Handle the `null` case, for example with `input ?? 'stranger'`.


## Resources

- [Dart Tutorial User Input](https://dart-tutorial.com/introduction-and-basics/user-input-in-dart/)
- [The official Dart documentation](https://dart.dev/docs)
- [DartPad](https://dartpad.dev/)


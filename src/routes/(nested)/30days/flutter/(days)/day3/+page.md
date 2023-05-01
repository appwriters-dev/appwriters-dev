# Variables, Data Types, Operators and Expressions

Variables, data types, operators and expressions are the building blocks of any programming language. In this day, you will learn how to declare and initialize variables of different data types, and how to use operators and write conditional expressions.

> **Project** - BMI Calculator
> 
> Write a program to calculate and print BMI given the user's weight and height.
> 
> `BMI = weight / (height * height)`

By the end of this day, you should have a good understanding of how to declare and initialize variables of different data types, and how to use string interpolation to print messages, how to use operators and write conditional expressions.

## Tips

- Review the basics of variables and data types in Dart. You can use the Dart documentation to learn more about these concepts (https://dart.dev/guides/language/language-tour#variables).

- You can declare and initialize variables of different data types, such as int, double, String, and boolean. For example:

```dart
void main() {
  int age = 30;
  double height = 1.75;
  String name = 'John';
  bool isStudent = true;
}
```

- You can use the "print" function to print the values of these variables to the console. For example:

```dart
void main() {
  int age = 30;
  double height = 1.75;
  String name = 'John';
  bool isStudent = true;
  
  print('My name is $name.');
  print('I am $age years old and $height meters tall.');
  print('Am I a student? $isStudent');
}
```

- Experiment with declaring and initializing variables of different data types, and using string interpolation to print messages using these variables.

- Experiment with arithmetic operators `(+, -, *, /, %)` and comparison operators `(>, <, >=, <=, ==, !=)`. For example:

```dart
void main() {
  int a = 10;
  int b = 5;
  
  print(a + b); // 15
  print(a - b); // 5
  print(a * b); // 50
  print(a / b); // 2.0
  print(a % b); // 0
  
  print(a > b); // true
  print(a < b); // false
  print(a >= b); // true
  print(a <= b); // false
  print(a == b); // false
  print(a != b); // true
}
```

- Write conditional statements using if/else. Conditional statements allow you to execute different code blocks depending on a condition. For example:

```dart
void main() {
  int age = 25;
  
  if (age >= 18) {
    print('You are an adult.');
  } else {
    print('You are not yet an adult.');
  }
}
```

This will print the message `You are an adult.` to the console, since the age variable is greater than or equal to 18.

1. Experiment with different operators and expressions, and write more complex conditional statements using logical operators `(&&, ||, !)`.

> For more project ideas:
> 
> - [MsterFlutter: Operators](https://masterflutter.appwriters.dev/ch01-the-dart-basics/ls05-operators)
> - [MsterFlutter: Dart IO](https://masterflutter.appwriters.dev/ch01-the-dart-basics/ls03-standard-io)
> - [MsterFlutter: Control Flow](https://masterflutter.appwriters.dev/ch01-the-dart-basics/ls06-control-flow)

## Resources

1. [Dart Tutorial Basics](https://dart-tutorial.com/introduction-and-basics/)
2. [Dart language tour](https://dart.dev/guides/language/language-tour)
3. [Effective Dart Style](https://dart.dev/guides/language/effective-dart/style)
4. [Dart Cheat Sheet](https://dart.dev/codelabs/dart-cheatsheet)
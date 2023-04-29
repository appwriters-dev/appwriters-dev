# Variables, Data Types, Operators and Expressions

1. Review the basics of variables and data types in Dart. You can use the Dart documentation to learn more about these concepts (https://dart.dev/guides/language/language-tour#variables).

2. Create a new Dart console application, or continue working with the project you created in Day 2.

3. Declare and initialize variables of different data types, such as int, double, String, and boolean. For example:

```dart
void main() {
  int age = 30;
  double height = 1.75;
  String name = 'John';
  bool isStudent = true;
}
```

4. Use the "print" function to print the values of these variables to the console. For example:

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

5. Use string interpolation to print a message using variables. String interpolation allows you to embed variables directly into a string using the "$" symbol. For example:

```dart
void main() {
  int age = 30;
  String name = 'John';
  
  print('My name is $name and I am $age years old.');
}
```

This will print the message "My name is John and I am 30 years old." to the console.

6. Experiment with declaring and initializing variables of different data types, and using string interpolation to print messages using these variables. You can also try performing operations on variables, such as arithmetic operations on numbers or concatenation of strings.

7. Experiment with arithmetic operators `(+, -, *, /, %)` and comparison operators `(>, <, >=, <=, ==, !=)`. For example:

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

8. Write conditional statements using if/else. Conditional statements allow you to execute different code blocks depending on a condition. For example:

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

This will print the message "You are an adult." to the console, since the age variable is greater than or equal to 18.

9. Experiment with different operators and expressions, and write more complex conditional statements using logical operators (&&, ||, !).

By the end of this day, you should have a good understanding of how to declare and initialize variables of different data types, and how to use string interpolation to print messages, how to use operators and write conditional expressions.

### Resources

1. Dart language tour: https://dart.dev/guides/language/language-tour
2. https://dart.dev/guides/language/language-tour#operators
4. Effective Dart: Style: https://dart.dev/guides/language/effective-dart/style
5. Dart Cheat Sheet: https://dart.dev/codelabs/dart-cheatsheet
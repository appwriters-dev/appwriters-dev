# Day 3: Variables and Data Types

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

By the end of this day, you should have a good understanding of how to declare and initialize variables of different data types, and how to use string interpolation to print messages using these variables.

### Resources

1. Dart language tour: https://dart.dev/guides/language/language-tour
2. DartPad: https://dartpad.dev/
3. Dart programming tutorials on YouTube: https://www.youtube.com/results?search_query=dart+programming+tutorial
4. Effective Dart: Style: https://dart.dev/guides/language/effective-dart/style
5. Dart Cheat Sheet: https://dart.dev/codelabs/dart-cheatsheet
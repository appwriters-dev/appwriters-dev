# Operators and Expressions

1. Review the basics of operators and expressions in Dart. You can use the Dart documentation to learn more about these concepts (https://dart.dev/guides/language/language-tour#operators).

2. Create a new Dart console application, or continue working with the project you created in previous days.

3. Experiment with arithmetic operators `(+, -, *, /, %)` and comparison operators `(>, <, >=, <=, ==, !=)`. For example:

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

4. Write conditional statements using if/else. Conditional statements allow you to execute different code blocks depending on a condition. For example:

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

5. Experiment with different operators and expressions, and write more complex conditional statements using logical operators (&&, ||, !).

### Resources

- Flutter documentation on operators and expressions: https://dart.dev/guides/language/language-tour#operators
- DartPad, an online editor for Dart: https://dartpad.dev/
- Dart programming language guide: https://dart.dev/guides
- Dart Academy, a collection of tutorials and guides for learning Dart: https://dart.academy/

By the end of this day, you should have a good understanding of how to use operators and expressions in Dart, and how to write conditional statements using if/else.
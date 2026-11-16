---
id: ls09-functions
title: Functions in Dart
description: A function in Dart is a block of code that performs a specific task and can be called or invoked from other parts of the program. Functions can take zero or more parameters and can return a value. They are used to organize and modularize code, making it easier to read, maintain, and reuse.
---

A function in Dart is a block of code that performs a specific task and can be called or invoked from other parts of the program. Functions can take zero or more parameters and can return a value. They are used to organize and modularize code, making it easier to read, maintain, and reuse.

## Parts of a function

```dart
int add(int a, int b) {
  return a + b;
}

// The same function written with the arrow syntax:
int addShort(int a, int b) => a + b;

// Named parameters are wrapped in curly braces; `required` makes them mandatory.
String greet({required String name, String greeting = 'Hello'}) => '$greeting, $name!';
```

- return_type - The type of the value the function returns (`int` above), or `void` if it returns nothing.
- function_name - The function name should be unique in its scope, and the same rules apply as for
  identifiers.
- parameter_list - The values passed to the function. A function can have zero or more parameters, which can be positional, optional or named.

## Projects

### 1. Sum of Two numbers

Write a function that returns the sum of two numbers.

- Accept two numbers as parameters
- Return sum of the given input

### 2. Reverse

Write a function that returns the reverse of a string.

### 3. Palindrome

Use the reverse function to write another function that accepts a word and returns true if the word is
a [palindrome](https://en.wikipedia.org/wiki/Palindrome) and false otherwise.

### 4. Factorial

Write a function that accepts a number and returns the factorial of that number. The factorial of a number is the product of all the integers from 1 to that number.

## Resources

- [Functions **(Official)**](https://dart.dev/language/functions)
- [Understanding Functions](https://dart-tutorial.com/dart-functions/functions-in-dart/)
- [Dart Function](https://www.javatpoint.com/dart-function)
- [Types of Functions](https://dart-tutorial.com/dart-functions/types-of-functions-in-dart/)
- [Arrow Function](https://dart-tutorial.com/dart-functions/arrow-function-in-dart/)
- [Function Parameter in Dart](https://dart-tutorial.com/dart-functions/function-parameter-in-dart/)

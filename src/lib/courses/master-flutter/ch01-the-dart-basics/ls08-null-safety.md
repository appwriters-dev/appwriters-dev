---
id: ls08-null-safety
title: Null Safety in Dart
description: Null safety is a Dart programming language feature that prevents null reference exceptions by preventing variables from being null unless explicitly allowed. This is accomplished by using nullable and non-nullable types, which allow developers to specify whether or not a variable can be null.
---

Null safety is a Dart programming language feature that prevents null reference exceptions by preventing variables from being null unless explicitly allowed. This is accomplished by using nullable and non-nullable types, which allow developers to specify whether or not a variable can be null.

Since Dart 3, sound null safety is always on: every Dart and Flutter project you create uses it, and code written without null safety no longer runs.

Dart's null safety ensures that by default, all variables have a non-null value. If a variable must be nullable, you add `?` to its type to declare it as such, for example `String? nickname;`. This makes reasoning about the code easier and helps to avoid null reference exceptions, which can be difficult to track down and fix.

Dart also has null-aware operators. The `??` operator lets you specify a default value to use if a nullable expression is null, and `?.` lets you access a property only when the object is not null. These remove the need for many manual null checks and make code easier to read.

```dart
void main() {
  String? nickname; // nullable, starts as null
  String name = 'Ram'; // non-nullable, must have a value

  print(nickname ?? 'No nickname'); // No nickname
  print(nickname?.length); // null
  print(name.length); // 3
}
```

Overall, null safety is a useful Dart feature that helps improve code reliability and safety. It enables developers to explicitly declare whether a variable can be null or not, and it supports dealing with null values in a safe and concise manner.

## Projects

### 1. Basic Null Safety

Create a simple program that declares and initializes a few variables, including some that are nullable and some that are non-nullable.

### 2. Null coalescing operator (??)

Write a function that accepts an optional `String` parameter and returns the value of the parameter if it is not null, otherwise it returns the string "Default value" using the null coalescing operator.

### 3. late

Write a program that declares a `late` variable, assigns it a value later, and then prints it. Also try a `late final` variable and see what happens if you assign it twice.

## Remember things

- When possible, try to create non-nullable variables, which are guaranteed not to be null at compile time.
- If you know a nullable expression will not be null, you can use the `!` operator to assign it to a non-nullable variable.

## Resources

- [Null Safety](https://dart.dev/null-safety)
- [Understanding Null Safety](https://dart.dev/null-safety/understanding-null-safety)
- [Null Safety Ultimate Guide](https://codewithandrea.com/videos/dart-null-safety-ultimate-guide-non-nullable-types/)

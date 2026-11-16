---
id: ls06-control-flow
title: Control Flow
description: Control flow allows you to make decisions and loops in your program. This lesson will teach you to manipulate the flow of execution of your Dart program.
---

Recommended Time: 2 days

Now that you know operators and how to manipulate data, in this lesson you will learn how to make decisions, write loops and more. This lesson will teach you to manipulate the flow of execution of your program.

## Switch expressions and patterns (Dart 3)

Since Dart 3, `switch` can also be used as an **expression** that returns a value, and its cases can use **patterns**. No `break` is needed, and the compiler can check that you have covered every case.

```dart
String describe(Object value) => switch (value) {
      int n when n < 0 => 'a negative number',
      int() => 'an integer',
      double() => 'a double',
      String s => 'a string of length ${s.length}',
      _ => 'something else',
    };

void main() {
  print(describe(-5)); // a negative number
  print(describe('hi')); // a string of length 2
}
```

Classic `if`, `else`, `for`, `while` and `switch` statements still work as before; switch expressions are simply a shorter way to pick a value.

## Projects

### 1. Odd or Even

Write a program that asks the user for a number and prints out whether the number is odd or even.

### 2. Leap Year

Write a program that asks the user for a year and prints out whether the year is a leap year or not. Print invalid if the year is less than 0.

### 3. Armstrong Number

Write a program that asks the user for a number and prints out whether the number is an [Armstrong number](https://en.wikipedia.org/wiki/Narcissistic_number) or not.

### 4. Palindrome

Write a program that asks the user for a value and prints out whether the value is a [palindrome](https://en.wikipedia.org/wiki/Palindrome) or not.

### 5. What Data Type

Write a program that declares a variable of type dynamic and assigns it a value of type int, double, or String, and then uses an `if` statement with the `is` operator to check the type of the variable and print a message to the console accordingly. Then try writing the same check as a switch expression.

### 6. FizzBuzz

Write a program that prints the numbers from 1 to 100, but for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

## Resources

- [Branches **(Official)**](https://dart.dev/language/branches)
- [Patterns **(Official)**](https://dart.dev/language/patterns)
- [Conditions](https://dart-tutorial.com/conditions-and-loops/conditions-in-dart/)
- [Switch Case](https://dart-tutorial.com/conditions-and-loops/switch-case-in-dart/)
- [Loops in Dart](https://dart-tutorial.com/conditions-and-loops/loops-in-dart/)
- [Conditions and Loops](https://dart-tutorial.com/conditions-and-loops/)
- [Dart Control Flow Statement](https://www.javatpoint.com/dart-control-flow-statement)
- [Dart Control Flow Statement](https://medium.com/@MrArc/dart-control-flow-statements-d2d6005604)

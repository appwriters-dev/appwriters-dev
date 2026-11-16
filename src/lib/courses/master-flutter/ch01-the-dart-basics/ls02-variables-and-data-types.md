---
id: ls02-variables-and-data-types
title: Variables and Data Types
description: In this lesson, you will learn about variables and data types in Dart. You will also learn how to declare and initialize variables and how to use them in your programs.
---

Recommended Time: 2 days

This lesson will teach you everything you need to know about variables and data types in Dart. This will assist you in writing dynamic programs that can produce different results depending on the input.

Variables are used to store values. Every variable has a data type, which specifies the type of value the variable can store. You can write the type yourself (`int age = 20;`) or let Dart infer it from the initial value (`var age = 20;`). Use `final` for a variable that is assigned only once and `const` for a compile-time constant.

The following data types are used in Dart programming:

- Numbers (`int`, `double`)
- Strings (`String`)
- Booleans (`bool`)
- Lists (`List`)
- Sets (`Set`)
- Maps (`Map`)
- Records (added in Dart 3, covered in the Collections lesson)

The data type of a variable specifies the following:

- The amount of space to be allocated
- Possible values
- The operations that can be performed on the variable

Dart is a statically typed language; this means that a variable always keeps the type it was declared with (unless you explicitly use `dynamic`). Dart is also null safe: a variable such as `int` cannot hold `null` unless you declare it as nullable with `int?`. You will learn more about this in the Null Safety lesson.
Use the resources for more details about variables and data types in Dart.

## Projects

### 1. Initialize Variables

Create a simple program that declares and initializes a few variables of different data types (such as a string, integer, and boolean), and then prints them to the console.

### 2. Calculate BMI

Write a program to calculate BMI.

- Store weight (in kilograms) in a variable
- Store height (in meters) in another variable
- Calculate BMI using the formula `weight / (height * height)`

## Resources

- [The Dart Type System **(Official)**](https://dart.dev/language/type-system)
- [Type in Dart](https://www.educative.io/answers/what-are-the-data-types-in-dart)
- [Variables in Dart](https://dart-tutorial.com/introduction-and-basics/variables-in-dart/)
- [Data Types in Dart](https://dart-tutorial.com/introduction-and-basics/datatypes-in-dart/)

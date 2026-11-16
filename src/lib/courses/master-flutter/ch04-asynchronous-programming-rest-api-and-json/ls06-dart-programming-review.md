---
id: ls06-dart-programming-review
title: Dart Programming Review
description: Review everything you have learned about Dart so far with these questions and projects before moving on to Flutter.
---

Wow, you did it. You've mastered the fundamentals of Dart, which are required to learn Flutter. We have discussed the following topics in previous chapters:

1. Dart Fundamentals (variables, data types, operators, control flow, collections, null safety, and functions),
2. Object Oriented Programming (OOP) (classes, objects, constructors, inheritance, interfaces and class modifiers),
3. Dependency Management (pubspec.yaml, packages, and pub.dev),
4. Asynchronous Programming, REST API and JSON (async, await, futures, http and JSON parsing).

## Questions

1. What exactly is the distinction between synchronous and asynchronous programming?
2. What exactly is the distinction between a class and an object?
3. What is Dart's sound null safety? What are the advantages of sound null safety?
4. What does `dev_dependencies` mean in `pubspec.yaml`?
5. What is the `dart pub` CLI command to add a package to your project?

## Projects

### 1. Areas of Shapes

Build a CLI app that calculates the area of different shapes. Display the menu as follows:

```bash
1. Circle
2. Rectangle
3. Square
4. Triangle
5. Exit
```

Based on user selection, ask for the required input and display the area of the shape. For example, if the user selects 1, ask for the radius and display the area of the circle. If the user selects 5, exit the program.

### 2. Quote of the Day

Build a CLI program that, when executed, shows a random quote of the day every time. Use the [Quotes API](https://quotes.rest/) (it requires a free API key) or any other free quotes API to fetch the quotes. Parse the JSON response into a Dart object and display the quote.

### 3. CLI Scraper

Build a CLI program that scrapes the [Quotes API](https://quotes.rest/) and saves the quotes in a file. The file should be in JSON format. The program should take the number of quotes to scrape as an argument. For example, if the user runs the program as follows:

```bash
dart run scraper.dart 10
```

The program should scrape 10 quotes and save them in a file. If the user does not provide the number of quotes to scrape, the program should scrape 10 quotes by default.

### 4. CSV to JSON Converter

Build a CLI program that converts a CSV file to JSON. The program should take the CSV file path as an argument. For example, if the user runs the program as follows:

```bash
dart run converter.dart users.csv
```

The program should convert the CSV file to JSON and save it in a file. If the user does not provide the CSV file path, the program should ask for the CSV file path.

> **Note:** Make sure to add a nice README file to each of your projects with a description, screenshots, and instructions to run the program. Publish each project to GitHub once you complete it and share in your social networks.

---
id: ls04-parsing-json
title: Parsing JSON
description: Learn how to convert JSON data into Dart objects and use them to make your code more readable and maintainable.
---

In the previous lesson, we learned how to make a REST API request and receive a response. In this lesson, we'll go over how to parse the response and extract the information we need. The data comes in the [JSON](https://www.json.org/json-en.html) format. Dart's built-in `dart:convert` library turns a JSON string into a `Map<String, dynamic>` with `jsonDecode`, and you then convert that map into your own class.

## Projects

### 1. Pokemon

Create a Pokemon class that mimics the JSON response from the [PokeAPI](https://pokeapi.co/) that you used in the previous lesson. Add a `fromJson` factory constructor that takes a `Map<String, dynamic>` and returns a Pokemon object. Update the project from the previous lesson to use the Pokemon class.

### 2. Movie

Create a Movie class that mimics the JSON response from the [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) that you used in the previous lesson. Add a `fromJson` factory constructor that takes a `Map<String, dynamic>` and returns a Movie object. Update the project from the previous lesson to use the Movie class.

> **Tip:** Dart 3 patterns make reading JSON safer. For example, `if (json case {'name': String name, 'id': int id}) { ... }` checks the shape and types and extracts the values in one step.

## Resources

- [Parsing JSON in Dart](https://codewithandrea.com/articles/parse-json-dart/)
- [JSON and serialization in Flutter **(Official)**](https://docs.flutter.dev/data-and-backend/serialization/json)
- [JSON to Dart converter](https://javiercbk.github.io/json_to_dart/)

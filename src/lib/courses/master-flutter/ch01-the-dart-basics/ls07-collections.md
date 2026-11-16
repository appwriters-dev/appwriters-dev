---
id: ls07-collections
title: Collections
description: Dart is a programming language that provides several built-in collections for storing and managing groups of objects. These collections include lists, sets, and maps, which are useful for storing and organizing data in different ways.
---

Recommended Time: 2 days

Dart is a programming language that provides several built-in collections, which are data structures that store and manage collections of objects. These collections include lists, sets, and maps.

A list is an ordered collection of objects, where each object has a specific index. Lists are useful for storing collections of data that need to be accessed by their index (other languages call this an array).

A set is a collection of unique objects. Sets are useful when you care about whether a value is present rather than about its position, such as the unique values in a list. (Dart's default `Set` keeps insertion order, but you don't access its items by index.)

A map is a collection of key-value pairs, where each key is associated with a specific value. Maps are useful for storing collections of data that need to be accessed by their keys, such as a dictionary or lookup table.

Dart collections are versatile and powerful, and can be used in a variety of applications. They support common operations such as adding, removing, and searching for elements, as well as more advanced operations such as sorting and filtering.

## Records (Dart 3)

Dart 3 added **records**: a lightweight way to group a few values together without writing a class. Records are handy for returning more than one value from a function, and you can unpack them with a pattern.

```dart
(String, int) nameAndAge() => ('Ram', 25);

void main() {
  var (name, age) = nameAndAge();
  print('$name is $age years old');

  var point = (x: 3, y: 4); // a record with named fields
  print(point.x + point.y); // 7
}
```

Use a list, set or map for a group of many values of the same kind, and a record for a small, fixed group of values that belong together.

## Projects

### 1. Quiz

Create a quiz app that allows users to answer multiple-choice questions. Use a combination of Map and List to store the questions and options for each question, and allow the user to select one of the options.

### 2. Unique Random Number

Create a simple random number generator. Use a Set to store the numbers that have been generated, and make sure that each number is unique.

### 3. Shopping List

Create a shopping list app that allows users to add and remove items from a list. Use a Set to store the items in the list and ensure that each item only appears once in the list.

### 4. Understand Map Usage

Run this code on your local machine and try to understand how it works on Map.

```dart
void main() {
    var car = {
        "model": "Y8",
        "Horsepower": 456,
        "Energy": "Petrol",
    };
    print(car.length);
    print(car.keys);
    print(car.values);
    car.addAll({"airbags": true});
    print(car);
    car["model"] = "Audi R8";
    print(car);
    car.update("Horsepower", (value) => 650);
    print(car);
    car.remove("Energy");
    print(car);
    car.updateAll((key, value) => "unknown");
    print(car);
    car.clear();
    print(car);
}
```

For practice, try all the other methods and properties available on Map too.

## Resources

- [Collections **(Official)**](https://dart.dev/language/collections)
- [Records **(Official)**](https://dart.dev/language/records)
- [Collections in the core library](https://dart.dev/libraries/dart-core#collections)
- [Collections](https://www.geeksforgeeks.org/dart/dart-collections/)
- [List](https://dart-tutorial.com/collections/list-in-dart/)
- [List](https://api.dart.dev/dart-core/List-class.html)
- [Set](https://dart-tutorial.com/collections/set-in-dart/)
- [Set](https://api.dart.dev/dart-core/Set-class.html)
- [Map](https://dart-tutorial.com/collections/map-in-dart/)
- [Map](https://api.dart.dev/dart-core/Map-class.html)

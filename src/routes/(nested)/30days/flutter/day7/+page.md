# Day 7: Dart Packages

1. Review the basics of packages in Dart. You can use the Dart documentation to learn more about these concepts (https://dart.dev/guides/packages).

2. Create a new Dart console application, or continue working with the project you created in previous days.

3. Import and use the "http" package to make HTTP requests and fetch data from an API. For example:

```dart
import 'package:http/http.dart' as http;

void main() async {
  var response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/todos/1'));
  print(response.body);
}
```

This imports the "http" package and uses it to make a GET request to an API that returns a JSON object. The response body is then printed to the console.

4. Parse the JSON data using the "dart:convert" package. For example:

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class Todo {
  int id;
  String title;
  bool completed;

  Todo.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    title = json['title'];
    completed = json['completed'];
  }

  String toString() {
    return 'Todo #$id: $title (completed: $completed)';
  }
}

void main() async {
  var response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/todos/1'));
  var json = jsonDecode(response.body);
  var todo = Todo.fromJson(json);
  print(todo);
}
```

This creates a Todo class with three properties (id, title, and completed) and a constructor that initializes these properties from a JSON object. The toString method is also defined to print a formatted message to the console.

5. Display the data in the console. For example:

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class Todo {
  int id;
  String title;
  bool completed;

  Todo.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    title = json['title'];
    completed = json['completed'];
  }

  String toString() {
    return 'Todo #$id: $title (completed: $completed)';
  }
}

void main() async {
  var response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/todos/1'));
  var json = jsonDecode(response.body);
  var todo = Todo.fromJson(json);
  print(todo);
}
```

This fetches a single todo item from a JSON API and prints a formatted message to the console with the todo item's ID, title, and completion status.

### Resources

1. Official Dart documentation on Packages: https://dart.dev/guides/packages
2. Flutter Packages: https://pub.dev/flutter
3. Dart Packages: https://pub.dev/packages
4. Flutter Packages YouTube channel: https://www.youtube.com/c/FlutterPackages
5. How to create and publish a package in Dart: https://medium.com/dartlang/dart-creating-and-publishing-a-package-6bb2e524233d
6. Using external packages in your Flutter app: https://flutter.dev/docs/development/packages-and-plugins/using-packages

By the end of this day, you should have a good understanding of how to import and use packages in Dart, as well as how to make HTTP requests and parse JSON data.
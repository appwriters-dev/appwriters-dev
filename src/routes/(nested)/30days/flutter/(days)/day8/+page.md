# Networking in Dart

Networking in Dart involves making HTTP requests to web APIs to retrieve or send data. The [http](https://pub.com/packages/http) package is a official and popular package in Dart that makes it easy to perform HTTP requests.

> **Project** - Movie Searcher
>
> Write a Dart console program uses [OMDB movie API](https://developers.themoviedb.org/3) to provide following functionalities:
> - Search for movie information by title
> - View a list of upcoming films
> - Get a list of the best-rated movies
> - Compile a list of popular films
>


By the end of this day, you should have a basic understanding of how to make HTTP requests using the http package and how to parse JSON data in Dart.

## Tips

- Study HTTP requests and how to make them using the http package.

```dart
import 'package:http/http.dart' as http;

void main() async {
  var response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts'));
  print(response.body);
}
```

    In this example, we import the http package and use the `get` method to make a GET request to the specified URL. The `await` keyword is used to wait for the response, which is then printed to the console.

- Learn how to parse JSON data in Dart.

    Many web APIs return data in JSON format. Dart provides built-in support for parsing JSON data using the `dart:convert` library.

```dart
import 'dart:convert';

void main() {
  String jsonData = '{"name": "John", "age": 30}';
  Map<String, dynamic> data = jsonDecode(jsonData);
  print(data['name']); // Output: John
}
```

    In this example, we have a JSON string representing an object with two properties, `name` and `age`. We use the `jsonDecode` function to parse the JSON data into a Map object. We can then access the properties of the object using the keys.

-  Use the http package to make GET and POST requests to a web API.

    To make a POST request using the http package, we can use the `post` method.

```dart
import 'package:http/http.dart' as http;

void main() async {
  var url = Uri.parse('https://jsonplaceholder.typicode.com/posts');
  var response = await http.post(url, body: {'title': 'foo', 'body': 'bar', 'userId': '1'});
  print(response.statusCode);
}
```

    In this example, we make a POST request to the specified URL and pass in a Map object as the `body` parameter.

- Parse the JSON data returned by the API into Dart objects.

    When we receive JSON data from a web API, we often want to convert it into Dart objects for easier manipulation. We can create Dart classes that mirror the structure of the JSON data and then use the `jsonDecode` function to convert the JSON data into Dart objects.

```dart
import 'dart:convert';

class Post {
  int id;
  String title;
  String body;

  Post({this.id, this.title, this.body});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: json['id'],
      title: json['title'],
      body: json['body'],
    );
  }
}

void main() {
  String jsonData = '{"id": 1, "title": "foo", "body": "bar"}';
  Map<String, dynamic> data = jsonDecode(jsonData);
  Post post = Post.fromJson(data);
  print(post.title); // Output: foo
}
```

    In this example, we have a Dart class `Post` that represents a post object with three properties: `id`, `title`, and `body`. We also have a factory constructor `fromJson` that takes a JSON object and returns a Post object.

> 
> [more practice projects](https://masterflutter.appwriters.dev/ch04-asynchronous-programming-rest-api-and-json/ls05-review)
> 

**Resources:**

1. [Dart HTTP Client package](https://pub.dev/packages/http)
2. [Parsing json in Dart](https://codewithandrea.com/articles/parse-json-dart/)
3. [JSON to Dart converter](https://javiercbk.github.io/json_to_dart/)
4. [Detailed explanation of REST API](https://nerdleveltech.com/a-full-guide-understand-everything-about-apis-with-examples/) - **recommended** if you are new to REST API
5. [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) - Free placeholder API that you can use to practice

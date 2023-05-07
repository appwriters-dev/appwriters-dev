# JSON Parsing

JSON is one of the most common data formats used for exchanging data between a server and a client. It is a lightweight format that is easy for humans to read and write, and it is also easy for machines to parse and generate. Its very important as a Flutter developer to know how to parse JSON data in Flutter. Knowing this will help you to build more complex apps that fetch data from an API and display it in your app.

> **Project** - Quotes Object
>
> Update the quotes app from [previous day](/30days/flutter/day21) so that the JSON received from server is parsed into a Dart `Quotes` and `Quote` object
>
> - Quote object will have following properties: `String id`, `String quote`, and `String author`.
> - Quotes object will following properties: `List<Quote> quotes` and `int total`, `int skip`, and `int limit`

By the end of this day, you should have a better understanding of how to parse JSON data in Flutter and how to display it using widgets such as the `ListView` widget.

## Tips

- Review the basics of Dart programming from Day 1-9.
- It's always best practice to parse JSON into a Dart object. This will make it easier to work with the data in your app.
- You should practice with wide range of JSON data to get a better understanding of how to parse JSON data in Flutter.
- You can use tools like [JSON to Dart](https://javiercbk.github.io/json_to_dart/) to automatically generate Dart classes from JSON data.
- [Dart Data Class Generator](https://marketplace.visualstudio.com/items?itemName=hzgood.dart-data-class-generator) is a VS Code extension that you can use to generate Dart classes from JSON data.

### Resources

- [Flutter JSON and serialization documentation](https://docs.flutter.dev/data-and-backend/json)
- [Understanding and Working with REST API in Flutter](https://www.appwriters.dev/blog/integrating-with-rest-api-in-flutter)
- [Flutter networking and parsing tutorial](https://flutter.dev/docs/cookbook/networking/fetch-data)


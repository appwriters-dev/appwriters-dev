# HTTP Requests in Flutter

Dynamic mobile applications save and load user data and other information from remote servers. It is important to understand how to make network requests in Flutter to fetch data from an API and display it in your app.

> **Project** - Quotes API
>
> Update the quotes list UI you built on [day 12](/30days/flutter/day12) to fetch quotes from an API instead of using a static list of quotes.
>
> - [Get quotes from this endpoint](https://dummyjson.com/quotes)

By the end of this day, you should have a basic understanding of how to make network requests in Flutter and how to work with the `http` package.

## Tips

- Review the basics of Dart programming from Day 1-9.
- Learn how to make network requests in Flutter using the [http](https://pub.dev/packages/http) package. This package allows you to easily make HTTP requests to an API and receive data in JSON format.
- Add the package with `flutter pub add http`. On Android, the `INTERNET` permission is needed in release builds, and on macOS the network client entitlement; see the "Fetch data from the internet" cookbook below.
- Use a `FutureBuilder` to show a loading indicator, an error message, or the quotes depending on the state of the request.
- Experiment with different types of requests, such as GET and POST requests, and learn how to handle errors and exceptions.
- You can use [JSON Placeholder API](https://jsonplaceholder.typicode.com/) to practice making different requests
- You should practice by building more projects
- You can use [Free Public APIs](https://github.com/public-apis/public-apis) for building many interesting applications

## Resources

- [Flutter http package documentation](https://pub.dev/packages/http)
- [Beginners guide to http package](/blog/a-beginners-guide-to-the-http-package-in-flutter)
- [Fetch Data from Internet](https://docs.flutter.dev/cookbook/networking/fetch-data)
- [Working with Rest API in Flutter](/blog/integrating-with-rest-api-in-flutter)
- [FutureBuilder class](https://api.flutter.dev/flutter/widgets/FutureBuilder-class.html)


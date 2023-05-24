---
title: A Beginner's Guide to the HTTP Package in Flutter
slug: a-beginners-guide-to-the-http-package-in-flutter 
date: 2023-05-18
excerpt: Learn to leverage the power of Flutter's http package for your app development needs. Our guide covers everything from basic GET and POST requests to advanced error handling and interceptors. Ideal for beginners, it includes comprehensive code examples for a hands-on learning experience.
keywords: Flutter, http package, Dart, API, GET requests, POST requests, error handling, interceptors, HTTP client, network programming, beginner's guide, app development, coding tutorial, response handling, HTTP errors
coverImage: /images/flpackage_http_cover.svg
coverWidth: 16
coverHeight: 9
categories: [Flutter]
---

In today's interconnected world, many apps require internet access to provide dynamic and up-to-date content. A commonly used method for this is HTTP requests, a form of communication between client and server. In Flutter, we can use the `http` package to handle these HTTP requests. This article will take you through the basics and advance you to more complex concepts involved in using the `http` package. 

## What's Covered in This Guide

- Introduction to HTTP
- Setting Up the HTTP Package
- Making a Basic GET Request
- Handling Responses
- POST Requests and Sending Data
- Error Handling
- Downloading Raw Bytes
- Interceptors
- Pros and cons
- Alternatives
- Conclusion

## Introduction to HTTP

HTTP, or Hypertext Transfer Protocol, is the foundation of any data exchange on the Web. It's a protocol used for transmitting hypertext over the internet. Hypertext is structured text that uses logical links (hyperlinks) between nodes containing text.

In the context of Flutter and the `http` package, we'll primarily be dealing with two types of HTTP requests:

- GET: Retrieves information from the specified source.
- POST: Sends new information to the specified source.

However, you can use this knowledge to perform any kind of HTTP request, including PUT, DELETE, and PATCH.

## Setting Up the HTTP Package

Before we can make HTTP requests, we need to add the `http` package to our project. You can add it by running the following command:
```
flutter pub add http
```

You can also manually add it. For that, add this line to your `pubspec.yaml` file under dependencies:

```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^0.13.6
```

Then, run `flutter packages get` in your terminal to fetch the package.

## Making a Basic GET Request

A GET request retrieves, or "gets", data from a server. In the `http` package, we use the `get` function for this. Here's a basic example:

```dart
import 'package:http/http.dart' as http;

void fetchData() async {
  var response = await http.get('https://jsonplaceholder.typicode.com/posts');
  print('Response status: ${response.statusCode}');
  print('Response body: ${response.body}');
}
```

This function fetches data from the URL provided and prints the status code and the response body.

## Handling Responses

In the previous section, we printed the status code and body of our HTTP response. The status code tells us whether our request was successful, and the body contains the data we requested. Typically, this data is in JSON format. 

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

void fetchData() async {
  var response = await http.get('https://jsonplaceholder.typicode.com/posts');
  if (response.statusCode == 200) {
    var jsonResponse = jsonDecode(response.body);
    print('Number of posts: ${jsonResponse.length}');
  } else {
    print('Request failed with status: ${response.statusCode}.');
  }
}
```

## POST Requests and Sending Data

A POST request is used to send data to a server. Here's a basic example:

```dart
import 'package:http/http.dart' as http;

void postData() async {
  var response = await http.post(
    'https://jsonplaceholder.typicode.com/posts',
    body: {'title': 'Flutter http guide', 'body': 'A guide to using the http package in Flutter', 'userId': '1'},
  );
  print('Response status: ${response.statusCode}');
  print('Response body: ${response.body}');
}
```

Apart from `get` and `post` requests, you might also want to look into other functions provided by the `http` package, such as `put` for updating data, `delete` for deleting data, and `read` for making a GET request and reading the body of the response as a string.

## Error Handling

It's important to handle errors in our HTTP requests when they occur. This is especially important in HTTP requests, where many things can go wrong. Here's an example of how you might handle errors in a POST request:

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

void postData() async {
  try {
    var response = await http.post(
      'https://jsonplaceholder.typicode.com/posts',
      body: {'title': 'Flutter http guide', 'body': 'A guide to using the http package in Flutter', 'userId': '1'},
    );
    if (response.statusCode == 200) {
      print('POST request successful. Response: ${response.body}');
    } else {
      print('POST request failed. Status Code: ${response.statusCode}');
    }
  } catch (e) {
    print('An error occurred: $e');
  }
}
```

In this example, we use a `try-catch` block to handle any errors that might occur during the POST request. If an error occurs, it is printed to the console.

Apart from `try-catch` blocks, you can also use `onError` to handle errors. Here's an example:

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

void postData() async {
  var response = await http.post(
    'https://jsonplaceholder.typicode.com/posts',
    body: {'title': 'Flutter http guide', 'body': 'A guide to using the http package in Flutter', 'userId': '1'},
  ).onError((error, stackTrace) {
    print('An error occurred: $error');
  });
  if (response.statusCode == 200) {
    print('POST request successful. Response: ${response.body}');
  } else {
    print('POST request failed. Status Code: ${response.statusCode}');
  }
}
```

## Downloading Raw Bytes

You can also use `readBytes` to get the body of the response as a list of bytes, which can be useful for downloading files or working with binary data.

For example, here's how you might download an image from a URL:

```dart
import 'dart:io';
import 'package:http/http.dart' as http;

void downloadImage() async {
  var url = 'https://example.com/image.jpg';
  var response = await http.readBytes(url);
  var filePath = '/path/to/image.jpg';
  await File(filePath).writeAsBytes(response);
  print('Image downloaded to $filePath');
}
```

In this example, we use the `readBytes` function to download an image as a list of bytes, then write those bytes to a file.

## Interceptors

Interceptors are a powerful feature that allow you to process requests and responses before they are sent or received. You can add an interceptor to the client that will be called for every request and response.

For example, you might use an interceptor to add an authorization header to every request:

```dart
import 'package:http/http.dart' as http;

class AuthInterceptor implements http.BaseRequest {
  @override
  http.StreamedResponse send(http.BaseRequest request) async {
    request.headers['Authorization'] = 'Bearer your_token';
    return request.send();
  }
}

void main() {
  var client = http.Client();
  client.send = AuthInterceptor().send;
}
```

In this example, we create a class `AuthInterceptor` that implements `http.BaseRequest`. In the `send` method, we add an authorization header to the request before sending it.

## Pros and Cons

**Pros**

- **Easy to Use:** One of the main advantages of the `http` package is its simplicity. It provides an intuitive and easy-to-use API for making HTTP requests.

- **Flexibility:** It provides a wide range of functions for making requests, handling responses, and dealing with errors. This makes it suitable for a variety of use cases.

- **Asynchronous Support:** Dart's `http` package works seamlessly with async and await keywords, which simplifies asynchronous programming.

- **Interceptors:** The `http` package supports the use of interceptors, allowing developers to process requests and responses before they are sent or received.

- **Compatible with JSON and Other Data Formats:** It's highly compatible with various data formats, which makes it easy to send and receive data in formats like JSON, XML, and more.

**Cons**

- **Lack of Built-In Advanced Error Handling:** While the `http` package does allow for error handling, it lacks advanced error handling capabilities out of the box. Developers often need to implement their own solutions for complex error handling.

- **Absence of Automatic Request Retrying:** The `http` package does not support automatic retrying of failed requests, which can be a crucial feature for unstable network conditions.

- **No Built-In Caching:** It doesn't come with built-in caching mechanism. Therefore, for caching responses, another solution needs to be implemented.

## Alternatives

While the `http` package is quite robust, there are other libraries available that offer additional features or different approaches to handling HTTP requests.

- **Dio:** Dio is a powerful HTTP client for Dart, which supports Interceptors, Global configuration, FormData, Request Cancellation, File downloading, Timeout etc.

- **Chopper:** Chopper is an http client generator using source_gen and inspired by Retrofit. It might be a good choice if you're looking for a more automated solution.

- **http_client:** The `http_client` package is a multi-platform, pluggable HTTP client library for Dart that can be used on different platforms (Browser, VM, Flutter) with the same code.

Each of these libraries has its own set of features and benefits, and the best one for your project will depend on your specific needs and preferences. Be sure to evaluate each one carefully to find the best fit for your Flutter application.

## Conclusion

The `http` package provides a powerful and flexible way to work with network requests in Dart and Flutter. It offers a wide range of functions for making requests, handling responses, and dealing with errors. Remember that when you're working with HTTP, things can and will go wrong, so always make sure to handle errors properly.

With a good understanding of the `http` package, you'll be well-equipped to build robust and reliable Flutter apps that can interact with APIs and handle data from the web. Happy coding!

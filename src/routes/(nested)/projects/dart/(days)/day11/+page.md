# Creating a Simple HTTP Server in Dart: A Step-by-Step Guide

Welcome to Day 11 of our 30-day coding challenge, where we explore a new project every day to enhance our Dart programming skills. Today, we're diving into the realm of web servers by building a straight forward HTTP server. This project is perfect for those looking to understand web server basics and how to handle HTTP requests using Dart.

## Introduction to HTTP Servers

An HTTP server is a software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages). It can be used to create web applications, APIs, or simply to serve static files. Dart, with its robust libraries and efficient handling of asynchronous operations, is a fantastic choice for writing simple to complex HTTP servers.

## Setting Up Our Dart HTTP Server

The code provided outlines the creation of a simple HTTP server that responds to GET and POST requests. Let's break down the components and understand how each part contributes to the server's functionality.

### Importing Necessary Libraries

```dart
import 'dart:convert';
import 'dart:io';
```

We start by importing two essential libraries: `dart:convert` for encoding and decoding, and `dart:io` for file, socket, HTTP, and other I/O support in Dart.

### Binding the Server to an Address and Port

```dart
final server = await HttpServer.bind(InternetAddress.anyIPv4, 8080);
print('Server running on port 8080');
```

Here, we create an `HttpServer` instance that listens on all available IPv4 addresses on port 8080. This is the entry point of our server where it begins to listen for incoming requests.

### Handling Requests with a Switch Statement

```dart
await for (var request in server) {
  switch (request.method) {
    case 'GET':
      handleGetRequest(request);
      break;
    case 'POST':
      handlePostRequest(request);
      break;
    default:
      request.response.statusCode = HttpStatus.methodNotAllowed;
      request.response.write('Unsupported request method: ${request.method}');
      await request.response.close();
      break;
    // in the similar way you can handle other methods like PUT, DELETE, PATCH etc.
  }
}
```

The server asynchronously waits for requests (`await for`) and uses a switch statement to handle different HTTP methods. This setup is scalable for adding more request types like PUT, DELETE, etc.

### Handling GET Requests

```dart
void handleGetRequest(HttpRequest request) async {
  final path = request.uri.path;
  if (path == '/') {
    request.response.write('Hello, world!');
    await request.response.close();
  } else {
    request.response.statusCode = HttpStatus.notFound;
    await request.response.close();
  }
}
```

When a GET request is received, this function checks the request's URI path. If the path is '/', it responds with 'Hello, world!'. For other paths, it sends a 404 Not Found status.

### Handling POST Requests

```dart
void handlePostRequest(HttpRequest request) async {
  final body = await utf8.decodeStream(request);
  request.response.write('Received POST request with body: $body');
  await request.response.close();
}
```

This function handles POST requests by reading the request body and echoing it back in the response.

## The complete code

```dart
///
/// Simple HTTP Server
/// 
import 'dart:convert';
import 'dart:io';

void main() async {
  final server = await HttpServer.bind(InternetAddress.anyIPv4, 8080);
  print('Server running on port 8080');

  await for (var request in server) {
    switch (request.method) {
      case 'GET':
        handleGetRequest(request);
        break;
      case 'POST':
        handlePostRequest(request);
        break;
      default:
        request.response.statusCode = HttpStatus.methodNotAllowed;
        request.response.write('Unsupported request method: ${request.method}');
        await request.response.close();
        break;
    }
  }
}

void handleGetRequest(HttpRequest request) async {
  final path = request.uri.path;
  if (path == '/') {
    request.response.write('Hello, world!');
    await request.response.close();
  } else {
    request.response.statusCode = HttpStatus.notFound;
    await request.response.close();
  }
}

void handlePostRequest(HttpRequest request) async {
  final body = await utf8.decodeStream(request);
  request.response.write('Received POST request with body: $body');
  await request.response.close();
}

```

## Running and Testing the Server

To run the server, simply execute the Dart file. Once it's running, you can test it using a web browser or tools like Postman or cURL for both GET and POST requests.

## Wrapping it up

Congratulations! You've successfully created a basic HTTP server in Dart. This project lays the groundwork for building more complex server-side applications. You can expand this by adding more request handlers, integrating a database, or even hosting static files.

Remember, learning is a continuous process. Feel free to experiment and add your flair to this project. Happy coding!
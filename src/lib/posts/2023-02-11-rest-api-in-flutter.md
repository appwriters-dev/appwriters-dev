---
title: Integrating with REST API in Flutter
slug: integrating-with-rest-api-in-flutter
date: 2023-02-11
excerpt: In this article we will introduce REST API briefly and then learn to integrate external service into our Flutter application using REST API. We will be using the official http package however after learning the fundamentals you will be able to use any other library to make a http request in Flutter.
coverImage:
coverWidth:
coverHeight:
tags: [Flutter]
---

In this article we will introduce REST API briefly and then learn to integrate external service into our Flutter application using REST API.

## What is REST API?

REST (Representational State Transfer) API is a set of rules and properties for creating web services. While creating REST API we define a set of endpoints (URLs), when called returns a response in format such as JSON (which is most common) or XML. We will learn more about request and response below in further sections

## Why we need REST API for Mobile Development?

A mobile application often connects with external services to retrieve and store data. And the easiest way to make these connections seamless is via REST API. As a mobile developer we need to understand how REST API works as well as be able to integrate it with our application.

## Understanding REST Requests

Rest API request definition consist of different parts.

```
METHOD baseURL/path
HEADERS
PAYLOAD
```

**Method** - method of request can be GET, POST, and more
**Base URL** - URL where API is hosted, because same API may deal with multiple resources, resources are separated by path
**Path** - path to resources
**Headers** - Headers are key-value pairs
**Payload** - Data required for the requests

All these elements of REST API request are defined by the API creator in their documentation.

REST API uses different HTTP verbs while making a request, most commonly used are
* GET - Get a resource or a list of resources
* POST - Create new resource
* PUT - Update resource
* PATCH - Update resource partially
* DELETE - Delete a resource

## Understanding REST Response

* Two most important part of response are `headers` and `body`
* Headers contain metadata about the response
* Body contains the actual response data or error information
* Two most important headers are `status-code` and `content-type` which tells us about the status of the request and the type of content received in the body
* We use these information together with the body to understand the data returned.
* API documentation should also contain information about response body

## Working with REST API in Flutter

Flutter has various packages that allows integration with REST API, [http](https://pub.dev/packages/http) (Official), [dio](https://pub.dev/packages/dio), and many more. In this article we will be using the official http package, however after learning this, you can easily switch to any other clients including dio. We will be integrating with the JSON placeholder API for this tutorial. In order to start working with REST API we first need a HTTP client, and we will be using the http package. First add http package as a dependency.

```yaml
dependencies:
	http: ^0.13.5
```

1. Import http package
```dart
import 'package:http/http.dart' as http;	
```

### Making our First Request

The simplest of all is the GET request. Get request is usually made to receive data from server.

Let's look at a get request to get a list of todos from [JSON placeholder API](https://jsonplaceholder.typicode.com/guide/)
* If we look at their documentation, the endpoint is [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
* The path for todos is `/todos`
* So the URL for get request is [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos) 
So let's make a get request to the above URL using the `http` package.

```dart
void getTodos() async {
	// make a get request
	final reponse = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/todos'));
	// get returned data
	final todos = response.body;
	print(todos);
}
```

While working with API integration we use Futures, Async, Await extensively. If you don't understand these concepts, please refer to [Demystifying Futures](https://dlohani.com.np/blog/demystifying-futures) blog post.

### Making a POST Request

* POST is a bit more sophisticated than a get request.
* A post request usually has a header and payload requirement
* POST request is made to create resource in the server
* Required payload and header are usually defined in the documentation of the API

Let's look at a post request to create a post in [JSON placeholder API](https://jsonplaceholder.typicode.com/guide/)
* If we look at their documentation, the endpoint is same as before [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
* The path for posts is `/posts`
* So the URL for get request is [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
* We also need to send JSON data as payload
* We also need a `Content-Type` header
So Let's make a POST request to create a post in Flutter/Dart.
```dart
void createPost() async {
	final data = {
		"title": "My new post",
		"body": "This is my new post created from Flutter app",
		"userId": "1",
	};
	final headers = {"Content-Type": 'application/json; charset=UTF-8'};

	final response = await http.post(
		Uri.parse('https://jsonplaceholder.typicode.com/posts'),
		body: convert.jsonEncode(data),
		headers: headers,
	);
	final post = response.body;
	print(post);
}
```

PATCH and PUT request, similar to POST require headers and payload most of the time. DELETE request is more similar to GET request, but it's used to delete resource from server. Making PATCH, PUT, DELETE is very similar to what we have done with POST and GET requests.

Once you have made requests to server and received data, you can use these data in Flutter widgets using Stateful Widget or Future Builders. Learn more about Futures & Future Builders in [Demystifying Futures](https://dlohani.com.np/blog/demystifying-futures) post.

### Customizing Requests

If you want to further customize the API request using `http` package, you can use more flexible way to make a request instead of using the prebuilt `get`, `post`, and other functions. Let's look at one example, making the same POST request as above but in a different way.

```dart
void createPost() async {
	final data = {
	    "title": "My new post",
	    "body": "This is my new post created from Flutter app",
	    "userId": "1",
	};
	
	final request = http.Request(
	    'POST',
	    Uri.parse('https://jsonplaceholder.typicode.com/posts'),
	);
	
	request.body = jsonEncode(data);
	request.headers['Content-Type'] = 'application/json; charset=UTF-8';
	
	final client = http.Client();
	
	final streamedResponse = await client.send(request);
	final response = await http.Response.fromStream(streamedResponse);
	  print(response.body);
}
```

Apart from making a request and getting data, you can also parse the received data which is JSON most of the time as it's the most popular format, into Dart objects so that you can use them safely in your application.

## Summary

In this article we learned about the basics of REST API and why we need REST API for mobile development. Then we discussed REST request and response and different parameters associated with them. Finally we learned how we can make a REST API request and get data in Flutter using the official `http` library. We looked at an example of making a GET and POST request as well as to fully customize the request. To get a real world example, go through the source code of my [open source trivia application](https://github.com/lohanidamodar/flutter_opentrivia) that uses open travia API. I hope this was helpful to you, if yes, share it with your community. See you again in next article.
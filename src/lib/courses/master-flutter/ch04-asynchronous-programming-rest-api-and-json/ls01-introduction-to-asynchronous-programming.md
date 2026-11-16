---
id: ls01-introduction-to-asynchronous-programming
title: Introduction to Asynchronous Programming
description: Asynchronous programming lets a program start a long-running task and keep doing other work while it waits for the result, instead of blocking. Asynchronous programming is very useful for performing I/O operations, such as accessing the network and accessing the file system. Dart uses Future, Stream, and async/await to implement asynchronous programming.
---

Asynchronous programming lets a program start a long-running task and keep doing other work while it waits for the result, instead of blocking. Dart code runs on a single thread (inside an *isolate*), and while a network request or a file read is in progress, Dart is free to handle other events, such as keeping a Flutter UI responsive. Asynchronous programming is extremely useful for performing I/O operations such as network and file system access. Heavy CPU work, like image processing or big calculations, should be moved to a separate isolate (for example with `Isolate.run`) so it doesn't freeze the app.

Asynchronous programming is used in Dart and Flutter for a variety of tasks, including:

- Using HTTP to make REST API requests
- Reading and writing files
- Waiting for timers and delays
- Listening to streams of events, such as user input or data from a server

In this lesson, we will learn about asynchronous programming in Dart and Flutter. We will learn about the `Future` class, the `async` and `await` keywords, and the `Stream` class.

## Projects

### 1. Every 5 Seconds

Write a program that prints the current time after 5 seconds (hint: `Future.delayed`). Then make it print the time every 5 seconds.

### 2. Read a File

Write a program that reads a text file and prints the contents of the file to the console.

### 3. Multiple Futures

Write a program that uses the Future class to perform multiple asynchronous operations in parallel, and then uses the Future.wait() method to wait for all the operations to complete before continuing.

## Resources

- [DartPad: Futures](https://dartpad.dev/futures)
- [Dart Async and Await](https://dart.dev/libraries/async/async-await)
- [Asynchronous Programming](https://dart-tutorial.com/asynchronous-programming/asynchronous-programming-in-dart/)
- [Future in Dart](https://dart-tutorial.com/asynchronous-programming/future-in-dart/)
- [Async and Await in Dart](https://dart-tutorial.com/asynchronous-programming/async-and-await-in-dart/)

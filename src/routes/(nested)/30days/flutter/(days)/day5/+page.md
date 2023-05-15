# Asynchronous programming

Asynchronous programming in Dart allows you to execute code without blocking the main program flow. It allows you to perform time-consuming tasks like network requests, file I/O, or database operations in the background while the rest of your program keeps running. This helps to prevent your program from becoming unresponsive and improves its overall performance. Dart provides several mechanisms for asynchronous programming, including Futures, async/await, and Streams.

> **Project** - File Reader
> 
> Write a program that reads a text file asynchronously and prints the content to the console.
> - At the same time as the file is being read, print a message to the console to indicate that the file is being read.
> - When the file has been read, print a message to the console to indicate that the file has been read.
>

By the end of thisday, you should have a good understanding of how to write asynchronous code in Dart using Futures and async/await.

## Tips

- Understand the Basics: Start by understanding the basics of asynchronous programming, including **Futures** and **async/await**. Read through the resources provided below and build the given project.

- Use Async/Await for File Operations: Use the `dart:io` library to read and write files asynchronously using async/await.

```dart
import 'dart:io';

void main() async {
  var file = File('example.txt');
  var contents = await file.readAsString();
  print(contents);
  
  var data = 'Hello, World!';
  await file.writeAsString(data);
}
```

- Experiment with Timers: Use the Future.delayed() function to simulate timers that wait for a certain amount of time before executing a function.

```dart
void main() async {
  print('Start');
  await Future.delayed(Duration(seconds: 2));
  print('End');
}
```
 
> [more projects](https://masterflutter.appwriters.dev/ch04-asynchronous-programming-rest-api-and-json/ls01-introduction-to-asynchronous-programming)


## Resources

- [Making Friends with Asynchronous Programming](/blog/making-friends-with-asynchronous-programming-and-futures-in-flutter)
- [Deep Dive into Asynchronous Programming](/blog/diving-deeper-int-asynchronous-programming-with-futures-in-flutter)
- [Asynchronous Programming Codelab](https://dart.dev/codelabs/async-await)
- [Dart Tutorial: Asynchronous Programming](https://dart-tutorial.com/asynchronous-programming/)
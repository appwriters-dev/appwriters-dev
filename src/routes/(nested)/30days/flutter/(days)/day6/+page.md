# Exceptions and Error Handling

Error and exception handling is crucial for any developer. By effectively handling errors, developers can improve user experience, simplify debugging, ensure application maintainability, and prevent security vulnerabilities. Therefore, it is an essential skill that every developer must possess.

> **Project** - Handle Errors and Exceptions
>
> Improve the code of my [open trivia's](https://github.com/lohanidamodar/flutter_opentrivia/blob/master/lib/resources/api_provider.dart) `getQuestions` function by handling error and exceptions.

By the end of today, you will have a clear understanding of what errors and exceptions are, how they can occur in an application, and how to handle them correctly.

## Tips

- To handle exceptions in Dart and Flutter, you can use try-catch blocks. A try-catch block allows you to catch and handle exceptions that occur within the try block.

```dart
try {
  // code that may throw an exception
} catch (e) {
  // code to handle the exception
}
```

- In some cases, you may want to catch an exception and then rethrow it so that it can be handled by another part of the program. To rethrow an exception, you can use the `rethrow` keyword:

```dart
try {
  // code that may throw an exception
} catch (e) {
  // code to handle the exception
  rethrow;
}
```

- In addition to `try` and `catch`, Dart and Flutter also have a `finally` block. The code in a `finally` block will always be executed, regardless of whether an exception was thrown or not.

```dart
try {
  // code that may throw an exception
} catch (e) {
  // code to handle the exception
} finally {
  // code that will always be executed
}
```


## Resources

- [Exceptions - Dart Language Tour](https://dart.dev/guides/language/language-tour#exceptions)
- [Error handling in Flutter](https://docs.flutter.dev/testing/errors)
- [Dart Error and Exception Handling Techniques](https://www.tutorialspoint.com/dart_programming/dart_programming_exceptions.htm)
- [Code review](https://github.com/lohanidamodar/appwrite_auth_kit/blob/master/lib/src/accounts_provider.dart) - review the code and see how `try-catch-finally` is used. Also see how only specific exceptions are caught and handled.

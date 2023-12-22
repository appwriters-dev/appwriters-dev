# File size calculator

In this blog post, we'll explore a simple yet effective program written in Dart that calculates the size of a file or directory. This guide is tailored for junior developers who are getting familiar with Dart and file system operations.

## The Program Overview

The program we're discussing is a Dart script that reads a file path from the standard input and computes its size in kilobytes. It works with both files and directories, calculating the size of directories by summing the sizes of all files within.

### Importing Necessary Library

```dart
import 'dart:io';
```

Dart's `dart:io` library is crucial for file and directory manipulation, providing the necessary classes and methods.

### Main Function

```dart
Future<void> main() async {
  final path = stdin.readLineSync()!;
  final file = File(path);
  // Further code
}
```

The `main` function is asynchronous, marked by `async`, because it involves IO operations that are inherently asynchronous.

1. **Reading Input**: It starts by reading the file or directory path from the standard input.
2. **File Object Creation**: The path is used to create a `File` object. This object represents the file or directory at the given path.

### Checking Existence and Calculating Size

```dart
if (await file.exists()) {
  final size = await getFileSize(file);
  final sizeInKb = size / 1024;
  print('Size of $path is ${sizeInKb.toStringAsFixed(2)} KB');
} else {
  print('$path does not exist');
}
```

1. **Existence Check**: Before calculating the size, it checks if the file or directory exists.
2. **Size Calculation**: If it exists, `getFileSize` is called to get the size.
3. **Size Conversion**: The size is converted to kilobytes and printed.

### The `getFileSize` Function

```dart
Future<int> getFileSize(FileSystemEntity entity) async {
  // Implementation
}
```

This function is the core of our program, handling the size calculation for both files and directories.

#### Handling Files

```dart
if (await entity is File) {
  return (await (entity as File).length());
}
```

For files, it simply returns the size using the `length` method.

#### Handling Directories

```dart
else if (await entity is Directory) {
  int size = 0;
  await for (final FileSystemEntity subEntity in (entity as Directory).list(recursive: true)) {
    if (await subEntity is File) {
      size += await (subEntity as File).length();
    }
  }
  return size;
}
```

For directories:
1. **Iterating**: It iterates over each item in the directory recursively.
2. **Size Accumulation**: If an item is a file, its size is added to the total.

#### Error Handling

```dart
else {
  throw FileSystemException('Unsupported entity type');
}
```

If the entity is neither a file nor a directory, an exception is thrown.

## Complete program

```dart
///
/// File Size Calculator
/// 
import 'dart:io';

Future<void> main() async {
  final path = stdin.readLineSync()!;
  final file = File(path);
  if (await file.exists()) {
    final size = await getFileSize(file);
    final sizeInKb = size / 1024;
    print('Size of $path is ${sizeInKb.toStringAsFixed(2)} KB');
  } else {
    print('$path does not exist');
  }
}

Future<int> getFileSize(FileSystemEntity entity) async {
  if (await entity is File) {
    return (await (entity as File).length());
  } else if (await entity is Directory) {
    int size = 0;
    await for (final FileSystemEntity subEntity in (entity as Directory).list(recursive: true)) {
      if (await subEntity is File) {
        size += await (subEntity as File).length();
      }
    }
    return size;
  } else {
    throw FileSystemException('Unsupported entity type');
  }
}
```

## Wrapping it up

This Dart program is a practical example of file system manipulation. It's a great starting point for junior developers to understand asynchronous programming, file handling, and iteration in Dart. Always remember, the key to mastering a new programming language is practice and exploration. Happy coding!
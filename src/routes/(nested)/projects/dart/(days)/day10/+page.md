# Writing a Dart script to organize files

Organizing files in a directory can be a tedious task, especially when dealing with a large number of files. In this post, we'll explore a Dart program that automates this process, categorizing files into predefined groups such as images, movies, documents, programs, and others based on their file extensions.

## Overview of the Program

This program reads files from a specified directory, determines their types based on file extensions, and then moves them into corresponding subdirectories like 'images', 'movies', etc.

## Importing Required Libraries

```dart
import 'dart:io';
```

We start by importing Dart's `io` library, which provides the necessary functionalities to interact with the file system.

## Main Function Entry Point

```dart
void main(List<String> args) {
  if (args.isEmpty) {
    print('Directory path is required');
    return;
  }

  organizeFiles(args[0]);
}
```

The `main` function serves as the entry point of our Dart program. This also accepts a list of arguments while running the program from command line. We only want one argument that should be the pthe path of the directory we want to organize and call the `organizeFiles` function with this path.

## The 'organizeFiles' Function

```dart
void organizeFiles(String directoryPath) {
  var directory = Directory(directoryPath);

  if (!directory.existsSync()) {
    print('Directory does not exist.');
    return;
  }

  var files = directory.listSync();
  for (var file in files) {
    if (file is File) {
      var category = getCategoryForFile(file.path);
      var newDirectory = Directory('${directory.path}/$category');
      if (!newDirectory.existsSync()) {
        newDirectory.createSync();
      }
      file.renameSync('${newDirectory.path}/${file.uri.pathSegments.last}');
    }
  }
  print('Files organized by category.');
}
```

The `organizeFiles` function is responsible for the core functionality. It:

- Checks if the directory exists.
- Iterates through each file in the directory.
- Determines the category of each file.
- Creates a new subdirectory for the category if it doesn't exist.
- Moves the file to the appropriate subdirectory.

## Categorizing Files with 'getCategoryForFile'

```dart
String getCategoryForFile(String fileName) {
  var extension = fileName.split('.').last.toLowerCase();

  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
  const movieExtensions = ['mp4', 'mkv', 'avi', 'mov', 'flv'];
  const documentExtensions = ['txt', 'pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'];
  const programExtensions = ['exe', 'bat', 'sh', 'bin', 'jar'];

  if (imageExtensions.contains(extension)) {
    return 'images';
  } else if (movieExtensions.contains(extension)) {
    return 'movies';
  } else if (documentExtensions.contains(extension)) {
    return 'documents';
  } else if (programExtensions.contains(extension)) {
    return 'programs';
  } else {
    return 'others';
  }
}
```

This function determines the category of a file based on its extension. We define lists of known extensions for each category and return the corresponding category name. Files with unknown extensions are categorized as 'others'.

### Complete code

```dart
import 'dart:io';

void main(List<String> args) {
  if (args.isEmpty) {
    print('Directory path is required');
    return;
  }

  organizeFiles(args[0]);
}

void organizeFiles(String directoryPath) {
  var directory = Directory(directoryPath);

  if (!directory.existsSync()) {
    print('Directory does not exist.');
    return;
  }

  var files = directory.listSync();
  for (var file in files) {
    if (file is File) {
      var category = getCategoryForFile(file.path);
      var newDirectory = Directory('${directory.path}/$category');
      if (!newDirectory.existsSync()) {
        newDirectory.createSync();
      }
      file.renameSync('${newDirectory.path}/${file.uri.pathSegments.last}');
    }
  }
  print('Files organized by category.');
}

String getCategoryForFile(String fileName) {
  var extension = fileName.split('.').last.toLowerCase();

  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
  const movieExtensions = ['mp4', 'mkv', 'avi', 'mov', 'flv'];
  const documentExtensions = [
    'txt',
    'pdf',
    'doc',
    'docx',
    'ppt',
    'pptx',
    'xls',
    'xlsx'
  ];
  const programExtensions = ['exe', 'bat', 'sh', 'bin', 'jar'];

  if (imageExtensions.contains(extension)) {
    return 'images';
  } else if (movieExtensions.contains(extension)) {
    return 'movies';
  } else if (documentExtensions.contains(extension)) {
    return 'documents';
  } else if (programExtensions.contains(extension)) {
    return 'programs';
  } else {
    return 'others';
  }
}
```

## Running the Program

We can run the program from command line using the `dart` command.

```bash
> dart organize.dart /path/to/directory

> Files organized by category.
```


## Wrapping it up

This Dart program demonstrates a practical approach to file organization. It's a basic script that can be expanded and customized according to specific needs. Handling different file types, exceptions, and nested directories are some areas where additional functionality can be added. We recommend you to explore further and improve the script to your needs and share with the community.


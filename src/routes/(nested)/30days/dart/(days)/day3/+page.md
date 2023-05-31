# Day 3: Building a To-Do List Application with Dart

Hello, Dart enthusiasts! Today, we're going to build a handy to-do list application using Dart's core libraries. This application will not only let you add and delete tasks but also view them in a clean, orderly fashion. We will also be using Dart's built-in `dart:io` library to write and read tasks from a text file. Let's dive right in!

## Setting Up

Firstly, you'll need to import the `dart:io` library. This library contains functions to deal with input and output in your Dart programs.

```dart
import 'dart:io';
```

## Understanding the Task List

Think of the task list as a basket where you can put your tasks in and take them out whenever you want. In coding terms, this basket is simply a List of Strings. Each string represents a task.

```dart
var tasks = <String>[];
```

## Reading Tasks from a File

We have an empty basket, but what if we already had a list of tasks saved from a previous session? Dart has got us covered with the `File` class and its methods. If a file named 'tasks.txt' exists, we read every line in the file as a separate task and add it to our task list.

```dart
var file = File('tasks.txt');
if (file.existsSync()) {
  tasks = file.readAsLinesSync();
}
```

## The Command Loop

Now we need a way for the user to interact with our program. We accomplish this with a while loop that continuously accepts commands until the user decides to stop. The possible commands are `add`, `delete`, `view`, and `exit`.

```dart
while (true) {
  stdout.write('Enter a command (add/delete/view/exit): ');
  var command = stdin.readLineSync();
  
  // Rest of the code
}
```

## Adding a Task

Adding a task to our basket is like adding an apple to a fruit basket. We ask the user to type in a task and add it to our task list.

```dart
case 'add':
  stdout.write('Enter task to add: ');
  var task = stdin.readLineSync();
  if (task != null) {
    tasks.add(task);
    print('Task added.');
  } else {
    print("No task added");
  }
  break;
```

## Deleting a Task

Removing a task is similar. We ask for the index (position) of the task in the list and then remove it.

```dart
case 'delete':
  stdout.write('Enter index of task to delete: ');
  var index = int.tryParse(stdin.readLineSync() ?? '');
  if (index == null) {
    print('Invalid index');
    break;
  }
  if (index >= 0 && index < tasks.length) {
    tasks.removeAt(index);
    print('Task deleted.');
  } else {
    print('Invalid index.');
  }
  break;
```

## Viewing Tasks

The user also needs a way to view all the tasks in the basket. We simply print each task in the list.

```dart
case 'view':
  print('Tasks:');
  for (var i = 0; i < tasks.length; i++) {
    print('$i. ${tasks[i]}');
  }
  break;
```

## Exiting the Program

When the user is done managing tasks and decides to `exit`, we save all the tasks to the file and end the program. Here, tasks are joined together with a newline character in between and then written to the file.

```dart
case 'exit':
  print('Goodbye!');
  file.writeAsStringSync(tasks.join('\n'));
 

 return;
```

There you have it! A simple yet functional to-do list application in Dart. Not only does this help you keep track of your tasks, but it also illustrates how to interact with the file system in Dart. Stay tuned for tomorrow's project!

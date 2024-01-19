---
title: Dependency injection
id: dependency-injection
subtitle: In this lesson, we will learn how to manage dependencies using the GetIt package.
videoId: oc73TnuEitg
---

Managing dependency properly helps us keep our code clean and make it easier to maintain and make changes.

## What is dependency injection?

Dependency injection is a technique in which an object can receive other objects that it depends on.

## What is GetIt?

GetIt is a simple service locator for Dart and Flutter projects.
- It allows to register dependencies and later retrieve them across the app.
- It also allows to register factories, singletons, lazy singletons, and static dependencies.

## Installing GetIt

To install GetIt, we need to add the following dependency to our `pubspec.yaml` file:

```yaml
dependencies:
  get_it: ^7.6.6
```

We can also do the same from the terminal.

```bash
flutter pub add get_it
```

Finally, run the following command to install the dependency:

```bash
flutter pub get
```

## Registering dependencies

To register dependencies 
- Create a new file called `dependencies.dart` in the `lib` folder.

```dart
import 'package:get_it/get_it.dart';
import 'appwrite/appwrite.dart';


void initDependencies() {
    GetIt getIt = GetIt.instance;
    getIt.registerLazySingleton(() => Appwrite());
}
```

We need to call the `initDependencies` function from the `main.dart` file.

```dart
import 'package:flappwrite_tracker/dependencies.dart';
import 'package:flutter/material.dart';

void main() {
  initDependencies();
  runApp(MainApp());
}
```

Once we have registered the dependencies, we can use them anywhere in our app. We will do that in the up coming lessons.

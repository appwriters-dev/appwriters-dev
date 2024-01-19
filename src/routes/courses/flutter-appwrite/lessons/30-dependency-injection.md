---
title: Dependency injection
id: dependency-injection
subtitle: In this lesson, we will learn how to manage dependencies using the GetIt package.
videoId: oc73TnuEitg
---

Dependencies get out of hand quickly as application grows. So it is important to manage dependencies properly. In this lesson, we will learn how to manage dependencies using the GetIt package.

## What is dependency injection?

Dependency injection is a technique in which an object receives other objects that it depends on. These other objects are called dependencies. In Flutter, we can use the GetIt package to manage dependencies.

## What is GetIt?

GetIt is a simple service locator for Dart and Flutter projects. It allows to register dependencies and later retrieve them across the app. It also allows to register factories, singletons, lazy singletons, and static dependencies.


## Installing GetIt

To install GetIt, we need to add the following dependency to our `pubspec.yaml` file:

```yaml
dependencies:
  get_it: ^7.2.0
```

We can also do the same from the terminal. First, open the terminal and navigate to the `flappwrite_tracker` folder. Then, run the following command to add the dependency:

```bash
flutter pub add get_it
```

Finally, run the following command to install the dependency:

```bash
flutter pub get
```

## Registering dependencies

To register dependencies, we will create a new file called `dependencies.dart` in the `lib` folder. Then, we will add the following code to the file:

```dart
import 'package:get_it/get_it.dart';
import 'appwrite/appwrite.dart';


void initDependencies() {
    GetIt getIt = GetIt.instance;
    getIt.registerLazySingleton(() => Appwrite());
}
```

We need to call the `initDependencies` function from the `main.dart` file. So, we will add the following code to the `main.dart` file:

```dart
import 'package:flappwrite_tracker/dependencies.dart';
import 'package:flutter/material.dart';

void main() {
  initDependencies();
  runApp(MainApp());
}
```

Once we have registered the dependencies, we can use them anywhere in our app. We will do that in the up coming lessons.

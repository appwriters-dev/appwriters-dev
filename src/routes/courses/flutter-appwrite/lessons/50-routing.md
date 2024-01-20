---
title: Setup routing with go_router
id: routing
subtitle: Routing is essential, learn to setup routing with go_router (officially supported routing library for Flutter)
videoId: 69HUy0mGIaU
---

In this lesson we will setup application routing using [go_router](https://pub.dev/packages/go_router). We will use riverpod to provide router configuration to the application.

## Adding go_router dependency

To add go_router dependency, we need to add the following dependency to our `pubspec.yaml` file:

```yaml
dependencies:
  go_router: ^13.0.1
```

We can also do the same from the terminal.

```bash
flutter pub add go_router
```

Finally, run the following command to install the dependency:

```bash
flutter pub get
```

## Creating routes

To create routes, we need to create a new file called `router.dart` in the `lib/router` folder.

```dart
import 'package:flappwrite_tracker/home_page/home_page.dart';
import 'package:go_router/go_router.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final routerProvider = Provider<GoRouter>(
  (ref) {
    return GoRouter(
      routes: [
        GoRoute(
          name: HomePage.name,
          path: '/',
          builder: (_, __) => const HomePage(),
        ),
      ],
    );
  },
);
```

We also need to create `home_page.dart` file in the `lib/home_page` folder.

```dart
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  static const String name = 'home';
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      appBar: AppBar(title: const Text('Home')),
      body: Center(
          child: Text('Welcome to FlAppwrite Tracker'),
        ),
      ),
    );
  }
}
```

## Providing router configuration

To provide router configuration, we need to add the following code to the `main.dart` file.

```dart
import 'package:flappwrite_tracker/dependencies.dart';
import 'package:flappwrite_tracker/router/router.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

void main() {
  initDependencies();

  // ProviderScope is used to provide all the providers that we define
  // right now we only have routerProvider
  runApp(const ProviderScope(child: MainApp()));
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    // Consumer widget is used to watch the routerProvider
    return Consumer(builder: (context, ref, child) {
      // routerProvider provides GoRouter instance
      // watching routerProvider will rebuild the app whenever the routerProvider changes
      final router = ref.watch(routerProvider);
      return MaterialApp.router(
        routerConfig: router,
      );
    });
  }
}
```
---
id: ls01-navigation
title: Navigation
description: Move between pages with Navigator and named routes.
---

## Learning Objectives

- Use `Navigator` to navigate between pages
- Use named routes

## Projects

### 1. Second Page

Create a new Flutter project. Add a new widget in `lib/second.dart` that has a Scaffold whose body shows the text `This is the second page` in the center. The FloatingActionButton of the default page should navigate to the second page.

> Note: You can do this easily using `Navigator.push` with a `MaterialPageRoute`, and come back with `Navigator.pop`.

### 2. Named Pages

Modify the previous project to use named routes. Use `MaterialApp`'s `routes` property to define the routes. The default page should navigate to the second page using the name `/second`.

Just like with assets, it's always a good practice to keep the route names as constants in a class instead of typing strings everywhere.

```dart
class RouteNames {
  static const String home = '/';
  static const String second = '/second';
}
```

> **Note:** Named routes are fine for learning and for simple apps. For larger apps, especially ones that run on the web or need deep links, the Flutter team recommends a routing package such as [go_router](https://pub.dev/packages/go_router). You can explore it once you are comfortable with `Navigator`.

## Resources

- [Navigation and Routing](https://docs.flutter.dev/ui/navigation)
- [Navigate to a new screen and back](https://docs.flutter.dev/cookbook/navigation/navigation-basics)
- [Navigator](https://api.flutter.dev/flutter/widgets/Navigator-class.html)
- [MaterialPageRoute](https://api.flutter.dev/flutter/material/MaterialPageRoute-class.html)
- [MaterialApp.routes](https://api.flutter.dev/flutter/material/MaterialApp/routes.html)

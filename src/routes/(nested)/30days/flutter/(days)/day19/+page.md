# Navigator 2.0 and the Go Router

Learn about Navigator 2.0 (Flutter's Router API), the declarative way of handling navigation in Flutter that supports deep linking and the browser URL on the web. Also learn about the [Go Router](https://pub.dev/packages/go_router), a package maintained by the Flutter team that is built on the Router API and provides a simple, URL-based approach to routing in Flutter apps.

> **Project** - Quotes App 2.0
>
> Copy and update the quotes app from [**day 18**](/30days/flutter/day18) to use Go Router.

By the end of this day you will know how to use Navigator 2.0 and the Go Router effectively in your Flutter app and provide a seamless and intuitive user experience.


## Tips

- Make sure to review the basics of Navigation from [day 18](/30days/flutter/day18) before diving into Navigator 2.0 and the Go Router.

- Learn about declarative routing: Navigator 2.0 and the Go Router are both based on the declarative routing approach, which simplifies the process of navigating between screens in your app.

- Understand the differences between using the Router API directly and the Go Router: the Router API is powerful but low-level and verbose, while go_router wraps it in a simple list of routes. For most apps, go_router is the recommended choice.

- Add the package with `flutter pub add go_router`.

- Example implementing basic navigation with the Go Router

```dart
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

final _router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const HomePage(),
      routes: [
        GoRoute(
          path: 'quotes/:id',
          builder: (context, state) =>
              QuoteDetailPage(id: state.pathParameters['id']!),
        ),
      ],
    ),
  ],
);

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'MyApp',
      routerConfig: _router,
    );
  }
}
```

- Navigate using the extension methods on `BuildContext`:

```dart
context.go('/quotes/42');   // replace the current location
context.push('/quotes/42'); // push a page on top of the current one
context.pop();              // go back
```

## Resources

- [Using router](https://docs.flutter.dev/ui/navigation#using-the-router)
- [Go Router](https://pub.dev/packages/go_router)
- [Tutorial on Go Router](https://codewithandrea.com/articles/flutter-navigation-gorouter-go-vs-push/)
- [Understanding navigator 2.0](https://blog.codemagic.io/flutter-navigator2/)
- [Beginners guide to go_router](https://blog.codemagic.io/flutter-go-router-guide/)

# Navigator 2.0 and the Go Router

Learn about Navigator 2.0, the newest version of the Navigator widget in Flutter that simplifies app navigation and supports deep linking. Also learn about the [Go Router](https://pub.dev/packages/go_router), an officially supported Dart package that provides a declarative approach to routing in Flutter apps.

> **Project** - Quotes App 2.0
>
> Copy and update the quotes app from [**day 15**](/30days/flutter/day15) to use Go Router.

By the end of this day you will know how to use Navigator 2.0 and the Go Router effectively in your Flutter app and provide a seamless and intuitive user experience.


## Tips

- Make sure to review the basics of Navigation from [day 15](/30days/flutter/day15) before diving into Navigator 2.0 and the Go Router.

- Learn about declarative routing: Navigator 2.0 and the Go Router are both based on the declarative routing approach, which simplifies the process of navigating between screens in your app.

- Understand the differences between Navigator 2.0 and the Go Router: Both approaches have their own benefits and limitations, so it's important to understand the differences and choose the one that best fits your needs.

- Example implementing basic navigation with the Go Router

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MyApp',
      home: GoRouter(
        routes: [
          GoRoute(
            path: '/',
            pageBuilder: (context, state) => HomePage(),
          ),
          GoRoute(
            path: '/second',
            pageBuilder: (context, state) => SecondPage(),
          ),
        ],
      ),
    );
  }
}
```

## Resources

- [Using router](https://docs.flutter.dev/ui/navigation#using-the-router)
- [Go Router](https://pub.dev/packages/go_router)
- [Tutorial on Go Router](https://codewithandrea.com/articles/flutter-navigation-gorouter-go-vs-push/)
- [Understanding navigator 2.0](https://blog.codemagic.io/flutter-navigator2/)
- [Beginners guide to go_router](https://blog.codemagic.io/flutter-go-router-guide/)

# Introduction to Navigation

Mobile applications typically consist of multiple pages that users navigate between. Understanding how to navigate between screens in your app is crucial for creating a seamless and intuitive user experience. By mastering navigation in Flutter, you can build engaging and user-friendly mobile apps that enable users to easily find the information they need and complete tasks efficiently.

> **Project** - Quotes App
>
> Time to bring your project together, combine the quote details UI you created on **[day 11](/30days/flutter/day11)** and the registration form you created on **[day 13](/30days/flutter/day13)** to create a simple quotes app.
>
> - Add a quotes page to your app that displays a list of quotes. You can hardcode the quotes for now.
> - On the registration form, if all valid information is provided, navigate to the quotes page.
> - Show snackbar with error information if form is not valid
> - Tapping a quote should navigate to a detail page that displays the quote details page.

By the end of this day, you should have a basic understanding of how to implement navigation in a your Flutter application.

## Tips

- Flutter provides different types of navigation, such as push and pop navigation. Learn about the different types of navigation and when to use each one.
- Flutter provides built-in widgets for navigation, such as the `Navigator` widget and the `MaterialApp` widget. Use these widgets to save time and ensure consistency in your app's design.

- Simple navigation implementation

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Navigation Example',
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Screen'),
      ),
      body: Center(
        child: ElevatedButton(
          child: Text('Go to Detail Screen'),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => DetailScreen()),
            );
          },
        ),
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Detail Screen'),
      ),
      body: Center(
        child: ElevatedButton(
          child: Text('Go back to Home Screen'),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
    );
  }
}
```

  In this example, we have two screens: `HomeScreen` and `DetailScreen`. The `HomeScreen` contains an `ElevatedButton` that, when pressed, navigates to the `DetailScreen`. The `DetailScreen` contains another `ElevatedButton` that, when pressed, navigates back to the `HomeScreen` using the `Navigator.pop` method.

<br />

> [more projects](https://masterflutter.appwriters.dev/ch09-multipage-applications/ls01-navigation)

## Resources

- [Flutter documentation on Navigation](https://flutter.dev/docs/development/ui/navigation)
- [Named routes](https://flutter.dev/docs/cookbook/navigation/named-routes)
- [Video on the **Navigator** widget](https://www.youtube.com/watch?v=xpCdSqrX-14)
- [**Navigator** widget reference](https://api.flutter.dev/flutter/widgets/Navigator-class.html)
- [Passing data to named routes](https://docs.flutter.dev/cookbook/navigation/navigate-with-arguments)
- [Passing data between pages](https://docs.flutter.dev/cookbook/navigation/passing-data)
# Day 12: Introduction to Navigation

1. Review the basics of Flutter app development from Day 8-11.

2. Learn about navigation in a Flutter app. Navigation refers to the ability to move between screens or pages in an app.

3. Learn about the Navigator widget, which is used to manage the stack of screens in a Flutter app.

4. Create a simple app with two screens, one for the home screen and one for a detail screen. Use the Navigator widget to navigate between the two screens.

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

### Resources

1. Flutter's official documentation on Navigation: https://flutter.dev/docs/development/ui/navigation
2. Flutter Navigation Basics Tutorial: https://pusher.com/tutorials/flutter-navigation-basics
3. Flutter Navigation and Routing: https://www.raywenderlich.com/7560981-flutter-navigation-and-routing-getting-started
4. Flutter Navigation Drawer Tutorial: https://www.simplifiedcoding.net/flutter-navigation-drawer-tutorial/
5. Flutter Page Navigation Tutorial: https://www.simplifiedcoding.net/flutter-page-navigation-tutorial/

By the end of this day, you should have a basic understanding of how to implement navigation in a Flutter app using the Navigator widget.
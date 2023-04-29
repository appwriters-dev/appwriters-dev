# Introduction to Navigation

1. Review the basics of Flutter app development from Day 8-11.

2. Learn about navigation in a Flutter app. Navigation refers to the ability to move between screens or pages in an app.

3.  Learn about the Navigator widget, which is used to manage the stack of screens in a Flutter app.

4. Learn about navigation techniques in a Flutter app, such as named routes, passing data between screens.

5. Implement named routes in your app to make it easier to navigate between screens.

6. Experiment with passing data between screens using constructor arguments or the ModalRoute.


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
6. Flutter Navigation and Routing: https://flutter.dev/docs/development/ui/navigation
This is the official documentation on navigation and routing in Flutter. It covers everything from simple navigation to advanced routing techniques.
1. Flutter Navigator 2.0: https://medium.com/flutter/learning-flutters-new-navigation-and-routing-system-7c9068155ade
This article from the Flutter team introduces Navigator 2.0, the new navigation and routing system in Flutter. It provides an in-depth look at the features and benefits of this new system.

1. Flutter Advanced Navigation: https://www.youtube.com/watch?v=VHlcR_cEz1A
This video tutorial from the Flutter team covers advanced navigation techniques, including named routes, nested navigation, and passing data between screens.

1. Flutter Navigation Example: https://www.developerlibs.com/2019/05/flutter-navigation-example.html
This tutorial provides an example of implementing navigation in Flutter, including creating a bottom navigation bar and using named routes.

1. Flutter Deep Dive: Navigation: https://www.youtube.com/watch?v=ZzCsG8xsZCU
This video tutorial provides a deep dive into navigation in Flutter, covering advanced topics such as tabbed navigation, drawer navigation, and deep linking.

By the end of this day, you should have a basic understanding of how to implement navigation in a Flutter application to setup an application with Multiple Screens.
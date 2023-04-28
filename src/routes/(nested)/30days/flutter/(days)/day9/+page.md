# Flutter Basics - Part 2

1. Review the basics of Flutter app development from Day 8.

2. Add an image to your app. You can use the Image widget to display an image from a local asset or network URL.

3. Learn about the different layout widgets in Flutter, such as Column and Row. These widgets are used to arrange other widgets in a specific order and direction.

4. Create a simple app with text and an image. For example:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('My App'),
        ),
        body: Column(
          children: <Widget>[
            Image.asset('assets/images/my_image.jpg'),
            Text('Hello, Flutter!')
          ],
        ),
      ),
    );
  }
}
```

This creates a simple app with an app bar, a column with an image and text, and a default scaffold.

5. Run the app on an emulator or physical device to see the changes.

### Resources

- Official Flutter documentation: [Flutter basics](https://flutter.dev/docs/get-started/flutter-basics)
- Flutter Crash Course by Academind on YouTube: [Flutter Crash Course for Beginners 2021](https://www.youtube.com/watch?v=x0uinJvhNxI)
- Flutter tutorial for beginners by Flutter Crush on YouTube: [Flutter Tutorial for Beginners](https://www.youtube.com/watch?v=UaB6ScH2xUQ)
- Flutter tutorial series by Reso Coder on YouTube: [Flutter Tutorial for Beginners](https://www.youtube.com/watch?v=GLSG_Wh_YWc&list=PLBxWkM8PLHcK0bgeOqs2sTnmnZfDxgUcD)

By the end of this day, you should have a basic understanding of how to add images to your app and how to use layout widgets to arrange other widgets in a specific order and direction.
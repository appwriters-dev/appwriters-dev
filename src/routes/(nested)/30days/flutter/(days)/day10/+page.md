# User Interface Design

1. Review the basics of Flutter app development from Day 8-9.

2. Learn about widgets and how to use them to create user interfaces. Widgets are the building blocks of a Flutter app, and there are many different types of widgets that can be used to create custom user interfaces.

3. Experiment with different widgets, such as the Container, Row, and Column widgets, to create layouts and designs. Containers are used to wrap other widgets and provide a way to add padding, margins, and other styling. Rows and columns are used to arrange other widgets in a horizontal or vertical direction.

4. Create a simple app with a custom layout using the widgets you've learned about. For example:

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
        body: Container(
          padding: EdgeInsets.all(16.0),
          child: Column(
            children: <Widget>[
              Image.asset('assets/images/my_image.jpg'),
              SizedBox(height: 16.0),
              Text(
                'Welcome to my app!',
                style: TextStyle(fontSize: 24.0),
              ),
              SizedBox(height: 16.0),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  RaisedButton(
                    child: Text('Button 1'),
                    onPressed: () {},
                  ),
                  RaisedButton(
                    child: Text('Button 2'),
                    onPressed: () {},
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

This creates a simple app with an app bar, a container with an image, text, and two buttons in a row.

1. ListView Widget:

```dart
ListView(
  children: <Widget>[
    ListTile(
      leading: Icon(Icons.map),
      title: Text('Map'),
    ),
    ListTile(
      leading: Icon(Icons.photo_album),
      title: Text('Album'),
    ),
    ListTile(
      leading: Icon(Icons.phone),
      title: Text('Phone'),
    ),
  ],
)
```

2. GridView Widget:

```dart
GridView.count(
  crossAxisCount: 2,
  children: List.generate(4, (index) {
    return Center(
      child: Text(
        'Item $index',
        style: Theme.of(context).textTheme.headline6,
      ),
    );
  }),
)
```

3. Custom User Interface:

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('My App'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Image.network('https://picsum.photos/250?image=9'),
            SizedBox(height: 20),
            Text(
              'Welcome to my app!',
              style: TextStyle(fontSize: 24),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {},
              child: Text('Get Started'),
            ),
          ],
        ),
      ),
    );
  }
}
```

3. Custom User Interface:

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('My App'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Image.network('https://picsum.photos/250?image=9'),
            SizedBox(height: 20),
            Text(
              'Welcome to my app!',
              style: TextStyle(fontSize: 24),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {},
              child: Text('Get Started'),
            ),
          ],
        ),
      ),
    );
  }
}
```

5. Run the app on an emulator or physical device to see the changes.

### Resources

- Flutter documentation on widgets: https://flutter.dev/docs/development/ui/widgets
- Flutter cookbook on building layouts: https://flutter.dev/docs/cookbook/design
- Flutter widget catalog: https://flutter.dev/docs/development/ui/widgets/catalog
- Flutter widget of the week video series: https://www.youtube.com/playlist?list=PLOU2XLYxmsIIUiK9sHx3s4MDbFDNA6gpg
- Flutter UI challenges GitHub repository: https://github.com/lohanidamodar/flutter_ui_challenges
- Fluttery YouTube channel: https://www.youtube.com/channel/UCtWyVkPpb8An90SNDTNF0Pg
- Figma (UI design tool) community resources for Flutter: https://www.figma.com/community/search?model_type=collection&query=flutter
- Material Design guidelines for building Android apps: https://material.io/design/guidelines-overview/
- Cupertino (iOS) human interface guidelines: https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/
- Flutter's official Twitter account for updates and inspiration: https://twitter.com/flutterdev
- Flutter's official subreddit for discussions and tips: https://www.reddit.com/r/FlutterDev/
1. Official Flutter documentation on Layouts: https://flutter.dev/docs/development/ui/layout
2. Flutter Widget Catalog: https://flutter.dev/docs/development/ui/widgets
3. Flutter Layout Cheat Sheet: https://medium.com/flutter-community/flutter-layout-cheat-sheet-5363348d037e
4. Flutter by Example - Layouts: https://flutterbyexample.com/layouts
5. Flutter Cookbook - Layouts: https://flutter.dev/docs/cookbook/layout
6. Flutter for Designers - Layouts: https://flutterfordesigners.com/
7. Figma to Flutter: https://www.figma.com/flutter/
8. Material Design Guidelines: https://material.io/design

By the end of this day, you should have a basic understanding of how to use widgets to create custom layouts and designs.
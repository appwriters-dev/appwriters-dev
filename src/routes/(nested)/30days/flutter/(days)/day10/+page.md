# User Interface Design - Part 1

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

By the end of this day, you should have a basic understanding of how to use widgets to create custom layouts and designs.
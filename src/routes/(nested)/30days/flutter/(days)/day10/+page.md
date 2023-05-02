# User Interface Design

In Flutter, UI design involves creating visual and interactive elements for your app using widgets. Widgets are pre-built components that can be arranged in a hierarchy to create complex layouts. Tools and libraries such as Material Design and Cupertino can help you design and build beautiful looking UIs.

> 
> **Project** - Product Details
> 
> Build a product details screen as shown in the following picture
>
> ![Product Details](https://github.com/lohanidamodar/flutter_ui_challenges/raw/master/screenshots/ecommerce_details3.png)
>
> **Tips**
> 
> - Use `Image.network` to display your image.
> 
> - Widgets `Text`, `ElevatedButton`, `IconButton`, `Container`, `Stack`, `Row` and `Column`
> 
> - Don’t forget to post screenshot after you are done to your social networks with hashtag #30DaysMasterFlutter
> 

By the end of this day, you should have a basic understanding of how to use widgets to create custom layouts and designs.

## Tips

- To understand Flutter's building blocks, which are widgets, it's important to review the basics of Dart, particularly its OOP (Object-Oriented Programming) concepts. Widgets are essentially classes, so having a good grasp of OOP in Dart is crucial. You can improve your understanding by practicing and building more projects.
- Experiment with different widgets, such as the **Text**, **Container**, **Row**, and **Column** widgets, to create layouts and designs.
- Containers are used to wrap other widgets and provide a way to add padding, margins, and other styling. Rows and columns are used to arrange other widgets in a horizontal or vertical direction.
- A simple app with a custom layout using basic widgets

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
              Image.network(FlutterLogo()),
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

> **More projects**
>
> - [Basic Layout](https://masterflutter.appwriters.dev/ch05-flutter-basics/ls03-basic-layout)
> - [Scrolling Layouts](https://masterflutter.appwriters.dev/ch05-flutter-basics/ls04-scrolling-layout)

### Resources

- [Flutter documentation on widgets](https://flutter.dev/docs/development/ui/widgets)
- [Flutter cookbook on building layouts](https://flutter.dev/docs/cookbook/design)
- [Flutter widget catalog](https://flutter.dev/docs/development/ui/widgets/catalog)
- [Flutter UI challenges GitHub repository](https://github.com/lohanidamodar/flutter_ui_challenges)

# User Interface Design - Part 1

In Flutter, UI design involves creating visual and interactive elements for your app using widgets. Widgets are pre-built components that can be arranged in a hierarchy to create complex layouts. Tools and libraries such as Material Design and Cupertino can help you design and build beautiful looking UIs.

> 
> **Project** - Product Details
> 
> Build a product details screen as shown in the following picture
>
> ![Product Details](https://github.com/lohanidamodar/flutter_ui_challenges/raw/master/screenshots/ecommerce_detail2.png)
>
> **Tips**
> 
> - Use `Image.network` to display your image.
> - Widgets `Container`, `Text`, `ElevatedButton`, `IconButton`, `Padding`, `Stack`, `Row` and `Column`
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
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My App',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('My App'),
        ),
        body: Container(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: <Widget>[
              Image.network('https://picsum.photos/400/200'),
              const SizedBox(height: 16.0),
              const Text(
                'Welcome to my app!',
                style: TextStyle(fontSize: 24.0),
              ),
              const SizedBox(height: 16.0),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  ElevatedButton(
                    onPressed: () {},
                    child: const Text('Button 1'),
                  ),
                  FilledButton(
                    onPressed: () {},
                    child: const Text('Button 2'),
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

- Practice building more UIs with Flutter. You can find inspiration from existing apps in the Play Store or App Store. You can also check out the [Flutter UI challenges GitHub repository](https://github.com/lohanidamodar/flutter_ui_challenges) for more ideas.

> [more projects](/courses/master-flutter/ch05-flutter-basics/ls03-basic-layout)

### Resources

- [Flutter documentation on widgets](https://docs.flutter.dev/ui)
- [Official UI Layout Tutorial](https://docs.flutter.dev/ui/layout/tutorial) - recommended to follow and build
- [Flutter widget catalog](https://docs.flutter.dev/ui/widgets)
- [Flutter UI challenges GitHub repository](https://github.com/lohanidamodar/flutter_ui_challenges)

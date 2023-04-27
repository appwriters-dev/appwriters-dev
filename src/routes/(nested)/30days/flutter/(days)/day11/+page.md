# Day 11: User Interface Design - Part 2

1. Review the basics of Flutter app development from Day 8-10.

2. Learn about more advanced widgets, such as the ListView and GridView widgets. These widgets are used to display lists and grids of items.

3. Experiment with different layouts and designs using these widgets. For example, you can create a list of items with images and text, or a grid of items with varying sizes.

4. Create a more advanced app with a custom user interface using the widgets you've learned about.

5. Run the app on an emulator or physical device to see the changes.

Sure, here are some code examples for Day 11:

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

### Resources


1. Official Flutter documentation on Layouts: https://flutter.dev/docs/development/ui/layout
2. Flutter Widget Catalog: https://flutter.dev/docs/development/ui/widgets
3. Flutter Layout Cheat Sheet: https://medium.com/flutter-community/flutter-layout-cheat-sheet-5363348d037e
4. Flutter by Example - Layouts: https://flutterbyexample.com/layouts
5. Flutter Cookbook - Layouts: https://flutter.dev/docs/cookbook/layout
6. Flutter for Designers - Layouts: https://flutterfordesigners.com/
7. Figma to Flutter: https://www.figma.com/flutter/
8. Material Design Guidelines: https://material.io/design

By the end of this day, you should have a better understanding of how to use advanced widgets to create custom user interfaces in your app.
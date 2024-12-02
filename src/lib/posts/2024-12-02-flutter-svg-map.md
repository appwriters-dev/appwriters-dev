---
title: Build interactive maps in Flutter with SVG
slug: flutter-interactive-svg-maps
date: 2024-12-02
excerpt: "Use SVG to build interactive maps in Flutter. This can be used for various purposes including games, educational apps, and more."
keywords: Dart,Flutter,Dart tutorial,Flutter tutorial,svg,maps,interactive maps
coverImage: /images/flutter-interactive-svg-maps.png
coverWidth: 16
coverHeight: 9
categories: [Dart, Flutter]
---

In this article we will learn how to build an interactive map using SVG in Flutter. We will learn the concept by building a interactive administrative map of Bagmati provience of Nepal. However, you can use this concept to convert any SVG into interactive map in Flutter.

## Project setup

1. Create new Flutter project

```bash
flutter create flutter_interactive_map
```

2. Add following dependencies. We will look at why we need each dependency later

```yaml
dependencies:
  flutter:
    sdk: flutter
  path_drawing: ^1.0.1
  xml: ^6.5.0
```

3. Create a new folder `assets` in the root of the project and add the SVG file of the map. You can use the following SVG file for the project. If your are using your own SVG make sure you have clean SVG with well defined paths. For this image, for each district path I've given a unique id.

![Bagmati provience](/images/bagmati_provience.svg)

4. Update the `pubspec.yaml` file to include the SVG file

```yaml
flutter:
  assets:
    - assets/
```

## Parsing SVG

We will use the `xml` package to parse the SVG file. The `xml` package is a lightweight library for parsing, traversing, querying, transforming and building XML documents. We will use this package to parse the SVG file and extract the paths.

1. Inside `lib/main.dart` let's create a new class `District` to store the district id and path.

```dart
class District {
  final String id;
  final String path;

  District({
    required this.id,
    required this.path,
  });
}
```

2. Let's create a function that will accept path of SVG file and return the list of parsed paths, here `District` objects.

```dart
Future<List<District>> loadSvgImage({required String svgImage}) async {
  // initialize empty list of maps
  List<District> maps = [];
  // load the SVG file from assets as string
  String generalString = await rootBundle.loadString(svgImage);

  // parse the SVG content as XML document using xml package
  XmlDocument document = XmlDocument.parse(generalString);

  // fina all the path elements in the SVG
  final paths = document.findAllElements('path');

  // iterate over each path element and extract the id and path
  // skip if id is not defined (make sure you have id for each path in the SVG you want to extract)
  for (var element in paths) {
    String partId = element.getAttribute('id') ?? '';
    if (partId.isEmpty) {
      continue;
    }
    String partPath = element.getAttribute('d').toString();

    maps.add(District(id: partId, path: partPath));
  }

  return maps;
}
```

## Setup custom paint and clipper

1. Setup a custom clipper that uses the path we extracted from the SVG file, to clip the district into appropriate shape.

```dart
class DistrictPathClipper extends CustomClipper<Path> {
  DistrictPathClipper({
    required this.svgPath,
  });

  String svgPath;

  @override
  Path getClip(Size size) {
    // parse svg path to flutter path using path_drawing package
    var path = parseSvgPathData(svgPath);
    final Matrix4 matrix4 = Matrix4.identity();

    // scaling up a bit
    matrix4.scale(1.1, 1.1);

    return path.transform(matrix4.storage);
  }

  @override
  bool shouldReclip(CustomClipper oldClipper) {
    return false;
  }
}
```

2. Setup a custom painter that will draw the border of the district.

```dart
class DistrictBorderPainter extends CustomPainter {
  final Path path;
  late final Paint borderPaint;
  final Matrix4 matrix4 = Matrix4.identity();
  DistrictBorderPainter({super.repaint, required this.path}) {
    // scale up to match the clip path scaling
    matrix4.scale(1.1, 1.1);
    // paint only stroke
    borderPaint = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1
      ..color = Colors.black;
  }
  @override
  void paint(Canvas canvas, Size size) {
    final path = this.path.transform(matrix4.storage);
    // draw the path using canvas
    canvas.drawPath(path, borderPaint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return false;
  }
}
```

## Setup the screen

Let's setup our main widget to display the map. We will use combination of `InteractiveViewer` and `Stack` widgets.

```dart
// map screen widget that displays the map
class NepalMapScreen extends StatefulWidget {
  const NepalMapScreen({super.key});

  @override
  State<NepalMapScreen> createState() => _NepalMapScreenState();
}

class _NepalMapScreenState extends State<NepalMapScreen> {
  District? currentDistrict;

  List<District> districts = [];

  @override
  void initState() {
    super.initState();
    loadDistricts();
  }

  loadDistricts() async {
    // make sure you have the SVG file in assets folder
    districts = await loadSvgImage(svgImage: 'assets/bagmati_provience.svg');
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
        title: const Text('Bagmati provience'),
      ),
      body: Column(
        children: [
          if (currentDistrict != null) ...[Text(currentDistrict!.id)],
          Expanded(
            child: InteractiveViewer(
              maxScale: 5,
              boundaryMargin: const EdgeInsets.all(16.0),
              minScale: 1.0,
              constrained: false,
              child: SizedBox(
                width: size.width < 1200 ? 1200 : size.width,
                height: size.height < 800 ? 800 : size.height,
                // using stack will make sure each clipped district is in correct position
                child: Stack(
                  children: [
                    for (var district in districts) ...[
                      // draw district borders
                      _getBorder(district: district),
                      // draw intractable district
                      // that responds to player tap
                      _getClippedImage(
                        // custom clipper we defined that uses the path we extracted
                        clipper: DistrictPathClipper(
                          svgPath: district.path,
                        ),
                        color: currentDistrict?.id == district.id
                            ? Colors.green
                            : Color(int.parse('FFD7D3D2', radix: 16)),
                        district: district,
                        onDistrictSelected: onDistrictSelected,
                      ),
                    ],
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  // change the currentDistrict whenever user taps on a district
  void onDistrictSelected(District district) {
    currentDistrict = district;
    setState(() {});
  }

  // draw the border of the district
  Widget _getBorder({required District district}) {
    // parse the SVG path to flutter understandable path
    // using path_drawing package
    final path = parseSvgPathData(district.path);

    // draw the path using CustomPaint
    return CustomPaint(
      painter: DistrictBorderPainter(path: path),
    );
  }

  // draw the district that responds to user tap
  // uses custom path clipper to clip the district into appropriate shape
  Widget _getClippedImage({
    required DistrictPathClipper clipper,
    required Color color,
    required District district,
    final Function(District district)? onDistrictSelected,
  }) {
    return ClipPath(
      clipper: clipper,
      child: GestureDetector(
        onTap: () => onDistrictSelected?.call(district),
        child: Container(
          color: color,
        ),
      ),
    );
  }
}
```

## Putting it together and running

Finally, update the root widget to display the `NepalMapScreen` widget.

```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:path_drawing/path_drawing.dart';
import 'package:xml/xml.dart';

void main() {
  runApp(const MainApp());
}
// root app widget
class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: NepalMapScreen(),
      ),
    );
  }
}
```

## Conclusion

If you run your project now, you should see an interactive map of Bagmati provience of Nepal. You can zoom in and out using mouse scroll or pinch gesture on mobile. You can also tap on each district to highlight it and view the district name.

You can access the complete demo project in [this GitHub repository](https://github.com/appwriters-dev/flutter_interactive_map).
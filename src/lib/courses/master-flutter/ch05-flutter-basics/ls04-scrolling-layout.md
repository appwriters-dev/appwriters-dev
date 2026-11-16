---
id: ls04-scrolling-layout
title: Scrolling Layout
description: Display more data than fits on one screen using SingleChildScrollView, ListView and other scrolling widgets.
---

Most applications display a large amount of data that does not fit on a single screen. This is especially true for mobile applications with limited screen real estate. What are we going to do about it? Use a scrollable area. We will practice displaying a large amount of data using a scrolling layout in this lesson. `SingleChildScrollView` and `ListView` are two important widgets to remember for this lesson.

## Projects

### 1. List of Names

Display a list of 100 names in a scrolling area. The list should be displayed in a `Column` wrapped by `SingleChildScrollView` widget. Each item in the list should be a `Text` widget with a name. The names can be generated using the [faker](https://pub.dev/packages/faker) package.

> Note: Make sure to explore different properties of `SingleChildScrollView` widget. For example, you can set the `scrollDirection` property to `Axis.horizontal` to display the list horizontally.

### 2. Horizontal List

Update the above project to display the list horizontally using `Row` instead of `Column`.

### 3. List of Images

Display a list of 10 images in a scrolling area. The list should be displayed in a `ListView` widget (try `ListView.builder`, which builds items lazily as they scroll into view). Each item in the list should be an `Image` widget with a random image. The images can be generated using the [faker](https://pub.dev/packages/faker) package.

### 4. Products List

Imagine you are building a list of products for an e-commerce application. Each product has a name, price, and an image. Display a list of 10 products in a scrolling area. The list should be displayed in a `ListView` widget. Each item in the list should be a `Container` widget with a product name, price, and an image.

> Note: For images use [Pixabay](https://pixabay.com/) or [Pexels](https://www.pexels.com/).

## Resources

- [SingleChildScrollView](https://api.flutter.dev/flutter/widgets/SingleChildScrollView-class.html)
- [ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html)
- [Faker](https://pub.dev/packages/faker)
- [GridView](https://api.flutter.dev/flutter/widgets/GridView-class.html)
- [PageView](https://api.flutter.dev/flutter/widgets/PageView-class.html)
- [CustomScrollView](https://api.flutter.dev/flutter/widgets/CustomScrollView-class.html)
- [Scrolling **(Official)**](https://docs.flutter.dev/ui/layout/scrolling)

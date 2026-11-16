---
id: ls02-more-plugins
title: More Plugins
description: Pick photos from the gallery and take pictures with the device camera using the image_picker and camera plugins.
---

## Projects

### 1. Photo Picker

Write a Flutter application that allows the user to select a photo from their device's photo gallery. Display the selected photo in the app.

> **Hint:** Use the [image_picker](https://pub.dev/packages/image_picker) plugin. It returns an `XFile`; use `Image.file(File(xfile.path))` to display the selected photo on mobile. Remember to add the permission descriptions to `Info.plist` on iOS, as explained in the package's README.

### 2. Take a Picture

Update the above program so that the user can choose to either pick an image from the gallery or take a picture using the device's camera. Display the selected photo in the app.

### 3. Take a Picture and Save

Write a Flutter program that uses the device's selfie (front) camera to take a picture and save it, then display the saved photo in the app on another page.

> **Hint:** You can follow the [Using the device camera](https://docs.flutter.dev/cookbook/plugins/picture-using-camera) tutorial, but remember to make a beautiful design for your app.

## Resources

- [Image Picker](https://pub.dev/packages/image_picker)
- [Image.file](https://api.flutter.dev/flutter/widgets/Image/Image.file.html)
- [Camera](https://pub.dev/packages/camera)
- [Using the device camera](https://docs.flutter.dev/cookbook/plugins/picture-using-camera)

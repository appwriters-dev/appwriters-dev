---
title: Using the url_launcher Plugin in Flutter - A Comprehensive Guide
slug: using-the-url-launcher-plugin-in-flutter-a-comprehensive-guide
date: 2023-06-07
excerpt: Explore our comprehensive guide on using the url_launcher plugin in Flutter. Learn how to install it, launch various types of URLs including web, phone call, SMS, and email, plus its pros, cons, and alternatives. Perfect for Flutter developers!
keywords: Flutter, url_launcher, Flutter development, plugin, cross-platform, mobile application, launch URL, web URL, phone call, SMS, email, pros and cons, alternatives, Flutter tutorial, Flutter guide.
coverImage: /images/flpackage_url_launcher_cover.svg
coverWidth: 16
coverHeight: 9
categories: [Flutter]
---

The `url_launcher` plugin is an essential tool in Flutter development, enabling applications to open URLs in the mobile platform's web browser, or create a phone call, send an SMS, or an email. It supports all Flutter platforms.

**Table of Contents**

- [Installation](#installation)
- [Using the url\_launcher Plugin](#using-the-url_launcher-plugin)
  - [Launching a Web URL](#launching-a-web-url)
  - [Making a Phone Call](#making-a-phone-call)
  - [Sending an SMS](#sending-an-sms)
  - [Sending an Email](#sending-an-email)
- [Conclusion](#conclusion)

## Installation

To add the `url_launcher` plugin to your Flutter app, you can use the following command from your terminal.

```bash
flutter pub add url_launcher
```

Or you can manually add it in your `pubspec.yaml` file. Check for the latest version [here](https://pub.dev/packages/url_launcher).

```yaml
dependencies:
  flutter:
    sdk: flutter
  url_launcher: ^latest_version
```

After updating your `pubspec.yaml` file, install the package by running `flutter pub get` in your terminal.

## Using the url_launcher Plugin

Firstly, import the `url_launcher` package into your Dart file.

```dart
import 'package:url_launcher/url_launcher.dart';
```

The main method to launch URLs is `launch()`. Here is a simple implementation:

```dart
_launchURL() async {
  const uri = Uri.parse('https://flutter.dev');
  if (await canLaunch(uri)) {
    await launch(uri);
  } else {
    throw 'Could not launch $uri';
  }
}
```

`canLaunch()` is a handy method that checks if the given URL can be handled by any app installed on the device.

You can use the `url_launcher` plugin to launch various types of URLs. Here are examples for launching a web URL, making a phone call, sending an SMS, and sending an email:

### Launching a Web URL

```dart
_launchWebURL() async {
  const uri = Uri.parse('https://flutter.dev');
  if (await canLaunch(uri)) {
    await launch(uri);
  } else {
    throw 'Could not launch $uri';
  }
}
```

### Making a Phone Call

```dart
_launchPhone() async {
  const uri = Uri(scheme: 'tel', path: '123456789');
  if (await canLaunch(uri)) {
    await launch(uri);
  } else {
    throw 'Could not launch $uri';
  }
}
```

### Sending an SMS

```dart
_launchSMS() async {
  const uri = Uri(scheme: 'sms', path: '123456789');
  if (await canLaunch(uri)) {
    await launch(uri);
  } else {
    throw 'Could not launch $uri';
  }
}
```

### Sending an Email

```dart
_launchEmail() async {
  final Uri uri = Uri(
    scheme: 'mailto',
    path: 'example@example.com',
    queryParameters: {
      'subject': 'Example Subject',
      'body': 'Hello, this is an example email',
    },
  );
  if (await canLaunch(uri)) {
    await launch(uri);
  } else {
    throw 'Could not launch $uri';
  }
}
```

## Conclusion

The `url_launcher` plugin is a powerful and essential plugin in Flutter development. With this plugin, developers can easily open web URLs, make phone calls, send SMS or emails right from their app. Despite some limitations, its ease of use and versatility make it an excellent choice for most Flutter developers.

We hope this guide has been helpful in your journey with Flutter development. Happy Fluttering.
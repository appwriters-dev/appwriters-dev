---
title: Flutter and Appwrite integration
id: flutter-and-appwrite-integration
subtitle: In this lesson, we will learn how to integrate Appwrite with Flutter.
videoId: "3-ejU2yU-rQ"
---

In this lesson, we will learn to integrate Appwrite with Flutter.

## Creating a Flutter platform in Appwrite

To create a Flutter platform in Appwrite

- open the Appwrite dashboard and open your project.
- On the project overview page, in the **Add a platform** section click on the **Flutter** button.
- On the widzard that appears, select the appropriate platform, we are selecting `macos`.
- Provide a easy to understand name for you platform and the Bundle Identifier of your Flutter app
- Click on the **Next** button.
- Wizard will show the information on how to add the Appwrite SDK to your Flutter app.
- We will do that in the next section, so for now we can skip it.
- Click on the **Skip optional steps** button.

You can follow the similar steps to add other platforms to your Appwrite project.

> **Note**: You can find your bundle identifier in the `macos/Runner.xcodeproj/project.pbxproj` file for macOS, `ios/Runner.xcodeproj/project.pbxproj` file for iOS, and package name in the `android/app/build.gradle` file for Android.

## Adding Appwrite SDK to Flutter app

To add Appwrite SDK to our Flutter app, we need to add the following dependency to our `pubspec.yaml` file:

```yaml
dependencies:
  appwrite: ^11.0.1
```

We can also do the same from the terminal. 

```bash
flutter pub add appwrite
```

Finally, run the following command to install the dependency:

```bash
flutter pub get
```

## Initializing Appwrite SDK

To initialize Appwrite SDK

- Create a new file called `appwrite.dart` in the `lib/appwrite` folder.

```dart
import 'package:appwrite/appwrite.dart';

class Appwrite {
  Client client = Client();

  Appwrite() {
    client.setEndpoint('https://cloud.appwrite.io/v1').setProject(
        'flappwrite-tracker');
  }
}
```

In the above code
- We are creating a new `Appwrite` class
- Initializing the Appwrite SDK in the constructor.
- We set the endpoint and project ID in the `client` object.
- You can find the endpoint and project ID in the Appwrite dashboard.


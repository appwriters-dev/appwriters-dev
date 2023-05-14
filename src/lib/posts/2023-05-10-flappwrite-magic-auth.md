---
title: Flutter Password Less Authentication with Appwrite Magic URL
slug: flutter-password-less-authentication-with-appwrite-magic-url
date: 2023-05-10
excerpt: Let us explore how to set up password less, Magic URL based authentication in your Flutter app using Appwrite. We'll also explore how to setup Android and iOS apps to handle the redirect URL so that you will not have to host a web app just for this purpose.
coverImage:
coverWidth:
coverHeight:
categories: [Flutter, Appwrite]
---

Appwrite, is a backend service that provides developers with easy-to-use APIs to store, manage, and authenticate user data in their applications. In this blog post, we'll explore how to set up Magic URL based authentication in your Flutter app using Appwrite.

You can start by creating a new Flutter project or use an existing one.

## Android Configuration

Open, `AndroidManifest.xml` for the project and add the following configuration inside the `<activity android:name=".MainActivity"`. Replace `[PROJECT_ID]` with your own project ID. This one is different than the config you setup for OAuth2 authentication.

```xml
<!-- add this metadata -->
<meta-data android:name="flutter_deeplinking_enabled" android:value="true" />

<intent-filter>
	<action android:name="android.intent.action.MAIN"/>
	<category android:name="android.intent.category.LAUNCHER"/>

	<!-- add these Filters -->
	 <action android:name="android.intent.action.VIEW" />
	<category android:name="android.intent.category.DEFAULT" />
	<category android:name="android.intent.category.BROWSABLE" />
	<data android:scheme="appwrite-callback-auth-[PROJECT_ID]" />
</intent-filter>
```

## iOS Configuration

Open, iOS project's `Info.plist` file and add the following keys. Replace `[PROJECT_ID]` with your own project ID.

```
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleTypeRole</key>
		<string>Editor</string>
		<key>CFBundleURLName</key>
		<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
		<key>CFBundleURLSchemes</key>
		<array>
			<string>appwrite-callback-auth-[PROJECT_ID]</string>
		</array>
	</dict>
</array>
<key>FlutterDeepLinkingEnabled</key>
<true/>
```

## Appwrite Project

If you have not already head over to [cloud.appwrite.io](https://cloud.appwrite.io) and sign up. Then create a new project. Or you can use your own self-hosted Appwrite setup as well. Next we need to Add platforms.

<video width="100%" controls>
  <source src="https://cloud.appwrite.io/v1/storage/buckets/blog-assets/files/magic-auth-add-platform/view?project=appwriters&mode=admin" type="video/mp4">
  Your browser does not support the video tag.
</video>

Following the above steps, add web platform to register a domain, you don't need a web application, you can use any of your domain. It's important to use your own domain in production to prevent others from hijacking it and using it for their own purpose.

Make sure, magic-url authentication is enabled, it should be enabled by default.

## Integrating Appwrite

To add appwrite SDK, you can run the following command in the root of your Flutter project directory from terminal.

```bash
flutter pub add appwrite: ^8.3.0
```

If you are using self-hosted Appwrite, use appropriate Appwrite SDK version for your Appwrite server version you are using.

This will add Appwrite's Flutter SDK to your project. You can also do this by manually adding it to `pubspec.yaml` file under dependencies

```yaml
dependencies:
	appwrite: ^8.3.0
```

Don't forget to initialize the client, you can do it in your `main.dart` file or separate file. I prefer to create a separate file for Appwrite client initialization.

```dart
final client = Client();

void main() async {
	WidgetsFlutterBinding.ensureInitialized();
  // If you are on self hosted Appwrite, use your own endpoint
	client
		.setEndpoint('https://cloud.appwrite.io/v1')
		.setProject('auth-labs'); // use your own project ID
}
```

## Implementing Magic URL Authentication in Flutter

Create a simple login form widget with email field and a login button.

```dart
class LoginScreen extends StatelessWidget {
  final _emailController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _emailController,
              decoration: InputDecoration(
                labelText: 'Email',
              ),
            ),
            SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {},
              child: Text('Login'),
            ),
          ],
        ),
      ),
    );
  }
}
```

Update the Login button's onPressed code as the following to create a Magic URL session using Appwrite.

```dart
onPressed: () async {
  final account = Account(client);
  try {
    await account.createMagicURLSession(
      email: _emailController.text,
      url: 'appwrite-auth-callback-auth-labs://appwriters.dev/magic_url_session', // replace `appwriters.dev` with your own domain
    );
  } on AppwriteException catch(e) {
    print(e.message);
    // display error to the user
  }
}
```

This function will send the email to the user's provided email. If the user account doesn't exist, it will be created automatically. The URL is used as the redirect URL by also adding user ID and secret as url params, when the email is sent.

The Android and iOS configurations we added above, will make sure that when user clicks the email, they are redirected back to our application. Now we need to setup a route that handles `/magic_url_session` that also receives user ID and secret.

Open `main.dart` and update the `GoRouter` routes to include a route for the `MagicUrlSessionPage`:

```dart
final router = GoRouter(
  // ...
  routes: [
    // ...
    GoRoute(
      name: '/magic_url_session',
      pageBuilder: (context, state) {
        final userId = state.queryParams['userId']!;
        final secret = state.queryParams['secret']!;
        return MagicUrlSessionPage(userId: userId, secret: secret);
      },
    ),
  ],
);
```

This code sets up a route for `/magic_url_session` that extracts the `userId` and `secret` parameters from the URL query params and passes them to the `MagicUrlSessionPage` widget.

> **Note**: If you don't want to use GoRouter, you can still use onGenerateRoute in MaterialApp to handle the route. However I recommend using GoRouter as it's much easier to use and has a lot of features.

We now need to implement the `MagicUrlSessionPage` widget to handle the `updateMagicURLSession` function. as the following:

```dart
class MagicUrlSessionPage extends StatelessWidget {
  final String userId;
  final String secret;

  const MagicUrlSessionPage({Key? key, required this.userId, required this.secret}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Logging in...'),
      ),
      body: FutureBuilder(
        future: _authenticateUser(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(
              child: CircularProgressIndicator(),
            );
          } else if (snapshot.hasError) {
            return Center(
              child: Text('Authentication error: ${snapshot.error}'),
            );
          } else {
            return Center(
              child: Text('Authenticated successfully!'),
            );
          }
        },
      ),
    );
  }

  Future<User?> _authenticateUser() async {
    try {
      final account = Account(client);
      await account.updateMagicURLSession(userId: userId, secret: secret);
      // Retrieve user data from Appwrite and store it in the app's state
      return await account.get();
    } on AppwriteException catch(e) {
      throw Exception('Authentication error: ${e.message}');
    }
  }
}
```

That's it, this completes the setup required for magic URL authentication. You can test it now.

> Tip: Find the complete FlAppwrite auth playground at my [GitHub repository](https://github.com/lohanidamodar/appwrite_auth_playground.git)

## Conclusion

In this article, we've explored how to implement Magic URL Authentication in Flutter using Appwrite. We've shown how to configure Appwrite to use Magic URL Authentication, how to send a Magic URL session email to the user, and how to handle the user's click on the Magic URL. We've also shown how to create a page to handle the `updateMagicURLSession` function and authenticate the user using Appwrite. With this knowledge, you can now add Magic URL Authentication to your Flutter applications and provide a seamless login experience for your users. If you have any questions or feedback, please feel free reach out.

Happy coding!

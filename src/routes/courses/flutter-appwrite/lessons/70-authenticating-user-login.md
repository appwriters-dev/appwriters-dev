---
title: Authenticate user - login
id: authenticate-user
subtitle: Create session for user using their credentials.
videoId: "SjvL-hkn-UY"
---

Code: https://github.com/lohanidamodar/flappwrite_tracker/tree/feat-login

In this lesson, we will learn to authenticate our user using their credentials.

## Login screen

Create a screen where user can provide their details to create an account.


Copy all the files in the linked folder to your project.

Code: https://github.com/lohanidamodar/flappwrite_tracker/tree/feat-create-account/lib/features/login_screen

```
lib/features/signup_screen/
├── login_screen.dart
└── src
    ├── login_form.dart
    ├── login_screen.dart
    └── types.dart
```

## Update home page to add navigation to login screen

In `lib/home_page/home_page.dart` file

- add a button to navigate to login screen
- [Complete code in github](https://github.com/lohanidamodar/flappwrite_tracker/blob/feat-login/lib/home_page/home_page.dart)

```dart
...
ElevatedButton(
  onPressed: () {
    // navigate to login screen
    context.goNamed(LoginScreen.name);
  },
  child: const Text('Login'),
),
...
```

## Add login screen to router

In `lib/router/router.dart` file

- add a route for login up screen
- [Complete code in github](https://github.com/lohanidamodar/flappwrite_tracker/blob/feat-login/lib/router/router.dart)

```dart
...
GoRoute(
  path: '/login',
  name: LoginScreen.name,
  builder: (_, __) {
    return LoginScreen(onLogin: (email, password) async {
        debugPrint('$email - $password');
        // get the instance of Appwrite class that we defined
        // in the dependencies using GetIt
        final appwrite = GetIt.instance.get<Appwrite>();
        // create a session for the user using their email and password
        final session = await appwrite.createEmailSession(email, password);
        debugPrint(jsonEncode(session?.toMap() ?? '{}'));
    });
  },
),
...
```


## Create session for user

In `lib/appwrite/appwrite.dart` file

- add a new method createEmailSession to create a session for the user using their email and password
- [code in github](https://github.com/lohanidamodar/flappwrite_tracker/blob/feat-login/lib/appwrite/appwrite.dart)

```dart
class Appwrite {
  final Client client = Client();
  late final Account account;
  // rest of the...
   Future<Session?> createEmailSession(String email, String password) async {
    try {
      final session =
          await account.createEmailSession(email: email, password: password);
      return session;
    } on AppwriteException catch (e) {
      debugPrint(e.message);
      return null;
    }
  }
}
```


- You can now run the app login using the credentials you used to create user in previous lesson.
- Once logged in you can see the session details in the debug console
- Also, visit the Appwrite dashboard click on see the user in the **Auth** section of the corresponding project. You should be able to see the session in the sessions tab.

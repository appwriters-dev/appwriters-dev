---
title: Creating account for your user
id: creating-account-for-your-user
subtitle: Create account for your user in Appwrite
videoId: fuA9scGDaEs
---

Code: https://github.com/lohanidamodar/flappwrite_tracker/tree/feat-create-account

In this lesson, we will learn to create an account for our user in Appwrite.

## Sign up screen

Create a screen where user can provide their details to create an account.


Copy all the files in the linked folder to your project.

Code: https://github.com/lohanidamodar/flappwrite_tracker/tree/feat-create-account/lib/features/signup_screen

```
lib/features/signup_screen/
├── signup_screen.dart
└── src
    ├── signup_form.dart
    ├── signup_screen.dart
    └── types.dart
```

## Creating account

In `lib/appwrite/appwrite.dart` file

- instantiate `Account` service from Appwrite SDK
- call `create` method on the service to create an account for the user
- [code in github](https://github.com/lohanidamodar/flappwrite_tracker/blob/feat-create-account/lib/appwrite/appwrite.dart)

```dart
class Appwrite {
  final Client client = Client();
  late final Account account;
  
  Appwrite() {
    client.setEndpoint('https://cloud.appwrite.io/v1').setProject(
        'flappwrite-tracker');

    // Instantiate Appwrite Account service
    account = Account(client);
  }

  Future<User?> createAccount(String name, String email, String password) async {
    try {
      // create account for the user with the provided
      // name, email and password
      final user = await account.create(
        email: email,
        password: password,
        name: email,
      );
      return user;
    } on AppwriteException catch (e) {
      // catch the AppwriteException thrown by the SDK
      debugPrint(e.message);
      return null;
    }
  }
}
```


## Update home page to add navigation to sign up screen

In `lib/home_page/home_page.dart` file

- add a button to navigate to sign up screen
- [Complete code in github](https://github.com/lohanidamodar/flappwrite_tracker/blob/feat-create-account/lib/home_page/home_page.dart)

```dart
...
ElevatedButton(
  onPressed: () {
    // navigate to sign up screen
    context.goNamed(SignupScreen.name);
  },
  child: const Text('Create account'),
),
...
```

## Add signup screen to router

In `lib/router/router.dart` file

- add a route for sign up screen
- [Complete code in github](https://github.com/lohanidamodar/flappwrite_tracker/blob/feat-create-account/lib/router/router.dart)

```dart
...
GoRoute(
  path: '/signup',
  name: SignupScreen.name,
  builder: (_, __) {
    return SignupScreen(onSignup: (name, email, password) async {
      debugPrint('$name - $email - $password');
      // get the instance of Appwrite class that we defined
      // in the dependencies using GetIt
      final appwrite = GetIt.instance.get<Appwrite>();

      // call the createAccount method on the Appwrite class
      final user = await appwrite.createAccount(name, email, password);
      debugPrint(jsonEncode(user?.toMap() ?? '{}'));
    });
})
...
```

- You can now run the app and create an account for your user.
- Once created you can visit the Appwrite dashboard and see the user in the **Auth** section of the corresponding project.


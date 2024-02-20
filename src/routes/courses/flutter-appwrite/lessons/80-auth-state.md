---
title: Authentication state manager
id: auth-state
subtitle: "Let's create a state manager for user authentication state."
videoId: "NhGgCVC5XjY"
---

Now that we have functions for authenticating users with Appwrite, we should create a state manager for authentication that will help us to manage the user's authentication state and build the UI accordingly.

Create a new folder `lib/auth_notifier` to held all the files related to authentication state management. It will have the following files

Final source code for this lesson: [https://github.com/lohanidamodar/flappwrite_tracker/tree/authentication-state](https://github.com/lohanidamodar/flappwrite_tracker/tree/authentication-state)

```
lib/auth_notifier/
├── auth_notifier.dart
└── src
    ├── auth_notifier.dart
    ├── auth_state.dart
    └── user.dart
```

## User model

We need to create a user model that holds the details of the user.

```dart
class User {
  /// Unique identifier for the user
  final String id;
  /// Name of the user
  final String name;
  /// Email of the user
  final String email;

  User({
    required this.id,
    required this.name,
    required this.email,
  });

  /// Function to create user object from a JSON data
  factory User.fromMap(Map<String, dynamic> map) {
    return User(
      id: map['\$id'].toString(),
      name: map['name'].toString(),
      email: map['email'].toString(),
    );
  }

  /// Convert user data to JSON
  Map<String, dynamic> toMap() {
    return {
      "\$id": id,
      "name": name,
      "email": email,
    };
  }
}
```

## Auth State

Next we will create a state class that helds the state properties.

```dart
import 'user.dart';

class AuthState {
  /// User details
  final User? user;
  /// Authentication status
  final AuthStatus status;
  /// Error if any
  final String? error;

  AuthState({
    this.user,
    this.error,
    required this.status,
  });

  /// Copy with function to update state
  AuthState copyWith({
    User? user,
    AuthStatus? status,
    String? error,
  }) {
    return AuthState(
      user: user ?? this.user,
      status: status ?? this.status,
      error: error ?? this.error,
    );
  }
}

/// Different status of authentication
enum AuthStatus { loading, authenticating, authenticated, unauthenticated }
```

## Auth notifier

Finally we create auth notifier and provider to manage and provide auth state to our application using riverpod.

```dart
import 'package:appwrite/appwrite.dart';
import 'package:flappwrite_tracker/appwrite/appwrite.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:get_it/get_it.dart';

import 'auth_state.dart';
import 'user.dart';

/// Define auth provider using the AuthNotifier and AuthState we created
final authProvider =
    StateNotifierProvider<AuthNotifier, AuthState>((ref) => AuthNotifier());

/// Auth notifier class will held the auth state
/// and also provide methods for authentication that in
/// turn will use the Appwrite authentication methods
class AuthNotifier extends StateNotifier<AuthState> {
  AuthNotifier() : super(AuthState(status: AuthStatus.loading)) {
    authenticate();
  }

  /// Get appwrite as auth provider from dependency injection
  final authProvider = GetIt.I.get<Appwrite>();

  /// Function to authenticate user, that will try to get user account
  /// and update the state based on the result
  authenticate() async {
    try {
      final user = await authProvider.getAccount();
      state = state.copyWith(
          user: User.fromMap( user.toMap()), error: null, status: AuthStatus.authenticated);
    } on AppwriteException catch (e) {
      state = state.copyWith(
          error: e.message, user: null, status: AuthStatus.unauthenticated);
    } catch (e) {
      state = state.copyWith(
          error: e.toString(), user: null, status: AuthStatus.unauthenticated);
    }
  }

  /// Function to log user out and update the state accordingly
  logout() async {
    try {
      await authProvider.logout();
      state = state.copyWith(
          error: null, user: null, status: AuthStatus.unauthenticated);
    } on AppwriteException catch (e) {
      state = state.copyWith(error: e.message);
    } catch (e) {
      state = state.copyWith(error: e.toString());
    }
  }

  /// Function to log user in and update the state accordingly
  login(String email, String password) async {
    try {
      await authProvider.createEmailSession(email, password);
      authenticate();
    } on AppwriteException catch (e) {
      state = state.copyWith(
          error: e.message, user: null, status: AuthStatus.unauthenticated);
    } catch (e) {
      state = state.copyWith(
          error: e.toString(), user: null, status: AuthStatus.unauthenticated);
    }
  }

  /// Method to create new user account
  signup(String name, String email, String password) async {
    try {
      state = state.copyWith(status: AuthStatus.loading);
      await authProvider.createAccount(name, email, password);
      login(email, password);
    } on AppwriteException catch (e) {
      state = state.copyWith(
          error: e.message, user: null, status: AuthStatus.unauthenticated);
    } catch (e) {
      state = state.copyWith(error: e.toString());
    }
  }
}

```

## Appwrite get account method

Let's add a method to get user account in `lib/appwrite/appwrite.dart`

```dart
class Appwrite {
  //...
  Future<User> getAccount() async {
    try {
      final user = await account.get();
      return user;
    } on AppwriteException catch (e) {
      debugPrint(e.message);
      /// Rethrow the errors so that auth notifier
      /// can handle error
      rethrow;
    }
  }
  //...
}
```

Also update the remaining method so that it rethrows the exception so that auth notifier can handle it.

## Dashboard page

Add `lib/dashboard/dashboard.dart` to define a dashboard page to show it to the authenticated users.

```dart
import 'package:flappwrite_tracker/auth_notifier/auth_notifier.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class Dashboard extends StatelessWidget {
  const Dashboard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
          child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const Text('Dashboard'),
          const SizedBox(height: 10.0),
          /// Consumer to watch the authentication provider and
          /// provide logout method
          Consumer(builder: (context, ref, widget) {
            final authNotifier = ref.watch(authProvider.notifier);
            return ElevatedButton(
                onPressed: () async {
                  await authNotifier.logout();
                },
                child: const Text('Logout'));
          }),
        ],
      )),
    );
  }
}
```

It's a simple widget that reads the autnentication provider and allows user to logout.

## Update router

Finally we update the router to add dashboard page as well as update the callbacks of signup and login screen to use notifier to login and signup instead of directly using Appwrite class.


```dart
///... imports

final routerProvider = Provider<GoRouter>((ref) {
  /// Watch authentication state
  final authState = ref.watch(authProvider);
  /// Get auth notifier
  final authNotifier = ref.watch(authProvider.notifier);
  return GoRouter(routes: [
    GoRoute(
      name: HomePage.name,
      path: '/',
      /// Based on whether the user is authenticated or not
      /// display home page or dashboard page
      builder: (_, __) => authState.status == AuthStatus.authenticated
          ? const Dashboard()
          : const HomePage(),
    ),
    GoRoute(
      path: '/signup',
      name: SignupScreen.name,
      builder: (_, __) {
        return SignupScreen(onSignup: (name, email, password) async {
          /// Call signup method from auth notifier
          /// instead of directly calling Appwrite
          await authNotifier.signup(name, email, password);
        });
      },
    ),
    GoRoute(
      path: '/login',
      name: LoginScreen.name,
      builder: (_, __) {
        return LoginScreen(onLogin: (email, password) async {
          /// Call login method from auth notifier
          /// instead of directly calling appwrite
          await authNotifier.login(email, password);
        });
      },
    ),
  ]);
});
```

It's now ready, you should be able to run the application then successfully sign up or login to get to the dashboard page.
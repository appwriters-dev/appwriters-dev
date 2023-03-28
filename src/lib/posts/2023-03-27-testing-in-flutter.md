---
title: Get Started with Testing in Flutter
slug: get-started-with-testing-in-flutter
date: 2023-03-25
excerpt: Testing is a crucial part of the software development process. Writing and running automated tests make sure our application remains robust with every change.
coverImage: /images/flutter_testing_01_cover.svg
coverWidth: 16
coverHeight: 9
categories: [Flutter]
---

<base target="_blank" />

Testing is a crucial part of the software development process. Writing and running automated tests make sure our application remains robust with every change.

Flutter provides robust tools for writing automated tests. In this article, we will cover all the steps necessary to setup and write unit and widget testing in Flutter.

## Setup Test Environment

We will create a simple login screen to setup our tests. If you prefer, you can use your existing project as well. For that, create a new Flutter project and open `lib/main.dart`. Replace everything, with the following code.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: LoginPage(),
    );
  }
}

class LoginPage extends StatefulWidget {
  @override
  LoginPageState createState() => LoginPageState();
}

class LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();

  String? _email;
  String? _password;

  String _message = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Container(
          height: MediaQuery.of(context).size.height,
          child: SafeArea(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const SizedBox(height: 30),
                Text(
                  'Welcome to My App',
                  style: TextStyle(
                    color: Colors.indigo.shade600,
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 30),
                Form(
                  key: _formKey,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 30,
                    ),
                    child: Column(
                      children: [
                        TextFormField(
                          key: ValueKey('email'),
                          keyboardType: TextInputType.emailAddress,
                          validator: (value) {
                            if (value?.isEmpty ?? true) {
                              return 'Please enter your email';
                            }
                            return null;
                          },
                          onSaved: (value) {
                            _email = value;
                          },
                          decoration: InputDecoration(
                            filled: true,
                            fillColor: Colors.white,
                            hintText: 'Email',
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(10),
                            ),
                          ),
                        ),
                        const SizedBox(height: 20),
                        TextFormField(
                          key: ValueKey('password'),
                          obscureText: true,
                          validator: (value) {
                            if (value?.isEmpty ?? true) {
                              return 'Please enter your password';
                            }
                            return null;
                          },
                          onSaved: (value) {
                            _password = value;
                          },
                          decoration: InputDecoration(
                            filled: true,
                            fillColor: Colors.white,
                            hintText: 'Password',
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(10),
                            ),
                          ),
                        ),
                        if(_message.isNotEmpty) ...[
                          const SizedBox(height: 20),
                          Text(_message),
                        ],
                        const SizedBox(height: 20),
                        ElevatedButton(
                          onPressed: _submit,
                          child: const Text('Login'),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  void _submit() {
    if (_formKey.currentState?.validate() ?? false) {
      _formKey.currentState?.save();
      if (Helpers().login(_email!, _password!)) {
        setState(() {
          _message = 'Login successful';
        });
      } else {
        setState(() {
          _password = null;
          _message = 'Login failed';
        });
      }
    }
  }
}

class Helpers {
  bool login(String email, String password) {
    if (email == 'correct@gmail.com' && password == 'correctPass') {
      return true;
    }
    return false;
  }
}
```

Open `pubspec.yaml` and update.

```yaml
dev_dependencies:
	flutter_test:
		sdk: flutter
```

That's it, all we need is a single package `flutter_test` that provides all the necessary tools to write tests

## Unit Tests

Unit tests are tests that verify the functionality of individual parts of your code, such as functions and classes. We write all the tests in `test` folder. We can organize into sub folders.

We are going to test the `login` function that we have in `Helper` class.

```dart
class Helpers {
  bool login(String email, String password) {
    if (
	    email == 'correct@gmail.com'
	    && password == 'correctPass'
	) {
      return true;
    }
    return false;
  }
}

```

Let's create a test file, `test/unit/helpers_test.dart`

```dart
// your package name may be different than `flutter_app`
import 'package:flutter_app/main.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  final helper = Helpers();
  test('Valid login', () {
    expect(helper.login('correct@gmail.com', 'correctPass'), true);
  });

  test('Invalid login', () {
    expect(helper.login('incorrect@gmail.com', 'noPass'), false);
  });
}
```

In this test, we use the `expect()` function to verify that the result of `login()` true or false based on the credentials provided.

To run the tests you can run the following command in the terminal

```bash
flutter test test/helpers_test.dart
```

If you are on VS Code and Flutter plugins are setup correctly, you can click on the `Run` link shown above the `void main()` function in the editor.

### Writing Your Own

- Using the similar pattern, you can write tests for all your classes and functions. 
- For unit tests it's usually best to create a similar folder and files for test as the original classes you are testing.
- Keep tests for a class in same test file.
- You can test multiple functions of same class in same file
- You can write multiple tests for same functions with different test data like we do above for login function

> Tip: Write unit test for one of your project and share your experience with the community.

## Testing Widgets

Widgets are the building blocks of our user interface. To test widgets, we can use the `WidgetTester` class, which allows us to interact with widgets and simulate user input.

In the above app, we have `LoginPage` widget which we will be testing. Let's start by creating a file `test/widgets/login_page_test.dart`

First import `material`, `flutter_test`, and our `main` file and also create a `main` function.

```dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:flutter_app/main.dart';

void main() {

}
```

This time, we will use `testWidgets` function instead of `test` function that we used for unit tests.

```dart
void main() {
  testWidgets('Email and password is required', (WidgetTester tester) async {
    // Build our LoginPage and trigger a frame.
    await tester.pumpWidget(MaterialApp(home: LoginPage()));
    await tester.pumpAndSettle();

    // Verify that our counter starts at 0.
    expect(find.text('Email'), findsOneWidget);
    expect(find.text('Password'), findsOneWidget);

    // Tap the 'Login' icon and trigger a frame.
    await tester.tap(find.text('Login'));
    await tester.pumpAndSettle();

    // Verify that our counter has incremented.
    expect(find.text('Please enter your email'), findsOneWidget);
    expect(find.text('Please enter your password'), findsOneWidget);
  });
}
```

In this test we use,
- The `pumpWidget()` method to build the `LoginPage` widget. We wrap it in `MaterialApp` as it requires `Material` parent to work.
- `find.text()` is a finder provided by `flutter_test` package to find the widgets that display the given texts
- `await tester.tap(find.text('Login'))` to tap on the login button
- `await tester.pumpAndSettle()` to wait one frame so the action complets

In the above test we are verifying that when we press `Login` button without providing any input, it shows error message to enter both email and password to make sure both email and password are required.

## More on Widget Test

Apart from finding widgets by text, we can also find by key, next let's add keys to  two of our `TextFormField` widgets in the `lib/main.dart`.

```dart
//... existing code
TextFormField(
  key: ValueKey('email'),
  //...existing code
),
const SizedBox(height: 20),
TextFormField(
  key: ValueKey('password'),
  //...existing code
),
//...existing code
```

Let's write a test that enters values in the text fields and checks behavior when login button is pressed.

```dart
  testWidgets('Login success with correct credentials', (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(home: LoginPage()));
    await tester.pumpAndSettle();

    expect(find.text('Login successful'), findsNothing);

    await tester.enterText(find.byKey(ValueKey('email')), 'correct@gmail.com');
    await tester.enterText(find.byKey(ValueKey('password')), 'correctPass');
    await tester.tap(find.text('Login'));
    await tester.pumpAndSettle();

    expect(find.text('Login successful'), findsOneWidget);
  });
  
  testWidgets('Login failed with incorrect credentials', (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(home: LoginPage()));
    await tester.pumpAndSettle();

    expect(find.text('Login failed'), findsNothing);

    await tester.enterText(find.byKey(ValueKey('email')), 'incorrect@gmail.com');
    await tester.enterText(find.byKey(ValueKey('password')), 'noPass');
    await tester.tap(find.text('Login'));
    await tester.pumpAndSettle();

    expect(find.text('Login failed'), findsOneWidget);
  });
```

I've two test above, one that enters correct email and password and other that enters invalid credentials. Then we check the message displayed.

> Tip: Write widget tests for one of your own application and share with the community.

## Conclusion

That's all for the basics of testing in Flutter. I hope with this, you will be able to write your own tests for your own applications. Below are some of the resources for learning more about testing in Flutter from official documentation.

- Source Code: [Open in Zapp](https://zapp.run/edit/flutter-zy7y06a4z7z0?entry=lib/main.dart&file=lib/main.dart)
- [Unit testing official cookbook](https://docs.flutter.dev/cookbook/testing/unit/introduction)
- [Widget testing official cookbook](https://docs.flutter.dev/cookbook/testing/widget/introduction)

---
id: ls02-forms
title: Forms
description: Collect user input with text fields, controllers and form widgets.
---

Forms are the most commonly used method for gathering user input. Flutter gives you `TextField` for single inputs, and `Form` with `TextFormField` when you want to validate several fields together.

## Projects

### 1. Login UI

Build a login UI with a username and password field and a Login button. When the user clicks the button, show a message that says "Welcome, [username]!" if the username is "admin" and the password is "1234". Otherwise, show a message that says "Invalid username or password".

> Note: Use a [TextField](https://api.flutter.dev/flutter/material/TextField-class.html) for the username and password fields. Use a [TextEditingController](https://api.flutter.dev/flutter/widgets/TextEditingController-class.html) to get the text from the fields. Remember to use [StatefulWidget](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html). Use [SnackBar](https://api.flutter.dev/flutter/material/SnackBar-class.html) to show the message with `ScaffoldMessenger.of(context).showSnackBar(...)` (the old `Scaffold.of(context).showSnackBar` no longer exists). Remember to `dispose()` your controllers in the `dispose` method of your `State`.

### 2. Profile Form

Build the following layout with form elements as shown in the image below.

![Form](/images/courses/master-flutter/ch07-ls02-pr02.png)

## Resources

- [TextField](https://api.flutter.dev/flutter/material/TextField-class.html)
- [TextEditingController](https://api.flutter.dev/flutter/widgets/TextEditingController-class.html)
- [Action Chip](https://api.flutter.dev/flutter/material/ActionChip-class.html)
- [Display a snackbar](https://docs.flutter.dev/cookbook/design/snackbars)
- [Build a form with validation](https://docs.flutter.dev/cookbook/forms/validation)

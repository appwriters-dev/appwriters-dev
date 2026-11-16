---
id: ls03-alerts-and-dialogs
title: Alerts and Dialogs
description: Show alerts and dialogs to give the user a message and ask for their response.
---

Alerts and dialogs are a way to show a message to the user and ask for their response. In Flutter you open one with `showDialog`, usually with an `AlertDialog` inside, and close it with `Navigator.pop(context)`.

## Projects

### 1. Login Dialog

Build a Welcome UI that has two buttons that say Login and Signup. When the Login button is pressed, show a dialog that has two text fields for username and password and two buttons for Login and Cancel. When the Login button is pressed, show a message "Welcome [Username]". The Cancel button should hide the dialog. Similarly, when the Signup button is pressed, show a dialog that has three text fields for name, username and password and two buttons for Signup and Cancel. When the Signup button is pressed, show a message "Welcome [name]". The Cancel button should hide the dialog.

> Note: Separate the UI logic into different widgets and use them in the main widget.

### 2. Profile Data Dialog

Update the **Profile Form** project from the previous lesson so that when the user presses the **Continue** button, a dialog is shown with all the data entered by the user. The dialog should have a **Close** button that closes the dialog.

## Resources

- [showDialog](https://api.flutter.dev/flutter/material/showDialog.html)
- [AlertDialog](https://api.flutter.dev/flutter/material/AlertDialog-class.html)
- [Building user interfaces with Flutter (separating widgets)](https://docs.flutter.dev/ui)


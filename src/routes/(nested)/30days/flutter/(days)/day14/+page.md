# Alerts, Dialogs, and Snackbar

Alerts and dialogs are important components of mobile apps that provide users with feedback and help them make informed decisions. They can be used to display important messages, confirm user actions, and collect user input. By incorporating well-designed alerts and dialogs into your mobile app, you can improve the user experience and make your app more engaging and intuitive to use.

> **Project** - Informative App
>
> Update your registration form project from previous day
>
> - When submit button is pressed, if all input is validated, show an alert dialog that has two actions **Cancel** and **Continue** and message **Are you sure you want to submit?**
> - If user input is not valid, show a snackbar with message **Please fill all the fields correctly**

By the end of this day, you will understand the importance of feedback and interaction in mobile apps, learn about different types of alerts, dialogs, and snackbar in Flutter, and explore how to use them effectively in your app.

## Tips

- Alerts, dialogs, and snackbar should be simple and easy to understand for users. Avoid overloading them with too much information or too many options.

- Keep the design of your alerts, dialogs, and snackbar consistent with the rest of your app. Use consistent colors, fonts, and branding to maintain a cohesive and professional look.

- Use clear and concise messages in your alerts, dialogs, and snackbar to help users understand what action they need to take or what is happening in the app.


- Creating a simple dialog

```dart
void _showAlertDialog() {
  showDialog(
    context: context,
    builder: (BuildContext context) {
      return AlertDialog(
        title: Text('Alert'),
        content: Text('This is an alert.'),
        actions: <Widget>[
          FlatButton(
            child: Text('OK'),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
        ],
      );
    },
  );
}
```

> [more projects](https://masterflutter.appwriters.dev/ch07-interactivity/ls03-alerts-and-dialogs)

## Resources

- [Displaying Snackbar](https://docs.flutter.dev/cookbook/design/snackbars)
- [Alert Dialog](https://api.flutter.dev/flutter/material/AlertDialog-class.html)
- [Simple Dialog](https://api.flutter.dev/flutter/material/SimpleDialog-class.html)


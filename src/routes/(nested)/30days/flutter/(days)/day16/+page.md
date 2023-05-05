# Styling and Validating Forms

Making beautiful and useful forms requires learning how to style input elements and validate user input. Flutter provides a wide range of widgets that you can use to style your forms and validate user input. And there are also popular plugins that you can use to make your life easier.

> **Project** - Login Form
>
> Duplicate the registration form you built previous day, and change it to a login form with email and password input and a login button.
>
> - Style input elements similar to the following image
>
> ![Login Form](https://github.com/lohanidamodar/flutter_ui_challenges/blob/master/screenshots/login10.png)
> 
> - Validate email and password input when login button is pressed
> - If email or password is empty, show a snackbar with message **Please fill all the fields correctly**
> - If email is not valid, show a snackbar with message **Please enter a valid email address**
> - If password is not valid, show a snackbar with message **Password must be at least 8 characters long**
> - If email and password are valid, show a snackbar with message **Login successful**

By the end of this day, you will learn how to style input elements and validate user input in Flutter. You will also learn how to use popular plugins to make your life easier.

## Tips

- Use consistent colors, fonts, and branding to maintain a cohesive and professional look.
- Look at **decoration** property of [TextField](https://api.flutter.dev/flutter/material/TextField-class.html) that takes an instance of [InputDecoration](https://api.flutter.dev/flutter/material/InputDecoration-class.html) to style input elements.
- Build more complex forms by combining multiple input elements together in a [Column](https://api.flutter.dev/flutter/widgets/Column-class.html) or [Row](https://api.flutter.dev/flutter/widgets/Row-class.html) or [ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html).
- Practice building forms with different input elements and styles to get a better understanding of how to style and validate forms in Flutter.

## Resources

- [Flutter Form Validation](https://flutter.dev/docs/cookbook/forms/validation)
- [Create and style textfield](https://docs.flutter.dev/cookbook/forms/text-input)
- [Sample app on Forms and validation](https://flutter.github.io/samples/form_app.html)
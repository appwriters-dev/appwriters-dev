---
title: Demystifying Dart Extension Methods
slug: demystifying-dart-extension-methods
date: 2023-02-19
excerpt: Dart extension methods provide us with a easy and clean way to extend external libraies to our specific needs without touching their source code. Let's learn what they are and how to use them.
coverImage: /images/dart_extension_methods_cover.svg
coverWidth: 16
coverHeight: 9
categories: [Dart,Flutter]
---

Extending library made by someone else for our specific needs is a painful job. We don't want to modify the source yet we want to add our specific functionalities to the library. In Dart we have extension methods to resolve this need. In this article we will learn what extension methods are, how they are useful, and how to use them in our Dart and Flutter programs.

## What are Extension Methods?

- Way to add functionalities to existing libraries and classes without modifying their codebase
- It doesn't extend or modify the existing class
- It doesn't work with dynamic types
- Extension methods can be defined for **instance methods**, **operators**, **setters**, and **getters**, but not **fields**

## Defining Extension Methods

- We use `extension` keyword on type as the following to add extensions method
```dart
extension <extension-name> on <type> {
	<member definitions>
}
```

Let's take a look at an example. We want to add a email validation extension to `String` type.

```dart
extension StringExtension on String {
	bool get isValidEmail {
		final emailRegExp = RegExp(r"^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]+");
		return emailRegExp.hasMatch(this);
	}
}
```

## Calling Extension Methods

Now, we can use it as the following.

```dart
void main() {
	String email = 'damodar@mail.com';
	
	// implicitly calling
	bool valid = email.isValidEmail
	
	// or we can explicitly call it as the following
	bool valid = StringExtension(email).isValidEmail;
}
```

## Conflict Resolution

When there are multiple extensions that defining same method, we need to call method explicitly

```dart
bool valid = StringExtension('someEmail').isValidEmail;
```

## Use in Flutter

I quite often use it in Flutter to make code more easy to work with. Look at the example below.

```dart
extension ThemeExt on BuildContext {
 TextTheme get textTheme => Theme.of(this).textTheme;
}

extension MediaQueryExt on BuildContext {
   Size get mediaQuerySize => MediaQuery.of(this).size;  
}
```

So with the above extension applied to `BuiltContext` we can update `Theme.of(context).textTheme` to `context.textTheme`, and `MediaQuery.of(context).size` to `context.mediaQuerySize`. Which is shorter and more readable as well as maintainable.

## Conclusion

Dart extension methods are ways to add additional functionalities to existing classes and libraries without modifying their source code or extending the classes. It helps make code more readable and easy to work with. It also helps get rid of unnecessary utility classes that are made to extend the external libraries.
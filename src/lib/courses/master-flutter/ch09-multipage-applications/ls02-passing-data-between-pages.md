---
id: ls02-passing-data-between-pages
title: Passing Data Between Pages
description: Send data to a new page and get results back using constructors, route arguments and Navigator.pop.
---

Before we learn more advanced techniques like state management, in this lesson we will practice how we can pass data from one widget to another.

## Projects

### 1. Authenticate

Build a Flutter app with two pages, one for login and one for home. Login page should have a form with two text fields, one for email and one for password. When the user clicks on the login button, the app should navigate to the home page and display the email and password in a text widget.

> Do this twice, once with passing data using the constructor and `Navigator.push` and once with passing data using the `Navigator.pushNamed` method and extracting arguments using `ModalRoute`.

### 2. Shopping Cart

Build a Flutter app where the home page displays a list of products, each with a name, image, price and an add to cart `IconButton`. Once add to cart is clicked, it should add the product to the cart (a list of products maintained using a stateful widget). Display a floating action button with a cart icon; tapping it should navigate to the cart page. The cart page should display the list of products added to the cart as well as the sum total of the price of all the products at the bottom.

> Give each product on the cart page a `TextButton` labelled `Cancel`. When the user taps `Cancel`, the product should no longer be in the cart. Call `Navigator.pop(context, updatedCart)` to go back and return the updated cart, and receive it on the home page with `await Navigator.push(...)`.

## Resources

- [Passing Data Between Pages](https://docs.flutter.dev/cookbook/navigation/passing-data)
- [Passing Data](https://docs.flutter.dev/cookbook/navigation/navigate-with-arguments)
- [ModalRoute](https://api.flutter.dev/flutter/widgets/ModalRoute-class.html)

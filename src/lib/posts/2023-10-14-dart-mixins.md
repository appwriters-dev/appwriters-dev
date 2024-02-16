---
title: Dart mixins for everyone
slug: dart-mixins-for-everyone
date: 2023-10-14
excerpt: "Mixins in Dart are a way of reusing a class's code in multiple class hierarchies. Mixins can be added to different classes to extend their capabilities, without the need for complex inheritance structures."
keywords: Dart,Flutter,Dart tutorial,Flutter tutorial,Mixins
coverImage: /images/dart-mixins.webp 
coverWidth: 16
coverHeight: 9
categories: [Dart, Flutter]
---

Mixins in Dart are a way of reusing a class's code in multiple class hierarchies. You can imagine them like little boxes of functionality, you can pick  and add to your classes as you need. Mixins can be added to different classes to extend their capabilities, without the need for complex inheritance structures.

## Implementing Mixins

Defining a mixin is very similar to defining a class. The only difference is you use the `mixin` keyword. Let's take an example of a real-world application, where we want to add logging functionality to different classes.

```dart
mixin Logger {
  void log(String msg) {
    print("Log: $msg");
  }
}
```

Here, we've created a `Logger` mixin that contains a single method `log`. This method takes a `String` as input and prints it to the console with a "Log:" prefix.

## Applying Mixins

To apply a mixin to a class, we use the `with` keyword followed by the mixin's name. Here's how we can apply our `Logger` mixin to a `Service` class.

```dart
class Service with Logger {
  void doSomething() {
    log("Service is doing something");
  }
}
```

In the above example, `Service` class can now access the `log` method defined in the `Logger` mixin. It's as if the `Service` class now has the `log` method, added to its existing functionality.

## Composing Mixins

You can also apply multiple mixins to a class. This is called composing mixins.

Consider another mixin, `Validator`, that we want to add to our `Service` class:

```dart
mixin Validator {
  bool validate(String value) {
    return value.isNotEmpty;
  }
}
```

We can apply both `Logger` and `Validator` to `Service` like so:

```dart
class Service with Logger, Validator {
  void doSomething(String user) {
    if (validate(user)) {
      log("Doing something for $user");
    } else {
      log("Invalid user");
    }
  }
}
```

Now, the `Service` class has two mixins and can access both the `log` method and the `validate` method.

## Mixin Inheritance

Just like classes, mixins can also use other mixins.

For instance, if we want to create a `SecureLogger` mixin that uses the `Logger` mixin and adds additional functionality, we can do it like this:

```dart
mixin SecureLogger on Logger {
  void secureLog(String msg) {
    // Implement some security measures
    // Then log the message
    log("Secure: $msg");
  }
}
```

In this example, `SecureLogger` can use the `log` method from the `Logger` mixin. The `on` keyword signifies that `SecureLogger` can only be used on classes that also use `Logger`.

## Naming conflict

In Dart, when two mixins applied to a class have a member (property or method) with the same name we say there is a naming conflict. When naming conflict occurs, the mixin declared last overrides the one declared first.

Here's an example to illustrate this:

```dart
mixin A {
  String name = "Mixin A";
  void doSomething() {
    print("Doing something in Mixin A");
  }
}

mixin B {
  String name = "Mixin B";
  void doSomething() {
    print("Doing something in Mixin B");
  }
}

class MyClass with A, B {}

void main() {
  MyClass myClass = MyClass();
  print(myClass.name); // Output: "Mixin B"
  myClass.doSomething(); // Output: "Doing something in Mixin B"
}
```

In this example, both mixins `A` and `B` define a property `name` and a method `doSomething`. However, since `B` is applied after `A` in the class `MyClass`, the members of `B` override the members of `A`.

It's important to keep this behavior in mind when working with mixins to avoid unexpected results.

## Mixin Restrictions and `on` Keyword

In Dart, the `on` keyword specifies a superclass constraint. Essentially, it defines the classes that a mixin can be applied to. This is similar to saying "This spice can only be used in this specific dish".

```dart
mixin MustInheritFromFoo on Foo {
  void extendedMethod() {
    // Some implementation here
  }
}
```

In this example, the `MustInheritFromFoo` mixin can only be applied to classes that extend `Foo`.

## The difference between `extends` and `with`

While both `extends` (inheritance) and `with` (mixins) can be used to share code between classes, they have different use cases and rules. 

Inheritance (`extends`) is used when there's a clear parent-child relationship between classes. For instance, a `Dog` class would extend an `Animal` class because a dog is a specific type of animal.

Mixins (`with`), on the other hand, are used to share functionality that doesn't fit into a single class hierarchy. For example, if you have a `Logger` mixin that adds logging functionality, you might want to use this in multiple unrelated classes.

## Use of `super` in a mixin

Like classes, mixins can call their superclass using the `super` keyword. This is useful when you want to override a method but still want to call the original method.

```dart
mixin OverrideMixin on BaseClass {
  @override
  void someMethod() {
    super.someMethod();
    // Additional implementation
  }
}
```

In this example, `OverrideMixin` overrides `someMethod` from `BaseClass` but still calls the original method with `super.someMethod()`.

## Private Members in Mixins

Just like classes, mixins can have private members. These members can only be accessed within the mixin itself, not from the class that uses the mixin.

```dart
mixin PrivateMixin {
  String _privateProperty = "You can't see me!";
  
  void printPrivateProperty() {
    print(_privateProperty); // This is allowed
  }
}
```


And that's it! Mixins are a powerful tool in Dart that allows you to enhance your classes with additional functionality, without complicating the inheritance structure. Remember, the best way to understand and get comfortable with mixins is by using them in your code. Try to identify parts of your code that could benefit from mixins and give it a go. Happy coding!
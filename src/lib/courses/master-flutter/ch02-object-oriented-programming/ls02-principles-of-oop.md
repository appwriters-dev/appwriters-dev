---
id: ls02-principles-of-oop
title: Principles of OOP
description: The principles of OOP are designed to make it easier to create complex, modular, and scalable programs by organizing code into small, reusable units called classes. Principles like encapsulation, abstraction, inheritance and polymorphism help to reduce complexity and improve the maintainability and re-usability of code.
---

## Encapsulation

Encapsulation is the process of concealing a class's implementation details from the outside world. The public interface is the only way to interact with an object. This means that the internal state of the object is hidden from the outside world. The internal state of the object can only be changed by calling public methods. This is a very powerful concept because it allows us to change a class's implementation without affecting the code that uses it. In Dart, a name that starts with an underscore (such as `_balance`) is private to its library (file).

## Abstraction

Abstraction means showing only the essential features of something and hiding the details of how it works. You describe *what* an object can do, not *how* it does it. In Dart this is usually done with an `abstract class` (or, since Dart 3, an `abstract interface class` for a pure contract) that declares methods without implementing them; other classes then provide the actual implementation. Code that uses the abstraction does not need to know which implementation it is talking to.

## Inheritance

Inheritance is the process of creating a new class from an existing class. The new class is called a subclass, and the existing class is called a superclass. In Dart a subclass is created with `extends`, and it inherits the fields and methods of the superclass (Dart has no `protected` keyword; private members are only visible inside the same library). The subclass can add its own methods and override the superclass methods with `@override`. Inheritance is a powerful concept because it allows us to create a new class that is based on an existing class, thus reducing the amount of code that we need to write.

## Polymorphism

Polymorphism means "many forms": different classes can be used through the same interface, and each one responds in its own way. For example, a `Dog` and a `Cat` can both extend `Animal` and override `makeSound()`; calling `animal.makeSound()` runs the right version for whichever object it is.

## Class modifiers (Dart 3)

Dart 3 added class modifiers that control how a class can be used: `abstract`, `interface`, `base`, `final`, `sealed` and `mixin`. A `sealed` class is especially useful with switch expressions, because the compiler knows every subtype and can check that you handled them all.

```dart
sealed class Shape {}

class Circle extends Shape {
  final double radius;
  Circle(this.radius);
}

class Square extends Shape {
  final double side;
  Square(this.side);
}

double area(Shape shape) => switch (shape) {
      Circle c => 3.14159 * c.radius * c.radius,
      Square s => s.side * s.side,
    };
```

## Projects

### 1. A Game

Create a simple game that uses classes to represent different game entities, such as the player, enemies, and items.

### 2. Abstract Class

- Create an abstract class called `ArticleDataSource` with method `getArticle(String id)`, and `deleteArticle(String id)`.
- Create a class called `ArticleLocalDataSource` and implement the `ArticleDataSource`
- Implement each method and print operation with the provided id. For example, calling `getArticle('dart-today-and-tomorrow')` should print `Get dart-today-and-tomorrow`
- Add a factory constructor to `ArticleLocalDataSource` and return the object of `ArticleLocalDataSource`.
- Instantiate `ArticleLocalDataSource` using the factory constructor and call each method on the object.

### 3. Color Points

The class "Point" is defined as follows:

```dart
class Point {
  int _x, _y;

  Point(this._x, this._y);

  void move(int mx, int my) {
    _x += mx;
    _y += my;
  }

  void display() {
    print("x = $_x   y = $_y");
  }
}
```

- Define a new class `PointCol` derived from `Point` to manipulate colored points.
- Its constructor initializes the color of the object with a given integer (the color reference).
- Add a method "printColor" that prints the color.
- Create a small test program (main).

### 4. Client and Loyal Client

Create a class "Client" that has 2 private attributes:

- Name (can't be changed).
- PurchasesAmount (double), with 2 methods (get, add).

Then:

- Create a constructor that initializes the name.
- Create a class "LoyalClient" that extends "Client" and has 1 private attribute:
- PurchasesAmount (double), with 1 method (get).
- Create a method "discount" that assign to PurchasesAmount (subclass) the value of PurchasesAmount (superclass) after reduction of 10%.
- Create a small test program (main).

Note: Use different names for the get methods.

## Resources

- [Principles of OOP](https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/)
- [OOP in 8 minutes](https://www.youtube.com/watch?v=pTB0EiLXUC8)
- [Inheritance](https://www.darttutorial.org/dart-tutorial/dart-inheritance/)
- [Inheritance](https://dart-tutorial.com/object-oriented-programming/inheritance-in-dart/)
- [Inheritance of Constructor](https://dart-tutorial.com/object-oriented-programming/inheritance-of-constructor-in-dart/)
- [Encapsulation in Dart](https://dart-tutorial.com/object-oriented-programming/encapsulation-in-dart/)
- [Class modifiers **(Official)**](https://dart.dev/language/class-modifiers)

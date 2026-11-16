# Dart Classes

OOP in Dart lets you create objects that have data and functions. You make a blueprint called a class, then create instances of that class with their own data and functions. This makes your code more organized and reusable.

> **Project** - Article Data Source
> 
> - Create an abstract class called `ArticleDataSource` with method `getArticle(String id)`, and `deleteArticle(String id)`.
> - Create a class called `ArticleLocalDataSource` that implements the `ArticleDataSource`
> - Implement each method and print operation, source, and the provided id. For example, calling `getArticle('dart-today-and-tomorrow')` should print **Get Local dart-today-and-tomorrow**
> - Add a factory constructor to `ArticleLocalDataSource` and return the object of `ArticleLocalDataSource`.
> - Instantiate `ArticleLocalDataSource` using the factory constructor and call each method on the object.
> - Create and implement `ArticleAPIDataSource` exactly like `ArticleLocalDataSource` but print **Get API dart-today-and-tomorrow** instead of **Get Local dart-today-and-tomorrow**.
>

By the end of this day, you should have a good understanding of how to create classes and objects in Dart, and how to call their methods.

## Tips

- Review the basics of classes and objects in Dart. You can use the Dart documentation to learn more about these concepts (https://dart.dev/language/classes).
- Create a class with properties and methods. For example:

```dart
class Person {
  String name;
  int age;
  
  Person(this.name, this.age);
  
  void sayHello() {
    print('Hello, my name is $name and I am $age years old.');
  }
}
```

This creates a `Person` class with two properties (`name` and `age`), a constructor that initializes these properties, and a `sayHello` method that prints a message to the console.

- Instantiate the class and call its methods. For example:

```dart
void main() {
  Person person = Person('Alice', 25);
  person.sayHello(); // prints "Hello, my name is Alice and I am 25 years old." to the console
}
```

This creates a new Person object with the name "Alice" and age 25, and calls its sayHello method.

- Experiment with different types of classes, such as classes with private properties and methods, or classes that inherit from other classes.

```dart
class Animal {
  String _name;
  
  Animal(this._name);
  
  void speak() {
    print('My name is $_name.');
  }
}

class Cat extends Animal {
  Cat(String name) : super(name);
  
  void meow() {
    print('Meow!');
  }
}

void main() {
  Cat cat = Cat('Whiskers');
  cat.speak(); // prints "My name is Whiskers." to the console
  cat.meow(); // prints "Meow!" to the console
}
```

This creates an `Animal` class with a private `_name` property and a `speak` method, and a `Cat` class that extends `Animal` and adds a `meow` method. In Dart, a name starting with `_` is private to its library (file), not just to the class.

- Dart 3 also has class modifiers such as `abstract`, `interface`, `base`, `final`, and `sealed`, which control how a class can be extended or implemented. You will use `abstract class` in today's project.

### Resources

- [The official Dart documentation on classes](https://dart.dev/language/classes)
- [Class modifiers](https://dart.dev/language/class-modifiers)
- [Dart Tutorial: OOP in Dart](https://dart-tutorial.com/object-oriented-programming/)
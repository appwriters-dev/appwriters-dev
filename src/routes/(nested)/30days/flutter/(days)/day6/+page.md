# Dart Classes

1. Review the basics of classes and objects in Dart. You can use the Dart documentation to learn more about these concepts (https://dart.dev/guides/language/language-tour#classes).

2. Create a new Dart console application, or continue working with the project you created in previous days.

3. Create a class with properties and methods. For example:

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

This creates a Person class with two properties (name and age), a constructor that initializes these properties, and a sayHello method that prints a message to the console.

4. Instantiate the class and call its methods. For example:

```dart
void main() {
  Person person = Person('Alice', 25);
  person.sayHello(); // prints "Hello, my name is Alice and I am 25 years old." to the console
}
```

This creates a new Person object with the name "Alice" and age 25, and calls its sayHello method.

5. Experiment with different types of classes, such as classes with private properties and methods, or classes that inherit from other classes.

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

This creates an Animal class with a private _name property and a speak method, and a Cat class that extends Animal and adds a meow method.

### Resources

- The official Dart documentation on classes: https://dart.dev/guides/language/language-tour#classes
- Dart Programming Tutorial for Beginners: https://www.tutorialspoint.com/dart_programming/dart_programming_classes.htm
- Object-Oriented Programming with Dart: https://medium.com/flutter-community/object-oriented-programming-with-dart-b7d7371abc25
- Dart classes explained in detail: https://pusher.com/tutorials/dart-classes-explained

You can also find plenty of examples and tutorials on YouTube, Udemy, and other online learning platforms.

By the end of this day, you should have a good understanding of how to create classes and objects in Dart, and how to call their methods.
# Day 5: Dart Functions

1. Review the basics of functions in Dart. You can use the Dart documentation to learn more about these concepts (https://dart.dev/guides/language/language-tour#functions).

2. Create a new Dart console application, or continue working with the project you created in previous days.

3. Write a function that takes parameters and returns a value. For example:

```dart
int add(int a, int b) {
  return a + b;
}
```

This function takes two integer parameters, adds them together, and returns the result.

4. Call the function from the main method. For example:

```dart
void main() {
  int result = add(3, 4);
  print(result); // 7
}
```

This calls the add function with the arguments 3 and 4, stores the result in the "result" variable, and prints the result to the console.

5. Experiment with different types of functions, such as functions that don't return a value (void), or functions that take no parameters.

```dart
void greet() {
  print('Hello, world!');
}

void main() {
  greet(); // prints "Hello, world!" to the console
}
```

### Resources

Here are some resources for Day 5: Dart Functions:

1. Flutter.dev - Functions: https://flutter.dev/docs/cookbook/functions
2. Dart.dev - Functions: https://dart.dev/guides/language/language-tour#functions
3. Flutter Explained - Dart Functions: https://www.youtube.com/watch?v=yJtVmDxt5HU
4. Dart Academy - Functions in Dart: https://dart.academy/functions-in-dart/
5. Dart Programming - Dart Functions: https://dartprogramming.com/dart-functions
6. Reso Coder - Flutter Dart Tutorials - Functions: https://resocoder.com/category/tutorials/flutter/dart-tutorials/functions/
7. Ray Wenderlich - Dart Functions and Optional Parameters: https://www.raywenderlich.com/23047441-dart-functions-and-optional-parameters

These resources cover the basics of Dart functions, including function syntax, parameters, return types, optional parameters, and more. Some of these resources are specific to Flutter, while others focus more on general Dart programming concepts.

By the end of this day, you should have a good understanding of how to write and call functions in Dart.
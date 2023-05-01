# Dart Functions

In Dart, a function is a block of code that performs a specific task and can be called from other parts of the program. They can take parameters and return values, helping to organize and simplify code.

> **Project** - Palindrome Checker
> 
> Write a function to check if a given string is a palindrome.
> - A **palindrome** is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
> - Use the function to check if a given string is a palindrome. Print the answer to the console.
>

By the end of this day, you should have a good understanding of how to write and call functions in Dart.

## Tips

- A function that takes parameters and returns a value.

```dart
int add(int a, int b) {
  return a + b;
}
```

This function takes two integer parameters, adds them together, and returns the result.

- Calling the function

```dart
void main() {
  int result = add(3, 4);
  print(result); // 7
}
```

This calls the add function with the arguments 3 and 4, stores the result in the "result" variable, and prints the result to the console.

- Experiment with different types of functions, such as functions that don't return a value (void), or functions that take no parameters.

```dart
void greet() {
  print('Hello, world!');
}

void main() {
  greet(); // prints "Hello, world!" to the console
}
```

> Practice More
> 
> [practice projects](https://masterflutter.appwriters.dev/ch01-the-dart-basics/ls09-functions)

## Resources

Here are some resources for Day 5: Dart Functions:

1. [Dart.dev - Functions](https://dart.dev/guides/language/language-tour#functions)
2. [Dart Tutorial - Functions](https://dart-tutorial.com/functions/)


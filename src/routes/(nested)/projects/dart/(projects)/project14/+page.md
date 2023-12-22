# Typing Speed Test

Ever wondered how fast you can type? Let's dive into a Dart program that measures your typing speed and accuracy. Dart, a language optimized for building UI, is great for such simple and interactive programs. In this blog post, we'll break down a Dart program that tests your typing speed.

## The Code

```dart
import 'dart:io';
import 'dart:math';

void main() {
  final String textToType = "The quick brown fox jumps over the lazy dog.";

  print("Type the following text as fast and accurately as possible:");
  print(textToType);

  final Stopwatch stopwatch = Stopwatch()..start();

  final String userInput = stdin.readLineSync()!;

  stopwatch.stop();

  final int typingSpeed = ((textToType.split(" ").length / stopwatch.elapsedMilliseconds) * 60000).round();
  final int accuracy = calculateAccuracy(textToType, userInput);

  print("Typing speed: $typingSpeed words per minute");
  print("Accuracy: $accuracy%");
}

int calculateAccuracy(String expectedText, String userInput) {
  int errors = 0;

  for (int i = 0; i < min(expectedText.length, userInput.length); i++) {
    if (expectedText[i] != userInput[i]) {
      errors++;
    }
  }

  return ((1 - (errors / expectedText.length)) * 100).round();
}
```

## Understanding the code

### Imports

```dart
import 'dart:io';
import 'dart:math';
```
The program starts by importing two essential libraries: `dart:io` for input/output operations and `dart:math` for mathematical functions.

### The `main()` Function

The `main()` function is the entry point of a Dart program. Here, it's used to run the typing test.

### Defining the Text
   
```dart
final String textToType = "The quick brown fox jumps over the lazy dog.";
```

We define a string `textToType`, which the user will type. This string is a pangram - it contains every letter of the alphabet.

### Displaying Instructions

```dart
print("Type the following text as fast and accurately as possible:");
print(textToType);
```

The program then prints instructions and the text for the user to type.

### Starting the Timer

```dart
final Stopwatch stopwatch = Stopwatch()..start();
```

We create a `Stopwatch` instance and start it immediately. This records the time taken by the user to type.

### Reading User Input

```dart
final String userInput = stdin.readLineSync()!;
```

The program reads the user's input from the console.

### Stopping the Timer

```dart
stopwatch.stop();
```

Once the user has finished typing, the stopwatch is stopped.


### Calculating Typing Speed

```dart
final int typingSpeed = ((textToType.split(" ").length / stopwatch.elapsedMilliseconds) * 60000).round();
```

The typing speed is calculated in words per minute (wpm). The formula involves dividing the number of words by the time taken in milliseconds and then scaling it up to a minute.

### Calculating Accuracy

```dart
final int accuracy = calculateAccuracy(textToType, userInput);
```

The function to calculate the accuracy.

```dart
int calculateAccuracy(String expectedText, String userInput) {
  int errors = 0;

  for (int i = 0; i < min(expectedText.length, userInput.length); i++) {
    if (expectedText[i] != userInput[i]) {
      errors++;
    }
  }
}
```
This function calculates the accuracy of the user's input compared to the expected text by checking character by character and counting the errors.

## Wrapping it up

This Dart program is an excellent example of how to interact with users through the console, perform time measurements, and process strings. It's a simple yet effective way to test and improve your typing skills!

Remember, the best way to learn programming is by writing code, so feel free to experiment with this program and maybe add your own features, like a different set of texts to type! Happy coding! 🚀🎯

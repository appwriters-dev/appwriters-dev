# Blog Post: Building a Countdown Timer in Dart - Project 8 of 30

Hello, Dart developers! Today, we're diving into day 8 of our "30 Days of Dart Projects" series. As you might already know, we've built a number of exciting tools and games in Dart during the past week. Now, let's make our journey even more interesting by building a "Countdown Timer" in Dart. We'll explain the code in simple English and use analogies to make it even easier to understand.

## Project Overview

Today's project is a Countdown Timer that will count down from a specified number of seconds. Imagine it as your personal digital hourglass but instead of sand, it uses seconds. You tell it when to start and it ticks away one second at a time, giving you updates until it reaches zero.

## The Dart Code

Here's the complete code of our Countdown Timer:

```dart
/// Countdown timer
/// 
import 'dart:async';
import 'dart:io';

void main() {
  print("Enter the countdown time in seconds:");
  int countdown = int.parse(stdin.readLineSync()!);

  print("Starting countdown...");
  
  Timer.periodic(Duration(seconds: 1), (Timer timer) {
    countdown--;
    
    if (countdown == 0) {
      print("Time's up!");
      timer.cancel();
    } else {
      print(countdown);
    }
  });
}
```

## Code Breakdown

**Importing Dart Libraries**

```dart
import 'dart:async';
import 'dart:io';
```

First, we import the `dart:async` library to use Dart's built-in Timer class. It's like getting access to a stopwatch for our code. The `dart:io` library allows us to interact with the terminal for input/output operations - it's like our gateway to communicate with the user.

**Getting User Input**

```dart
void main() {
  print("Enter the countdown time in seconds:");
  int countdown = int.parse(stdin.readLineSync()!);
```

In the `main()` function, we ask the user to enter the countdown time in seconds. Think of this as setting the time on your kitchen timer. The `stdin.readLineSync()` function waits for user input from the terminal. This input is a string, so we use `int.parse()` to convert this string to an integer.

**Setting Up The Timer**

```dart
print("Starting countdown...");
  
Timer.periodic(Duration(seconds: 1), (Timer timer) {
  countdown--;
```

With the countdown time set, we're ready to start the timer. We create a periodic Timer that triggers a function every second. The countdown decreases (or "ticks") by one second each time this function is called.

**Running the Countdown**

```dart
if (countdown == 0) {
  print("Time's up!");
  timer.cancel();
} else {
  print(countdown);
}
```

The timer continues ticking and updating the countdown. Imagine it like a second hand on a clock, moving one step every second. When the countdown reaches zero, the timer stops (we "cancel" the timer), and we print a "Time's up!" message.

## Wrapping Up

And that's it! You've successfully created a countdown timer in Dart. This simple but powerful tool can be used in a variety of applications, from creating time-management tools to building more complex games. Keep practicing, and soon you'll be building more advanced projects in no time!

Join us tomorrow as we embark on another exciting Dart project. Stay tuned and happy coding!
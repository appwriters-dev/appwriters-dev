---
## Blog Post Day 4: Dart - Building a Number Guessing Game
---

Hello Dart enthusiasts! Welcome back to our fun and enlightening journey through Dart, with the '30 projects in 30 days' challenge. 

We've already built a temperature converter, a simple arithmetic calculator, and a ToDo list application using files. Now, for day 4, let's dive into creating an entertaining Number Guessing Game. 

As we go through this project, I'll break down the code into smaller chunks and explain each part in simple English, using analogies where possible to help you grasp the concepts more easily.

**Let's begin!**

```dart
import 'dart:io';
import 'dart:math';
```

These two lines at the start are importing Dart's Input/Output and math libraries. You can think of it like bringing your toolbox (IO) and your Swiss Army knife (math) to a repair job.

---

```dart
void main() {
  final random = Random();
  final answer = random.nextInt(100) + 1; 
```

Our `main()` function is the starting point of our Dart application, like the ignition switch of a car. We create a `Random` object to generate random numbers, and `answer` is set to a random integer between 1 and 100.

---

```dart
  print("I'm thinking of a number between 1 and 100. Can you guess what it is?");
  int guess;
  int numGuesses = 0;
```

Next, we print out a message for the user and declare two variables: `guess` to store the user's guesses, and `numGuesses` to keep track of the number of guesses the user has made, like a scorekeeper in a game.

---

```dart
  do {
    numGuesses++;
    stdout.write("Enter your guess: ");
    guess = int.parse(stdin.readLineSync()!);
```

Here, we enter a loop using `do` where we increment `numGuesses` with each cycle. We prompt the user to input their guess, and read it from the standard input (the console). This is akin to asking the player for their next move in a game of chess.

---

```dart
    if (guess < answer) {
      print("Too low. Guess higher.");
    } else if (guess > answer) {
      print("Too high. Guess lower.");
    } else {
      print("Congratulations, you guessed the number in $numGuesses guesses!");
    }
  } while (guess != answer);
}
```

Finally, we use conditional statements to guide the user to the correct answer. If the guess is lower than the answer, we prompt them to guess higher, and vice versa. If the guess is correct, we congratulate them and inform them of the number of attempts it took. We continue this loop until the guess matches the answer. It's like playing a hot and cold game, guiding the player towards the treasure based on their proximity.

And that's it! With these simple steps, we've created an exciting number guessing game using Dart. This shows how we can take user input, generate random numbers, and control the flow of the program based on conditions. 

Stay tuned for our next project! Remember: coding is an adventure - enjoy the journey!

---

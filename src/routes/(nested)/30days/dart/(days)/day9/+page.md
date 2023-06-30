# Day 9: Building a Hangman Game in Dart

Welcome to day 9 of our 30-day Dart coding adventure! If you've been with us, you would have already seen how to build a variety of projects like a temperature converter, a simple arithmetic calculator, and even a Tic Tac Toe game. Today, we will take on the challenge of building a classic word-guessing game, Hangman, using Dart. 

## Project Overview

Hangman is a game where a player has to guess a word, letter by letter. Each incorrect guess leads to the drawing of a part of the hangman. The game ends when the word is completely guessed or the hangman is completely drawn. 

In this blog post, we will build a console version of the Hangman game in Dart. By the end, you'll have a game that takes input from the console, updates the game state, and displays the current state of the hangman and the word to guess.

## Setting up the Environment

First of all, ensure you have Dart installed on your system. If not, please refer back to our Day 1 blog post where we detailed how to set up your Dart environment.

## The Code

Our Hangman game code can be divided into five main parts:

1. Variable Initialization
2. Main Game Loop
3. Word Display
4. Letter Input and Validation
5. Game Status Check

Let's go over each of these parts in detail.

### Variable Initialization

```dart
// word to be guessed
String word = "hangman";

// list of letters guessed by the player
List<String> guessedLetters = [];

// number of guesses remaining before the game is over
int remainingGuesses = 6;

// list of ASCII art for the stick figure hangman
List<String> hangmanAscii = [
  "  _________   ",
  " |/        |  ",
  " |         O  ",
  " |        /|\\ ",
  " |        / \\ ",
  " |             ",
  "_|___          ",
];
```

In this part of the code, we set up the variables we'll use in the game. Think of it as setting the game board before playing. We have the word to be guessed ("hangman"), an empty list to store the letters the player guesses, a counter for the remaining guesses, and a list of ASCII art that represents the hangman.

### Main Game Loop

```dart
// main game loop
while (true) {
  // ...
}
```

This `while (true)` loop forms the heart of the game. Everything that happens within this loop constitutes a single turn in the game. It's like the game board rotating, giving each player their turn, over and over again.

### Word Display

```dart
// print the word with blanks for unguessed letters
String displayedWord = "";
for (int i = 0; i < word.length; i++) {
  if (guessedLetters.contains(word[i])) {
    displayedWord += word[i] + " ";
  } else {
    displayedWord += "_ ";
  }
}
print(displayedWord);
```

This part of the code is responsible for showing the player their progress. It's akin to revealing a bit of the picture in a puzzle each time a correct piece is placed. For each letter in the word, if the player has guessed it, we display the letter; otherwise, we display an underscore `_`.

### Letter Input and Validation

```dart
// prompt the player to enter a letter
stdout.write("Enter a letter: ");
String letter = stdin.readLineSync()!.toLowerCase();

// check if the letter has already been guessed
if (guessedLetters.contains(letter

)) {
  print("You already guessed that letter!");
  continue;
}

// add the letter to the list of guessed letters
guessedLetters.add(letter);

// check if the letter is in the word
if (word.contains(letter)) {
  print("Correct!");
} else {
  print("Incorrect!");
  remainingGuesses--;
  if (remainingGuesses == 0) {
    print("You lose! The word was $word.");
    break;
  }
}
```

This section is where the player interacts with the game. It prompts the player to guess a letter and checks if that letter has been guessed before. If it's a new guess, the code then checks if the guessed letter is in the word. If it is, the player has guessed correctly. If not, the number of remaining guesses decreases. If the player runs out of guesses, the game ends.

### Game Status Check

```dart
// check if the player has guessed all the letters in the word
bool wordIsGuessed = true;
for (int i = 0; i < word.length; i++) {
  if (!guessedLetters.contains(word[i])) {
    wordIsGuessed = false;
    break;
  }
}
if (wordIsGuessed) {
  print("You win! The word was $word.");
  break;
}

// clear the console
if (Platform.isWindows) {
  // Windows
  Process.runSync("cls", []);
} else {
  // other platforms (Mac, Linux)
  print("\x1B[2J\x1B[0;0H");
}
```

Finally, after each turn, the code checks if the player has successfully guessed all the letters in the word. If so, the player wins and the game ends. The console is then cleared, ready for the next round.

## Conclusion

That's it! We've successfully built a console-based Hangman game in Dart. Through this project, we've learned more about Dart's control flow and data structures, user interaction, and error handling. We hope you enjoyed creating this game and are ready for more challenges to come!

Remember, programming is like learning a new language. The more you practice, the more fluent you become. So, keep coding and see you on Day 10 of our 30-day Dart coding challenge!

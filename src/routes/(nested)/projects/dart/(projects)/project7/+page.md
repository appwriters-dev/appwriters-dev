## Building a Tic-Tac-Toe Game in Dart

Welcome back to our coding journey! Today, we're stepping up our game - quite literally - by creating a console-based Tic-Tac-Toe game in Dart. This game will feature two players, represented by 'X' and 'O', taking turns to mark spots on the game board. Let's dive right in!

### Project Overview

Imagine our game board as a small town with 9 houses, arranged neatly in a 3x3 grid. The objective of each player is to claim three houses in a row, column, or diagonal before the other. It's a classic game of strategy, and now, we're bringing it to life with Dart!

### Setting up the Game Board

The first thing we need is a game board. We'll represent our 3x3 Tic-Tac-Toe board using a two-dimensional list. Think of it as a square plot divided into 9 equal parcels - just like our town with 9 houses.

```dart
const int BOARD_SIZE = 3;
var board = List.generate(BOARD_SIZE, (_) => List.filled(BOARD_SIZE, ' '));
```
We create an empty 3x3 grid (3 rows and 3 columns), where each cell is initialized with a space character, denoting an unclaimed spot.

### Player Moves

Each player takes a turn marking a spot on the board with their symbol - 'X' or 'O'. We’ll need a way to switch between players. The ternary operator can be a good friend here:

```dart
var currentPlayer = PLAYER_1_MARK;
currentPlayer = currentPlayer == PLAYER_1_MARK ? PLAYER_2_MARK : PLAYER_1_MARK;
```
This switches the current player after each move. If it's Player 1's ('X') turn, it switches to Player 2 ('O'), and vice versa.

### Making the Move

Next, we prompt the current player to enter the row and column numbers for their move. This is like asking them which house they want to claim in our small town. We get this input from the console:

```dart
stdout.write('Player $currentPlayer, enter row (1-$BOARD_SIZE): ');
var row = int.parse(stdin.readLineSync() ?? '3') - 1;
stdout.write('Player $currentPlayer, enter column (1-$BOARD_SIZE): ');
var col = int.parse(stdin.readLineSync() ?? '3') - 1;
```
The `stdin.readLineSync()` reads the input, and `int.parse()` converts it to an integer. Note that we subtract 1 from the row and column numbers because Dart lists start from index 0, not 1.

### Validating the Move

We'll add some guardrails to prevent players from moving outside the game board or claiming a house that's already occupied:

```dart
if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE) {
  print('Invalid row or column. Try again.');
  continue;
}
if (board[row][col] != ' ') {
  print('That cell is already occupied. Try again.');
  continue;
}
```
If a player tries to pull off an illegal move, we'll gently chide them and ask for a new move.

### Winning and Tie Conditions

Once a player makes a move, we'll check if they've won the game or if it's a tie. The `checkWin()` function scans the board to see if the current player has three marks in a row, column, or diagonal. The `checkTie()` function, on the other hand, scans the board for any empty spots. If there aren't any

, it's a tie!

```dart
if (checkWin(board, currentPlayer)) {
  printBoard(board);
  print('Player $currentPlayer wins!');
  break;
}
if (checkTie(board)) {
  printBoard(board);
  print('It\'s a tie!');
  break;
}
```
### Wrapping Up

Congratulations, you've just built a Dart-based console Tic-Tac-Toe game! This game incorporates several programming concepts, including multi-dimensional lists, loops, conditionals, and user input. 

You're really getting the hang of Dart now. Keep practicing, and remember, each line of code gets you closer to mastery. See you on Day 8 with another exciting Dart project!

In the meantime, enjoy your freshly coded game of Tic-Tac-Toe. Be sure to challenge your friends and family - and may the best strategist win!

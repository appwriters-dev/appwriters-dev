# Password strength checker

Password security is a critical aspect of modern software development. In this blog post, we're going to dive into a Dart program that checks the strength of a given password. Dart, a client-optimized language developed by Google, is commonly used in Flutter for building natively compiled applications. Let's break down this password strength checker step by step.

## Introduction to the program

The program we are discussing is written in Dart, and its primary function is to evaluate the strength of a password entered by the user. The strength is determined based on several criteria, such as length, use of uppercase and lowercase letters, inclusion of digits, and presence of special characters.

### The Code

Here's the complete code for our password strength checker:

```dart
import 'dart:io';

void main() {
  print('Enter a password:');
  final password = stdin.readLineSync()!;
  final strength = getPasswordStrength(password);
  print('Password strength: $strength');
}

String getPasswordStrength(String password) {
  int score = 0;

  // Add points for password length
  if (password.length >= 8) {
    score += 1;
  }
  if (password.length >= 12) {
    score += 1;
  }
  if (password.length >= 16) {
    score += 1;
  }

  // Add points for using a mix of uppercase and lowercase letters
  if (RegExp(r'[a-z]').hasMatch(password) && RegExp(r'[A-Z]').hasMatch(password)) {
    score += 1;
  }

  // Add points for using digits and/or symbols
  if (RegExp(r'\d').hasMatch(password)) {
    score += 1;
  }
  if (RegExp(r'[!@#$%^&*(),.?":{}|<>]').hasMatch(password)) {
    score += 1;
  }

  // Return a rating based on the total score
  if (score < 2) {
    return 'Weak';
  } else if (score < 4) {
    return 'Moderate';
  } else {
    return 'Strong';
  }
}
```

Now, let's dissect this code step by step.

## Breaking Down the Code

### Program Entry Point

```dart
void main() {
  print('Enter a password:');
  final password = stdin.readLineSync()!;
  final strength = getPasswordStrength(password);
  print('Password strength: $strength');
}
```

- `void main()`: The entry point of any Dart program.
- `print('Enter a password:')`: Prompts the user to enter a password.
- `final password = stdin.readLineSync()!`: Reads the password input from the user. The exclamation mark (`!`) is a null check operator, ensuring that the value read is not `null`.
- `final strength = getPasswordStrength(password)`: Calls the function `getPasswordStrength` with the entered password.
- `print('Password strength: $strength')`: Displays the evaluated strength of the password.

### Evaluating Password Strength

```dart
String getPasswordStrength(String password) {
  int score = 0;

  // Add points for password length
  if (password.length >= 8) {
    score += 1;
  }
  if (password.length >= 12) {
    score += 1;
  }
  if (password.length >= 16) {
    score += 1;
  }

  // Add points for using a mix of uppercase and lowercase letters
  if (RegExp(r'[a-z]').hasMatch(password) && RegExp(r'[A-Z]').hasMatch(password)) {
    score += 1;
  }

  // Add points for using digits and/or symbols
  if (RegExp(r'\d').hasMatch(password)) {
    score += 1;
  }
  if (RegExp(r'[!@#$%^&*(),.?":{}|<>]').hasMatch(password)) {
    score += 1;
  }

  // Return a rating based on the total score
  if (score < 2) {
    return 'Weak';
  } else if (score < 4) {
    return 'Moderate';
  } else {
    return 'Strong';
  }
}
```

This function takes a `String` (the password) as input and returns a `String` representing the password's strength.

The strength of the password is determined by a scoring system:

1. **Password Length**:
   - The password gets 1 point for each length milestone it crosses (8, 12, and 16 characters).

2. **Letter Case Mix**:
   - If the password contains both uppercase and lowercase letters, it scores an additional point.

3. **Digits and Symbols**:
   - A point is added if the password contains digits and another if it contains special characters like `!@#$%^&*(),.?":{}|<>`.

#### Determining the Strength

Based on the total score:
- Less than 2 points: 'Weak'
- Less than 4 points: 'Moderate'
- 4 or more points: 'Strong'

### Regular Expressions

The program uses regular expressions to check for the presence of lowercase and uppercase letters, digits, and special characters.


## Wrapping it up

This Dart program offers a basic yet effective way to assess the strength of passwords. It demonstrates fundamental programming concepts in Dart, such as input/output operations, string manipulation, and the use of regular expressions. You can extend this program by adding more criteria or refining the scoring logic to enhance its accuracy.

Remember, strong passwords are crucial for securing user data and should be an integral part of any authentication system.

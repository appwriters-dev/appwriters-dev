# Building a Temperature Converter in Dart

Hello and welcome to the first of our #Dart30 series, where we'll be creating 30 projects in 30 days using Dart programming language. Today, we'll be building a simple yet practical project - a temperature converter that can convert temperatures from Celsius to Fahrenheit and vice versa.

## Introduction to the Project

Our temperature converter is a command-line application. The user will input a temperature value, and then select whether they want to convert it to Fahrenheit or Celsius. The program will then perform the appropriate conversion and output the result.

## The Code Breakdown

Before we dive in, here's the complete code for the project:

```dart
/// Temperature converter - converts Celsius to Fahrenheit and vice versa
/// Part of #Dart30 Project, 30 Days, 30 Projects to learn Dart
import 'dart:io';

void main() {
  stdout.write('Enter temperature: ');
  var input = stdin.readLineSync();

  stdout.write('Convert to (F)ahrenheit or (C)elsius? ');
  var choice = stdin.readLineSync()?.toLowerCase();

  var temperature = double.tryParse(input ?? '');
  if (temperature == null) {
    print('Invalid temperature input');
    return;
  }

  double result;
  String unit;

  if (choice == 'f') {
    result = temperature * 9 / 5 + 32;
    unit = 'F';
  } else if (choice == 'c') {
    result = (temperature - 32) * 5 / 9;
    unit = 'C';
  } else {
    print('Invalid choice');
    return;
  }

  print('$temperature° ${unit == 'F' ? 'C' : 'F'} is $result° $unit');
}
```

Now let's break this down.

### Starting Point - main() Function

In Dart, the `main` function is the starting point of any application. It's like the conductor in an orchestra, signaling when and how the different parts should start.

```dart
void main() {
  // rest of the code
}
```

### User Input

The next section deals with taking input from the user. We use `stdout.write` to prompt the user for their input, and `stdin.readLineSync()` to capture it. The `stdout` and `stdin` comes from the `dart:io` library so make sure to import it at the top of your file.

```dart
// import
import 'dart:io';

// rest of the code inside main()
stdout.write('Enter temperature: ');
var input = stdin.readLineSync();

stdout.write('Convert to (F)ahrenheit or (C)elsius? ');
var choice = stdin.readLineSync()?.toLowerCase();
```

Here, `stdout.write` is like a television announcer asking a question, and `stdin.readLineSync()` is like our program tuning in to the microphone to hear the user's answer.

### Parsing the Input

After collecting the input, we need to make sure it's in the format we can work with. We use `double.tryParse` to convert the input string to a `double` (a decimal number).

```dart
var temperature = double.tryParse(input ?? '');
if (temperature == null) {
  print('Invalid temperature input');
  return;
}
```

This is like a translator, taking a phrase in a foreign language (the string input) and converting it into our native language (a double).

### Performing the Conversion

Now comes the meat of our project: converting the temperature based on the user's choice.

```dart
double result;
String unit;

if (choice == 'f') {
  result = temperature * 9 / 5 + 32;
  unit = 'F';
} else if (choice == 'c') {
  result = (temperature - 32) * 5 / 9;
  unit = 'C';
} else {
  print('Invalid choice');
 

 return;
}
```

Think of this part like a traffic cop at a junction. Depending on the direction (choice) the driver (user) wants to go, the cop guides them onto the correct road (conversion formula).

### Displaying the Result

Finally, we display the result of the conversion to the user.

```dart
print('$temperature° ${unit == 'F' ? 'C' : 'F'} is $result° $unit');
```

This is like the finale of a magic trick, where the magician reveals the transformed item to the audience.

## Conclusion

That wraps up our first project in the **#Dart30** series! Our temperature converter might be simple, but it showcases some fundamental Dart concepts like input/output, variable types, conditionals, and arithmetic operations. Keep practicing, and stay tuned for our next project!

Happy coding!

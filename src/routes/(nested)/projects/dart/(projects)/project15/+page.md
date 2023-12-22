# Fetching system information

Are you a Flutter developer looking to delve a bit deeper into system-level programming? Today, we're exploring a Dart program that does something pretty cool: it fetches and displays system information. This is a fantastic exercise to understand how Dart interacts with different operating systems. Let’s break it down!

## The code

```dart
///
/// Display System Information
///
import 'dart:io';

void main() {
  displaySystemInfo();
}

void displaySystemInfo() {
  print('System Information\n');

  // Operating System
  if (Platform.isWindows) {
    print('Operating System: Windows');
    print('Version: ${Platform.operatingSystemVersion}');
  } else if (Platform.isLinux) {
    print('Operating System: Linux');
    print('Version: ${Platform.operatingSystemVersion}');
  } else if (Platform.isMacOS) {
    print('Operating System: macOS');
    print('Version: ${Platform.operatingSystemVersion}');
  } else {
    print('Operating System: ${Platform.operatingSystem}');
  }

  // Processor
  print('\nProcessor Information');
  print('Number of Processors: ${Platform.numberOfProcessors}');
  print('System Architecture: ${Platform.operatingSystem}');

  // Memory
  print('\nMemory Information');
  final sysMem = ProcessInfo.currentRss;
  print('Total System Memory: ${sysMem ~/ 1024} KB');

  // Dart version
  print('\nDart Version');
  print('Version: ${Platform.version}');
  print('Dart Runtime: ${Platform.executable}');
}
```

## How it works

### Importing Necessary Libraries

```dart
import 'dart:io';
```

We start by importing `dart:io`, a core Dart library that provides APIs to work with files, directories, processes, and other I/O streams. It's crucial for accessing system information.

### The Main Function

```dart
void main() {
  displaySystemInfo();
}
```

The `main()` function is the entry point of our Dart application. It calls the `displaySystemInfo()` function, which contains the logic for fetching and displaying the system information.

### Displaying Operating System Information

```dart
if (Platform.isWindows) {
  print('Operating System: Windows');
  print('Version: ${Platform.operatingSystemVersion}');
} else if (Platform.isLinux) {
  // ... similar logic for Linux
} else if (Platform.isMacOS) {
  // ... similar logic for macOS
} else {
  print('Operating System: ${Platform.operatingSystem}');
}
```

Here, we use the `Platform` class from `dart:io` to determine the operating system. Depending on whether it's Windows, Linux, or macOS, we print out the OS name and version. If it's a different OS, we simply print its name.

### Processor Information

```dart
print('\nProcessor Information');
print('Number of Processors: ${Platform.numberOfProcessors}');
print('System Architecture: ${Platform.operatingSystem}');
```

This section prints the number of processors and the system architecture. The `Platform.numberOfProcessors` gives us the number of individual processors or cores.

### Memory Information

```dart
final sysMem = ProcessInfo.currentRss;
print('Total System Memory: ${sysMem ~/ 1024} KB');
```

We use `ProcessInfo.currentRss` to get the current resident set size, which is an estimate of how much memory the current process is using. The result is in bytes, so we divide by 1024 to convert it to kilobytes.

### Dart Version

```dart
print('\nDart Version');
print('Version: ${Platform.version}');
print('Dart Runtime: ${Platform.executable}');
```

Finally, we print the Dart version and the Dart runtime executable path. This information can be handy for debugging or logging.

## Wrapping it up

This simple yet effective Dart program is a great example of how you can interact with low-level system properties. Whether you’re building a Flutter app or a standalone Dart application, understanding these concepts can be incredibly beneficial.

To try this out, simply copy the code into your Dart environment and run it. You'll see a neat display of your system’s information!

Happy coding, and remember, the journey to becoming a great Flutter developer is filled with learning new and exciting things!

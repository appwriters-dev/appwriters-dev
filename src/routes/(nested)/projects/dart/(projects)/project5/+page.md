# Building a Text Analyzer with Dart

Hello, Dart enthusiasts! We're on to Day 5 of our series, "Building 30 projects in Dart". Today, we're taking a leap further into something that would be of immense help to budding linguists, authors, and editors - a Text Analyzer. This analyzer reads a text file and provides the number of words, sentences, and paragraphs in the text. 

## Project Overview

Imagine your Dart program to be like a team of literary analysts, each responsible for counting a different element - words, sentences, and paragraphs. You feed them a document, they scan through it, and report back their individual counts. That's pretty much what we're building today!

Before diving into the code, ensure you have Dart installed and ready to go. If not, refer back to our Day 1 post.

## The Code

Here's the complete code for our Text Analyzer:

```dart
import 'dart:io';

void main() {
  print('Enter the file path:');
  var path = stdin.readLineSync();

  if (path == null) {
    print('File path is required');
    return;
  }

  var text = File(path).readAsStringSync();
  var paragraphs = text.split('\n\n');
  var wordCount = 0;
  var sentenceCount = 0;

  for (var paragraph in paragraphs) {
    var sentences = paragraph.split(RegExp(r'[.!?]+'));
    sentenceCount += sentences.length;
    for (var sentence in sentences) {
      var words = sentence.trim().split(' ');
      wordCount += words.length;
    }
  }

  print('Number of words: $wordCount');
  print('Number of sentences: $sentenceCount');
  print('Number of paragraphs: ${paragraphs.length}');
}

```

## Importing Dart Libraries

```dart
import 'dart:io';
```

Our journey begins with importing Dart's I/O library. This library allows us to interact with the system's file and console input/output, akin to asking someone for a file and then opening it to read.

## Reading the File Path

```dart
void main() {
  print('Enter the file path:');
  var path = stdin.readLineSync();

  if (path == null) {
    print('File path is required');
    return;
  }
...
}
```

After a quick greeting asking for the file path, we read in the path entered by the user. This is akin to asking someone, "Where did you keep the file?" If no path is provided, our program gently reminds the user that it's necessary and then exits. 

## Reading the Text File

```dart
var text = File(path).readAsStringSync();
```

Using the `File` object and the `readAsStringSync()` method, we open and read the entire content of the file, much like opening a book and getting ready to count.

## Splitting Text Into Paragraphs

```dart
var paragraphs = text.split('\n\n');
```

Here, we split the text into paragraphs. It's like taking a pair of scissors and cutting wherever we see an empty line, thus giving us all the individual paragraphs.

## Counting Words, Sentences, and Paragraphs

```dart
var wordCount = 0;
var sentenceCount = 0;

for (var paragraph in paragraphs) {
  var sentences = paragraph.split(RegExp(r'[.!?]+'));
  sentenceCount += sentences.length;

  for (var sentence in sentences) {
    var words = sentence.trim().split(' ');
    wordCount += words.length;
  }
}
```

Next, we count words, sentences, and paragraphs. We begin with a zero count for words and sentences. For each paragraph, we divide it into sentences using punctuations as a guideline. The same process is repeated at a granular level to split sentences into words. This is similar to counting the number of sentences in each paragraph, and then the words in each sentence.

## Outputting the Results

```dart
print('Number of words: $wordCount');
print('Number of sentences: $sentenceCount');
print('Number of paragraphs: ${paragraphs.length}');
```

Finally, we display the results. We print the number of words, sentences, and paragraphs

 to the console. It's like announcing the results after a careful count.

## Conclusion

Voila! We've built a text analyzer that counts words, sentences, and paragraphs in a given text file. This project not only demonstrates file handling in Dart but also gives you a glimpse of regular expressions and text manipulation. 

Stay tuned for tomorrow's adventure. We'll delve into something even more exciting! Until then, happy Dart-ing!
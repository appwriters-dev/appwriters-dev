---
title: Google generative AI with Flutter using the official Dart SDK
slug: google-generative-ai-with-flutter
date: 2024-02-15
excerpt: "Use the official Dart SDK to access Google's generative AI models in Flutter and build badass apps powered by Gemini."
keywords: Dart,Flutter,Dart tutorial,Flutter tutorial,Mixins,Generative AI,Google Gemini
coverImage: 
coverWidth: 16
coverHeight: 9
categories: [Dart, Flutter]
---

In this article we are going to explore how to use the official Dart SDK which was just released today, to access Google's generative AI models in Flutter and build badass apps powered by Gemini.

## What is Gemini?

Gemini is a new generative AI model from Google that can generate images, text, and audio. It is trained on a diverse range of data, including text, images, and audio, and can generate high-quality content in a wide variety of styles.

## Get the API key
Start by visiting the [makersuite](https://makersuite.google.com/app/apikey). Click on the "Create API Key" button and follow the instructions to create a new API key. Once created, copy the API key, so that you can use it in your Flutter app.

## Install the Dart SDK

In your Flutter project, add the following dependency to your `pubspec.yaml` file:

```yaml
dependencies:
  google_generative_ai: ^0.0.1
```

Then run `flutter pub get` to install the package.

You can also install the package from the command line:

```bash
flutter pub add google_generative_ai
```

## UI

Build a simple widget to let user enter prompt to the AI model and display the generated content.

```dart
class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final _inputController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(children: [
        Expanded(
          child: ListView(
            padding: const EdgeInsets.all(16.0),
            children: [],
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Row(
            children: [
              Expanded(
                child: TextField(
                  controller: _inputController,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: 'Enter your prompt',
                  ),
                ),
              ),
              IconButton(
                onPressed: () {},
                icon: const Icon(Icons.send),
              ),
            ],
          ),
        )
      ]),
    );
  }
}
```

## Setup the SDK

1. Setup the SDK with your API key.

```dart
class _HomeState extends State<Home> {

  // replace <YOUR_API_KEY> with your actual API key
  final GenerativeModel _model =
      GenerativeModel(model: 'gemini-pro', apiKey: '<YOUR_API_KEY>');

  // ...
}
```

2. Let's setup few variables to help us handle the messages

```dart
class _HomeState extends State<Home> {
  final _inputController = TextEditingController();
  late final ChatSession _session;
  final GenerativeModel _model =
      GenerativeModel(model: 'gemini-pro', apiKey: '<YOUR_API_KEY>');
  bool _loading = false;

  @override
  void initState() {
    super.initState();
    _session = _model.startChat();
  }
  // ...
}
```

- We will use the `_loading` variable to show a loading indicator when the AI model is generating the content.
- We will use the `_session` variable to keep track of the chat session with the AI model.
- Then in `initState` we will start the chat session.

## Use the SDK to generate content

1. Update the button we have to show the progress indicator when loading also change the `onPressed` to call the `_sendMessage` function.

```dart
_loading
  ? const CircularProgressIndicator()
  : IconButton(
    onPressed: _sendMessage,
    icon: const Icon(Icons.send),
  ),
```

2. Add the `_sendMessage` function to send the prompt to the AI model and update the state when necessary

```dart
_sendMessage() async {
  setState(() {
    _loading = true;
  });
  try {
    // send the user entered prompt to the chat session of the AI model
    final response =
        await _session.sendMessage(Content.text(_inputController.text));
    var text = response.text;

    if (text == null) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('No response from API')));
      }
      return;
    } else {
      setState(() {
        _loading = false;
      });
    }
  } catch (e) {
    _showError(e.toString());
    setState(() {
      _loading = false;
    });
  } finally {
    _inputController.clear();
    setState(() {
      _loading = false;
    });
  }
}

_showError(String message) {
  if (context.mounted) {
    ScaffoldMessenger.of(context)
        .showSnackBar(SnackBar(content: Text(message)));
  }
}
```

- We first set the `_loading` to `true` and make a request to the AI model and wait for the response using `final response = await _session.sendMessage(Content.text(_inputController.text));`
- Once we get the response we check the content, if content is empty we show error message
- We also catch any error and show the error message
- Once the response is received we update the `_loading` state to `false`
- Updating state will also update the sessions in `_session`

## Display the generated content

Finally we update our `ListView` to display the content generated by the AI model.

1. As AI chat sessions returns in markdown format, we use `flutter_markdown` package to display the content.

```yaml
dependencies:
  flutter_markdown: ^0.6.0
```

You can also use the command line to install the package:

```bash
flutter pub add flutter_markdown
```

2. Update the `ListView` to display the content

```dart
ListView(
  padding: const EdgeInsets.all(16.0),
  children: [
    // loop through the history of the chat session
    ..._session.history.map(
      (content) {
        // join all the parts of the content
        var text = content.parts
            .whereType<TextPart>()
            .map<String>((e) => e.text)
            .join('');
        return Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              content.role == 'user' ? 'User:' : 'Gemini:',
              style: Theme.of(context)
                  .textTheme
                  .bodyLarge
                  ?.copyWith(fontWeight: FontWeight.bold),
            ),
            MarkdownBody(data: text),
            const SizedBox(height: 10.0),
          ],
        );
      },
    ),
  ],
),
```

- We loop through the history of the chat session and join all the parts of the content and display it using `MarkdownBody`
- We also show the role of the content, if it is from the user or from the AI model

## Complete code

```dart
import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:google_generative_ai/google_generative_ai.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Home(),
    );
  }
}



class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final _inputController = TextEditingController();
  late final ChatSession _session;
  final GenerativeModel _model =
      GenerativeModel(model: 'gemini-pro', apiKey: '<YOUR_API_KEY>');
  bool _loading = false;

  @override
  void initState() {
    super.initState();
    _session = _model.startChat();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(children: [
        Expanded(
          child: ListView(
            padding: const EdgeInsets.all(16.0),
            children: [
              ..._session.history.map(
                (content) {
                  var text = content.parts
                      .whereType<TextPart>()
                      .map<String>((e) => e.text)
                      .join('');
                  return Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        content.role == 'user' ? 'User:' : 'Gemini:',
                        style: Theme.of(context)
                            .textTheme
                            .bodyLarge
                            ?.copyWith(fontWeight: FontWeight.bold),
                      ),
                      MarkdownBody(data: text),
                      const SizedBox(height: 10.0),
                    ],
                  );
                },
              ),
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Row(
            children: [
              Expanded(
                child: TextField(
                  controller: _inputController,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: 'Enter your prompt',
                  ),
                ),
              ),
              _loading
                  ? const CircularProgressIndicator()
                  : IconButton(
                      onPressed: _sendMessage,
                      icon: const Icon(Icons.send),
                    ),
            ],
          ),
        )
      ]),
    );
  }

  _sendMessage() async {
    setState(() {
      _loading = true;
    });
    try {
      final response =
          await _session.sendMessage(Content.text(_inputController.text));
      var text = response.text;

      if (text == null) {
        if (context.mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text('No response from API')));
        }
        return;
      } else {
        setState(() {
          _loading = false;
        });
      }
    } catch (e) {
      _showError(e.toString());
      setState(() {
        _loading = false;
      });
    } finally {
      _inputController.clear();
      setState(() {
        _loading = false;
      });
    }
  }

  _showError(String message) {
    if (context.mounted) {
      ScaffoldMessenger.of(context)
          .showSnackBar(SnackBar(content: Text(message)));
    }
  }
}
```

You can also find the complete project in the [GitHub repository](https://github.com/lohanidamodar/flutter_gemini).

## Conclusion

In this article, we explored how to use the official Dart SDK to access Google's generative AI models in Flutter and build badass apps powered by Gemini. We also learned how to use the SDK to generate content and display it in a Flutter app.

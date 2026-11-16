---
id: ls03-other-files
title: Other Files
description: Bundle JSON and other files as assets and load them in your Flutter app.
---

Other files, such as a JSON file containing our own data, custom files specific to our project, or even a PDF file, can be added to assets. We can place any file in our assets folder.

## Projects

### 1. A Quiz App

Load question data from a JSON file in your assets. Create a new file `assets/questions.json` in your Flutter project and declare it under `assets:` in `pubspec.yaml`. Load it with `rootBundle.loadString('assets/questions.json')` (from `package:flutter/services.dart`) and decode it with `jsonDecode`.

```json
[
    {
      "question": "What is the capital of Nepal?",
      "answers": ["Kathmandu", "Pokhara", "Biratnagar", "Lalitpur"],
      "correctAnswer": "Kathmandu"
    },
    {
      "question": "What is the capital of India?",
      "answers": ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
      "correctAnswer": "New Delhi"
    },
    {
      "question": "What is the capital of Pakistan?",
      "answers": ["Islamabad", "Karachi", "Lahore", "Peshawar"],
      "correctAnswer": "Islamabad"
    },
    {
      "question": "What is the capital of Bangladesh?",
      "answers": ["Dhaka", "Chittagong", "Khulna", "Rajshahi"],
      "correctAnswer": "Dhaka"
    },
    {
      "question": "What is the capital of Sri Lanka?",
      "answers": ["Colombo", "Kandy", "Galle", "Jaffna"],
      "correctAnswer": "Colombo"
    }
]
```

Display these questions in a quiz app. You can reuse the `Quiz` app from the Interactivity chapter.

### 2. A Chart

Load the following user data from `assets/data.json` and display it in a chart.

```json
[
    {
      "name": "John",
      "age": 30,
      "height": 6.0,
      "weight": 150
    },
    {
      "name": "Jane",
      "age": 25,
      "height": 5.5,
      "weight": 120
    },
    {
      "name": "Jack",
      "age": 28,
      "height": 5.8,
      "weight": 130
    },
    {
      "name": "Jill",
      "age": 32,
      "height": 5.6,
      "weight": 140
    }
]
```

Plot the height and weight of the users in a chart (for example, a line chart or a bar chart).

> Hint: Use the [fl_chart](https://pub.dev/packages/fl_chart) package. Or you may use any other charting package of your choice from [pub.dev](https://pub.dev/).

## Resources

- [Flutter assets and images](https://docs.flutter.dev/ui/assets/assets-and-images)
- [AssetBundle.loadString](https://api.flutter.dev/flutter/services/AssetBundle/loadString.html)
- [JSON and serialization](https://docs.flutter.dev/data-and-backend/serialization/json)
- [FL Chart](https://pub.dev/packages/fl_chart)

---
id: getting-started-with-flutter
title: Getting started with Flutter
subtitle: In this lesson, we will learn how to get started with Flutter and create our first Flutter app.
videoId: EmCLluiaXyo
---


In this lesson, we will learn how to get started with Flutter and create our first Flutter app. We will also learn to initialize git and publish our repository to GitHub.

## Creating a new Flutter project

To create a new Flutter project, we can use the `flutter create` command. Let's create a new Flutter project called `flutter_appwrite`:

```bash
flutter create --org dev.appwriters -e flappwrite_tracker
```

This will create a new Flutter project called `flappwrite_tracker`. `--org` is used to specify the organization name and `-e` is used to specify the application with main.dart that is minimal, without comments as a starting point.

## Initializing git

In VS Code, open the `flutter_appwrite` folder. On the left side, you will see the `Source Control` icon. Click on it to open the `Source Control` tab. You will see a message that says `No source control providers registered`. Click on `Initialize Repository` to initialize git. Then, click on `+` to stage all the changes, enter the commit message on the input field. Finally, click on the checkmark icon to commit the changes.

You can also do the same thing using the terminal. Once in VS Code, open the terminal and run the following commands to initialize git:

```bash
git init
```

Then, add all the files to git and commit the changes:

```bash
git add .
git commit -m "First commit"
```

## Publishing to GitHub

The easiest way to publish repository is to use the `Publish` button on the `Source Control` tab. If you don't see the button already, click on the `...` icon and select `Publish to GitHub`. Enter the repository name and click on `Publish Repository`.

You can also do the same thing using the terminal. First, create a new repository on GitHub. Then, run the following commands to publish the repository:

```bash
git remote add origin https://github.com/[username]/flutter_appwrite.git
git push -u origin master
```

## Analyzer GitHub Action

GitHub Actions is a CI/CD service that can be used to automate workflows. We will use GitHub Actions to run the analyzer on every commit. To do that, create a new file called `analyzer.yml` in the `.github/workflows` folder and add the following code:

```yml
name: Analyze

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Flutter
        uses: subosito/flutter-action@v1
      - name: Pub get
        run: flutter pub get
      - name: Analyze
        run: flutter analyze
```

This tells the GitHub to run the analyzer on every push to the `main` branch as well as on every pull request to the `main` branch.

The analyzer will checkout the code, set up Flutter, run `flutter pub get` to install the dependencies, and finally run `flutter analyze` to analyze the code.

Commit the change and push it to GitHub. You will see that the analyzer is running.
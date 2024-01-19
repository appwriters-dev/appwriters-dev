---
id: getting-started-with-flutter
title: Getting started with Flutter
subtitle: In this lesson, we will learn how to get started with Flutter and create our first Flutter app.
videoId: EmCLluiaXyo
---

In this lesson learn to

- Create a new Flutter project
- Initialize git and make your first commit
- Publish the repository to GitHub
- Set up GitHub Actions to run the analyzer

## Creating a new Flutter project

To create a new Flutter project, we can use the `flutter create` command.

```bash
flutter create --org dev.appwriters -e flappwrite_tracker
```

> This will create a new Flutter project called `flappwrite_tracker`. `--org` is used to specify the organization name and `-e` is used to specify the application template with `main.dart` that is minimal, without comments as a starting point.

## Initializing git

Open the project folder on [VS Code](https://code.visualstudio.com/). 

- Click on the **Source Control** icon in the side panel.
- Click on **Initialize Repository** button to initialize git.
- Click on `+` to stage all the changes
- Enter a commit message on the input field.
- Click on the checkmark icon to commit the changes.

You can also do the same thing using the terminal. 

```bash
# initialize git
git init

# stage all the changes
git add .

# make the first commit
git commit -m "First commit"
```

## Publishing to GitHub

The easiest way to publish repository is to use the **Publish** button on the **Source Control** panel. 

You can also do the same thing using the terminal.

- Create a new repository on GitHub.

```bash
# add the remote repository
git remote add origin https://github.com/[username]/flutter_appwrite.git

# push to remote repository
git push -u origin master
```

## Analyzer GitHub Action

GitHub Actions is a CI/CD service that can be used to automate workflows.
- We will use GitHub Actions to run the analyzer.
- Create a new file called `analyzer.yml` in the `.github/workflows`

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

- This tells the GitHub to run the analyzer on every push to the `main` branch as well as on every pull request to the `main` branch.
- The analyzer will checkout the code,
- Set up Flutter
- Run `flutter pub get` to install the dependencies 
- Run `flutter analyze` to analyze the code.

Commit the change and push it to GitHub. You will see that the analyzer is running.
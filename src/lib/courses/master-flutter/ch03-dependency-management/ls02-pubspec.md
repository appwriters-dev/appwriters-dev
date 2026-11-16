---
id: ls02-pubspec
title: Pubspec.yaml
description: The pubspec.yaml file is the configuration file for the pub tool. The pubspec.yaml file is located in the root of the project and contains information like name, version, dependencies, and more.
---

# Pubspec

The pubspec.yaml file is the configuration file for the pub tool. The pubspec.yaml file is a YAML file. YAML is a human-readable data-serialization language. It is commonly used for configuration files and in applications where data is being stored or transmitted. YAML files are easy to read and write. The pubspec.yaml file is a YAML file that contains the name of the package, the version, the Dart SDK constraint, and the dependencies. The pubspec.yaml file is located in the root of the project.

A pubspec created by `dart create` today looks similar to this:

```yaml
name: my_app
description: A sample command-line application.
version: 1.0.0

environment:
  sdk: ^3.10.0

dependencies:
  http: ^1.6.0

dev_dependencies:
  lints: ^6.0.0
  test: ^1.25.0
```

The exact version numbers depend on your SDK and the latest package releases. The `environment` section says which Dart versions the package works with. Since Dart 3, the SDK constraint must allow only Dart 3 or later, which also means sound null safety is always on.

## Projects

### 1. Dart dependencies in pubspec.yaml

Write a program that uses the `dependencies` and `dev_dependencies` sections of the `pubspec.yaml` file to specify the dependencies of your project. This project will help you learn how to use the `pubspec.yaml` file to declare the dependencies of your project, and how to use the `dart pub get` and `dart pub upgrade` commands to manage the dependencies of your project.

### 2. Pubspec Article

Write an article about a Dart project's pubspec.yaml file, publish it and share it on social media.

- What exactly is the pubspec.yaml file?
- What purpose does the pubspec.yaml file serve?
- What is the pubspec.yaml file's structure?
- The significance of each field in the pubspec.yaml file

## Resources

- [Pubspec](https://dart.dev/tools/pub/pubspec)
- [YAML](https://yaml.org/)
- [YAML Ain't Markup Language](https://en.wikipedia.org/wiki/YAML)

---
title: Recommended Flutter Plugins and Packages for Every Project
slug: recommended-flutter-plugins-and-packages-for-every-project
date: 2023-03-02
excerpt: What makes Flutter great are it's ecosystem of packages and plugins that make it possible to build complex integrations and functionalities in a fraction of seconds. Lets look at some of the plugins and plackages that are recommended for every Flutter project you create.
coverImage:
coverWidth:
coverHeight:
categories: [Flutter]
---

Flutter's package and plugin ecosystem is huge, finding the right package can be a challenge. In this article I will share some of my recommended packages and plugins for every Flutter app you develop.

## [go_router](https://pub.dev/packages/go_router)

Now maintained officially, go router is the best solution for me to setup navigation for my application. It's easy to setup and flexible for advance use cases.

## [riverpod](https://riverpod.dev)

I use riverpod for all my state management needs. I prefer it over bloc, redux, mobx and others as it's simple yet powerful.

## [cached_network_image](https://pub.dev/packages/cached_network_image)

Images are network heavy and it's best to cache images whenever possible. The easiest way to handle image caching is using this package. It handles all the low level stuff and provides us with easy configuration to setup caching.

## [just_audio](https://pub.dev/packages/just_audio)

One of the best package out there to play audio files. I switched to this plugin from [audioplayers](https://pub.dev/packages/audioplayers) and I'm satisfied. I can play audio from url, files, byte streams and assets. So it fits for all audio palying needs.

## [auto_size_text](https://pub.dev/packages/auto_size_text)

Balancing text size in the interface is crucial to achieve design perfection. Making all the low level calculations to balance the text size is difficult. This is where this package comes in. It provides various configuration that allows us to automatically adjust the size of the text based on screen size, element size and various other parameters.

## [share_plus](https://pub.dev/packages/share_plus)

Often times in our application we want to share data from our application to other applications. For example we develop a quotes application, we would want our users to be able to share the quotes they love with their friends and family. Share plus allows us to share text, urls and images from our application.

## [url_launcher](https://pub.dev/packages/url_launcher)

If we want to activate web urls in our application so that users can click those and visit the link in the web browser, this is the perfect package. I usually have this plugin in all my application as I have at least one link may it be a link to privacy policy or about page or anything else.

## [connectivity_plus](https://pub.dev/packages/connectivity_plus)

Modern applications connect to external services using internet, and it is crucial to know the status of connection for smooth operation of operations. Connectivity plus can be used to know the status of connection, type of connection (WiFi or mobile data) and more.

## [table_calendar](https://pub.dev/packages/table_calendar)

In any application if I need a full fledged calendar, table calendar is my go-to package. It's fully customizable as well as simple to use based on use case. [Check out my tutorial series on how to use table calendar](https://www.appwriters.dev/blog/2023-01-15-flutter-calendar-part-1).

## [equatable](https://pub.dev/packages/equatable)

If you application needs lots of custom type definitions, this might be a useful package. As the package describes, `Equatable` overrides `==` and `hashCode` for you so you don't have to waste your time writing lots of boilerplate code.

## [package_info_plus](https://pub.dev/packages/package_info_plus)

Get information about your application's package, name, version, build number and more. I use this often to notify users about the updates when they are available or limit certain features based on package version on the back-end api.

## [device_info_plus](https://pub.dev/packages/device_info_plus)

Get information regarding user's device, modal, os, os version, and more. I usually save this information to know the user base and what minimum versions to support based on user base.

## [http](https://pub.dev/packages/http)

The official http client used to connect to external http services. I use it to connect to external services and REST APIs. I prefer this over Dio and other clients as this is simple and highly configurable.

## [flutter_svg](https://pub.dev/packages/flutter_svg)

SVG is a popular image format for vector image for web. It's light weight and high quality. Flutter SVG supports rendering SVG images in Flutter applications.

## [google_fonts](https://pub.dev/packages/google_fonts)

Fonts contribute a lot to the beauty of application. Google fonts package makes it a breeze to setup and use tons of fonts available for free in Google's fonts directory.

## [hive](https://pub.dev/packages/hive)

Hive for me is a easier replacement for shared preferences to save simple key-value paris to complex objects in cache. It's fast and supports all platforms.

## Dev Dependencies

Apart from above packages, I always have following packages under dev dependencies in almost all of my Flutter packages.

### [lints](https://pub.dev/packages/lints)

Official lint configuration for Dart projects and packages to maintain the code quality and standards.

### [flutter_lints](https://pub.dev/packages/flutter_lints)

Official lint configuration for Flutter projects and packages to maintain the code quality and standards.

### [flutter_launcher_icons](https://pub.dev/packages/flutter_launcher_icons)

Must have if you are preparing your Flutter application to publish to app stores. It uses simple commands and configuration to update the launcher icons for your applications. It takes care of generating all the required sizes and configurations. 

## Conclusion

Flutter is strong because of it's plugin and packages ecosystem. One thing to remember when using third party packages is to make sure the package is well written and well maintained. It's good to use package that has a good community behind it.
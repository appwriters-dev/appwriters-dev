# Building and Publishing

Learn about App signing and building a release build of your app. Learn how to publish your app to the App Store and Google Play Store. 

> **Project** - Build Quotes App
>
> Create a signed app bundle of the quotes app
>
> - If you have access to an Apple developer account, create a signed app for iOS as well
> - If you wish, you can further optimize the quotes app, use your own API and publish it to the play store and app store

By the end of this day, you will learn how to prepare a production Android and iOS build of your application and publish a Flutter app to the App Store and/or Google Play Store.

## Tips

- You can use the `flutter build` command to build a release build of your app: `flutter build appbundle` for Android and `flutter build ipa` for iOS
- Google Play requires new apps to be uploaded as an Android App Bundle (`.aab`) and signed with an upload key; Play App Signing then manages the app signing key for you
- Google Play also requires apps to target a recent Android API level, and the requirement is raised every year. Check the [current target API level requirements](https://developer.android.com/google/play/requirements/target-sdk) and update `targetSdk` if needed
- You need to have a Google Play developer account to publish apps to the Play Store. It costs a one-time $25 fee. New personal accounts must also run a closed test with a group of testers before they can publish to production
- You need an Apple Developer Program membership to publish to the App Store. It costs $99/year, for both individuals and organizations
- For iOS, upload the build to App Store Connect from Xcode (or the Transporter app), test it with [TestFlight](https://developer.apple.com/testflight/), and then submit it for review
- You need to follow the individual process for each platform to create a release build and publish in the respective app store
- You can also explore services like [Codemagic](https://codemagic.io/) to automate the build and release process

### Resources

- [Build and release Android app](https://docs.flutter.dev/deployment/android)
- [Build and release iOS app](https://docs.flutter.dev/deployment/ios)
- [Build and release macOS app](https://docs.flutter.dev/deployment/macos)
- [More platforms deployment](https://docs.flutter.dev/deployment)
- [Play Console: target API level requirements](https://developer.android.com/google/play/requirements/target-sdk)
- [TestFlight](https://developer.apple.com/testflight/)


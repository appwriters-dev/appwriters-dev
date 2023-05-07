# Understanding State Management

State is the data that can change. Modern apps are dynamic and interactive. They respond to user input and change their appearance accordingly. For example, when you tap on a button, the button changes its color to indicate that it has been tapped. This is an example of state. The button's color changes when it is tapped. However large applications have complex state that can change in many ways. Managing this state is a challenge. This is where state management comes in.

> **Project** - Authentication State
>
> Using Simple `StatefulWidget`, update the quotes app that you have been building so that it keeps track of user's authentication state and provides option to logout.
> 
> - If the user is authenticated, show quotes page and logout icon on appbar
> - if the user is not authenticated, show login page


By the end of this day, you will learn what state management is, what different approaches to state management are, and how to use them in your Flutter apps.

## Tips

- State management is a way to manage state in your app. It is not a specific package or plugin.
- State management is a complex topic. It is important to understand the basics before diving into advanced topics.
- There are many different approaches to state management. Each approach has its own pros and cons. There is no one size fits all solution.
- Depending on the size, type, and complexity of your app, you may need to use different approaches to state management.
- Some popular state management approaches are [Inherited widget](https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html), [Provider](https://pub.dev/packages/provider), [BLoC](https://bloclibrary.dev/), [Riverpod](https://riverpod.dev/), [MobX](https://pub.dev/packages/mobx), [Redux](https://pub.dev/packages/redux)


### Resources

- [State management intro](https://docs.flutter.dev/data-and-backend/state-mgmt/intro)
- [Adding interactivity with Stateful Widget](https://docs.flutter.dev/ui/interactive)
- [State management options](https://docs.flutter.dev/data-and-backend/state-mgmt/options)
- [Provider state mangement](https://pub.dev/packages/provider)
- [BLoC state management](https://bloclibrary.dev/)
- [Riverpod state management](https://riverpod.dev/)


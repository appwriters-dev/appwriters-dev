---
title: Authenticated routes
id: authenticated-routes
subtitle: "Create private and public routes and prevent unauthorized users from accessing private routes."
videoId: "hiDDqbOVoHg"
---

Using the redirect property of the GoRouter, let's create private and public routes.

## Private routes

Let's update the routes we have, and add a `/dashboard` route which should only be accessed by authenticated users.

```dart
final routerProvider = Provider<GoRouter>(
  (ref) {
    final authState = ref.watch(authProvider);
    final authNotifier = ref.watch(authProvider.notifier);
    return GoRouter(
      initialLocation: '/dashboard',
      routes: [
        GoRoute(
          name: HomePage.name,
          path: '/',
          builder: (_, __) => const HomePage(),
        ),
        GoRoute(
            name: Dashboard.name,
            path: '/dashboard',
            builder: (_, __) => const Dashboard()),
    //...
    );
  }
});
```

Finally, let's add redirect property to `GoRouter`

```dart
final routerProvider = Provider<GoRouter>(
  (ref) {
    // watch authentication state
    final authState = ref.watch(authProvider);
    final authNotifier = ref.watch(authProvider.notifier);
    return GoRouter(
      initialLocation: '/dashboard',
      routes: [
        
      ],
      redirect: (context, state) {
        final location = state.matchedLocation;

        // check for public routes and redirect to 
        // dashboard if user is authenticated
        if (location == '/login' || location == '/signup' || location == '/') {
          if (authState.status == AuthStatus.authenticated) {
            return '/dashboard';
          }
        }

        // check for private routes and redirect to
        // home page if user is not authenticated
        if (location == '/dashboard' &&
            authState.status != AuthStatus.authenticated) {
          return '/';
        }
        return null;
      },
    );
  },
);
```

- We watch the authentication state and notifier using `ref.watch(authProvider)`.
- We add a redirect property to the `GoRouter` and check if the user is authenticated or not.
- If the user is authenticated, and current route is `/login` or `/signup` we redirect to the dashboard page.
- If the user is not authenticated and tries to access the dashboard page, we redirect to the home page.
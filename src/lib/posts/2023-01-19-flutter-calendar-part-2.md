---
title: Loading and Displaying Events from Firestore in Flutter Calendar App
slug: 2023-01-19-flutter-calendar-part-2
coverImage: '/images/calendar/cover1.svg'
coverWidth: 16
coverHeight: 9
date: 2023-01-19
excerpt: In this second part of Flutter Calendar App tutorial, learn to integrate Firebase and then load and display event markers in calendar from Firestore database.
categories: [Flutter]
---

In [Part 1](/blog/2023-01-15-flutter-calendar-part-1) we learned to use Table Calendar package to display beautiful calendar in our application. In this second part of Flutter Calendar App tutorial, learn to integrate Firebase and then load and display event markers in calendar from Firestore database.

> Part 1: [Building Calendar App with Flutter](/blog/2023-01-15-flutter-calendar-part-1)

> Part 3: [Optimizing Query and Event Management](/blog/2023-01-22-flutter-calendar-part-3)

## Integrate Firebase in App

1. Install firebase tools `npm install -g firebase-tools`
2. install flutterfire CLI `pub global activate flutterfire_cli`
3. Login to firebase cli `firebase login` and follow the steps.
4. cd into your project folder `cd flutter_events_2023`
5. Run `flutterfire configure`
6. Select existing project or create new, I’m creating new project
    
    ![Create new firebase project](/images/calendar/calendar2.01.png)
    
7. Select the platforms to configure for, I left the default.
    
    ![select all paltforms](/images/calendar/calendar2.03.png)
    
8. Select yes to upgrade android build settings
    
    ![upgrade android settings](/images/calendar/calendar2.04.png)
    
9. Now you are done setting up project and configuring flutter app
    
    ![Firebase configured](/images/calendar/calendar2.05.png)

## Setup Firestore with some Events

1. Go to [https://console.firebase.google.com/](https://console.firebase.google.com/) and select the project you added `flutter-fire-events`
    
    ![Firebase console project overview](/images/calendar/calendar2.06.png)
    
2. Select Cloud Firestore from the overview page to configure the database
3. Click on Create database
    
    ![Create firestore database](/images/calendar/calendar2.07.png)
    
4. For the simplicity select `Start in test mode`, however for production you need to setup proper security rules. The security rules are not in the scope of this article
    
    ![Security rules](/images/calendar/calendar2.08.png)
    
5. Select the location suitable to your application and click enable
    
    ![Data center location](/images/calendar/calendar2.09.png)
    
6. From the dashboard, click start collection and create a `events` collection and click **Next**
    
    ![create events collection](/images/calendar/calendar2.10.png)
    
7. Add a first event, we are adding `title`, `description` and `date` field. based on your requirement you can add as many information as you want.
    
    ![Add dummy event](/images/calendar/calendar2.11.png)
    
8. Click save and you should see the `events` collection. 
    
    ![events collection with documents](/images/calendar/calendar2.12.png)
    
9. You can add more events by tapping on the `Add document`
    
    ![Add more events](/images/calendar/calendar2.13.png)
    

## Initialize Firebase

1. Add `firebase_core` and `cloud_firestore` dependency on top of existing ones
    
    ```bash
    flutter pub add firebase_core cloud_firestore
    ```
    
2. Run `flutterfire configure` again and select the project you previously created `flutter-fire-events` to make sure configurations are up to date
3. Open `main.dart` and import firebase_core and the firebase_options created by the flutterfire_cli
    
    ```dart
    import 'package:firebase_core/firebase_core.dart';
    import './firebase_options.dart';
    ```
    
4. Update `main` function to initialize firebase
    
    ```dart
    void main() async {
      WidgetsFlutterBinding.ensureInitialized();
      await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
      runApp(const MyApp());
    }
    ```
    
5. Now run the project to make sure everything is working. If you are running on iOS or macOS you might run into issues with minimum deployment target. If that happens open corresponding macOS or iOS project in Xcode and set the deployment target as minimum required by the firebase plugins. As of writing this it was `10.12`.

## Loading & Displaying Events

1. First let’s define a model for our events data
    
    ```dart
    class Event {
      final String title;
      final String? description;
      final DateTime date;
      final String id;
      Event({
        required this.title,
        this.description,
        required this.date,
        required this.id,
      });
    
      factory Event.fromFirestore(DocumentSnapshot<Map<String, dynamic>> snapshot,
          [SnapshotOptions? options]) {
        final data = snapshot.data()!;
        return Event(
          date: data['date'].toDate(),
          title: data['title'],
          description: data['description'],
          id: snapshot.id,
        );
      }
    
      Map<String, Object?> toFirestore() {
        return {
          "date": Timestamp.fromDate(date),
          "title": title,
          "description": description
        };
      }
    }
    ```
    
    Update the fields as per your requirement.
    
2. The easiest way to provide events to the calendar is to use LinkedHashMap, so let’s define one in the StatefulWidget where we display our TableCalendar define and initialize
    
    ```bash
    late Map<DateTime, List<Event>> _events;
    
    @override
    void initState() {
      super.initState();
      _events = LinkedHashMap(
        equals: isSameDay,
        hashCode: getHashCode,
      );
    	//...
    }
    ```
    
3. The isSameDay function is provided by TableCalendar, but we need to define the getHashCode function as the follow
    
    ```bash
    int getHashCode(DateTime key) {
      return key.day * 1000000 + key.month * 10000 + key.year;
    }
    ```
    
    Just making sure we get unique hash code for each date.
    
4. Next, let’s write a function that will load events from our events collection and add it to `_events`
    
    ```dart
    _loadFirestoreEvents() async {
      final snap = await FirebaseFirestore.instance
          .collection('events')
          .withConverter(
              fromFirestore: Event.fromFirestore,
              toFirestore: (event, options) => event.toFirestore())
          .get();
      for (var doc in snap.docs) {
        final event = doc.data();
        final day = DateTime.utc(event.date.year, event.date.month, event.date.day);
        if (_events[day] == null) {
          _events[day] = [];
        }
        _events[day]!.add(event);
      }
      setState(() {});
    }
    ```
    
    Don’t forget to call `_loadFirestoreEvents` in `initState` so that event’s are loaded in the beginning.
    
5. Finally let’s define and provide `_getEventForTheDay` function to our calendar so that it can display event markers
    
    ```dart
    List _getEventsForTheDay(DateTime day) {
      return _events[day] ?? [];
    }
    
    // update table calendar to provide eventLoader property
    body: TableCalendar(
      eventLoader: _getEventsForTheDay,
    	//...
    },
    ```
    
6. Now restart your application and you should see the event markers in the dates that you have added dummy events to your database for.
    
    ![Calendar with Events](/images/calendar/calendar2.14.png)
    

## Conclusion

In this tutorial we learned how to configure firebase and load and display events from firebase in our application. In the further tutorials we will learn to further optimize the firebase query, load and display events of the selected date and also manage events (add, update, delete) from our application. You can find the completed source code in the `p2-firestore-events` branch.

[https://github.com/lohanidamodar/flutter_events_2023/tree/p2-firestore-events](https://github.com/lohanidamodar/flutter_events_2023/tree/p2-firestore-events)

Thank you for reading this tutorial. See you again in the next one.
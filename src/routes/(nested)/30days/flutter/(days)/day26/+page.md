# Advanced Persistence

When it comes to complex data, a simple key-value store is not enough. In this section, you will learn about more advanced persistence techniques in Flutter, such as using a local database to store larger amounts of data. You will also learn to use SQLite to save complex data locally.

> **Project** - Manage Quotes
>
> Duplicate your quotes app, and add the ability to add, and delete quotes. The quotes should be persisted locally on the device using [SQlite](https://pub.dev/packages/sqflite) database
>
> - Add a FloatingActionButton on the quotes page, and use it to navigate to the add quote page.
> - Add a form on the add quote page to allow users to add a new quote and save it to the database
> - Add a button on the quotes page to allow users to delete a quote from database
> 

By the end of this day, you will learn about more advanced persistence techniques in Flutter, and learn to use SQLite to save complex data locally.

## Tips

- SQLite is a lightweight database management system that is widely used in mobile app development. It is embedded in the app itself and does not require a separate server. In Flutter, the sqflite package provides a simple and efficient way to use SQLite databases.

- It helps if you have some knowledge of SQL, in-fact it is recommended that you learn basics of SQL.
- It's always recommended to use `try-catch` block to handle exceptions when working with databases.

### Resources

- [SQLite package](https://pub.dev/packages/sqflite)
- [SQlite official docs](https://www.sqlite.org/docs.html)
- [Official documentation on using sqlite](https://docs.flutter.dev/cookbook/persistence/sqlite)

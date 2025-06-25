# Building a Simple HTTP Server in Dart

Ready to take your Dart skills to the next level? Today we're diving into network programming by building a simple HTTP server! This project introduces you to Dart's powerful networking capabilities and shows how easy it is to create a web server that can handle HTTP requests and serve content.

## The Project

Our HTTP server will:
- Listen for incoming HTTP requests on a specified port
- Serve static content (HTML, CSS, JavaScript files)
- Handle different HTTP methods (GET, POST)
- Provide basic routing functionality
- Log incoming requests

This is perfect for understanding how web servers work under the hood and gives you a foundation for building more complex web applications.

## The Code

```dart
///
/// Simple HTTP Server in Dart
///
import 'dart:io';
import 'dart:convert';

void main() async {
  const port = 8080;
  const host = 'localhost';
  
  print('Starting HTTP server...');
  
  try {
    final server = await HttpServer.bind(host, port);
    print('Server running at http://$host:$port/');
    print('Press Ctrl+C to stop the server\n');
    
    await for (HttpRequest request in server) {
      await handleRequest(request);
    }
  } catch (e) {
    print('Error starting server: $e');
  }
}

Future<void> handleRequest(HttpRequest request) async {
  final method = request.method;
  final uri = request.uri;
  final timestamp = DateTime.now().toIso8601String();
  
  // Log the request
  print('[$timestamp] $method ${uri.path}');
  
  try {
    // Handle different routes
    switch (uri.path) {
      case '/':
        await serveHomePage(request);
        break;
      case '/about':
        await serveAboutPage(request);
        break;
      case '/api/status':
        await serveApiStatus(request);
        break;
      case '/api/echo':
        await handleEcho(request);
        break;
      default:
        await serve404(request);
    }
  } catch (e) {
    print('Error handling request: $e');
    await serveError(request);
  }
}

Future<void> serveHomePage(HttpRequest request) async {
  const html = '''
<!DOCTYPE html>
<html>
<head>
    <title>Dart HTTP Server</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { color: #0175C2; }
        .nav { margin: 20px 0; }
        .nav a { margin-right: 15px; color: #0175C2; text-decoration: none; }
        .nav a:hover { text-decoration: underline; }
        .code { background: #f4f4f4; padding: 10px; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="header">🚀 Dart HTTP Server</h1>
        <p>Welcome to our simple HTTP server built with Dart!</p>
        
        <div class="nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/api/status">API Status</a>
        </div>
        
        <h2>Features</h2>
        <ul>
            <li>Static content serving</li>
            <li>Basic routing</li>
            <li>API endpoints</li>
            <li>Request logging</li>
        </ul>
        
        <h2>Try the API</h2>
        <div class="code">
            <p><strong>GET</strong> /api/status - Check server status</p>
            <p><strong>POST</strong> /api/echo - Echo back your message</p>
        </div>
    </div>
</body>
</html>
  ''';
  
  request.response
    ..headers.contentType = ContentType.html
    ..write(html)
    ..close();
}

Future<void> serveAboutPage(HttpRequest request) async {
  const html = '''
<!DOCTYPE html>
<html>
<head>
    <title>About - Dart HTTP Server</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { color: #0175C2; }
        .nav a { margin-right: 15px; color: #0175C2; text-decoration: none; }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="header">About This Server</h1>
        <p><a href="/">← Back to Home</a></p>
        
        <p>This is a simple HTTP server built with Dart as part of the 30 Dart Projects series.</p>
        
        <h2>What You're Learning</h2>
        <ul>
            <li>HTTP server creation with dart:io</li>
            <li>Request handling and routing</li>
            <li>Serving static content</li>
            <li>JSON API endpoints</li>
            <li>Asynchronous programming with async/await</li>
        </ul>
        
        <p>Server built with ❤️ using Dart</p>
    </div>
</body>
</html>
  ''';
  
  request.response
    ..headers.contentType = ContentType.html
    ..write(html)
    ..close();
}

Future<void> serveApiStatus(HttpRequest request) async {
  final status = {
    'status': 'running',
    'timestamp': DateTime.now().toIso8601String(),
    'uptime': 'N/A',
    'dart_version': Platform.version,
    'requests_handled': 'counting...'
  };
  
  request.response
    ..headers.contentType = ContentType.json
    ..write(jsonEncode(status))
    ..close();
}

Future<void> handleEcho(HttpRequest request) async {
  if (request.method == 'POST') {
    try {
      final body = await utf8.decoder.bind(request).join();
      final response = {
        'echo': body,
        'method': request.method,
        'timestamp': DateTime.now().toIso8601String(),
        'headers': request.headers.toString()
      };
      
      request.response
        ..headers.contentType = ContentType.json
        ..write(jsonEncode(response))
        ..close();
    } catch (e) {
      await serveError(request);
    }
  } else {
    final response = {
      'message': 'Send a POST request with data to echo it back',
      'example': 'curl -X POST -d "Hello World" http://localhost:8080/api/echo'
    };
    
    request.response
      ..headers.contentType = ContentType.json
      ..write(jsonEncode(response))
      ..close();
  }
}

Future<void> serve404(HttpRequest request) async {
  const html = '''
<!DOCTYPE html>
<html>
<head>
    <title>404 - Not Found</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; text-align: center; }
        .error { color: #d32f2f; }
    </style>
</head>
<body>
    <h1 class="error">404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <p><a href="/">Go back home</a></p>
</body>
</html>
  ''';
  
  request.response
    ..statusCode = HttpStatus.notFound
    ..headers.contentType = ContentType.html
    ..write(html)
    ..close();
}

Future<void> serveError(HttpRequest request) async {
  request.response
    ..statusCode = HttpStatus.internalServerError
    ..write('Internal Server Error')
    ..close();
}
```

## How It Works

### Setting Up the Server

```dart
const port = 8080;
const host = 'localhost';

final server = await HttpServer.bind(host, port);
```

We start by creating an HTTP server that binds to localhost on port 8080. The `HttpServer.bind()` method returns a `Future<HttpServer>`, so we use `await` to wait for the server to start.

### Listening for Requests

```dart
await for (HttpRequest request in server) {
  await handleRequest(request);
}
```

The server acts as a stream of `HttpRequest` objects. We use an async for loop to listen for incoming requests and handle each one.

### Request Routing

```dart
switch (uri.path) {
  case '/':
    await serveHomePage(request);
    break;
  case '/about':
    await serveAboutPage(request);
    break;
  // ... more routes
}
```

We implement basic routing by checking the request's URI path and calling the appropriate handler function.

### Serving Static Content

```dart
request.response
  ..headers.contentType = ContentType.html
  ..write(html)
  ..close();
```

For each route, we set the appropriate content type, write our response content, and close the response stream.

### JSON API Endpoints

```dart
final status = {
  'status': 'running',
  'timestamp': DateTime.now().toIso8601String(),
  // ... more data
};

request.response
  ..headers.contentType = ContentType.json
  ..write(jsonEncode(status))
  ..close();
```

We can easily create JSON APIs by encoding Dart objects and setting the content type to JSON.

### Handling POST Requests

```dart
final body = await utf8.decoder.bind(request).join();
```

For POST requests, we read the request body using UTF-8 decoding and process the data accordingly.

## Running the Server

1. Save the code to a file (e.g., `http_server.dart`)
2. Run it with: `dart http_server.dart`
3. Open your browser and visit `http://localhost:8080`

## Testing the API

You can test the API endpoints using curl:

```bash
# Check server status
curl http://localhost:8080/api/status

# Echo a message
curl -X POST -d "Hello from Dart!" http://localhost:8080/api/echo
```

## What You've Learned

This project introduces several important concepts:

- **Network Programming**: Creating HTTP servers and handling requests
- **Asynchronous Programming**: Using async/await for non-blocking operations
- **Stream Processing**: Working with streams of HTTP requests
- **Content Types**: Serving different types of content (HTML, JSON)
- **Request Routing**: Directing requests to appropriate handlers
- **Error Handling**: Gracefully handling errors and edge cases

## Next Steps

You can extend this server by:
- Adding file upload capabilities
- Implementing middleware for authentication
- Adding database integration
- Creating a REST API with CRUD operations
- Adding WebSocket support for real-time communication

This foundation gives you everything you need to build more complex web applications with Dart!

Happy coding! 🚀
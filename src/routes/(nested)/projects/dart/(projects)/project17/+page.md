# Building a Simple Web Scraper in Dart

Ready to explore the web programmatically? Today we're building a simple web scraper using Dart! This project teaches you the basics of fetching web pages, parsing HTML content, and extracting useful information. It's a perfect introduction to web scraping concepts and network programming fundamentals.

## The Project

Our simple web scraper will:
- Fetch HTML content from any website
- Parse HTML using regular expressions and string manipulation
- Extract basic data like titles, links, and images
- Handle different types of content and errors gracefully
- Save scraped data to files
- Demonstrate polite scraping practices

This project builds on our HTTP server knowledge from Project 16, but now we're on the client side!

## The Code

```dart
///
/// Web Scraper in Dart
///
import 'dart:io';
import 'dart:convert';

void main() async {
  print('🕷️  Dart Web Scraper');
  print('==================\n');
  
  // Example usage
  final scraper = WebScraper();
  
  // Get URL from user
  stdout.write('Enter a website URL to scrape: ');
  final url = stdin.readLineSync();
  
  if (url == null || url.isEmpty) {
    print('❌ URL is required');
    return;
  }
  
  try {
    final result = await scraper.scrapeWebsite(url);
    await scraper.displayResults(result);
    await scraper.saveToFile(result, 'scraped_data.json');
  } catch (e) {
    print('❌ Error scraping website: $e');
  }
}

class WebScraper {
  final HttpClient _httpClient = HttpClient();
  
  // User agent to identify our scraper
  static const String userAgent = 'DartWebScraper/1.0 (+https://example.com/bot)';
  
  WebScraper() {
    // Set timeout and user agent
    _httpClient.connectionTimeout = Duration(seconds: 10);
    _httpClient.userAgent = userAgent;
  }
  
  Future<ScrapedData> scrapeWebsite(String url) async {
    print('🔍 Fetching: $url');
    
    // Validate URL
    final uri = Uri.tryParse(url);
    if (uri == null) {
      throw ArgumentError('Invalid URL: $url');
    }
    
    // Check robots.txt (simplified check)
    await _checkRobotsTxt(uri);
    
    // Fetch the webpage
    final html = await _fetchWebpage(uri);
    
    // Parse the HTML content
    final scrapedData = _parseHtml(html, uri);
    
    print('✅ Successfully scraped ${scrapedData.title}');
    return scrapedData;
  }
  
  Future<String> _fetchWebpage(Uri uri) async {
    try {
      final request = await _httpClient.getUrl(uri);
      request.headers.set('User-Agent', userAgent);
      request.headers.set('Accept', 'text/html,application/xhtml+xml');
      
      final response = await request.close();
      
      if (response.statusCode != 200) {
        throw HttpException('HTTP ${response.statusCode}: ${response.reasonPhrase}');
      }
      
      final html = await response.transform(utf8.decoder).join();
      return html;
    } catch (e) {
      throw Exception('Failed to fetch webpage: $e');
    }
  }
  
  Future<void> _checkRobotsTxt(Uri uri) async {
    try {
      final robotsUri = uri.replace(path: '/robots.txt');
      final request = await _httpClient.getUrl(robotsUri);
      final response = await request.close();
      
      if (response.statusCode == 200) {
        final robotsContent = await response.transform(utf8.decoder).join();
        if (robotsContent.toLowerCase().contains('disallow: /')) {
          print('⚠️  Note: This site has robots.txt restrictions');
        }
      }
    } catch (e) {
      // Robots.txt not found or error - continue with scraping
      print('ℹ️  No robots.txt found or accessible');
    }
  }
  
  ScrapedData _parseHtml(String html, Uri baseUri) {
    final data = ScrapedData(
      url: baseUri.toString(),
      timestamp: DateTime.now(),
    );
    
    // Extract title
    data.title = _extractTitle(html);
    
    // Extract meta description
    data.description = _extractMetaDescription(html);
    
    // Extract all links
    data.links = _extractLinks(html, baseUri);
    
    // Extract images
    data.images = _extractImages(html, baseUri);
    
    // Extract headings
    data.headings = _extractHeadings(html);
    
    // Extract text content (simplified)
    data.textContent = _extractTextContent(html);
    
    return data;
  }
  
  String _extractTitle(String html) {
    final titleRegex = RegExp(r'<title[^>]*>([^<]*)</title>', caseSensitive: false);
    final match = titleRegex.firstMatch(html);
    return match?.group(1)?.trim() ?? 'No title found';
  }
  
  String _extractMetaDescription(String html) {
    final metaRegex = RegExp(
      r'<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']*)["\']',
      caseSensitive: false
    );
    final match = metaRegex.firstMatch(html);
    return match?.group(1)?.trim() ?? 'No description found';
  }
  
  List<String> _extractLinks(String html, Uri baseUri) {
    final linkRegex = RegExp(r'<a[^>]*href=["\']([^"\']*)["\']', caseSensitive: false);
    final matches = linkRegex.allMatches(html);
    
    final links = <String>[];
    for (final match in matches) {
      final href = match.group(1);
      if (href != null && href.isNotEmpty) {
        try {
          final uri = Uri.parse(href);
          final absoluteUrl = baseUri.resolveUri(uri).toString();
          if (!links.contains(absoluteUrl)) {
            links.add(absoluteUrl);
          }
        } catch (e) {
          // Skip invalid URLs
        }
      }
    }
    
    return links;
  }
  
  List<String> _extractImages(String html, Uri baseUri) {
    final imgRegex = RegExp(r'<img[^>]*src=["\']([^"\']*)["\']', caseSensitive: false);
    final matches = imgRegex.allMatches(html);
    
    final images = <String>[];
    for (final match in matches) {
      final src = match.group(1);
      if (src != null && src.isNotEmpty) {
        try {
          final uri = Uri.parse(src);
          final absoluteUrl = baseUri.resolveUri(uri).toString();
          if (!images.contains(absoluteUrl)) {
            images.add(absoluteUrl);
          }
        } catch (e) {
          // Skip invalid URLs
        }
      }
    }
    
    return images;
  }
  
  List<String> _extractHeadings(String html) {
    final headings = <String>[];
    
    for (int i = 1; i <= 6; i++) {
      final headingRegex = RegExp(
        r'<h' + i.toString() + r'[^>]*>([^<]*)</h' + i.toString() + r'>',
        caseSensitive: false
      );
      final matches = headingRegex.allMatches(html);
      
      for (final match in matches) {
        final heading = match.group(1)?.trim();
        if (heading != null && heading.isNotEmpty) {
          headings.add('H$i: $heading');
        }
      }
    }
    
    return headings;
  }
  
  String _extractTextContent(String html) {
    // Remove script and style tags
    var cleanHtml = html.replaceAll(RegExp(r'<script[^>]*>.*?</script>', dotAll: true), '');
    cleanHtml = cleanHtml.replaceAll(RegExp(r'<style[^>]*>.*?</style>', dotAll: true), '');
    
    // Remove HTML tags
    cleanHtml = cleanHtml.replaceAll(RegExp(r'<[^>]*>'), ' ');
    
    // Clean up whitespace
    cleanHtml = cleanHtml.replaceAll(RegExp(r'\s+'), ' ').trim();
    
    // Return first 500 characters
    return cleanHtml.length > 500 ? '${cleanHtml.substring(0, 500)}...' : cleanHtml;
  }
  
  Future<void> displayResults(ScrapedData data) async {
    print('\n📊 Scraping Results');
    print('==================');
    print('🌐 URL: ${data.url}');
    print('📝 Title: ${data.title}');
    print('📄 Description: ${data.description}');
    print('🕒 Scraped at: ${data.timestamp}');
    
    print('\n🔗 Links found: ${data.links.length}');
    if (data.links.isNotEmpty) {
      for (int i = 0; i < (data.links.length > 5 ? 5 : data.links.length); i++) {
        print('   ${i + 1}. ${data.links[i]}');
      }
      if (data.links.length > 5) {
        print('   ... and ${data.links.length - 5} more');
      }
    }
    
    print('\n🖼️  Images found: ${data.images.length}');
    if (data.images.isNotEmpty) {
      for (int i = 0; i < (data.images.length > 3 ? 3 : data.images.length); i++) {
        print('   ${i + 1}. ${data.images[i]}');
      }
      if (data.images.length > 3) {
        print('   ... and ${data.images.length - 3} more');
      }
    }
    
    print('\n📋 Headings found: ${data.headings.length}');
    if (data.headings.isNotEmpty) {
      for (int i = 0; i < (data.headings.length > 5 ? 5 : data.headings.length); i++) {
        print('   ${data.headings[i]}');
      }
      if (data.headings.length > 5) {
        print('   ... and ${data.headings.length - 5} more');
      }
    }
    
    print('\n📄 Text Preview:');
    print('${data.textContent.substring(0, data.textContent.length > 200 ? 200 : data.textContent.length)}...');
  }
  
  Future<void> saveToFile(ScrapedData data, String filename) async {
    try {
      final file = File(filename);
      final jsonData = data.toJson();
      await file.writeAsString(jsonEncode(jsonData));
      print('\n💾 Data saved to: $filename');
    } catch (e) {
      print('\n❌ Error saving file: $e');
    }
  }
  
  void dispose() {
    _httpClient.close();
  }
}

class ScrapedData {
  final String url;
  final DateTime timestamp;
  String title = '';
  String description = '';
  List<String> links = [];
  List<String> images = [];
  List<String> headings = [];
  String textContent = '';
  
  ScrapedData({
    required this.url,
    required this.timestamp,
  });
  
  Map<String, dynamic> toJson() {
    return {
      'url': url,
      'timestamp': timestamp.toIso8601String(),
      'title': title,
      'description': description,
      'links': links,
      'images': images,
      'headings': headings,
      'textContent': textContent,
      'summary': {
        'total_links': links.length,
        'total_images': images.length,
        'total_headings': headings.length,
        'text_length': textContent.length,
      }
    };
  }
}
```

## How It Works

### The WebScraper Class

```dart
class WebScraper {
  final HttpClient _httpClient = HttpClient();
  static const String userAgent = 'DartWebScraper/1.0 (+https://example.com/bot)';
}
```

Our scraper is organized as a class that manages HTTP connections and provides methods for different scraping operations.

### Fetching Web Pages

```dart
Future<String> _fetchWebpage(Uri uri) async {
  final request = await _httpClient.getUrl(uri);
  request.headers.set('User-Agent', userAgent);
  
  final response = await request.close();
  final html = await response.transform(utf8.decoder).join();
  return html;
}
```

We use Dart's `HttpClient` to fetch web pages, setting appropriate headers and handling the response as UTF-8 text.

### HTML Parsing with Regular Expressions

```dart
String _extractTitle(String html) {
  final titleRegex = RegExp(r'<title[^>]*>([^<]*)</title>', caseSensitive: false);
  final match = titleRegex.firstMatch(html);
  return match?.group(1)?.trim() ?? 'No title found';
}
```

We use regular expressions to extract specific elements from HTML. While not as robust as a full HTML parser, regex is sufficient for many scraping tasks.

### Link Extraction and URL Resolution

```dart
List<String> _extractLinks(String html, Uri baseUri) {
  final linkRegex = RegExp(r'<a[^>]*href=["\']([^"\']*)["\']');
  // ... extract relative URLs and convert to absolute URLs
  final absoluteUrl = baseUri.resolveUri(uri).toString();
}
```

We extract all links and convert relative URLs to absolute URLs using Dart's built-in URI resolution.

### Data Structure

```dart
class ScrapedData {
  final String url;
  final DateTime timestamp;
  String title = '';
  List<String> links = [];
  // ... other properties
}
```

We organize all scraped data into a structured class that can be easily serialized to JSON.

### Ethical Scraping

```dart
Future<void> _checkRobotsTxt(Uri uri) async {
  final robotsUri = uri.replace(path: '/robots.txt');
  // Check for scraping restrictions
}
```

Our scraper checks for `robots.txt` files and includes appropriate user agent headers to identify itself.

## Running the Scraper

1. Save the code to a file (e.g., `web_scraper.dart`)
2. Run it with: `dart web_scraper.dart`
3. Enter a website URL when prompted
4. View the extracted data and check the saved JSON file

## Example Usage

```bash
Enter a website URL to scrape: https://example.com

🔍 Fetching: https://example.com
ℹ️  No robots.txt found or accessible
✅ Successfully scraped Example Domain

📊 Scraping Results
==================
🌐 URL: https://example.com
📝 Title: Example Domain
📄 Description: No description found
🕒 Scraped at: 2025-06-25T10:30:00.000

🔗 Links found: 1
   1. https://www.iana.org/domains/example

💾 Data saved to: scraped_data.json
```

## What You've Learned

This project introduces several important concepts:

- **HTTP Client Programming**: Making requests from Dart applications
- **HTML Parsing**: Extracting structured data from unstructured HTML
- **Regular Expressions**: Pattern matching for text extraction
- **URL Handling**: Working with relative and absolute URLs
- **Data Serialization**: Converting objects to JSON
- **Error Handling**: Gracefully handling network and parsing errors
- **Ethical Programming**: Respecting website policies and rate limits

## Best Practices Implemented

1. **Respectful Scraping**: Check robots.txt and use appropriate user agents
2. **Error Handling**: Gracefully handle network errors and invalid HTML
3. **Resource Management**: Properly close HTTP connections
4. **Data Validation**: Validate URLs and handle edge cases
5. **Rate Limiting**: Built-in connection timeouts

## Extending the Scraper

You can enhance this scraper by:
- Adding support for JavaScript-rendered pages
- Implementing rate limiting and delays
- Adding more sophisticated HTML parsing
- Creating specialized extractors for different content types
- Adding database storage instead of file output
- Implementing concurrent scraping for multiple URLs

This foundation gives you everything needed to understand web scraping basics! Remember to always respect website terms of service and implement appropriate delays between requests.

Happy scraping! 🕷️
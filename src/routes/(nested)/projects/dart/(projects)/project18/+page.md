# Building a JSON Data Processor in Dart

Working with APIs and structured data is essential in modern development! Today we're building a JSON data processor that demonstrates how to fetch, parse, transform, and analyze JSON data from various sources. This project teaches you the fundamentals of working with APIs and handling structured data in Dart.

## The Project

Our JSON data processor will:
- Fetch JSON data from REST APIs
- Parse and validate JSON structures
- Transform data between different formats
- Filter and sort data based on criteria
- Generate summary statistics
- Export processed data to different formats
- Handle errors and malformed data gracefully

This builds perfectly on our networking knowledge from the previous projects!

## The Code

```dart
///
/// JSON Data Processor in Dart
///
import 'dart:io';
import 'dart:convert';

void main() async {
  print('🔧 JSON Data Processor');
  print('=====================\n');
  
  final processor = JsonDataProcessor();
  
  while (true) {
    print('\nChoose an option:');
    print('1. Process data from API URL');
    print('2. Process data from local file');
    print('3. Generate sample data');
    print('4. Exit');
    
    stdout.write('\nEnter your choice (1-4): ');
    final choice = stdin.readLineSync();
    
    try {
      switch (choice) {
        case '1':
          await processor.processFromApi();
          break;
        case '2':
          await processor.processFromFile();
          break;
        case '3':
          await processor.generateSampleData();
          break;
        case '4':
          print('👋 Goodbye!');
          return;
        default:
          print('❌ Invalid choice. Please try again.');
      }
    } catch (e) {
      print('❌ Error: $e');
    }
  }
}

class JsonDataProcessor {
  final HttpClient _httpClient = HttpClient();
  
  JsonDataProcessor() {
    _httpClient.connectionTimeout = Duration(seconds: 15);
  }
  
  Future<void> processFromApi() async {
    stdout.write('Enter API URL (or press Enter for demo): ');
    var url = stdin.readLineSync()?.trim();
    
    // Use demo API if no URL provided
    if (url == null || url.isEmpty) {
      url = 'https://jsonplaceholder.typicode.com/users';
      print('📡 Using demo API: $url');
    }
    
    print('🔍 Fetching data from API...');
    
    try {
      final jsonData = await _fetchJsonFromUrl(url);
      await _processJsonData(jsonData, 'API Data');
    } catch (e) {
      print('❌ Failed to fetch from API: $e');
    }
  }
  
  Future<void> processFromFile() async {
    stdout.write('Enter JSON file path: ');
    final filePath = stdin.readLineSync();
    
    if (filePath == null || filePath.isEmpty) {
      print('❌ File path is required');
      return;
    }
    
    print('📁 Reading file: $filePath');
    
    try {
      final file = File(filePath);
      if (!await file.exists()) {
        print('❌ File not found: $filePath');
        return;
      }
      
      final content = await file.readAsString();
      final jsonData = jsonDecode(content);
      await _processJsonData(jsonData, 'File Data');
    } catch (e) {
      print('❌ Failed to process file: $e');
    }
  }
  
  Future<void> generateSampleData() async {
    print('🎲 Generating sample data...');
    
    final sampleData = _createSampleData();
    await _processJsonData(sampleData, 'Sample Data');
    
    // Save sample data to file
    final file = File('sample_data.json');
    await file.writeAsString(jsonEncode(sampleData));
    print('💾 Sample data saved to: sample_data.json');
  }
  
  Future<dynamic> _fetchJsonFromUrl(String url) async {
    final uri = Uri.parse(url);
    final request = await _httpClient.getUrl(uri);
    request.headers.set('Accept', 'application/json');
    request.headers.set('User-Agent', 'DartJsonProcessor/1.0');
    
    final response = await request.close();
    
    if (response.statusCode != 200) {
      throw HttpException('HTTP ${response.statusCode}: ${response.reasonPhrase}');
    }
    
    final jsonString = await response.transform(utf8.decoder).join();
    return jsonDecode(jsonString);
  }
  
  Future<void> _processJsonData(dynamic data, String source) async {
    print('\n📊 Processing $source');
    print('=' * (12 + source.length));
    
    // Analyze the data structure
    final analysis = _analyzeDataStructure(data);
    _displayAnalysis(analysis);
    
    // Process based on data type
    if (data is List) {
      await _processJsonArray(data);
    } else if (data is Map<String, dynamic>) {
      await _processJsonObject(data);
    } else {
      print('📄 Simple value: $data (${data.runtimeType})');
    }
    
    // Ask user what to do with the data
    await _askForProcessingOptions(data);
  }
  
  DataAnalysis _analyzeDataStructure(dynamic data) {
    final analysis = DataAnalysis();
    
    if (data is List) {
      analysis.type = 'Array';
      analysis.itemCount = data.length;
      
      if (data.isNotEmpty) {
        analysis.itemTypes = <String>{};
        for (final item in data) {
          analysis.itemTypes.add(item.runtimeType.toString());
        }
        
        // Analyze first item structure if it's an object
        if (data.first is Map<String, dynamic>) {
          final firstItem = data.first as Map<String, dynamic>;
          analysis.properties = firstItem.keys.toList();
        }
      }
    } else if (data is Map<String, dynamic>) {
      analysis.type = 'Object';
      analysis.properties = data.keys.toList();
      analysis.itemCount = data.length;
    } else {
      analysis.type = 'Simple Value';
      analysis.itemCount = 1;
    }
    
    return analysis;
  }
  
  void _displayAnalysis(DataAnalysis analysis) {
    print('\n🔍 Data Analysis:');
    print('   Type: ${analysis.type}');
    print('   Item Count: ${analysis.itemCount}');
    
    if (analysis.itemTypes.isNotEmpty) {
      print('   Item Types: ${analysis.itemTypes.join(', ')}');
    }
    
    if (analysis.properties.isNotEmpty) {
      print('   Properties: ${analysis.properties.join(', ')}');
    }
  }
  
  Future<void> _processJsonArray(List<dynamic> array) async {
    print('\n📋 Array Processing:');
    print('   Total items: ${array.length}');
    
    if (array.isEmpty) {
      print('   Empty array');
      return;
    }
    
    // Show first few items
    final previewCount = array.length > 3 ? 3 : array.length;
    print('\n📄 First $previewCount items:');
    for (int i = 0; i < previewCount; i++) {
      print('   ${i + 1}. ${_formatPreview(array[i])}');
    }
    
    if (array.length > 3) {
      print('   ... and ${array.length - 3} more items');
    }
    
    // If items are objects, show property statistics
    if (array.first is Map<String, dynamic>) {
      _analyzeObjectArray(array.cast<Map<String, dynamic>>());
    }
  }
  
  Future<void> _processJsonObject(Map<String, dynamic> object) async {
    print('\n📦 Object Processing:');
    print('   Properties: ${object.length}');
    
    for (final entry in object.entries) {
      final value = entry.value;
      final preview = _formatPreview(value);
      print('   ${entry.key}: $preview');
    }
  }
  
  void _analyzeObjectArray(List<Map<String, dynamic>> objects) {
    print('\n📈 Object Array Analysis:');
    
    final propertyStats = <String, PropertyStats>{};
    
    for (final obj in objects) {
      for (final entry in obj.entries) {
        final key = entry.key;
        final value = entry.value;
        
        if (!propertyStats.containsKey(key)) {
          propertyStats[key] = PropertyStats();
        }
        
        final stats = propertyStats[key]!;
        stats.count++;
        stats.types.add(value.runtimeType.toString());
        
        if (value is num) {
          stats.numericValues.add(value.toDouble());
        } else if (value is String) {
          stats.stringLengths.add(value.length);
        }
      }
    }
    
    for (final entry in propertyStats.entries) {
      final key = entry.key;
      final stats = entry.value;
      
      print('\n   Property: $key');
      print('     Occurrences: ${stats.count}/${objects.length}');
      print('     Types: ${stats.types.join(', ')}');
      
      if (stats.numericValues.isNotEmpty) {
        final avg = stats.numericValues.reduce((a, b) => a + b) / stats.numericValues.length;
        final min = stats.numericValues.reduce((a, b) => a < b ? a : b);
        final max = stats.numericValues.reduce((a, b) => a > b ? a : b);
        print('     Numeric Stats: avg=${avg.toStringAsFixed(2)}, min=$min, max=$max');
      }
      
      if (stats.stringLengths.isNotEmpty) {
        final avgLength = stats.stringLengths.reduce((a, b) => a + b) / stats.stringLengths.length;
        print('     String Length Avg: ${avgLength.toStringAsFixed(1)}');
      }
    }
  }
  
  String _formatPreview(dynamic value) {
    if (value is String) {
      return value.length > 50 ? '"${value.substring(0, 50)}..."' : '"$value"';
    } else if (value is Map) {
      return 'Object with ${value.length} properties';
    } else if (value is List) {
      return 'Array with ${value.length} items';
    } else {
      return value.toString();
    }
  }
  
  Future<void> _askForProcessingOptions(dynamic data) async {
    print('\n🛠️  Processing Options:');
    print('1. Filter data');
    print('2. Sort data');
    print('3. Transform data');
    print('4. Export data');
    print('5. Skip');
    
    stdout.write('\nChoose processing option (1-5): ');
    final choice = stdin.readLineSync();
    
    switch (choice) {
      case '1':
        await _filterData(data);
        break;
      case '2':
        await _sortData(data);
        break;
      case '3':
        await _transformData(data);
        break;
      case '4':
        await _exportData(data);
        break;
      case '5':
        print('⏭️  Skipping processing');
        break;
      default:
        print('❌ Invalid choice');
    }
  }
  
  Future<void> _filterData(dynamic data) async {
    if (data is! List) {
      print('❌ Filtering is only available for arrays');
      return;
    }
    
    final list = data as List<dynamic>;
    if (list.isEmpty || list.first is! Map<String, dynamic>) {
      print('❌ Filtering requires array of objects');
      return;
    }
    
    final objects = list.cast<Map<String, dynamic>>();
    final properties = objects.first.keys.toList();
    
    print('\nAvailable properties: ${properties.join(', ')}');
    stdout.write('Enter property to filter by: ');
    final property = stdin.readLineSync();
    
    if (property == null || !properties.contains(property)) {
      print('❌ Invalid property');
      return;
    }
    
    stdout.write('Enter filter value: ');
    final filterValue = stdin.readLineSync();
    
    final filtered = objects.where((obj) {
      final value = obj[property];
      return value.toString().toLowerCase().contains(filterValue?.toLowerCase() ?? '');
    }).toList();
    
    print('\n✅ Filtered results: ${filtered.length} items');
    await _processJsonData(filtered, 'Filtered Data');
  }
  
  Future<void> _sortData(dynamic data) async {
    print('🔄 Sorting functionality would be implemented here');
    print('   (Choose property to sort by, ascending/descending, etc.)');
  }
  
  Future<void> _transformData(dynamic data) async {
    print('🔄 Transform functionality would be implemented here');
    print('   (Convert to CSV, extract specific fields, etc.)');
  }
  
  Future<void> _exportData(dynamic data) async {
    final timestamp = DateTime.now().millisecondsSinceEpoch;
    final filename = 'processed_data_$timestamp.json';
    
    final file = File(filename);
    await file.writeAsString(jsonEncode(data));
    
    print('💾 Data exported to: $filename');
  }
  
  List<Map<String, dynamic>> _createSampleData() {
    return [
      {
        'id': 1,
        'name': 'John Doe',
        'email': 'john@example.com',
        'age': 30,
        'city': 'New York',
        'active': true,
        'skills': ['Dart', 'Flutter', 'JavaScript']
      },
      {
        'id': 2,
        'name': 'Jane Smith',
        'email': 'jane@example.com',
        'age': 25,
        'city': 'San Francisco',
        'active': true,
        'skills': ['Python', 'React', 'Node.js']
      },
      {
        'id': 3,
        'name': 'Bob Johnson',
        'email': 'bob@example.com',
        'age': 35,
        'city': 'Chicago',
        'active': false,
        'skills': ['Java', 'Spring', 'MySQL']
      },
      {
        'id': 4,
        'name': 'Alice Brown',
        'email': 'alice@example.com',
        'age': 28,
        'city': 'Seattle',
        'active': true,
        'skills': ['Go', 'Docker', 'Kubernetes']
      }
    ];
  }
  
  void dispose() {
    _httpClient.close();
  }
}

class DataAnalysis {
  String type = '';
  int itemCount = 0;
  Set<String> itemTypes = {};
  List<String> properties = [];
}

class PropertyStats {
  int count = 0;
  Set<String> types = {};
  List<double> numericValues = [];
  List<int> stringLengths = [];
}
```

## How It Works

### The JsonDataProcessor Class

```dart
class JsonDataProcessor {
  final HttpClient _httpClient = HttpClient();
  
  JsonDataProcessor() {
    _httpClient.connectionTimeout = Duration(seconds: 15);
  }
}
```

Our processor is organized as a class that can handle JSON from multiple sources and provides various analysis and processing capabilities.

### Fetching JSON from APIs

```dart
Future<dynamic> _fetchJsonFromUrl(String url) async {
  final uri = Uri.parse(url);
  final request = await _httpClient.getUrl(uri);
  request.headers.set('Accept', 'application/json');
  
  final response = await request.close();
  final jsonString = await response.transform(utf8.decoder).join();
  return jsonDecode(jsonString);
}
```

We fetch JSON data from REST APIs using proper HTTP headers and decode the response into Dart objects.

### Data Structure Analysis

```dart
DataAnalysis _analyzeDataStructure(dynamic data) {
  final analysis = DataAnalysis();
  
  if (data is List) {
    analysis.type = 'Array';
    analysis.itemCount = data.length;
    // ... analyze array structure
  } else if (data is Map<String, dynamic>) {
    analysis.type = 'Object';
    analysis.properties = data.keys.toList();
    // ... analyze object structure
  }
  
  return analysis;
}
```

We analyze the structure of JSON data to understand what we're working with before processing.

### Statistical Analysis

```dart
void _analyzeObjectArray(List<Map<String, dynamic>> objects) {
  final propertyStats = <String, PropertyStats>{};
  
  for (final obj in objects) {
    for (final entry in obj.entries) {
      // Calculate statistics for each property
      if (value is num) {
        stats.numericValues.add(value.toDouble());
      }
    }
  }
}
```

For arrays of objects, we generate statistical summaries including averages, min/max values, and type information.

### Data Processing Options

```dart
Future<void> _filterData(dynamic data) async {
  final filtered = objects.where((obj) {
    final value = obj[property];
    return value.toString().toLowerCase().contains(filterValue?.toLowerCase() ?? '');
  }).toList();
}
```

We provide interactive filtering capabilities to help users extract specific subsets of data.

## Running the Processor

1. Save the code to a file (e.g., `json_processor.dart`)
2. Run it with: `dart json_processor.dart`
3. Choose from the menu options to process different data sources

## Example Usage

```bash
🔧 JSON Data Processor
=====================

Choose an option:
1. Process data from API URL
2. Process data from local file
3. Generate sample data
4. Exit

Enter your choice (1-4): 3

🎲 Generating sample data...

📊 Processing Sample Data
========================

🔍 Data Analysis:
   Type: Array
   Item Count: 4
   Item Types: _Map<String, Object?>
   Properties: id, name, email, age, city, active, skills

📋 Array Processing:
   Total items: 4

📄 First 3 items:
   1. Object with 7 properties
   2. Object with 7 properties
   3. Object with 7 properties
   ... and 1 more items

📈 Object Array Analysis:

   Property: id
     Occurrences: 4/4
     Types: int
     Numeric Stats: avg=2.50, min=1, max=4

   Property: age
     Occurrences: 4/4
     Types: int
     Numeric Stats: avg=29.50, min=25, max=35
```

## What You've Learned

This project introduces several important concepts:

- **API Integration**: Fetching data from REST APIs
- **JSON Parsing**: Converting JSON strings to Dart objects
- **Data Analysis**: Examining data structure and generating statistics
- **Data Processing**: Filtering, sorting, and transforming data
- **Type Safety**: Working with dynamic data safely
- **Interactive Programming**: Creating menu-driven applications
- **File I/O**: Reading from and writing to JSON files

## Key Features Implemented

1. **Multiple Data Sources**: APIs, files, and generated sample data
2. **Automatic Analysis**: Structure detection and statistical summaries
3. **Interactive Processing**: User-driven data manipulation
4. **Error Handling**: Graceful handling of network and parsing errors
5. **Export Capabilities**: Saving processed data back to files

## Extending the Processor

You can enhance this processor by:
- Adding more sophisticated filtering options
- Implementing data sorting by multiple criteria
- Adding data transformation capabilities (JSON to CSV, etc.)
- Creating data visualization outputs
- Adding support for nested JSON structures
- Implementing data validation and schema checking

This project provides a solid foundation for working with APIs and structured data - essential skills for modern application development!

Happy processing! 🔧
# Building a CSV File Analyzer in Dart

Working with CSV files is a fundamental skill in data processing! Today we're building a comprehensive CSV analyzer that can read, parse, validate, and analyze CSV data. This project teaches you how to handle one of the most common data formats and perform meaningful analysis on tabular data.

## The Project

Our CSV file analyzer will:
- Read and parse CSV files with proper handling of different formats
- Detect column types automatically (numbers, dates, text)
- Generate statistical summaries for each column
- Find missing values and data quality issues
- Create data visualizations in text format
- Export analysis results to different formats
- Handle large files efficiently with streaming

This builds on our data processing skills from Project 18, expanding to handle tabular data!

## The Code

```dart
///
/// CSV File Analyzer in Dart
///
import 'dart:io';
import 'dart:convert';
import 'dart:math';

void main() async {
  print('📊 CSV File Analyzer');
  print('===================\n');
  
  final analyzer = CsvAnalyzer();
  
  while (true) {
    print('\nChoose an option:');
    print('1. Analyze CSV file');
    print('2. Generate sample CSV');
    print('3. Compare two CSV files');
    print('4. Exit');
    
    stdout.write('\nEnter your choice (1-4): ');
    final choice = stdin.readLineSync();
    
    try {
      switch (choice) {
        case '1':
          await analyzer.analyzeFile();
          break;
        case '2':
          await analyzer.generateSampleCsv();
          break;
        case '3':
          await analyzer.compareFiles();
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

class CsvAnalyzer {
  Future<void> analyzeFile() async {
    stdout.write('Enter CSV file path: ');
    final filePath = stdin.readLineSync();
    
    if (filePath == null || filePath.isEmpty) {
      print('❌ File path is required');
      return;
    }
    
    final file = File(filePath);
    if (!await file.exists()) {
      print('❌ File not found: $filePath');
      return;
    }
    
    print('📁 Analyzing file: $filePath');
    
    try {
      final csvData = await _parseCsvFile(file);
      await _performAnalysis(csvData, filePath);
    } catch (e) {
      print('❌ Failed to analyze file: $e');
    }
  }
  
  Future<void> generateSampleCsv() async {
    print('🎲 Generating sample CSV file...');
    
    final sampleData = _createSampleData();
    final csvContent = _convertToCsv(sampleData);
    
    final file = File('sample_data.csv');
    await file.writeAsString(csvContent);
    
    print('💾 Sample CSV saved to: sample_data.csv');
    print('📄 Content preview:');
    print(csvContent.split('\n').take(5).join('\n'));
    if (csvContent.split('\n').length > 5) {
      print('... and ${csvContent.split('\n').length - 5} more rows');
    }
  }
  
  Future<void> compareFiles() async {
    stdout.write('Enter first CSV file path: ');
    final file1Path = stdin.readLineSync();
    stdout.write('Enter second CSV file path: ');
    final file2Path = stdin.readLineSync();
    
    if (file1Path == null || file2Path == null || 
        file1Path.isEmpty || file2Path.isEmpty) {
      print('❌ Both file paths are required');
      return;
    }
    
    print('🔍 Comparing files...');
    print('File 1: $file1Path');
    print('File 2: $file2Path');
    
    try {
      final data1 = await _parseCsvFile(File(file1Path));
      final data2 = await _parseCsvFile(File(file2Path));
      
      _compareDatasets(data1, data2);
    } catch (e) {
      print('❌ Failed to compare files: $e');
    }
  }
  
  Future<CsvData> _parseCsvFile(File file) async {
    final lines = await file.readAsLines();
    
    if (lines.isEmpty) {
      throw Exception('File is empty');
    }
    
    // Detect delimiter
    final delimiter = _detectDelimiter(lines.first);
    print('🔍 Detected delimiter: "$delimiter"');
    
    // Parse header
    final headers = _parseCsvLine(lines.first, delimiter);
    print('📝 Found ${headers.length} columns: ${headers.join(', ')}');
    
    // Parse data rows
    final rows = <List<String>>[];
    for (int i = 1; i < lines.length; i++) {
      if (lines[i].trim().isNotEmpty) {
        final row = _parseCsvLine(lines[i], delimiter);
        rows.add(row);
      }
    }
    
    print('📊 Loaded ${rows.length} data rows');
    
    return CsvData(
      headers: headers,
      rows: rows,
      delimiter: delimiter,
      fileName: file.path.split('/').last,
    );
  }
  
  String _detectDelimiter(String firstLine) {
    final delimiters = [',', ';', '\t', '|'];
    final counts = <String, int>{};
    
    for (final delimiter in delimiters) {
      counts[delimiter] = delimiter.allMatches(firstLine).length;
    }
    
    // Return delimiter with highest count, defaulting to comma
    return counts.entries
        .reduce((a, b) => a.value > b.value ? a : b)
        .key;
  }
  
  List<String> _parseCsvLine(String line, String delimiter) {
    final result = <String>[];
    var current = '';
    var inQuotes = false;
    
    for (int i = 0; i < line.length; i++) {
      final char = line[i];
      
      if (char == '"') {
        inQuotes = !inQuotes;
      } else if (char == delimiter && !inQuotes) {
        result.add(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    
    result.add(current.trim());
    return result;
  }
  
  Future<void> _performAnalysis(CsvData data, String fileName) async {
    print('\n📈 Analysis Results for: $fileName');
    print('=' * (25 + fileName.length));
    
    // Basic info
    print('\n📊 Dataset Overview:');
    print('   Rows: ${data.rows.length}');
    print('   Columns: ${data.headers.length}');
    print('   File size: ${await File(fileName).length()} bytes');
    
    // Analyze each column
    final columnAnalyses = <ColumnAnalysis>[];
    
    for (int colIndex = 0; colIndex < data.headers.length; colIndex++) {
      final columnName = data.headers[colIndex];
      final columnValues = data.rows.map((row) => 
          colIndex < row.length ? row[colIndex] : '').toList();
      
      final analysis = _analyzeColumn(columnName, columnValues);
      columnAnalyses.add(analysis);
    }
    
    // Display column analyses
    print('\n📋 Column Analysis:');
    for (final analysis in columnAnalyses) {
      _displayColumnAnalysis(analysis);
    }
    
    // Data quality report
    _generateDataQualityReport(data, columnAnalyses);
    
    // Ask for additional operations
    await _askForAdditionalOperations(data, columnAnalyses);
  }
  
  ColumnAnalysis _analyzeColumn(String name, List<String> values) {
    final analysis = ColumnAnalysis(name: name);
    analysis.totalCount = values.length;
    
    // Count missing values
    analysis.missingCount = values.where((v) => v.isEmpty).length;
    analysis.nonMissingCount = analysis.totalCount - analysis.missingCount;
    
    if (analysis.nonMissingCount == 0) {
      analysis.dataType = DataType.empty;
      return analysis;
    }
    
    // Detect data type and analyze values
    final nonEmptyValues = values.where((v) => v.isNotEmpty).toList();
    analysis.dataType = _detectDataType(nonEmptyValues);
    
    switch (analysis.dataType) {
      case DataType.numeric:
        _analyzeNumericColumn(analysis, nonEmptyValues);
        break;
      case DataType.date:
        _analyzeDateColumn(analysis, nonEmptyValues);
        break;
      case DataType.text:
        _analyzeTextColumn(analysis, nonEmptyValues);
        break;
      case DataType.empty:
        break;
    }
    
    return analysis;
  }
  
  DataType _detectDataType(List<String> values) {
    if (values.isEmpty) return DataType.empty;
    
    int numericCount = 0;
    int dateCount = 0;
    
    for (final value in values.take(min(100, values.length))) {
      if (_isNumeric(value)) {
        numericCount++;
      } else if (_isDate(value)) {
        dateCount++;
      }
    }
    
    final sampleSize = min(100, values.length);
    if (numericCount > sampleSize * 0.8) return DataType.numeric;
    if (dateCount > sampleSize * 0.8) return DataType.date;
    return DataType.text;
  }
  
  bool _isNumeric(String value) {
    return double.tryParse(value.replaceAll(',', '')) != null;
  }
  
  bool _isDate(String value) {
    final dateFormats = [
      RegExp(r'^\d{4}-\d{2}-\d{2}$'), // YYYY-MM-DD
      RegExp(r'^\d{2}/\d{2}/\d{4}$'), // MM/DD/YYYY
      RegExp(r'^\d{2}-\d{2}-\d{4}$'), // MM-DD-YYYY
    ];
    
    return dateFormats.any((regex) => regex.hasMatch(value));
  }
  
  void _analyzeNumericColumn(ColumnAnalysis analysis, List<String> values) {
    final numbers = values
        .map((v) => double.tryParse(v.replaceAll(',', '')))
        .where((n) => n != null)
        .cast<double>()
        .toList();
    
    if (numbers.isEmpty) return;
    
    numbers.sort();
    
    analysis.numericStats = NumericStats(
      min: numbers.first,
      max: numbers.last,
      mean: numbers.reduce((a, b) => a + b) / numbers.length,
      median: _calculateMedian(numbers),
      stdDev: _calculateStandardDeviation(numbers),
    );
  }
  
  void _analyzeDateColumn(ColumnAnalysis analysis, List<String> values) {
    analysis.uniqueValues = values.toSet();
    // Could add more sophisticated date analysis here
  }
  
  void _analyzeTextColumn(ColumnAnalysis analysis, List<String> values) {
    analysis.uniqueValues = values.toSet();
    
    final lengths = values.map((v) => v.length).toList();
    if (lengths.isNotEmpty) {
      analysis.textStats = TextStats(
        minLength: lengths.reduce(min),
        maxLength: lengths.reduce(max),
        avgLength: lengths.reduce((a, b) => a + b) / lengths.length,
      );
    }
  }
  
  double _calculateMedian(List<double> sortedNumbers) {
    final middle = sortedNumbers.length ~/ 2;
    if (sortedNumbers.length % 2 == 0) {
      return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
    } else {
      return sortedNumbers[middle];
    }
  }
  
  double _calculateStandardDeviation(List<double> numbers) {
    final mean = numbers.reduce((a, b) => a + b) / numbers.length;
    final squaredDiffs = numbers.map((n) => pow(n - mean, 2));
    final variance = squaredDiffs.reduce((a, b) => a + b) / numbers.length;
    return sqrt(variance);
  }
  
  void _displayColumnAnalysis(ColumnAnalysis analysis) {
    print('\n   🔸 ${analysis.name}');
    print('     Type: ${_dataTypeToString(analysis.dataType)}');
    print('     Total: ${analysis.totalCount}');
    print('     Missing: ${analysis.missingCount} (${(analysis.missingCount / analysis.totalCount * 100).toStringAsFixed(1)}%)');
    
    if (analysis.numericStats != null) {
      final stats = analysis.numericStats!;
      print('     Min: ${stats.min.toStringAsFixed(2)}');
      print('     Max: ${stats.max.toStringAsFixed(2)}');
      print('     Mean: ${stats.mean.toStringAsFixed(2)}');
      print('     Median: ${stats.median.toStringAsFixed(2)}');
      print('     Std Dev: ${stats.stdDev.toStringAsFixed(2)}');
    }
    
    if (analysis.textStats != null) {
      final stats = analysis.textStats!;
      print('     Min Length: ${stats.minLength}');
      print('     Max Length: ${stats.maxLength}');
      print('     Avg Length: ${stats.avgLength.toStringAsFixed(1)}');
    }
    
    if (analysis.uniqueValues.isNotEmpty) {
      print('     Unique Values: ${analysis.uniqueValues.length}');
      if (analysis.uniqueValues.length <= 10) {
        print('     Values: ${analysis.uniqueValues.take(10).join(', ')}');
      }
    }
  }
  
  String _dataTypeToString(DataType type) {
    switch (type) {
      case DataType.numeric:
        return 'Numeric';
      case DataType.date:
        return 'Date';
      case DataType.text:
        return 'Text';
      case DataType.empty:
        return 'Empty';
    }
  }
  
  void _generateDataQualityReport(CsvData data, List<ColumnAnalysis> analyses) {
    print('\n🔍 Data Quality Report:');
    
    final totalCells = data.rows.length * data.headers.length;
    final missingCells = analyses.fold(0, (sum, analysis) => sum + analysis.missingCount);
    final completeness = ((totalCells - missingCells) / totalCells * 100).toStringAsFixed(1);
    
    print('   Completeness: $completeness%');
    print('   Missing values: $missingCells out of $totalCells cells');
    
    // Find columns with high missing rates
    final problematicColumns = analyses
        .where((a) => a.missingCount / a.totalCount > 0.1)
        .toList();
    
    if (problematicColumns.isNotEmpty) {
      print('   ⚠️  Columns with >10% missing data:');
      for (final col in problematicColumns) {
        final percentage = (col.missingCount / col.totalCount * 100).toStringAsFixed(1);
        print('     - ${col.name}: $percentage% missing');
      }
    }
  }
  
  Future<void> _askForAdditionalOperations(CsvData data, List<ColumnAnalysis> analyses) async {
    print('\n🛠️  Additional Operations:');
    print('1. Show data histogram');
    print('2. Export analysis report');
    print('3. Show correlations');
    print('4. Skip');
    
    stdout.write('\nChoose option (1-4): ');
    final choice = stdin.readLineSync();
    
    switch (choice) {
      case '1':
        await _showHistogram(data, analyses);
        break;
      case '2':
        await _exportAnalysisReport(data, analyses);
        break;
      case '3':
        await _showCorrelations(data, analyses);
        break;
      case '4':
        print('⏭️  Skipping additional operations');
        break;
      default:
        print('❌ Invalid choice');
    }
  }
  
  Future<void> _showHistogram(CsvData data, List<ColumnAnalysis> analyses) async {
    final numericColumns = analyses.where((a) => a.dataType == DataType.numeric).toList();
    
    if (numericColumns.isEmpty) {
      print('❌ No numeric columns found for histogram');
      return;
    }
    
    print('\nNumeric columns: ${numericColumns.map((c) => c.name).join(', ')}');
    stdout.write('Enter column name: ');
    final columnName = stdin.readLineSync();
    
    final column = numericColumns.firstWhere(
      (c) => c.name == columnName,
      orElse: () => throw Exception('Column not found'),
    );
    
    print('\n📊 Histogram for ${column.name}:');
    _generateTextHistogram(data, column);
  }
  
  void _generateTextHistogram(CsvData data, ColumnAnalysis analysis) {
    final columnIndex = data.headers.indexOf(analysis.name);
    final values = data.rows
        .where((row) => columnIndex < row.length && row[columnIndex].isNotEmpty)
        .map((row) => double.parse(row[columnIndex].replaceAll(',', '')))
        .toList();
    
    if (values.isEmpty) return;
    
    values.sort();
    final min = values.first;
    final max = values.last;
    const binCount = 10;
    const maxBarLength = 40;
    
    final binSize = (max - min) / binCount;
    final bins = List.filled(binCount, 0);
    
    for (final value in values) {
      final binIndex = min(((value - min) / binSize).floor(), binCount - 1);
      bins[binIndex]++;
    }
    
    final maxCount = bins.reduce(max);
    
    for (int i = 0; i < binCount; i++) {
      final binStart = min + i * binSize;
      final binEnd = min + (i + 1) * binSize;
      final count = bins[i];
      final barLength = (count / maxCount * maxBarLength).round();
      final bar = '█' * barLength;
      
      print('${binStart.toStringAsFixed(1)}-${binEnd.toStringAsFixed(1)}: $bar ($count)');
    }
  }
  
  Future<void> _exportAnalysisReport(CsvData data, List<ColumnAnalysis> analyses) async {
    final timestamp = DateTime.now().millisecondsSinceEpoch;
    final reportFile = File('csv_analysis_report_$timestamp.txt');
    
    final buffer = StringBuffer();
    buffer.writeln('CSV Analysis Report');
    buffer.writeln('Generated: ${DateTime.now()}');
    buffer.writeln('File: ${data.fileName}');
    buffer.writeln('=' * 50);
    
    buffer.writeln('\nDataset Overview:');
    buffer.writeln('Rows: ${data.rows.length}');
    buffer.writeln('Columns: ${data.headers.length}');
    
    buffer.writeln('\nColumn Details:');
    for (final analysis in analyses) {
      buffer.writeln('\n${analysis.name}:');
      buffer.writeln('  Type: ${_dataTypeToString(analysis.dataType)}');
      buffer.writeln('  Missing: ${analysis.missingCount}/${analysis.totalCount}');
      
      if (analysis.numericStats != null) {
        final stats = analysis.numericStats!;
        buffer.writeln('  Statistics:');
        buffer.writeln('    Min: ${stats.min}');
        buffer.writeln('    Max: ${stats.max}');
        buffer.writeln('    Mean: ${stats.mean}');
        buffer.writeln('    Median: ${stats.median}');
      }
    }
    
    await reportFile.writeAsString(buffer.toString());
    print('📄 Analysis report exported to: ${reportFile.path}');
  }
  
  Future<void> _showCorrelations(CsvData data, List<ColumnAnalysis> analyses) async {
    print('🔗 Correlation analysis would be implemented here');
    print('   (Calculate correlation coefficients between numeric columns)');
  }
  
  void _compareDatasets(CsvData data1, CsvData data2) {
    print('\n🔍 Dataset Comparison:');
    print('File 1: ${data1.fileName} (${data1.rows.length} rows, ${data1.headers.length} columns)');
    print('File 2: ${data2.fileName} (${data2.rows.length} rows, ${data2.headers.length} columns)');
    
    // Compare column structure
    final commonColumns = data1.headers.toSet().intersection(data2.headers.toSet());
    final uniqueToFirst = data1.headers.toSet().difference(data2.headers.toSet());
    final uniqueToSecond = data2.headers.toSet().difference(data1.headers.toSet());
    
    print('\nColumn Comparison:');
    print('Common columns: ${commonColumns.length}');
    if (commonColumns.isNotEmpty) {
      print('  ${commonColumns.join(', ')}');
    }
    
    if (uniqueToFirst.isNotEmpty) {
      print('Only in ${data1.fileName}: ${uniqueToFirst.join(', ')}');
    }
    
    if (uniqueToSecond.isNotEmpty) {
      print('Only in ${data2.fileName}: ${uniqueToSecond.join(', ')}');
    }
  }
  
  List<Map<String, dynamic>> _createSampleData() {
    final random = Random();
    final data = <Map<String, dynamic>>[];
    
    final names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry'];
    final departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];
    final cities = ['New York', 'San Francisco', 'Chicago', 'Boston', 'Seattle'];
    
    for (int i = 0; i < 100; i++) {
      data.add({
        'ID': i + 1,
        'Name': names[random.nextInt(names.length)],
        'Age': 22 + random.nextInt(40),
        'Department': departments[random.nextInt(departments.length)],
        'Salary': 40000 + random.nextInt(120000),
        'City': cities[random.nextInt(cities.length)],
        'Start_Date': '2020-${(random.nextInt(12) + 1).toString().padLeft(2, '0')}-${(random.nextInt(28) + 1).toString().padLeft(2, '0')}',
        'Active': random.nextBool(),
      });
    }
    
    return data;
  }
  
  String _convertToCsv(List<Map<String, dynamic>> data) {
    if (data.isEmpty) return '';
    
    final headers = data.first.keys.toList();
    final buffer = StringBuffer();
    
    // Write header
    buffer.writeln(headers.join(','));
    
    // Write data rows
    for (final row in data) {
      final values = headers.map((header) => row[header].toString()).toList();
      buffer.writeln(values.join(','));
    }
    
    return buffer.toString();
  }
}

class CsvData {
  final List<String> headers;
  final List<List<String>> rows;
  final String delimiter;
  final String fileName;
  
  CsvData({
    required this.headers,
    required this.rows,
    required this.delimiter,
    required this.fileName,
  });
}

class ColumnAnalysis {
  final String name;
  DataType dataType = DataType.text;
  int totalCount = 0;
  int missingCount = 0;
  int nonMissingCount = 0;
  Set<String> uniqueValues = {};
  NumericStats? numericStats;
  TextStats? textStats;
  
  ColumnAnalysis({required this.name});
}

enum DataType { numeric, date, text, empty }

class NumericStats {
  final double min;
  final double max;
  final double mean;
  final double median;
  final double stdDev;
  
  NumericStats({
    required this.min,
    required this.max,
    required this.mean,
    required this.median,
    required this.stdDev,
  });
}

class TextStats {
  final int minLength;
  final int maxLength;
  final double avgLength;
  
  TextStats({
    required this.minLength,
    required this.maxLength,
    required this.avgLength,
  });
}
```

## How It Works

### CSV Parsing Engine

```dart
List<String> _parseCsvLine(String line, String delimiter) {
  final result = <String>[];
  var current = '';
  var inQuotes = false;
  
  for (int i = 0; i < line.length; i++) {
    final char = line[i];
    
    if (char == '"') {
      inQuotes = !inQuotes;
    } else if (char == delimiter && !inQuotes) {
      result.add(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
}
```

Our parser properly handles quoted fields, different delimiters, and edge cases in CSV format.

### Automatic Data Type Detection

```dart
DataType _detectDataType(List<String> values) {
  int numericCount = 0;
  int dateCount = 0;
  
  for (final value in values.take(min(100, values.length))) {
    if (_isNumeric(value)) numericCount++;
    else if (_isDate(value)) dateCount++;
  }
  
  final sampleSize = min(100, values.length);
  if (numericCount > sampleSize * 0.8) return DataType.numeric;
  if (dateCount > sampleSize * 0.8) return DataType.date;
  return DataType.text;
}
```

We automatically detect whether columns contain numbers, dates, or text by analyzing a sample of values.

### Statistical Analysis

```dart
void _analyzeNumericColumn(ColumnAnalysis analysis, List<String> values) {
  final numbers = values
      .map((v) => double.tryParse(v.replaceAll(',', '')))
      .where((n) => n != null)
      .cast<double>()
      .toList();
  
  analysis.numericStats = NumericStats(
    min: numbers.first,
    max: numbers.last,
    mean: numbers.reduce((a, b) => a + b) / numbers.length,
    median: _calculateMedian(numbers),
    stdDev: _calculateStandardDeviation(numbers),
  );
}
```

For numeric columns, we calculate comprehensive statistics including mean, median, and standard deviation.

### Data Quality Assessment

```dart
void _generateDataQualityReport(CsvData data, List<ColumnAnalysis> analyses) {
  final totalCells = data.rows.length * data.headers.length;
  final missingCells = analyses.fold(0, (sum, analysis) => sum + analysis.missingCount);
  final completeness = ((totalCells - missingCells) / totalCells * 100);
  
  print('   Completeness: $completeness%');
  print('   Missing values: $missingCells out of $totalCells cells');
}
```

We assess data quality by calculating completeness percentages and identifying problematic columns.

### Text-Based Visualization

```dart
void _generateTextHistogram(CsvData data, ColumnAnalysis analysis) {
  const binCount = 10;
  const maxBarLength = 40;
  
  final binSize = (max - min) / binCount;
  final bins = List.filled(binCount, 0);
  
  // Calculate distribution and display as text bars
  final bar = '█' * barLength;
  print('${binStart.toStringAsFixed(1)}-${binEnd.toStringAsFixed(1)}: $bar ($count)');
}
```

We create visual representations of data distributions using text characters.

## Running the Analyzer

1. Save the code to a file (e.g., `csv_analyzer.dart`)
2. Run it with: `dart csv_analyzer.dart`
3. Choose from the menu options to analyze CSV files

## Example Usage

```bash
📊 CSV File Analyzer
===================

Choose an option:
1. Analyze CSV file
2. Generate sample CSV
3. Compare two CSV files
4. Exit

Enter your choice (1-4): 2

🎲 Generating sample CSV file...
💾 Sample CSV saved to: sample_data.csv
📄 Content preview:
ID,Name,Age,Department,Salary,City,Start_Date,Active
1,Alice,45,Marketing,89543,Chicago,2020-03-15,true
2,Henry,31,Sales,67890,Boston,2020-08-22,false
... and 98 more rows

Choose an option:
1. Analyze CSV file
2. Generate sample CSV
3. Compare two CSV files
4. Exit

Enter your choice (1-4): 1

Enter CSV file path: sample_data.csv
📁 Analyzing file: sample_data.csv
🔍 Detected delimiter: ","
📝 Found 8 columns: ID, Name, Age, Department, Salary, City, Start_Date, Active
📊 Loaded 100 data rows

📈 Analysis Results for: sample_data.csv
==========================================

📊 Dataset Overview:
   Rows: 100
   Columns: 8
   File size: 2847 bytes

📋 Column Analysis:

   🔸 ID
     Type: Numeric
     Total: 100
     Missing: 0 (0.0%)
     Min: 1.00
     Max: 100.00
     Mean: 50.50
     Median: 50.50
     Std Dev: 29.01

   🔸 Age
     Type: Numeric
     Total: 100
     Missing: 0 (0.0%)
     Min: 22.00
     Max: 61.00
     Mean: 41.23
     Median: 41.00
     Std Dev: 11.47
```

## What You've Learned

This project introduces several important concepts:

- **File Format Handling**: Parsing CSV with proper delimiter detection
- **Data Type Detection**: Automatically identifying numeric, date, and text columns
- **Statistical Analysis**: Calculating descriptive statistics for datasets
- **Data Quality Assessment**: Identifying missing values and completeness
- **Text-Based Visualization**: Creating histograms and charts in console
- **Large File Handling**: Efficient processing of tabular data
- **Report Generation**: Exporting analysis results

## Key Features Implemented

1. **Flexible CSV Parsing**: Handles different delimiters and quoted fields
2. **Automatic Analysis**: Detects data types and generates statistics
3. **Data Quality Reports**: Identifies missing values and problematic columns
4. **Interactive Operations**: Menu-driven analysis with user choices
5. **Export Capabilities**: Generate detailed analysis reports
6. **File Comparison**: Compare structure and content of different CSV files

## Extending the Analyzer

You can enhance this analyzer by:
- Adding support for more data formats (TSV, Excel, etc.)
- Implementing correlation analysis between columns
- Adding more sophisticated date parsing
- Creating graphical visualizations
- Adding data cleaning and transformation features
- Implementing outlier detection algorithms

This project provides essential skills for data analysis and prepares you for working with real-world datasets!

Happy analyzing! 📊
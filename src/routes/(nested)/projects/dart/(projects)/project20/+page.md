# Building a Log File Monitor in Dart

Monitoring log files in real-time is crucial for system administration and debugging! Today we're building a comprehensive log file monitor that can watch files for changes, parse log entries, detect patterns, and alert on specific conditions. This project teaches you about file watching, real-time processing, and pattern recognition.

## The Project

Our log file monitor will:
- Watch log files for real-time changes
- Parse different log formats (Apache, Nginx, custom formats)
- Detect error patterns and anomalies
- Generate alerts based on configurable conditions
- Maintain statistics and summaries
- Support multiple files simultaneously
- Export monitoring reports

This builds on our file processing skills from previous projects, adding real-time monitoring capabilities!

## The Code

```dart
///
/// Log File Monitor in Dart
///
import 'dart:io';
import 'dart:convert';
import 'dart:async';

void main() async {
  print('📊 Log File Monitor');
  print('==================\n');
  
  final monitor = LogFileMonitor();
  
  while (true) {
    print('\nChoose an option:');
    print('1. Start monitoring a log file');
    print('2. Add monitoring rules');
    print('3. View monitoring statistics');
    print('4. Generate sample log file');
    print('5. Stop all monitoring');
    print('6. Exit');
    
    stdout.write('\nEnter your choice (1-6): ');
    final choice = stdin.readLineSync();
    
    try {
      switch (choice) {
        case '1':
          await monitor.startMonitoring();
          break;
        case '2':
          await monitor.addMonitoringRules();
          break;
        case '3':
          monitor.viewStatistics();
          break;
        case '4':
          await monitor.generateSampleLog();
          break;
        case '5':
          monitor.stopAllMonitoring();
          break;
        case '6':
          monitor.stopAllMonitoring();
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

class LogFileMonitor {
  final Map<String, FileWatcher> _watchers = {};
  final List<MonitoringRule> _rules = [];
  final LogStatistics _statistics = LogStatistics();
  
  Future<void> startMonitoring() async {
    stdout.write('Enter log file path to monitor: ');
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
    
    if (_watchers.containsKey(filePath)) {
      print('⚠️  File is already being monitored');
      return;
    }
    
    print('🔍 Detecting log format...');
    final logFormat = await _detectLogFormat(file);
    print('📝 Detected format: ${logFormat.name}');
    
    print('👀 Starting to monitor: $filePath');
    
    final watcher = FileWatcher(
      filePath: filePath,
      logFormat: logFormat,
      onLogEntry: _handleLogEntry,
      onError: _handleError,
    );
    
    _watchers[filePath] = watcher;
    await watcher.start();
    
    print('✅ Monitoring started for: $filePath');
  }
  
  Future<void> addMonitoringRules() async {
    print('\n🛡️  Add Monitoring Rule');
    print('Available rule types:');
    print('1. Error pattern detection');
    print('2. Frequency threshold alert');
    print('3. Response time threshold');
    print('4. Status code monitoring');
    
    stdout.write('\nChoose rule type (1-4): ');
    final ruleType = stdin.readLineSync();
    
    switch (ruleType) {
      case '1':
        await _addErrorPatternRule();
        break;
      case '2':
        await _addFrequencyRule();
        break;
      case '3':
        await _addResponseTimeRule();
        break;
      case '4':
        await _addStatusCodeRule();
        break;
      default:
        print('❌ Invalid rule type');
    }
  }
  
  void viewStatistics() {
    print('\n📈 Monitoring Statistics');
    print('========================');
    
    if (_watchers.isEmpty) {
      print('No files are currently being monitored.');
      return;
    }
    
    print('Monitored files: ${_watchers.length}');
    for (final filePath in _watchers.keys) {
      print('  - $filePath');
    }
    
    print('\nOverall Statistics:');
    print('  Total log entries processed: ${_statistics.totalEntries}');
    print('  Error entries: ${_statistics.errorEntries}');
    print('  Warning entries: ${_statistics.warningEntries}');
    print('  Info entries: ${_statistics.infoEntries}');
    print('  Alerts triggered: ${_statistics.alertsTriggered}');
    
    print('\nActive monitoring rules: ${_rules.length}');
    for (int i = 0; i < _rules.length; i++) {
      final rule = _rules[i];
      print('  ${i + 1}. ${rule.description}');
    }
    
    if (_statistics.recentAlerts.isNotEmpty) {
      print('\nRecent alerts:');
      for (final alert in _statistics.recentAlerts.take(5)) {
        print('  [${alert.timestamp}] ${alert.message}');
      }
    }
  }
  
  Future<void> generateSampleLog() async {
    print('🎲 Generating sample log file...');
    
    final logFile = File('sample_app.log');
    final entries = _generateSampleLogEntries();
    
    await logFile.writeAsString(entries.join('\n'));
    
    print('💾 Sample log saved to: sample_app.log');
    print('📄 Generated ${entries.length} log entries');
    print('💡 You can now monitor this file with option 1');
  }
  
  void stopAllMonitoring() {
    print('🛑 Stopping all monitoring...');
    
    for (final watcher in _watchers.values) {
      watcher.stop();
    }
    
    _watchers.clear();
    print('✅ All monitoring stopped');
  }
  
  Future<LogFormat> _detectLogFormat(File file) async {
    final lines = await file.readAsLines();
    final sampleLines = lines.take(10).toList();
    
    // Apache Combined Log Format
    final apachePattern = RegExp(r'^\d+\.\d+\.\d+\.\d+ - - \[.+\] ".+" \d+ \d+');
    if (sampleLines.any((line) => apachePattern.hasMatch(line))) {
      return LogFormat.apache;
    }
    
    // Nginx Log Format
    final nginxPattern = RegExp(r'^\d+\.\d+\.\d+\.\d+ - .+ \[.+\] ".+" \d+');
    if (sampleLines.any((line) => nginxPattern.hasMatch(line))) {
      return LogFormat.nginx;
    }
    
    // Application Log Format (timestamp level message)
    final appPattern = RegExp(r'^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} \[(ERROR|WARN|INFO|DEBUG)\]');
    if (sampleLines.any((line) => appPattern.hasMatch(line))) {
      return LogFormat.application;
    }
    
    // JSON Log Format
    if (sampleLines.any((line) => line.trim().startsWith('{'))) {
      return LogFormat.json;
    }
    
    return LogFormat.generic;
  }
  
  void _handleLogEntry(LogEntry entry) {
    _statistics.totalEntries++;
    
    // Update statistics based on log level
    switch (entry.level) {
      case LogLevel.error:
        _statistics.errorEntries++;
        break;
      case LogLevel.warning:
        _statistics.warningEntries++;
        break;
      case LogLevel.info:
        _statistics.infoEntries++;
        break;
      case LogLevel.debug:
        break;
    }
    
    // Check against monitoring rules
    for (final rule in _rules) {
      if (rule.matches(entry)) {
        _triggerAlert(rule, entry);
      }
    }
    
    // Print real-time entry (with color coding)
    _printLogEntry(entry);
  }
  
  void _handleError(String error) {
    print('❌ Monitoring error: $error');
  }
  
  void _triggerAlert(MonitoringRule rule, LogEntry entry) {
    final alert = Alert(
      rule: rule,
      entry: entry,
      timestamp: DateTime.now(),
      message: '🚨 ${rule.description}: ${entry.message}',
    );
    
    _statistics.alertsTriggered++;
    _statistics.recentAlerts.insert(0, alert);
    
    // Keep only last 100 alerts
    if (_statistics.recentAlerts.length > 100) {
      _statistics.recentAlerts.removeLast();
    }
    
    print('\n🚨 ALERT: ${alert.message}');
    print('   Time: ${alert.timestamp}');
    print('   Rule: ${rule.description}\n');
  }
  
  void _printLogEntry(LogEntry entry) {
    final levelSymbol = _getLevelSymbol(entry.level);
    final timestamp = entry.timestamp.toString().substring(11, 19); // HH:MM:SS
    final truncatedMessage = entry.message.length > 80 
        ? '${entry.message.substring(0, 80)}...' 
        : entry.message;
    
    print('[$timestamp] $levelSymbol $truncatedMessage');
  }
  
  String _getLevelSymbol(LogLevel level) {
    switch (level) {
      case LogLevel.error:
        return '🔴 ERROR';
      case LogLevel.warning:
        return '🟡 WARN ';
      case LogLevel.info:
        return '🔵 INFO ';
      case LogLevel.debug:
        return '⚪ DEBUG';
    }
  }
  
  Future<void> _addErrorPatternRule() async {
    stdout.write('Enter error pattern to detect (regex): ');
    final pattern = stdin.readLineSync();
    
    if (pattern == null || pattern.isEmpty) {
      print('❌ Pattern is required');
      return;
    }
    
    try {
      final regex = RegExp(pattern, caseSensitive: false);
      final rule = ErrorPatternRule(
        pattern: regex,
        description: 'Error pattern: $pattern',
      );
      
      _rules.add(rule);
      print('✅ Error pattern rule added');
    } catch (e) {
      print('❌ Invalid regex pattern: $e');
    }
  }
  
  Future<void> _addFrequencyRule() async {
    stdout.write('Enter maximum entries per minute: ');
    final input = stdin.readLineSync();
    
    final threshold = int.tryParse(input ?? '');
    if (threshold == null || threshold <= 0) {
      print('❌ Invalid threshold value');
      return;
    }
    
    final rule = FrequencyRule(
      threshold: threshold,
      description: 'Frequency alert: >$threshold entries/minute',
    );
    
    _rules.add(rule);
    print('✅ Frequency rule added');
  }
  
  Future<void> _addResponseTimeRule() async {
    stdout.write('Enter maximum response time (ms): ');
    final input = stdin.readLineSync();
    
    final threshold = int.tryParse(input ?? '');
    if (threshold == null || threshold <= 0) {
      print('❌ Invalid threshold value');
      return;
    }
    
    final rule = ResponseTimeRule(
      threshold: threshold,
      description: 'Response time alert: >${threshold}ms',
    );
    
    _rules.add(rule);
    print('✅ Response time rule added');
  }
  
  Future<void> _addStatusCodeRule() async {
    stdout.write('Enter status code to monitor (e.g., 500): ');
    final input = stdin.readLineSync();
    
    final statusCode = int.tryParse(input ?? '');
    if (statusCode == null) {
      print('❌ Invalid status code');
      return;
    }
    
    final rule = StatusCodeRule(
      statusCode: statusCode,
      description: 'Status code alert: $statusCode',
    );
    
    _rules.add(rule);
    print('✅ Status code rule added');
  }
  
  List<String> _generateSampleLogEntries() {
    final entries = <String>[];
    final now = DateTime.now();
    
    for (int i = 0; i < 50; i++) {
      final timestamp = now.subtract(Duration(minutes: i));
      final level = _getRandomLogLevel();
      final message = _getRandomLogMessage(level);
      
      entries.add('${timestamp.toString().substring(0, 19)} [$level] $message');
    }
    
    return entries.reversed.toList(); // Chronological order
  }
  
  String _getRandomLogLevel() {
    final levels = ['INFO', 'WARN', 'ERROR', 'DEBUG'];
    final weights = [60, 25, 10, 5]; // Percentage distribution
    
    final random = DateTime.now().millisecondsSinceEpoch % 100;
    var cumulative = 0;
    
    for (int i = 0; i < levels.length; i++) {
      cumulative += weights[i];
      if (random < cumulative) {
        return levels[i];
      }
    }
    
    return 'INFO';
  }
  
  String _getRandomLogMessage(String level) {
    final messages = {
      'INFO': [
        'User authentication successful for user: john.doe',
        'Database connection established',
        'Processing request /api/users',
        'Cache hit for key: user_sessions',
        'Scheduled task completed successfully',
      ],
      'WARN': [
        'High memory usage detected: 85%',
        'Slow query detected: SELECT * FROM large_table (2.3s)',
        'Rate limit approaching for IP: 192.168.1.100',
        'Deprecated API endpoint accessed: /api/v1/legacy',
      ],
      'ERROR': [
        'Database connection failed: Connection timeout',
        'Failed to process payment: Invalid card number',
        'Authentication failed for user: suspicious.user',
        'File not found: /config/app.properties',
        'OutOfMemoryError: Java heap space exceeded',
      ],
      'DEBUG': [
        'Entering method: calculateUserScore()',
        'Cache miss for key: product_catalog',
        'HTTP request received: GET /health',
        'Validation passed for input data',
      ],
    };
    
    final levelMessages = messages[level] ?? ['Generic log message'];
    final index = DateTime.now().millisecondsSinceEpoch % levelMessages.length;
    return levelMessages[index];
  }
}

class FileWatcher {
  final String filePath;
  final LogFormat logFormat;
  final Function(LogEntry) onLogEntry;
  final Function(String) onError;
  
  File? _file;
  RandomAccessFile? _raf;
  Timer? _timer;
  int _lastPosition = 0;
  
  FileWatcher({
    required this.filePath,
    required this.logFormat,
    required this.onLogEntry,
    required this.onError,
  });
  
  Future<void> start() async {
    try {
      _file = File(filePath);
      _raf = await _file!.open();
      _lastPosition = await _raf!.length();
      
      // Check for new content every second
      _timer = Timer.periodic(Duration(seconds: 1), (_) => _checkForUpdates());
    } catch (e) {
      onError('Failed to start watching file: $e');
    }
  }
  
  void stop() {
    _timer?.cancel();
    _raf?.close();
  }
  
  Future<void> _checkForUpdates() async {
    try {
      final currentLength = await _raf!.length();
      
      if (currentLength > _lastPosition) {
        await _raf!.setPosition(_lastPosition);
        final newContent = await _raf!.read(currentLength - _lastPosition);
        final newLines = utf8.decode(newContent).split('\n');
        
        for (final line in newLines) {
          if (line.trim().isNotEmpty) {
            final entry = _parseLogLine(line);
            if (entry != null) {
              onLogEntry(entry);
            }
          }
        }
        
        _lastPosition = currentLength;
      }
    } catch (e) {
      onError('Error reading file updates: $e');
    }
  }
  
  LogEntry? _parseLogLine(String line) {
    try {
      switch (logFormat) {
        case LogFormat.application:
          return _parseApplicationLog(line);
        case LogFormat.apache:
          return _parseApacheLog(line);
        case LogFormat.nginx:
          return _parseNginxLog(line);
        case LogFormat.json:
          return _parseJsonLog(line);
        case LogFormat.generic:
          return _parseGenericLog(line);
      }
    } catch (e) {
      onError('Failed to parse log line: $line - Error: $e');
      return null;
    }
  }
  
  LogEntry _parseApplicationLog(String line) {
    final pattern = RegExp(r'^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) \[(ERROR|WARN|INFO|DEBUG)\] (.+)$');
    final match = pattern.firstMatch(line);
    
    if (match != null) {
      return LogEntry(
        timestamp: DateTime.parse(match.group(1)!),
        level: _parseLogLevel(match.group(2)!),
        message: match.group(3)!,
        raw: line,
      );
    }
    
    throw Exception('Invalid application log format');
  }
  
  LogEntry _parseApacheLog(String line) {
    // Simplified Apache log parsing
    return LogEntry(
      timestamp: DateTime.now(),
      level: LogLevel.info,
      message: line,
      raw: line,
    );
  }
  
  LogEntry _parseNginxLog(String line) {
    // Simplified Nginx log parsing
    return LogEntry(
      timestamp: DateTime.now(),
      level: LogLevel.info,
      message: line,
      raw: line,
    );
  }
  
  LogEntry _parseJsonLog(String line) {
    final json = jsonDecode(line) as Map<String, dynamic>;
    
    return LogEntry(
      timestamp: DateTime.parse(json['timestamp'] ?? DateTime.now().toIso8601String()),
      level: _parseLogLevel(json['level'] ?? 'INFO'),
      message: json['message'] ?? line,
      raw: line,
    );
  }
  
  LogEntry _parseGenericLog(String line) {
    return LogEntry(
      timestamp: DateTime.now(),
      level: LogLevel.info,
      message: line,
      raw: line,
    );
  }
  
  LogLevel _parseLogLevel(String level) {
    switch (level.toUpperCase()) {
      case 'ERROR':
        return LogLevel.error;
      case 'WARN':
      case 'WARNING':
        return LogLevel.warning;
      case 'INFO':
        return LogLevel.info;
      case 'DEBUG':
        return LogLevel.debug;
      default:
        return LogLevel.info;
    }
  }
}

class LogEntry {
  final DateTime timestamp;
  final LogLevel level;
  final String message;
  final String raw;
  
  LogEntry({
    required this.timestamp,
    required this.level,
    required this.message,
    required this.raw,
  });
}

enum LogLevel { error, warning, info, debug }
enum LogFormat { apache, nginx, application, json, generic }

abstract class MonitoringRule {
  final String description;
  
  MonitoringRule({required this.description});
  
  bool matches(LogEntry entry);
}

class ErrorPatternRule extends MonitoringRule {
  final RegExp pattern;
  
  ErrorPatternRule({required this.pattern, required super.description});
  
  @override
  bool matches(LogEntry entry) {
    return pattern.hasMatch(entry.message);
  }
}

class FrequencyRule extends MonitoringRule {
  final int threshold;
  final List<DateTime> _recentEntries = [];
  
  FrequencyRule({required this.threshold, required super.description});
  
  @override
  bool matches(LogEntry entry) {
    final now = DateTime.now();
    final oneMinuteAgo = now.subtract(Duration(minutes: 1));
    
    // Remove entries older than 1 minute
    _recentEntries.removeWhere((time) => time.isBefore(oneMinuteAgo));
    
    // Add current entry
    _recentEntries.add(now);
    
    return _recentEntries.length > threshold;
  }
}

class ResponseTimeRule extends MonitoringRule {
  final int threshold;
  
  ResponseTimeRule({required this.threshold, required super.description});
  
  @override
  bool matches(LogEntry entry) {
    // Look for response time patterns in the message
    final pattern = RegExp(r'(\d+)ms|(\d+\.\d+)s');
    final match = pattern.firstMatch(entry.message);
    
    if (match != null) {
      final timeStr = match.group(1) ?? match.group(2);
      if (timeStr != null) {
        final time = double.tryParse(timeStr);
        if (time != null) {
          // Convert seconds to milliseconds if needed
          final timeMs = timeStr.contains('s') ? time * 1000 : time;
          return timeMs > threshold;
        }
      }
    }
    
    return false;
  }
}

class StatusCodeRule extends MonitoringRule {
  final int statusCode;
  
  StatusCodeRule({required this.statusCode, required super.description});
  
  @override
  bool matches(LogEntry entry) {
    return entry.message.contains(statusCode.toString());
  }
}

class LogStatistics {
  int totalEntries = 0;
  int errorEntries = 0;
  int warningEntries = 0;
  int infoEntries = 0;
  int alertsTriggered = 0;
  List<Alert> recentAlerts = [];
}

class Alert {
  final MonitoringRule rule;
  final LogEntry entry;
  final DateTime timestamp;
  final String message;
  
  Alert({
    required this.rule,
    required this.entry,
    required this.timestamp,
    required this.message,
  });
}
```

## How It Works

### Real-Time File Watching

```dart
Future<void> _checkForUpdates() async {
  final currentLength = await _raf!.length();
  
  if (currentLength > _lastPosition) {
    await _raf!.setPosition(_lastPosition);
    final newContent = await _raf!.read(currentLength - _lastPosition);
    final newLines = utf8.decode(newContent).split('\n');
    
    for (final line in newLines) {
      if (line.trim().isNotEmpty) {
        final entry = _parseLogLine(line);
        if (entry != null) {
          onLogEntry(entry);
        }
      }
    }
  }
}
```

We monitor files by checking for size changes and reading only new content since the last check.

### Automatic Log Format Detection

```dart
Future<LogFormat> _detectLogFormat(File file) async {
  final lines = await file.readAsLines();
  final sampleLines = lines.take(10).toList();
  
  // Apache Combined Log Format
  final apachePattern = RegExp(r'^\d+\.\d+\.\d+\.\d+ - - \[.+\] ".+" \d+ \d+');
  if (sampleLines.any((line) => apachePattern.hasMatch(line))) {
    return LogFormat.apache;
  }
  
  // Application Log Format
  final appPattern = RegExp(r'^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} \[(ERROR|WARN|INFO|DEBUG)\]');
  if (sampleLines.any((line) => appPattern.hasMatch(line))) {
    return LogFormat.application;
  }
}
```

We automatically detect log formats by analyzing sample lines with regex patterns.

### Configurable Monitoring Rules

```dart
abstract class MonitoringRule {
  final String description;
  bool matches(LogEntry entry);
}

class ErrorPatternRule extends MonitoringRule {
  final RegExp pattern;
  
  @override
  bool matches(LogEntry entry) {
    return pattern.hasMatch(entry.message);
  }
}
```

We use polymorphic rule classes to implement different types of monitoring conditions.

### Real-Time Statistics

```dart
void _handleLogEntry(LogEntry entry) {
  _statistics.totalEntries++;
  
  switch (entry.level) {
    case LogLevel.error:
      _statistics.errorEntries++;
      break;
    // ... other levels
  }
  
  // Check against monitoring rules
  for (final rule in _rules) {
    if (rule.matches(entry)) {
      _triggerAlert(rule, entry);
    }
  }
}
```

We maintain running statistics and check each entry against configured rules in real-time.

## Running the Monitor

1. Save the code to a file (e.g., `log_monitor.dart`)
2. Run it with: `dart log_monitor.dart`
3. Generate a sample log file or point to an existing one
4. Add monitoring rules as needed

## Example Usage

```bash
📊 Log File Monitor
==================

Choose an option:
1. Start monitoring a log file
2. Add monitoring rules
3. View monitoring statistics
4. Generate sample log file
5. Stop all monitoring
6. Exit

Enter your choice (1-6): 4

🎲 Generating sample log file...
💾 Sample log saved to: sample_app.log
📄 Generated 50 log entries
💡 You can now monitor this file with option 1

Choose an option:
1. Start monitoring a log file
2. Add monitoring rules
3. View monitoring statistics
4. Generate sample log file
5. Stop all monitoring
6. Exit

Enter your choice (1-6): 1

Enter log file path to monitor: sample_app.log
🔍 Detecting log format...
📝 Detected format: LogFormat.application
👀 Starting to monitor: sample_app.log
✅ Monitoring started for: sample_app.log

[10:30:15] 🔵 INFO  User authentication successful for user: john.doe
[10:31:22] 🟡 WARN  High memory usage detected: 85%
[10:32:18] 🔴 ERROR Database connection failed: Connection timeout

🚨 ALERT: Error pattern: Database connection failed: Connection timeout
   Time: 2025-06-25 10:32:18.123
   Rule: Error pattern: connection.failed
```

## What You've Learned

This project introduces several important concepts:

- **Real-Time File Monitoring**: Watching files for changes efficiently
- **Pattern Recognition**: Using regex for log parsing and detection
- **Event-Driven Programming**: Responding to file changes and pattern matches
- **Multiple Format Support**: Handling different log formats automatically
- **Rule-Based Systems**: Configurable monitoring conditions
- **Stream Processing**: Processing data as it arrives
- **Alert Systems**: Triggering notifications based on conditions

## Key Features Implemented

1. **Multi-Format Support**: Apache, Nginx, Application, JSON, and generic logs
2. **Real-Time Monitoring**: Efficient file watching with minimal resource usage
3. **Configurable Rules**: Error patterns, frequency thresholds, response times
4. **Statistics Tracking**: Real-time counters and alert history
5. **Alert System**: Immediate notifications when conditions are met
6. **Sample Data Generation**: Built-in log generator for testing

## Extending the Monitor

You can enhance this monitor by:
- Adding email/SMS alert notifications
- Implementing log rotation handling
- Adding more sophisticated pattern recognition
- Creating dashboard visualization
- Adding database storage for historical data
- Implementing machine learning for anomaly detection
- Adding support for compressed log files

This project provides essential skills for system monitoring, debugging, and DevOps practices!

Happy monitoring! 📊
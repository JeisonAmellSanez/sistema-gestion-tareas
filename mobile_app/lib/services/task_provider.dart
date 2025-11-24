import 'package:flutter/foundation.dart';
import '../models/task.dart';
import '../services/api_service.dart';

class TaskProvider with ChangeNotifier {
  final ApiService _apiService = ApiService();
  List<Task> _tasks = [];
  bool _isLoading = false;
  String? _error;

  List<Task> get tasks => _tasks;
  bool get isLoading => _isLoading;
  String? get error => _error;

  // Cargar todas las tareas
  Future<void> loadTasks() async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      _tasks = await _apiService.getTasks();
      _error = null;
    } catch (e) {
      _error = e.toString();
      _tasks = [];
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  // Crear nueva tarea
  Future<void> addTask(Task task) async {
    try {
      final newTask = await _apiService.createTask(task);
      _tasks.add(newTask);
      _error = null;
      notifyListeners();
    } catch (e) {
      _error = e.toString();
      throw e;
    }
  }

  // Actualizar tarea
  Future<void> updateTask(int id, Task task) async {
    try {
      final updatedTask = await _apiService.updateTask(id, task);
      final index = _tasks.indexWhere((t) => t.id == id);
      if (index != -1) {
        _tasks[index] = updatedTask;
        _error = null;
        notifyListeners();
      }
    } catch (e) {
      _error = e.toString();
      throw e;
    }
  }

  // Eliminar tarea
  Future<void> deleteTask(int id) async {
    try {
      await _apiService.deleteTask(id);
      _tasks.removeWhere((task) => task.id == id);
      _error = null;
      notifyListeners();
    } catch (e) {
      _error = e.toString();
      throw e;
    }
  }

  // Filtrar tareas por estado
  List<Task> getTasksByStatus(String status) {
    return _tasks.where((task) => task.status == status).toList();
  }

  // Filtrar tareas por prioridad
  List<Task> getTasksByPriority(String priority) {
    return _tasks.where((task) => task.priority == priority).toList();
  }
}

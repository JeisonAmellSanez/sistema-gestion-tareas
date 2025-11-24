import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/task.dart';

class ApiService {
  // Cambiar esta URL según tu configuración
  // Para Android emulator usa: http://10.0.2.2:3000
  // Para iOS simulator usa: http://localhost:3000
  // Para dispositivo físico usa tu IP local: http://192.168.x.x:3000
  static const String baseUrl = 'http://10.0.2.2:3000/api';

  // Obtener todas las tareas
  Future<List<Task>> getTasks() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/tasks'));
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        final List<dynamic> tasksJson = data['data'];
        return tasksJson.map((json) => Task.fromJson(json)).toList();
      } else {
        throw Exception('Error al cargar tareas');
      }
    } catch (e) {
      throw Exception('Error de conexión: $e');
    }
  }

  // Obtener tarea por ID
  Future<Task> getTaskById(int id) async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/tasks/$id'));
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return Task.fromJson(data['data']);
      } else {
        throw Exception('Error al cargar tarea');
      }
    } catch (e) {
      throw Exception('Error de conexión: $e');
    }
  }

  // Crear nueva tarea
  Future<Task> createTask(Task task) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/tasks'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode(task.toJson()),
      );
      
      if (response.statusCode == 201) {
        final data = json.decode(response.body);
        return Task.fromJson(data['data']);
      } else {
        throw Exception('Error al crear tarea');
      }
    } catch (e) {
      throw Exception('Error de conexión: $e');
    }
  }

  // Actualizar tarea
  Future<Task> updateTask(int id, Task task) async {
    try {
      final response = await http.put(
        Uri.parse('$baseUrl/tasks/$id'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode(task.toJson()),
      );
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return Task.fromJson(data['data']);
      } else {
        throw Exception('Error al actualizar tarea');
      }
    } catch (e) {
      throw Exception('Error de conexión: $e');
    }
  }

  // Eliminar tarea
  Future<void> deleteTask(int id) async {
    try {
      final response = await http.delete(Uri.parse('$baseUrl/tasks/$id'));
      
      if (response.statusCode != 200) {
        throw Exception('Error al eliminar tarea');
      }
    } catch (e) {
      throw Exception('Error de conexión: $e');
    }
  }

  // Filtrar tareas por estado
  Future<List<Task>> getTasksByStatus(String status) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/tasks?status=$status'),
      );
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        final List<dynamic> tasksJson = data['data'];
        return tasksJson.map((json) => Task.fromJson(json)).toList();
      } else {
        throw Exception('Error al cargar tareas');
      }
    } catch (e) {
      throw Exception('Error de conexión: $e');
    }
  }

  // Filtrar tareas por prioridad
  Future<List<Task>> getTasksByPriority(String priority) async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/tasks?priority=$priority'),
      );
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        final List<dynamic> tasksJson = data['data'];
        return tasksJson.map((json) => Task.fromJson(json)).toList();
      } else {
        throw Exception('Error al cargar tareas');
      }
    } catch (e) {
      throw Exception('Error de conexión: $e');
    }
  }
}

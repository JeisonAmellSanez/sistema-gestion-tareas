import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/tarea.dart';

class ApiService {
  // Cambia esta URL según tu configuración
  // Para emulador Android: http://10.0.2.2:3000
  // Para dispositivo físico: http://TU_IP_LOCAL:3000
  // Para iOS Simulator o Web: http://localhost:3000
  static const String baseUrl = 'http://192.168.101.79:3000/api/tareas';

  // GET - Obtener todas las tareas
  Future<List<Tarea>> obtenerTareas() async {
    try {
      final response = await http.get(Uri.parse(baseUrl));

      if (response.statusCode == 200) {
        final Map<String, dynamic> data = json.decode(response.body);
        final List<dynamic> tareasJson = data['data'];
        return tareasJson.map((json) => Tarea.fromJson(json)).toList();
      } else {
        throw Exception('Error al cargar las tareas');
      }
    } catch (e) {
      throw Exception('Error de conexión: $e');
    }
  }

  // GET - Obtener una tarea por ID
  Future<Tarea> obtenerTarea(int id) async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/$id'));

      if (response.statusCode == 200) {
        final Map<String, dynamic> data = json.decode(response.body);
        return Tarea.fromJson(data['data']);
      } else {
        throw Exception('Tarea no encontrada');
      }
    } catch (e) {
      throw Exception('Error de conexión: $e');
    }
  }

  // POST - Crear una nueva tarea
  Future<Tarea> crearTarea(
      String titulo, String descripcion, String estado) async {
    try {
      final response = await http.post(
        Uri.parse(baseUrl),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'titulo': titulo,
          'descripcion': descripcion,
          'estado': estado,
        }),
      );

      if (response.statusCode == 201) {
        final Map<String, dynamic> data = json.decode(response.body);
        return Tarea.fromJson(data['data']);
      } else {
        throw Exception('Error al crear la tarea');
      }
    } catch (e) {
      throw Exception('Error de conexión: $e');
    }
  }

  // PUT - Actualizar una tarea existente
  Future<Tarea> actualizarTarea(
      int id, String titulo, String descripcion, String estado) async {
    try {
      final response = await http.put(
        Uri.parse('$baseUrl/$id'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'titulo': titulo,
          'descripcion': descripcion,
          'estado': estado,
        }),
      );

      if (response.statusCode == 200) {
        final Map<String, dynamic> data = json.decode(response.body);
        return Tarea.fromJson(data['data']);
      } else {
        throw Exception('Error al actualizar la tarea');
      }
    } catch (e) {
      throw Exception('Error de conexión: $e');
    }
  }

  // DELETE - Eliminar una tarea
  Future<void> eliminarTarea(int id) async {
    try {
      final response = await http.delete(Uri.parse('$baseUrl/$id'));

      if (response.statusCode != 200) {
        throw Exception('Error al eliminar la tarea');
      }
    } catch (e) {
      throw Exception('Error de conexión: $e');
    }
  }
}

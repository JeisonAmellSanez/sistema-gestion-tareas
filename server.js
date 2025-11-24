const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos (frontend)
app.use(express.static('public'));

// Base de datos en memoria (simulación)
let tareas = [
  {
    id: 1,
    titulo: 'Completar proyecto',
    descripcion: 'Finalizar el proyecto de Node.js',
    estado: 'pendiente',
    fechaCreacion: new Date().toISOString()
  },
  {
    id: 2,
    titulo: 'Estudiar Express',
    descripcion: 'Revisar documentación de Express.js',
    estado: 'en progreso',
    fechaCreacion: new Date().toISOString()
  }
];

let nextId = 3;

// ==================== RUTAS CRUD ====================

// GET - Obtener todas las tareas
app.get('/api/tareas', (req, res) => {
  res.json({
    success: true,
    data: tareas,
    total: tareas.length
  });
});

// GET - Obtener una tarea por ID
app.get('/api/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);
  
  if (!tarea) {
    return res.status(404).json({
      success: false,
      message: 'Tarea no encontrada'
    });
  }
  
  res.json({
    success: true,
    data: tarea
  });
});

// POST - Crear una nueva tarea
app.post('/api/tareas', (req, res) => {
  const { titulo, descripcion, estado } = req.body;
  
  if (!titulo || !descripcion) {
    return res.status(400).json({
      success: false,
      message: 'Título y descripción son obligatorios'
    });
  }
  
  const nuevaTarea = {
    id: nextId++,
    titulo,
    descripcion,
    estado: estado || 'pendiente',
    fechaCreacion: new Date().toISOString()
  };
  
  tareas.push(nuevaTarea);
  
  res.status(201).json({
    success: true,
    message: 'Tarea creada exitosamente',
    data: nuevaTarea
  });
});

// PUT - Actualizar una tarea existente
app.put('/api/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, descripcion, estado } = req.body;
  
  const index = tareas.findIndex(t => t.id === id);
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Tarea no encontrada'
    });
  }
  
  // Actualizar solo los campos proporcionados
  if (titulo !== undefined) tareas[index].titulo = titulo;
  if (descripcion !== undefined) tareas[index].descripcion = descripcion;
  if (estado !== undefined) tareas[index].estado = estado;
  
  res.json({
    success: true,
    message: 'Tarea actualizada exitosamente',
    data: tareas[index]
  });
});

// DELETE - Eliminar una tarea
app.delete('/api/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tareas.findIndex(t => t.id === id);
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Tarea no encontrada'
    });
  }
  
  const tareaEliminada = tareas.splice(index, 1)[0];
  
  res.json({
    success: true,
    message: 'Tarea eliminada exitosamente',
    data: tareaEliminada
  });
});

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📋 API disponible en http://localhost:${PORT}/api/tareas`);
});

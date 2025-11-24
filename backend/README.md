# Backend - Task Management API

REST API para gestión de tareas construida con Node.js y Express.

## Características

- ✅ CRUD completo de tareas
- ✅ Filtrado por estado y prioridad
- ✅ Validación de datos
- ✅ Manejo de errores
- ✅ CORS habilitado para aplicaciones móviles
- ✅ Almacenamiento en memoria

## Tecnologías

- Node.js
- Express.js
- CORS
- dotenv

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno (opcional):
```bash
cp .env.example .env
```

3. Iniciar el servidor:
```bash
# Modo producción
npm start

# Modo desarrollo (con nodemon)
npm run dev
```

El servidor se ejecutará en `http://localhost:3000`

## Endpoints

### GET /
Información de la API

### GET /api/tasks
Obtener todas las tareas

Query parameters:
- `status`: Filtrar por estado (pending, in-progress, completed)
- `priority`: Filtrar por prioridad (low, medium, high)

### GET /api/tasks/:id
Obtener una tarea específica

### POST /api/tasks
Crear una nueva tarea

Body (JSON):
```json
{
  "title": "Título de la tarea",
  "description": "Descripción de la tarea",
  "status": "pending",
  "priority": "medium"
}
```

### PUT /api/tasks/:id
Actualizar una tarea existente

Body (JSON):
```json
{
  "title": "Nuevo título",
  "description": "Nueva descripción",
  "status": "completed",
  "priority": "high"
}
```

### DELETE /api/tasks/:id
Eliminar una tarea

## Modelo de Tarea

```javascript
{
  id: number,
  title: string,
  description: string,
  status: "pending" | "in-progress" | "completed",
  priority: "low" | "medium" | "high",
  createdAt: string (ISO date),
  updatedAt: string (ISO date)
}
```

## Ejemplos de Uso

### Crear una tarea
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Mi tarea","description":"Descripción","priority":"high"}'
```

### Obtener todas las tareas
```bash
curl http://localhost:3000/api/tasks
```

### Actualizar una tarea
```bash
curl -X PUT http://localhost:3000/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'
```

### Eliminar una tarea
```bash
curl -X DELETE http://localhost:3000/api/tasks/1
```

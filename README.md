# Sistema de Gestión de Tareas

Sistema completo de gestión de tareas que incluye una API REST desarrollada con Node.js + Express y una aplicación móvil desarrollada con Flutter.

## 📋 Descripción

Este proyecto proporciona una solución completa para la gestión de tareas, permitiendo a los usuarios crear, leer, actualizar y eliminar tareas a través de una API REST y una interfaz móvil intuitiva.

## 🏗️ Arquitectura

El proyecto está dividido en dos componentes principales:

### Backend (API REST)
- **Tecnologías**: Node.js, Express.js
- **Funcionalidad**: API REST para operaciones CRUD de tareas
- **Características**:
  - Endpoints RESTful
  - Validación de datos
  - Manejo de errores
  - CORS habilitado
  - Almacenamiento en memoria

### Frontend (Aplicación Móvil)
- **Tecnologías**: Flutter, Dart
- **Funcionalidad**: Interfaz móvil para gestión de tareas
- **Características**:
  - Lista de tareas con filtros
  - Formularios para crear/editar tareas
  - Gestión de estado con Provider
  - Material Design
  - Comunicación HTTP con la API

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn
- Flutter SDK (v3.0.0 o superior) - opcional para la app móvil
- Android Studio / Xcode - opcional para emuladores

### Instalación y Ejecución

#### 1. Clonar el repositorio

```bash
git clone https://github.com/JeisonAmellSanez/sistema-gestion-tareas.git
cd sistema-gestion-tareas
```

#### 2. Backend (API REST)

```bash
cd backend
npm install
npm start
```

La API estará disponible en `http://localhost:3000`

Para más información, ver [backend/README.md](backend/README.md)

#### 3. Frontend (Aplicación Móvil)

```bash
cd mobile_app
flutter pub get
flutter run
```

**Importante**: Configurar la URL de la API en `lib/services/api_service.dart` según tu entorno.

Para más información, ver [mobile_app/README.md](mobile_app/README.md)

## 📱 Funcionalidades

### Gestión de Tareas
- ✅ Crear nuevas tareas
- ✅ Ver lista completa de tareas
- ✅ Editar tareas existentes
- ✅ Eliminar tareas
- ✅ Cambiar estado de las tareas
- ✅ Filtrar por estado y prioridad

### Estados de Tareas
- **Pendiente**: Tarea recién creada
- **En Progreso**: Tarea en desarrollo
- **Completada**: Tarea finalizada

### Niveles de Prioridad
- **Alta**: Tareas urgentes
- **Media**: Tareas normales
- **Baja**: Tareas no urgentes

## 🔌 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Endpoints Disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/tasks` | Obtener todas las tareas |
| GET | `/tasks/:id` | Obtener una tarea específica |
| POST | `/tasks` | Crear una nueva tarea |
| PUT | `/tasks/:id` | Actualizar una tarea |
| DELETE | `/tasks/:id` | Eliminar una tarea |

### Ejemplo de Tarea (JSON)

```json
{
  "id": 1,
  "title": "Completar proyecto",
  "description": "Finalizar el sistema de gestión de tareas",
  "status": "in-progress",
  "priority": "high",
  "createdAt": "2025-11-24T17:30:00.076Z",
  "updatedAt": "2025-11-24T17:30:00.076Z"
}
```

## 🛠️ Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- CORS
- dotenv
- body-parser

### Frontend
- Flutter
- Dart
- Provider (State Management)
- HTTP package
- Material Design

## 📂 Estructura del Proyecto

```
sistema-gestion-tareas/
├── backend/                 # API REST (Node.js + Express)
│   ├── src/
│   │   ├── controllers/    # Controladores de la API
│   │   ├── models/         # Modelos de datos
│   │   ├── routes/         # Definición de rutas
│   │   └── app.js          # Configuración de Express
│   ├── server.js           # Punto de entrada del servidor
│   ├── package.json        # Dependencias del backend
│   └── README.md           # Documentación del backend
│
├── mobile_app/             # Aplicación Móvil (Flutter)
│   ├── lib/
│   │   ├── models/         # Modelos de datos
│   │   ├── screens/        # Pantallas de la aplicación
│   │   ├── services/       # Servicios (API, Provider)
│   │   └── main.dart       # Punto de entrada
│   ├── pubspec.yaml        # Dependencias de Flutter
│   └── README.md           # Documentación de la app móvil
│
└── README.md               # Este archivo
```

## 🧪 Pruebas

### Backend
```bash
cd backend
npm test
```

### Frontend
```bash
cd mobile_app
flutter test
```

## 📝 Desarrollo

### Backend
Para ejecutar en modo desarrollo con auto-recarga:
```bash
cd backend
npm run dev
```

### Frontend
Para ejecutar en modo debug:
```bash
cd mobile_app
flutter run
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👤 Autor

Jeison Amell Sanez

## 📞 Soporte

Si encuentras algún problema o tienes preguntas, por favor abre un issue en el repositorio.

---

Desarrollado con ❤️ usando Node.js, Express y Flutter
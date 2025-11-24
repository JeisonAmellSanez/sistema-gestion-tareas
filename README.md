# 📋 Sistema de Gestión de Tareas - API REST + App Móvil

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

</div>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/status-active-success.svg" alt="Status">
  <img src="https://img.shields.io/badge/platform-Android%20%7C%20iOS%20%7C%20Web-lightgrey.svg" alt="Platform">
</p>

<p align="center">
  Proyecto full-stack que implementa una <b>API REST completa</b> con Node.js y Express, proporcionando operaciones CRUD (Create, Read, Update, Delete) para un sistema de gestión de tareas. Incluye una <b>aplicación móvil multiplataforma en Flutter</b> y una <b>aplicación web</b> que consumen la misma API.
</p>

<p align="center">
  <a href="#-características">Características</a> •
  <a href="#-requisitos-previos">Requisitos</a> •
  <a href="#-instalación">Instalación</a> •
  <a href="#️-ejecución">Ejecución</a> •
  <a href="#-api-endpoints">API</a> •
  <a href="#-contribuciones">Contribuir</a> •
  <a href="#-licencia">Licencia</a>
</p>

---

## ✨ Características

### Backend (Node.js + Express)
- ✅ **API REST completa** con 5 endpoints
- ✅ **CRUD funcional**: GET, POST, PUT, DELETE
- ✅ **Gestión de datos en arreglo** (in-memory)
- ✅ **CORS habilitado** para peticiones cross-origin
- ✅ **Validación de datos** en el servidor
- ✅ **Códigos de estado HTTP** apropiados

### Frontend Web (HTML5 + CSS3 + JavaScript)
- ✅ **Interfaz moderna** con diseño gradient
- ✅ **Responsive design** adaptable a dispositivos
- ✅ **Operaciones CRUD** sin recargar página
- ✅ **Notificaciones toast** en tiempo real
- ✅ **Validación de formularios**
- ✅ **Estados visuales** diferenciados por color

### App Móvil (Flutter)
- ✅ **Multiplataforma** (Android, iOS, Web)
- ✅ **Material Design 3** moderno
- ✅ **Consumo de API REST** con paquete http
- ✅ **Pull-to-refresh** para actualizar datos
- ✅ **Navegación fluida** entre pantallas
- ✅ **Manejo de errores** de conexión
- ✅ **Diálogos de confirmación**

## 📋 Requisitos Previos

### Para el Backend y Frontend Web:
- **Node.js** 12.0 o superior ([Descargar](https://nodejs.org/))
- **npm** 6.0 o superior (incluido con Node.js)

### Para la App Móvil:
- **Flutter SDK** 3.0 o superior ([Instalar Flutter](https://flutter.dev/docs/get-started/install))
- **Android Studio** (para desarrollo Android)
- **Xcode** (para desarrollo iOS - solo macOS)
- **Dispositivo Android/iOS** o emulador configurado

## 🔧 Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/actividad4.git
cd actividad4
```

### 2. Instalar dependencias del Backend
```bash
npm install
```

### 3. Instalar dependencias de Flutter (opcional)
```bash
cd flutter_app
flutter pub get
cd ..
```

## ▶️ Ejecución

### Opción 1: Solo Backend + Web

1. **Iniciar el servidor:**
```bash
npm start
```

2. **Acceder a la aplicación:**
   - **Frontend Web**: http://localhost:3000
   - **API REST**: http://localhost:3000/api/tareas

### Opción 2: Backend + App Móvil

1. **Iniciar el servidor** (en una terminal):
```bash
npm start
```

2. **Configurar la IP en Flutter** (solo para dispositivo físico):
   - Editar `flutter_app/lib/services/api_service.dart`
   - Cambiar `baseUrl` a tu IP local: `http://TU_IP:3000/api/tareas`
   - Obtener IP: Windows: `ipconfig`, Mac/Linux: `ifconfig`

3. **Ejecutar la app Flutter** (en otra terminal):

```bash
# Ver dispositivos disponibles
cd flutter_app
flutter devices

# Ejecutar en dispositivo conectado
flutter run

# O ejecutar en emulador Android
flutter run -d android

# O ejecutar en Chrome (web)
flutter run -d chrome
```

## 📡 Endpoints de la API

### GET /api/tareas
Obtiene todas las tareas
```json
{
  "success": true,
  "data": [...],
  "total": 2
}
```

### GET /api/tareas/:id
Obtiene una tarea específica por ID

### POST /api/tareas
Crea una nueva tarea
```json
{
  "titulo": "Nueva tarea",
  "descripcion": "Descripción de la tarea",
  "estado": "pendiente"
}
```

### PUT /api/tareas/:id
Actualiza una tarea existente
```json
{
  "titulo": "Tarea actualizada",
  "descripcion": "Nueva descripción",
  "estado": "completada"
}
```

### DELETE /api/tareas/:id
Elimina una tarea

## 🎨 Estructura del Proyecto

```
actividad4/
├── public/
│   ├── index.html      # Frontend web - Estructura HTML
│   ├── styles.css      # Estilos CSS
│   └── app.js          # Lógica del cliente web
├── flutter_app/        # Aplicación móvil Flutter
│   ├── lib/
│   │   ├── main.dart
│   │   ├── models/
│   │   ├── services/
│   │   └── screens/
│   ├── android/
│   ├── ios/
│   └── pubspec.yaml
├── server.js           # Servidor Express con endpoints CRUD
├── package.json        # Dependencias del proyecto
└── README.md          # Documentación
```

## 💡 Uso de la Aplicación

1. **Crear tarea**: Completa el formulario y haz clic en "Crear Tarea"
2. **Ver tareas**: La lista se actualiza automáticamente
3. **Editar tarea**: Haz clic en el botón "Editar" de cualquier tarea
4. **Eliminar tarea**: Haz clic en el botón "Eliminar" (se pedirá confirmación)

## 🛠️ Tecnologías Utilizadas

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Middleware**: CORS, Body-Parser

## 📝 Notas

- La API utiliza una base de datos en memoria (los datos se pierden al reiniciar el servidor)
- Para una implementación en producción, considera usar una base de datos real (MongoDB, PostgreSQL, etc.)

## 📱 Configuración de URL para Flutter

Antes de ejecutar la app en un dispositivo físico, configura la URL de la API:

**Archivo:** `flutter_app/lib/services/api_service.dart`

```dart
// Para emulador Android
static const String baseUrl = 'http://10.0.2.2:3000/api/tareas';

// Para dispositivo físico (reemplaza con tu IP)
static const String baseUrl = 'http://192.168.X.X:3000/api/tareas';

// Para iOS Simulator o Web
static const String baseUrl = 'http://localhost:3000/api/tareas';
```

## 🔄 Arquitectura del Sistema

```
┌─────────────────┐
│   Clientes      │
│  (Frontend)     │
└────────┬────────┘
         │
    ┌────┴─────┬──────────┐
    │          │          │
┌───▼───┐  ┌──▼───┐  ┌──▼──────┐
│  Web  │  │ iOS  │  │ Android │
│  App  │  │ App  │  │   App   │
└───┬───┘  └──┬───┘  └──┬──────┘
    │         │         │
    └─────────┴─────────┘
              │
         HTTP/REST
              │
    ┌─────────▼─────────┐
    │    API REST       │
    │  (Express.js)     │
    └─────────┬─────────┘
              │
    ┌─────────▼─────────┐
    │   Data Store      │
    │  (Array/Memory)   │
    └───────────────────┘
```

## 🧪 Testing

### Probar la API directamente

Usa herramientas como [Postman](https://www.postman.com/) o cURL:

```bash
# GET - Obtener todas las tareas
curl http://localhost:3000/api/tareas

# POST - Crear una tarea
curl -X POST http://localhost:3000/api/tareas \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Nueva tarea","descripcion":"Descripción","estado":"pendiente"}'

# PUT - Actualizar una tarea
curl -X PUT http://localhost:3000/api/tareas/1 \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Tarea actualizada","descripcion":"Nueva desc","estado":"completada"}'

# DELETE - Eliminar una tarea
curl -X DELETE http://localhost:3000/api/tareas/1
```

## 🚀 Despliegue

### Backend (Node.js)

Puedes desplegar el backend en:
- **Heroku**: [Tutorial](https://devcenter.heroku.com/articles/deploying-nodejs)
- **Vercel**: [Tutorial](https://vercel.com/docs/concepts/functions/serverless-functions)
- **Railway**: [Tutorial](https://docs.railway.app/deploy/deployments)
- **Render**: [Tutorial](https://render.com/docs/deploy-node-express-app)

### App Flutter

```bash
# Android APK
cd flutter_app
flutter build apk --release

# Android App Bundle (Google Play)
flutter build appbundle --release

# iOS (requiere macOS y Xcode)
flutter build ios --release
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor, lee [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Proyecto:** Sistema de Gestión de Tareas API REST + Flutter  
**Actividad:** Desarrollo de Aplicaciones Móviles  
**Año:** 2025

## 🙏 Agradecimientos

- [Express.js](https://expressjs.com/) - Framework web para Node.js
- [Flutter](https://flutter.dev/) - Framework UI multiplataforma
- [Material Design](https://material.io/) - Sistema de diseño

---

<div align="center">
  <p>Hecho con ❤️ para la comunidad de desarrolladores</p>
  <p>⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐</p>
</div>

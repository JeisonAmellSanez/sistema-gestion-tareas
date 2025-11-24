# 📱 App Móvil de Gestión de Tareas - Flutter

Aplicación móvil desarrollada en Flutter que consume la API REST de Node.js para gestión de tareas.

## 🚀 Características

- ✅ **CRUD Completo**: Crear, leer, actualizar y eliminar tareas
- ✅ **Interfaz Material Design**: UI moderna y atractiva
- ✅ **Consumo de API REST**: Conexión con el backend de Node.js
- ✅ **Multiplataforma**: Funciona en Android e iOS
- ✅ **Gestión de estados**: Pendiente, En Progreso, Completada
- ✅ **Pull to Refresh**: Actualización de datos arrastrando hacia abajo
- ✅ **Validación de formularios**
- ✅ **Manejo de errores**

## 📋 Requisitos Previos

1. **Flutter SDK** (versión 3.0.0 o superior)
   - Descargar de: https://flutter.dev/docs/get-started/install
   
2. **Android Studio** o **VS Code** con extensión de Flutter

3. **Dispositivo Android/iOS** o **Emulador**

4. **API Node.js** ejecutándose en el puerto 3000

## 🔧 Instalación

### 1. Instalar dependencias de Flutter
```bash
cd flutter_app
flutter pub get
```

### 2. Configurar la URL de la API

Abre el archivo `lib/services/api_service.dart` y configura la URL según tu caso:

```dart
// Para emulador Android
static const String baseUrl = 'http://10.0.2.2:3000/api/tareas';

// Para dispositivo físico (reemplaza con tu IP local)
static const String baseUrl = 'http://192.168.1.XXX:3000/api/tareas';

// Para iOS Simulator
static const String baseUrl = 'http://localhost:3000/api/tareas';
```

### 3. Asegúrate de que el servidor Node.js esté corriendo
```bash
cd ..
npm start
```

## ▶️ Ejecutar la Aplicación

### Android
```bash
flutter run
```

### iOS (Solo en macOS)
```bash
flutter run -d ios
```

### Chrome (Para desarrollo web)
```bash
flutter run -d chrome
```

## 📁 Estructura del Proyecto

```
flutter_app/
├── lib/
│   ├── main.dart                    # Punto de entrada
│   ├── models/
│   │   └── tarea.dart               # Modelo de datos
│   ├── services/
│   │   └── api_service.dart         # Servicio para consumir API
│   └── screens/
│       ├── home_screen.dart         # Pantalla principal
│       └── tarea_form_screen.dart   # Formulario crear/editar
├── android/                         # Configuración Android
├── ios/                            # Configuración iOS
└── pubspec.yaml                    # Dependencias
```

## 🔌 Endpoints Consumidos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/tareas` | Obtener todas las tareas |
| GET | `/api/tareas/:id` | Obtener una tarea específica |
| POST | `/api/tareas` | Crear nueva tarea |
| PUT | `/api/tareas/:id` | Actualizar tarea |
| DELETE | `/api/tareas/:id` | Eliminar tarea |

## 🎨 Capturas de Pantalla

La aplicación incluye:
- 📋 Lista de tareas con estados visuales
- ➕ Formulario para crear tareas
- ✏️ Edición de tareas existentes
- 🗑️ Eliminación con confirmación
- 🔄 Actualización pull-to-refresh
- ⚠️ Manejo de errores de conexión

## 🛠️ Dependencias

```yaml
dependencies:
  flutter: sdk
  http: ^1.1.0              # Para peticiones HTTP
  cupertino_icons: ^1.0.2   # Iconos iOS
```

## 📱 Configuración Adicional para Android

El archivo `AndroidManifest.xml` ya incluye:
- Permiso de INTERNET
- `usesCleartextTraffic="true"` para conexiones HTTP locales

## 🐛 Solución de Problemas

### Error de conexión
- Verifica que el servidor Node.js esté corriendo
- Confirma que la URL en `api_service.dart` sea correcta
- En Android, usa `http://10.0.2.2:3000` para el emulador
- En dispositivo físico, usa tu IP local

### Error al instalar dependencias
```bash
flutter clean
flutter pub get
```

### Error de permisos en Android
- Verifica que `AndroidManifest.xml` tenga el permiso de INTERNET

## 🚀 Compilar para Producción

### Android APK
```bash
flutter build apk --release
```

### Android App Bundle
```bash
flutter build appbundle --release
```

### iOS
```bash
flutter build ios --release
```

## 📝 Notas

- Para producción, configura HTTPS en el servidor
- Considera agregar autenticación JWT
- Implementa caché local con SQLite o Hive
- Agrega manejo de estado con Provider o Riverpod

## 👨‍💻 Desarrollo

Actividad 4 - Desarrollo de Aplicaciones Móviles con Flutter

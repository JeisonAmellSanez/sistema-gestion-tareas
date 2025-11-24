# Mobile App - Aplicación Móvil Flutter

Aplicación móvil para gestión de tareas desarrollada con Flutter.

## Características

- ✅ Lista de tareas con filtros
- ✅ Crear, editar y eliminar tareas
- ✅ Cambiar estado de las tareas
- ✅ Prioridades (Baja, Media, Alta)
- ✅ Estados (Pendiente, En Progreso, Completada)
- ✅ Diseño Material Design
- ✅ Estado gestionado con Provider
- ✅ Integración con API REST

## Tecnologías

- Flutter 3.x
- Provider (State Management)
- HTTP (API Communication)
- Material Design

## Requisitos Previos

- Flutter SDK 3.0.0 o superior
- Dart SDK 3.0.0 o superior
- Android Studio / Xcode (para emuladores)
- Backend API ejecutándose (ver carpeta backend/)

## Instalación

1. Instalar dependencias:
```bash
flutter pub get
```

2. Configurar URL de la API:

Editar el archivo `lib/services/api_service.dart` y actualizar la URL base según tu configuración:

```dart
// Para Android emulator
static const String baseUrl = 'http://10.0.2.2:3000/api';

// Para iOS simulator
static const String baseUrl = 'http://localhost:3000/api';

// Para dispositivo físico (usar tu IP local)
static const String baseUrl = 'http://192.168.x.x:3000/api';
```

3. Ejecutar la aplicación:
```bash
# En Android
flutter run

# En iOS (solo macOS)
flutter run -d ios
```

## Estructura del Proyecto

```
lib/
├── main.dart                 # Punto de entrada
├── models/
│   └── task.dart            # Modelo de tarea
├── services/
│   ├── api_service.dart     # Servicio para llamadas HTTP
│   └── task_provider.dart   # Provider para estado global
└── screens/
    ├── task_list_screen.dart    # Pantalla lista de tareas
    └── task_form_screen.dart    # Pantalla formulario
```

## Uso

### Lista de Tareas
- Ver todas las tareas
- Filtrar por estado (Todas, Pendientes, En Progreso, Completadas)
- Deslizar para refrescar
- Tocar una tarea para editarla
- Menú de contexto para cambiar estado o eliminar

### Agregar/Editar Tarea
- Botón flotante (+) para nueva tarea
- Formulario con campos:
  - Título (requerido)
  - Descripción
  - Estado
  - Prioridad

### Colores de Prioridad
- 🔴 Roja: Alta prioridad
- 🟠 Naranja: Media prioridad
- 🔵 Azul: Baja prioridad

### Estados de Tarea
- ⚪ Pendiente
- 🟠 En Progreso
- 🟢 Completada

## Construcción para Producción

### Android
```bash
flutter build apk --release
```

### iOS
```bash
flutter build ios --release
```

## Solución de Problemas

### Error de conexión con la API
1. Verificar que el backend esté ejecutándose
2. Verificar la URL en `api_service.dart`
3. Para emulador Android, usar `10.0.2.2` en lugar de `localhost`
4. Para dispositivo físico, usar la IP local de tu computadora

### Permisos de Internet (Android)
El archivo `android/app/src/main/AndroidManifest.xml` debe incluir:
```xml
<uses-permission android:name="android.permission.INTERNET" />
```

## Capturas de Pantalla

(Las capturas de pantalla se pueden agregar después de ejecutar la aplicación)

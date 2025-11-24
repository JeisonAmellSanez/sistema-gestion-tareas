# 🚀 Guía Rápida de Inicio

## Pasos para ejecutar el proyecto completo

### 1️⃣ Ejecutar el Servidor (Backend API)

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Iniciar el servidor
npm start
```

✅ El servidor estará corriendo en: **http://localhost:3000**

---

### 2️⃣ Acceder a la Aplicación Web

Una vez el servidor esté corriendo, abre tu navegador en:

🌐 **http://localhost:3000**

Ya puedes usar la aplicación web para gestionar tareas.

---

### 3️⃣ Ejecutar la App Móvil Flutter

#### Requisitos previos:
- Flutter SDK instalado
- Android Studio o emulador configurado
- Dispositivo físico conectado (opcional)

#### Pasos:

```bash
# Navegar a la carpeta de Flutter
cd flutter_app

# Instalar dependencias (solo la primera vez)
flutter pub get

# Ejecutar la app
flutter run
```

#### ⚙️ Configurar la URL de la API

Antes de ejecutar la app, abre `flutter_app/lib/services/api_service.dart` y configura la URL:

**Para Emulador Android:**
```dart
static const String baseUrl = 'http://10.0.2.2:3000/api/tareas';
```

**Para Dispositivo Físico:**
```dart
// Reemplaza XXX.XXX.X.XXX con tu IP local
static const String baseUrl = 'http://XXX.XXX.X.XXX:3000/api/tareas';
```

Para obtener tu IP local:
- Windows: `ipconfig` (busca IPv4)
- Mac/Linux: `ifconfig` o `ip addr`

**Para iOS Simulator:**
```dart
static const String baseUrl = 'http://localhost:3000/api/tareas';
```

---

## 📊 Verificar que todo funciona

### Probar la API directamente

Abre tu navegador o Postman y prueba:

**GET - Obtener todas las tareas:**
```
http://localhost:3000/api/tareas
```

**POST - Crear una tarea:**
```
POST http://localhost:3000/api/tareas
Content-Type: application/json

{
  "titulo": "Mi primera tarea",
  "descripcion": "Descripción de prueba",
  "estado": "pendiente"
}
```

---

## 🔧 Solución de Problemas Comunes

### El servidor no inicia
```bash
# Verifica que Node.js esté instalado
node --version

# Reinstala las dependencias
rm -rf node_modules
npm install
```

### La app Flutter no conecta con la API

1. Verifica que el servidor esté corriendo
2. Confirma la URL en `api_service.dart`
3. Para Android, usa `http://10.0.2.2:3000`
4. Para dispositivo físico, usa tu IP local
5. Asegúrate que el dispositivo esté en la misma red

### Error "INTERNET permission" en Android

El archivo `AndroidManifest.xml` ya tiene el permiso configurado, pero verifica:
```xml
<uses-permission android:name="android.permission.INTERNET"/>
```

---

## 📱 Comandos útiles de Flutter

```bash
# Ver dispositivos disponibles
flutter devices

# Ejecutar en dispositivo específico
flutter run -d <device-id>

# Ejecutar en Chrome (para probar la web)
flutter run -d chrome

# Limpiar proyecto
flutter clean

# Ver logs
flutter logs
```

---

## ✅ Checklist de Funcionamiento

- [ ] Servidor Node.js corriendo en puerto 3000
- [ ] Aplicación web accesible en el navegador
- [ ] API respondiendo correctamente (probar con GET)
- [ ] App Flutter instalada en el dispositivo/emulador
- [ ] App conectando con la API
- [ ] CRUD completo funcionando (crear, leer, actualizar, eliminar)

---

## 🎯 Próximos Pasos

Una vez que todo funcione:

1. **Personaliza la app** con tu tema de gestión
2. **Agrega más campos** al modelo de tareas
3. **Implementa persistencia** con una base de datos real (MongoDB, SQLite)
4. **Agrega autenticación** para usuarios
5. **Deploy** del servidor en la nube (Heroku, Vercel, Railway)

---

¿Necesitas ayuda? Revisa los README.md en cada carpeta para más detalles.

# Capturas de Pantalla

## 🌐 Aplicación Web

### Pantalla Principal
![Web - Pantalla Principal](docs/screenshots/web-home.png)
*Vista principal con lista de tareas y formulario de creación*

### Creación de Tarea
![Web - Crear Tarea](docs/screenshots/web-create.png)
*Formulario para crear nuevas tareas*

### Edición de Tarea
![Web - Editar Tarea](docs/screenshots/web-edit.png)
*Formulario de edición con datos precargados*

---

## 📱 Aplicación Móvil (Flutter)

### Android

#### Lista de Tareas
![Android - Lista](docs/screenshots/android-list.jpg)
*Vista de lista con Material Design en Android*

#### Formulario
![Android - Formulario](docs/screenshots/android-form.jpg)
*Pantalla de creación/edición de tareas*

#### Estados Visuales
![Android - Estados](docs/screenshots/android-states.jpg)
*Diferentes estados de tareas: Pendiente, En Progreso, Completada*

### iOS

#### Lista de Tareas
![iOS - Lista](docs/screenshots/ios-list.png)
*Vista en iOS con estilo nativo*

#### Formulario
![iOS - Formulario](docs/screenshots/ios-form.png)
*Formulario adaptado a iOS*

---

## 🔄 API REST

### Postman - Endpoints
![API - Postman](docs/screenshots/api-postman.png)
*Colección de endpoints en Postman*

### Respuestas JSON
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "titulo": "Completar proyecto",
      "descripcion": "Finalizar el proyecto de Node.js",
      "estado": "pendiente",
      "fechaCreacion": "2025-11-24T12:00:00.000Z"
    }
  ],
  "total": 1
}
```

---

## 🎥 Demo Video

[![Demo Video](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)

---

## 📊 Arquitectura

```
                    ┌──────────────┐
                    │  Navegador   │
                    │   (Chrome)   │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │   App Web    │
                    │  HTML/CSS/JS │
                    └──────┬───────┘
                           │
    ┌──────────────┬───────┴───────┬──────────────┐
    │              │               │              │
┌───▼────┐    ┌───▼────┐    ┌────▼────┐    ┌────▼────┐
│Android │    │  iOS   │    │  Web    │    │ Desktop │
│  App   │    │  App   │    │  App    │    │  App    │
└───┬────┘    └───┬────┘    └────┬────┘    └────┬────┘
    │             │              │              │
    └─────────────┴──────────────┴──────────────┘
                         │
                  HTTP/REST API
                         │
              ┌──────────▼──────────┐
              │   Express Server    │
              │    (Node.js)        │
              └──────────┬──────────┘
                         │
              ┌──────────▼──────────┐
              │    Data Layer       │
              │  (In-Memory Array)  │
              └─────────────────────┘
```

---

## 📝 Notas

Para agregar tus propias capturas de pantalla:

1. Crea una carpeta `docs/screenshots/` en la raíz del proyecto
2. Toma screenshots de la aplicación funcionando
3. Guárdalas con nombres descriptivos
4. Actualiza este documento con las rutas correctas

**Herramientas recomendadas para screenshots:**
- **Windows**: `Win + Shift + S`
- **macOS**: `Cmd + Shift + 4`
- **Android**: Captura nativa del dispositivo
- **iOS**: Captura nativa del simulador/dispositivo

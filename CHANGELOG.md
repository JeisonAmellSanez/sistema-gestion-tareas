# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [1.0.0] - 2025-11-24

### ✨ Agregado
- API REST completa con Node.js y Express
- Endpoint GET para obtener todas las tareas
- Endpoint GET para obtener una tarea por ID
- Endpoint POST para crear nuevas tareas
- Endpoint PUT para actualizar tareas existentes
- Endpoint DELETE para eliminar tareas
- Aplicación web frontend con HTML, CSS y JavaScript
- Aplicación móvil Flutter para Android/iOS
- Sistema de validación de datos
- Manejo de errores con códigos HTTP apropiados
- CORS habilitado para peticiones cross-origin
- Gestión de datos en memoria con arreglos
- Documentación completa en README.md
- Guía de inicio rápido
- Archivo de cumplimiento de requisitos

### 🎨 Frontend Web
- Interfaz con diseño gradient moderno
- Formulario de creación/edición de tareas
- Lista de tareas con estados visuales
- Notificaciones toast para feedback
- Diseño responsive para móviles y tablets
- Iconos y colores significativos

### 📱 App Móvil Flutter
- Pantalla principal con lista de tareas
- Pantalla de formulario para crear/editar
- Material Design 3
- Pull-to-refresh
- Diálogos de confirmación
- Navegación fluida entre pantallas
- Manejo de estados de carga
- Validación de formularios
- Soporte para Android, iOS y Web

### 📚 Documentación
- README principal con instrucciones completas
- README de Flutter con configuración específica
- Guía de inicio rápida (GUIA_INICIO.md)
- Documento de cumplimiento de requisitos
- Archivo .gitignore configurado
- Licencia MIT
- Guía de contribución (CONTRIBUTING.md)

### 🔧 Configuración
- package.json con scripts de ejecución
- pubspec.yaml para dependencias Flutter
- AndroidManifest.xml con permisos necesarios
- Estructura de proyecto organizada

## [Unreleased] - Próximas versiones

### 🚀 Por Hacer
- [ ] Persistencia de datos con MongoDB o SQLite
- [ ] Autenticación de usuarios con JWT
- [ ] Filtros y búsqueda de tareas
- [ ] Ordenamiento de tareas (por fecha, estado, etc.)
- [ ] Paginación de resultados
- [ ] Categorías o etiquetas para tareas
- [ ] Fechas de vencimiento
- [ ] Notificaciones push en móvil
- [ ] Modo oscuro
- [ ] Sincronización en tiempo real con WebSockets
- [ ] Tests unitarios y de integración
- [ ] CI/CD con GitHub Actions
- [ ] Docker para facilitar despliegue
- [ ] Documentación API con Swagger

### 🔮 Considerando
- Soporte para múltiples usuarios
- Compartir tareas entre usuarios
- Adjuntar archivos a tareas
- Historial de cambios
- Exportar/importar datos
- Estadísticas y gráficas
- Widget para escritorio

---

## Versionado

Este proyecto usa [Versionado Semántico](https://semver.org/lang/es/):

- **MAJOR**: Cambios incompatibles en la API
- **MINOR**: Nueva funcionalidad compatible con versiones anteriores
- **PATCH**: Correcciones de bugs compatibles

## Cómo Reportar Bugs o Sugerir Features

Por favor, abre un [issue](../../issues) en GitHub describiendo:
- Para bugs: pasos para reproducir, comportamiento esperado vs actual
- Para features: descripción detallada y casos de uso

## Mantener este Archivo

Al hacer cambios:
1. Actualiza la sección [Unreleased]
2. En cada release, mueve los cambios a una nueva versión
3. Sigue el formato: Agregado, Cambiado, Deprecado, Eliminado, Corregido, Seguridad

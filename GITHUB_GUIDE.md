# 🚀 Guía para Subir a GitHub

## Paso 1: Inicializar Git (si no está inicializado)

```bash
cd c:\Users\jeiso\Documents\apps\actividad4
git init
```

## Paso 2: Agregar todos los archivos

```bash
git add .
```

## Paso 3: Hacer el primer commit

```bash
git commit -m "Initial commit: API REST con Node.js + Express y App Flutter"
```

## Paso 4: Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com)
2. Inicia sesión
3. Haz clic en el botón **"+"** arriba a la derecha
4. Selecciona **"New repository"**
5. Configuración:
   - **Repository name**: `sistema-gestion-tareas` (o el nombre que prefieras)
   - **Description**: "API REST con Node.js + Express y App móvil Flutter para gestión de tareas. CRUD completo."
   - **Public** o **Private** (según prefieras)
   - ❌ **NO** marques "Add a README file" (ya tienes uno)
   - ❌ **NO** marques "Add .gitignore" (ya tienes uno)
   - ❌ **NO** agregues licencia (ya tienes una)
6. Haz clic en **"Create repository"**

## Paso 5: Conectar con el repositorio remoto

Copia la URL de tu repositorio y ejecuta:

```bash
git remote add origin https://github.com/TU_USUARIO/sistema-gestion-tareas.git
```

**Ejemplo:**
```bash
git remote add origin https://github.com/juanperez/sistema-gestion-tareas.git
```

## Paso 6: Configurar la rama principal

```bash
git branch -M main
```

## Paso 7: Subir los archivos a GitHub

```bash
git push -u origin main
```

Si es tu primera vez, te pedirá autenticación:
- **Usuario**: Tu username de GitHub
- **Contraseña**: Tu **Personal Access Token** (no tu contraseña normal)

### 🔑 Crear Personal Access Token (si no tienes):

1. Ve a GitHub → **Settings** (tu perfil)
2. **Developer settings** (al final del menú izquierdo)
3. **Personal access tokens** → **Tokens (classic)**
4. **Generate new token** → **Generate new token (classic)**
5. Configuración:
   - **Note**: "Token para actividad4"
   - **Expiration**: 90 days (o lo que prefieras)
   - **Scopes**: Marca **repo** (todos los permisos de repositorio)
6. Haz clic en **Generate token**
7. **¡IMPORTANTE!** Copia el token inmediatamente (no podrás verlo de nuevo)

## 📋 Comandos Rápidos de Git

### Ver estado actual
```bash
git status
```

### Agregar archivos modificados
```bash
git add .
# o específico
git add archivo.txt
```

### Hacer commit
```bash
git commit -m "Descripción de los cambios"
```

### Subir cambios
```bash
git push
```

### Ver historial
```bash
git log --oneline
```

### Crear nueva rama
```bash
git checkout -b nombre-rama
```

### Cambiar de rama
```bash
git checkout main
```

### Ver ramas
```bash
git branch
```

## 🔄 Workflow para Cambios Futuros

```bash
# 1. Modificar archivos
# 2. Ver qué cambió
git status

# 3. Agregar cambios
git add .

# 4. Commit con mensaje descriptivo
git commit -m "Add: nueva funcionalidad X"

# 5. Subir a GitHub
git push
```

## 📝 Convenciones de Commits

Usa mensajes descriptivos:

```bash
# ✨ Nuevas features
git commit -m "Add: endpoint para filtrar tareas por estado"

# 🐛 Correcciones
git commit -m "Fix: error en validación de formulario"

# 📝 Documentación
git commit -m "Docs: actualizar README con nuevas instrucciones"

# 🎨 Estilos/formato
git commit -m "Style: mejorar diseño de cards en móvil"

# ♻️ Refactoring
git commit -m "Refactor: optimizar función de búsqueda"

# 🚀 Performance
git commit -m "Perf: reducir tiempo de carga de lista"
```

## ⚠️ Problemas Comunes

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/repo.git
```

### Error: "permission denied"
- Verifica tu token de acceso
- Asegúrate de usar HTTPS, no SSH

### Olvidé algo en el commit anterior
```bash
# Agregar lo que olvidaste
git add archivo-olvidado.txt
# Enmendar el último commit
git commit --amend --no-edit
# Forzar push (solo si no has compartido el commit)
git push --force
```

## 🎯 Checklist Final

- [ ] Archivos compilados están en .gitignore
- [ ] README.md está actualizado
- [ ] No hay información sensible (contraseñas, tokens, etc.)
- [ ] El código compila sin errores
- [ ] La documentación es clara
- [ ] Las capturas están incluidas (opcional)

## 📱 Subir APK a Releases (Opcional)

Si quieres compartir el APK de Android:

1. Compilar el APK:
```bash
cd flutter_app
flutter build apk --release
```

2. En GitHub, ve a tu repositorio
3. Click en **"Releases"** → **"Create a new release"**
4. **Tag version**: `v1.0.0`
5. **Release title**: `Versión 1.0.0`
6. **Description**: Describe los cambios
7. **Attach files**: Sube el APK desde `flutter_app/build/app/outputs/flutter-apk/app-release.apk`
8. Click en **"Publish release"**

---

¡Listo! Tu proyecto estará disponible en GitHub. 🎉

**URL de ejemplo:** `https://github.com/TU_USUARIO/sistema-gestion-tareas`

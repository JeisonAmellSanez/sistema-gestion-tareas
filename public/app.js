// URL base de la API
const API_URL = 'http://localhost:3000/api/tareas';

// Elementos del DOM
const tareaForm = document.getElementById('tareaForm');
const tareasContainer = document.getElementById('tareasContainer');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const totalTareasSpan = document.getElementById('totalTareas');

// Variable para modo edición
let modoEdicion = false;
let tareaIdActual = null;

// Inicializar aplicación
document.addEventListener('DOMContentLoaded', () => {
    cargarTareas();
    
    // Event listeners
    tareaForm.addEventListener('submit', manejarSubmit);
    cancelBtn.addEventListener('click', cancelarEdicion);
});

// ==================== FUNCIONES CRUD ====================

// GET - Obtener todas las tareas
async function cargarTareas() {
    try {
        const response = await fetch(API_URL);
        const resultado = await response.json();
        
        if (resultado.success) {
            mostrarTareas(resultado.data);
            totalTareasSpan.textContent = resultado.total;
        } else {
            mostrarError('Error al cargar las tareas');
        }
    } catch (error) {
        console.error('Error:', error);
        mostrarError('No se pudo conectar con el servidor');
    }
}

// POST/PUT - Crear o actualizar tarea
async function manejarSubmit(e) {
    e.preventDefault();
    
    const tarea = {
        titulo: document.getElementById('titulo').value,
        descripcion: document.getElementById('descripcion').value,
        estado: document.getElementById('estado').value
    };
    
    try {
        let response;
        
        if (modoEdicion) {
            // PUT - Actualizar tarea existente
            response = await fetch(`${API_URL}/${tareaIdActual}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tarea)
            });
        } else {
            // POST - Crear nueva tarea
            response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tarea)
            });
        }
        
        const resultado = await response.json();
        
        if (resultado.success) {
            mostrarNotificacion(resultado.message, 'success');
            tareaForm.reset();
            cancelarEdicion();
            cargarTareas();
        } else {
            mostrarError(resultado.message);
        }
    } catch (error) {
        console.error('Error:', error);
        mostrarError('Error al guardar la tarea');
    }
}

// DELETE - Eliminar tarea
async function eliminarTarea(id) {
    if (!confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        const resultado = await response.json();
        
        if (resultado.success) {
            mostrarNotificacion(resultado.message, 'success');
            cargarTareas();
        } else {
            mostrarError(resultado.message);
        }
    } catch (error) {
        console.error('Error:', error);
        mostrarError('Error al eliminar la tarea');
    }
}

// ==================== FUNCIONES AUXILIARES ====================

// Mostrar tareas en el DOM
function mostrarTareas(tareas) {
    if (tareas.length === 0) {
        tareasContainer.innerHTML = `
            <div class="empty-state">
                <h3>📝 No hay tareas</h3>
                <p>Crea tu primera tarea usando el formulario</p>
            </div>
        `;
        return;
    }
    
    tareasContainer.innerHTML = tareas.map(tarea => `
        <div class="tarea-card">
            <div class="tarea-header">
                <h3 class="tarea-titulo">${tarea.titulo}</h3>
                <span class="tarea-estado estado-${tarea.estado.replace(' ', '-')}">
                    ${tarea.estado}
                </span>
            </div>
            <p class="tarea-descripcion">${tarea.descripcion}</p>
            <p class="tarea-fecha">📅 ${formatearFecha(tarea.fechaCreacion)}</p>
            <div class="tarea-actions">
                <button class="btn btn-edit" onclick="editarTarea(${tarea.id})">
                    ✏️ Editar
                </button>
                <button class="btn btn-delete" onclick="eliminarTarea(${tarea.id})">
                    🗑️ Eliminar
                </button>
            </div>
        </div>
    `).join('');
}

// Editar tarea - cargar datos en el formulario
async function editarTarea(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const resultado = await response.json();
        
        if (resultado.success) {
            const tarea = resultado.data;
            
            document.getElementById('titulo').value = tarea.titulo;
            document.getElementById('descripcion').value = tarea.descripcion;
            document.getElementById('estado').value = tarea.estado;
            
            modoEdicion = true;
            tareaIdActual = id;
            
            formTitle.textContent = 'Editar Tarea';
            submitBtn.textContent = 'Actualizar Tarea';
            cancelBtn.style.display = 'block';
            
            // Scroll al formulario
            document.querySelector('.form-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    } catch (error) {
        console.error('Error:', error);
        mostrarError('Error al cargar la tarea');
    }
}

// Cancelar edición
function cancelarEdicion() {
    modoEdicion = false;
    tareaIdActual = null;
    
    formTitle.textContent = 'Nueva Tarea';
    submitBtn.textContent = 'Crear Tarea';
    cancelBtn.style.display = 'none';
    
    tareaForm.reset();
}

// Formatear fecha
function formatearFecha(fecha) {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Mostrar notificación toast
function mostrarNotificacion(mensaje, tipo = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = mensaje;
    toast.className = `toast ${tipo} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Mostrar error
function mostrarError(mensaje) {
    mostrarNotificacion(mensaje, 'error');
}

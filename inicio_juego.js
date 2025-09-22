// Variables
let dificultadSeleccionada = null;
const btnEmpezar = document.getElementById('empezar-juego');
const filas = document.querySelectorAll('.modal-dif-row');

// Función para comprobar bloqueo
function checkBloqueo(dif) {
  const key = 'juego-camisetas-' + dif;
  const data = localStorage.getItem(key);
  if (!data) return false;
  const { fecha } = JSON.parse(data);
  const hoy = new Date().toISOString().slice(0, 10);
  return fecha === hoy;
}

// Función para actualizar timers
function actualizarTimersModal() {
  ['facil', 'dificil'].forEach(dif => {
    const timerSpan = document.getElementById('modal-timer-' + dif);
    if (!timerSpan) return;

    const key = 'juego-camisetas-' + dif;
    const data = localStorage.getItem(key);
    if (!data) {
      timerSpan.textContent = 'Disponible';
      timerSpan.style.color = '#2a7c2a';
      return;
    }
    const { fecha } = JSON.parse(data);
    const hoy = new Date().toISOString().slice(0, 10);
    if (fecha !== hoy) {
      timerSpan.textContent = 'Disponible';
      timerSpan.style.color = '#2a7c2a';
    } else {
      function update() {
        const ahora = new Date();
        const manana = new Date();
        manana.setHours(24, 0, 0, 0);
        const diff = manana - ahora;
        const h = Math.floor(diff / 1000 / 60 / 60);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);
        if (timerSpan) {
          timerSpan.textContent = `${h}h ${m}m`;
          timerSpan.style.color = '#b00';
        }
        if (diff > 0 && document.getElementById('modal-timer-' + dif)) {
          setTimeout(update, 60000); // Actualizar cada minuto
        }
      }
      update();
    }
  });
}

// Agregar descripción dinámica
function agregarDescripcion() {
  const container = document.querySelector('.inicio-container');
  const descripcionDiv = document.createElement('div');
  descripcionDiv.id = 'descripcion-dificultad';
  descripcionDiv.style.cssText = `
    margin: 1em 0;
    padding: 1em;
    background: var(--gris-fondo);
    border-radius: 0.5em;
    min-height: 80px;
    color: var(--azul-oscuro);
    font-size: 0.95em;
    text-align: left;
    border: 2px solid var(--azul-claro);
  `;
  descripcionDiv.innerHTML = 'Selecciona una dificultad para ver la descripción del modo de juego.';

  // Insertar después de la lista de dificultades
  const lista = container.querySelector('.modal-dif-list');
  container.insertBefore(descripcionDiv, lista.nextSibling);

  // Agregar div de disponibilidad
  const disponibilidadDiv = document.createElement('div');
  disponibilidadDiv.id = 'disponibilidad-info';
  disponibilidadDiv.style.cssText = `
    margin: 0.5em 0;
    font-size: 0.9em;
    font-weight: 600;
    color: var(--azul-oscuro);
    text-align: center;
  `;
  container.insertBefore(disponibilidadDiv, btnEmpezar);
}

// Evento selección dificultad
filas.forEach(fila => {
  fila.style.cursor = 'pointer';
  fila.addEventListener('click', () => {
    dificultadSeleccionada = fila.dataset.dif;

    // Actualizar selección visual
    filas.forEach(f => f.classList.remove('selected'));
    fila.classList.add('selected');

    // Actualizar descripción
    const descripcion = document.getElementById('descripcion-dificultad');
    const disponibilidad = document.getElementById('disponibilidad-info');

    if (dificultadSeleccionada === 'facil') {
      descripcion.innerHTML = `
        <strong>Modo Fácil:</strong><br>
        • Adivina el país del club al que pertenece la camiseta<br>
        • Tienes 3 vidas para completar el desafío<br>
        • Gana completando 5 respuestas correctas seguidas<br>
        • Cada día puedes intentarlo una vez
      `;
    } else {
      descripcion.innerHTML = `
        <strong>Modo Difícil:</strong><br>
        • Adivina el equipo exacto y la temporada de la camiseta<br>
        • Tienes 3 vidas para completar el desafío<br>
        • Gana completando 5 respuestas correctas seguidas<br>
        • Cada día puedes intentarlo una vez
      `;
    }

    // Verificar disponibilidad
    const yaJugado = checkBloqueo(dificultadSeleccionada);
    btnEmpezar.disabled = yaJugado;

    if (yaJugado) {
      btnEmpezar.textContent = 'Ya jugaste hoy';
      btnEmpezar.style.opacity = '0.6';
      disponibilidad.innerHTML = '⏰ No disponible hasta mañana';
      disponibilidad.style.color = '#b00';
    } else {
      btnEmpezar.textContent = 'Empezar Juego';
      btnEmpezar.style.opacity = '1';
      disponibilidad.innerHTML = '✅ Disponible para jugar';
      disponibilidad.style.color = '#2a7c2a';
    }
  });
});

// Evento botón empezar
btnEmpezar.addEventListener('click', () => {
  if (!dificultadSeleccionada) return;
  if (checkBloqueo(dificultadSeleccionada)) return;

  // Guardamos la dificultad seleccionada en localStorage para el juego
  localStorage.setItem('dificultad-juego', dificultadSeleccionada);
  window.location.href = 'juego.html';
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  agregarDescripcion();
  actualizarTimersModal();

  // Actualizar timers cada minuto
  setInterval(actualizarTimersModal, 60000);
});

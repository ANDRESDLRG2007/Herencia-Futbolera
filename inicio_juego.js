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
  ['facil','dificil'].forEach(dif => {
    const timerSpan = document.getElementById('modal-timer-' + dif);
    const key = 'juego-camisetas-' + dif;
    const data = localStorage.getItem(key);
    if (!data) {
      timerSpan.textContent = 'Disponible';
      timerSpan.style.color = '#2a7c2a';
      return;
    }
    const { fecha } = JSON.parse(data);
    const hoy = new Date().toISOString().slice(0,10);
    if(fecha !== hoy){
      timerSpan.textContent = 'Disponible';
      timerSpan.style.color = '#2a7c2a';
    } else {
      function update(){
        const ahora = new Date();
        const manana = new Date();
        manana.setHours(24,0,0,0);
        const diff = manana - ahora;
        const h = Math.floor(diff/1000/60/60);
        const m = Math.floor((diff/1000/60)%60);
        const s = Math.floor((diff/1000)%60);
        timerSpan.textContent = `${h}h ${m}m ${s}s`;
        timerSpan.style.color = '#b00';
        if(diff>0) setTimeout(update,1000);
      }
      update();
    }
  });
}

// Evento selección dificultad
filas.forEach(fila=>{
  fila.style.cursor='pointer';
  fila.addEventListener('click',()=>{
    dificultadSeleccionada = fila.dataset.dif;
    filas.forEach(f=>f.classList.remove('selected'));
    fila.classList.add('selected');
    btnEmpezar.disabled = checkBloqueo(dificultadSeleccionada);
  });
});

// Evento botón empezar
btnEmpezar.addEventListener('click',()=>{
  if(!dificultadSeleccionada) return;
  // Guardamos la dificultad seleccionada en localStorage para el juego
  localStorage.setItem('dificultad-juego', dificultadSeleccionada);
  window.location.href='juego.html';
});

// Inicializamos timers
actualizarTimersModal();

// juego.js - Lógica del minijuego de camisetas

// --- Datos de camisetas ---
const camisetas = [
  // Barcelona
  { equipo: "Barcelona", temporada: "2006", img: "/Herencia-Futbolera/camisetas_clubes/barcelona/camisetas_barca/2006.jpg" },
  { equipo: "Barcelona", temporada: "2010", img: "/Herencia-Futbolera/camisetas_clubes/barcelona/camisetas_barca/2010.jpg" },
  { equipo: "Barcelona", temporada: "2015", img: "/Herencia-Futbolera/camisetas_clubes/barcelona/camisetas_barca/2015.jpg" },
  { equipo: "Barcelona", temporada: "2021", img: "/Herencia-Futbolera/camisetas_clubes/barcelona/camisetas_barca/2021.jpg" },
  // Real Madrid
  { equipo: "Real Madrid", temporada: "2009", img: "/Herencia-Futbolera/camisetas_clubes/real_madrid/camisetas_rm/2009.jpg" },
  { equipo: "Real Madrid", temporada: "2017", img: "/Herencia-Futbolera/camisetas_clubes/real_madrid/camisetas_rm/2017.jpg" },
  { equipo: "Real Madrid", temporada: "2014", img: "/Herencia-Futbolera/camisetas_clubes/real_madrid/camisetas_rm/2014.jpg" },
  { equipo: "Real Madrid", temporada: "2021", img: "/Herencia-Futbolera/camisetas_clubes/real_madrid/camisetas_rm/2021.jpg" },
  // Boca Juniors
  { equipo: "Boca Juniors", temporada: "1997", img: "/Herencia-Futbolera/camisetas_clubes/boca/camisetas_boca/1997.jpg" },
  { equipo: "Boca Juniors", temporada: "2003", img: "/Herencia-Futbolera/camisetas_clubes/boca/camisetas_boca/2003.jpg" },
  { equipo: "Boca Juniors", temporada: "2014", img: "/Herencia-Futbolera/camisetas_clubes/boca/camisetas_boca/2014.jpg" },
  { equipo: "Boca Juniors", temporada: "2020", img: "/Herencia-Futbolera/camisetas_clubes/boca/camisetas_boca/2020.jpg" },
  // River Plate
  { equipo: "River Plate", temporada: "2001", img: "/Herencia-Futbolera/camisetas_clubes/river/camisetas_river/2001.jpg" },
  { equipo: "River Plate", temporada: "2008", img: "/Herencia-Futbolera/camisetas_clubes/river/camisetas_river/2008.jpg" },
  { equipo: "River Plate", temporada: "2014", img: "/Herencia-Futbolera/camisetas_clubes/river/camisetas_river/2014.jpg" },
  { equipo: "River Plate", temporada: "2018", img: "/Herencia-Futbolera/camisetas_clubes/river/camisetas_river/2018.jpg" },
  // Milan
  { equipo: "AC Milan", temporada: "2006", img: "/Herencia-Futbolera/camisetas_clubes/milan/camisetas_milan/2006.jpg" },
  { equipo: "AC Milan", temporada: "2009", img: "/Herencia-Futbolera/camisetas_clubes/milan/camisetas_milan/2009.jpg" },
  { equipo: "AC Milan", temporada: "2011", img: "/Herencia-Futbolera/camisetas_clubes/milan/camisetas_milan/2011.jpg" },
  { equipo: "AC Milan", temporada: "2015", img: "/Herencia-Futbolera/camisetas_clubes/milan/camisetas_milan/2015.jpg" },
  // Millonarios
  { equipo: "Millonarios", temporada: "2007", img: "/Herencia-Futbolera/camisetas_clubes/millonarios/camisetas_millos/2007.jpg" },
  { equipo: "Millonarios", temporada: "2010", img: "/Herencia-Futbolera/camisetas_clubes/millonarios/camisetas_millos/2010.jpg" },
  { equipo: "Millonarios", temporada: "2014", img: "/Herencia-Futbolera/camisetas_clubes/millonarios/camisetas_millos/2014.jpg" },
  { equipo: "Millonarios", temporada: "2017", img: "/Herencia-Futbolera/camisetas_clubes/millonarios/camisetas_millos/2017.jpg" }
];

// --- Variables globales ---
let dificultad = 'facil';
let dificultadSeleccionada = null;
let camisetaActual = null;
let ultimoClub = null;
let camisetasShuffled = [];
let idxCamiseta = 0;
let racha = 0;

// --- Elementos del DOM ---
const camisetaDiv = document.getElementById('juego-camiseta');
const form = document.getElementById('juego-form');
const inputsDiv = document.getElementById('juego-inputs');
const feedbackDiv = document.getElementById('juego-feedback');
const modal = document.getElementById('inicio-modal');
const btnEmpezar = document.getElementById('empezar-juego');

// --- Utilidades ---
function limpiarBlurJuego() {
  const cont = document.querySelector('.juego-container');
  if (cont) cont.style.filter = 'blur(0)';
}

// --- Mezclar camisetas (Fisher-Yates) ---
function mezclarCamisetas(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- Elegir camiseta aleatoria (sin repetir club consecutivo) ---
function elegirCamisetaAleatoria() {
  if (!camisetasShuffled.length || idxCamiseta >= camisetasShuffled.length) {
    camisetasShuffled = mezclarCamisetas(camisetas);
    idxCamiseta = 0;
    if (ultimoClub && camisetasShuffled[0].equipo === ultimoClub && camisetasShuffled.length > 1) {
      const swapIdx = 1 + Math.floor(Math.random() * (camisetasShuffled.length - 1));
      [camisetasShuffled[0], camisetasShuffled[swapIdx]] = [camisetasShuffled[swapIdx], camisetasShuffled[0]];
    }
  }
  let intentos = 0;
  let camiseta = camisetasShuffled[idxCamiseta];
  while (ultimoClub && camiseta.equipo === ultimoClub && intentos < camisetasShuffled.length) {
    idxCamiseta = (idxCamiseta + 1) % camisetasShuffled.length;
    camiseta = camisetasShuffled[idxCamiseta];
    intentos++;
  }
  camisetaActual = camiseta;
  ultimoClub = camisetaActual.equipo;
  camisetaDiv.innerHTML = `<img src="${camisetaActual.img}" alt="Camiseta aleatoria">`;
  idxCamiseta++;
}

// --- Renderizar inputs según dificultad ---
function renderInputs() {
  if (dificultad === 'facil') {
    inputsDiv.innerHTML = `<input type="text" name="pais" placeholder="¿De qué país es el club?" required autocomplete="off">`;
  } else if (dificultad === 'dificil') {
    inputsDiv.innerHTML = `<input type="text" name="equipo" placeholder="¿De qué equipo es?" required autocomplete="off"><br><input type="text" name="temporada" placeholder="¿De qué temporada es?" required autocomplete="off">`;
  }
}

// --- Resetear juego (vidas y UI) ---
function resetJuego() {
  window.vidas = 3;
  document.getElementById('vidas')?.remove();
  const vidasDiv = document.createElement('div');
  vidasDiv.id = 'vidas';
  vidasDiv.style.margin = '1em 0 0.5em 0';
  vidasDiv.innerHTML = 'Vidas: ' + '❤️'.repeat(window.vidas) + '🖤'.repeat(3 - window.vidas);
  document.querySelector('.juego-container').insertBefore(vidasDiv, document.getElementById('juego-camiseta'));
}

// --- Guardar partida diaria ---
function guardarPartidaHoy() {
  const key = 'juego-camisetas-' + dificultad;
  const hoy = new Date().toISOString().slice(0, 10);
  localStorage.setItem(key, JSON.stringify({ fecha: hoy }));
}

// --- Comprobar si está bloqueado por hoy ---
function checkBloqueo() {
  const key = 'juego-camisetas-' + dificultad;
  const data = localStorage.getItem(key);
  if (!data) return false;
  const { fecha } = JSON.parse(data);
  const hoy = new Date().toISOString().slice(0, 10);
  if (fecha === hoy) {
    window.bloqueo = true;
    return true;
  }
  return false;
}

// --- Modal de bloqueo diario ---
function mostrarBloqueo() {
  modal.innerHTML = `<div style="background:#fff;border-radius:1.5em;box-shadow:0 4px 24px #0003;padding:2.2em 2.5em 2em 2.5em;max-width:370px;text-align:center;">
    <h2>¡Ya jugaste hoy en esta dificultad!</h2>
    <p style='color:#444;'>Podrás volver a intentarlo en:</p>
    <div id='contador-tiempo' style='font-size:1.5em;font-weight:600;margin:1em 0;'></div>
    <button class='juego-btn' onclick='window.location.reload()'>Cambiar dificultad</button>
  </div>`;
  modal.style.display = 'flex';
  document.querySelector('.juego-container').style.filter = 'blur(2px)';
  actualizarContadorTiempo();
}

// --- Contador de tiempo para volver a jugar ---
function actualizarContadorTiempo() {
  const ahora = new Date();
  const manana = new Date();
  manana.setHours(24, 0, 0, 0);
  const diff = manana - ahora;
  const h = Math.floor(diff / 1000 / 60 / 60);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.getElementById('contador-tiempo').textContent = `${h}h ${m}m ${s}s`;
  if (diff > 0) setTimeout(actualizarContadorTiempo, 1000);
}

// --- Modal de victoria ---
function mostrarVictoria() {
  modal.innerHTML = `<div style="background:var(--gris-fondo);border-radius:1.5em;box-shadow:0 4px 24px #0003;padding:2.2em 2.5em 2em 2.5em;max-width:370px;text-align:center;border:2.5px solid var(--amarillo);color:var(--azul-oscuro);">
    <h2 style='color:var(--azul-oscuro);margin-bottom:0.7em;'>¡Ganaste!</h2>
    <p style='color:var(--azul-oscuro);font-size:1.1em;'>Has terminado el minijuego en dificultad <b>${dificultad === 'facil' ? 'fácil' : 'difícil'}</b>.<br>Vuelve mañana para jugar de nuevo.</p>
    <button class='juego-btn' onclick='window.location.href="clubes.html"' style='margin:1.2em 0 0.5em 0;'>Volver al menú</button><br>
    <button class='juego-btn' onclick='window.location.reload()'>Cambiar dificultad</button>
  </div>`;
  modal.style.display = 'flex';
  document.querySelector('.juego-container').style.filter = 'blur(2px)';
}

// --- Modal de fin de juego ---
function mostrarFinJuego() {
  modal.innerHTML = `<div style="background:#fff;border-radius:1.5em;box-shadow:0 4px 24px #0003;padding:2.2em 2.5em 2em 2.5em;max-width:370px;text-align:center;">
    <h2>¡Juego terminado!</h2>
    <p style='color:#444;'>Te quedaste sin vidas. ¿Quieres ver la respuesta?</p>
    <button class='juego-btn' id='ver-respuesta'>Ver respuesta</button><br><br>
    <button class='juego-btn' onclick='window.location.reload()'>Volver al inicio</button>
  </div>`;
  modal.style.display = 'flex';
  document.querySelector('.juego-container').style.filter = 'blur(2px)';
  document.getElementById('ver-respuesta').onclick = rellenarRespuesta;
}

// --- Mostrar respuesta correcta ---
function rellenarRespuesta() {
  modal.innerHTML += `<div style='margin-top:1.5em;font-size:1.1em;color:#222;background:#f7f7f7;padding:1em 0.5em;border-radius:0.7em;'>Respuesta:<br><b>${dificultad === 'facil' ? (function(){const paises = {'Barcelona':'España','Real Madrid':'España','AC Milan':'Italia','Boca Juniors':'Argentina','River Plate':'Argentina','Millonarios':'Colombia'};return paises[camisetaActual.equipo];})() : camisetaActual.equipo + ', ' + camisetaActual.temporada}</b></div>`;
  document.getElementById('ver-respuesta').disabled = true;
}

// --- Modal de inicio ---
function mostrarModalInicio() {
  modal.style.display = 'flex';
  document.querySelector('.juego-container').style.filter = 'blur(2px)';
  actualizarTimersModal();
  const filas = modal.querySelectorAll('.modal-dif-row');
  filas.forEach((fila, idx) => {
    fila.style.cursor = 'pointer';
    fila.addEventListener('click', () => seleccionarDificultad(idx === 0 ? 'facil' : 'dificil'));
  });
  btnEmpezar.disabled = true;
  btnEmpezar.style.opacity = 0.6;
}

function ocultarModalInicio() {
  modal.style.display = 'none';
  limpiarBlurJuego();
}

// --- Selección de dificultad en el modal ---
function seleccionarDificultad(dif) {
  dificultadSeleccionada = dif;
  const filas = modal.querySelectorAll('.modal-dif-row');
  filas.forEach((fila, idx) => fila.classList.remove('selected'));
  filas[dif === 'facil' ? 0 : 1].classList.add('selected');
  const desc = document.getElementById('modal-desc');
  if (dif === 'facil') {
    desc.textContent = 'Modo fácil: Adivina el país del club al que pertenece la camiseta. Tienes 3 vidas y solo puedes jugar una vez al día.';
  } else if (dif === 'dificil') {
    desc.textContent = 'Modo difícil: Adivina el equipo y la temporada exacta de la camiseta. Tienes 3 vidas y solo puedes jugar una vez al día.';
  }
  const bloqueada = checkBloqueoModal(dif);
  btnEmpezar.disabled = bloqueada;
  btnEmpezar.style.opacity = bloqueada ? 0.6 : 1;
}

// --- Comprobar si dificultad está bloqueada (en el modal) ---
function checkBloqueoModal(dif) {
  const key = 'juego-camisetas-' + dif;
  const data = localStorage.getItem(key);
  if (!data) return false;
  const { fecha } = JSON.parse(data);
  const hoy = new Date().toISOString().slice(0, 10);
  return fecha === hoy;
}

// --- Actualizar timers de bloqueo en el modal ---
function actualizarTimersModal() {
  ['facil', 'dificil'].forEach(dif => {
    const key = 'juego-camisetas-' + dif;
    const data = localStorage.getItem(key);
    const timerSpan = document.getElementById('modal-timer-' + dif);
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
        timerSpan.textContent = `${h}h ${m}m ${s}s`;
        timerSpan.style.color = '#b00';
        if (diff > 0) setTimeout(update, 1000);
      }
      update();
    }
  });
}

// --- Evento para empezar el juego ---
btnEmpezar.addEventListener('click', () => {
  if (!dificultadSeleccionada) return;
  dificultad = dificultadSeleccionada;
  renderInputs();
  feedbackDiv.textContent = '';
  elegirCamisetaAleatoria();
  ocultarModalInicio();
  resetJuego();
});

// --- Evento principal del formulario ---
form.addEventListener('submit', e => {
  e.preventDefault();
  let correcto = false;
  if (typeof window.vidas === 'undefined') window.vidas = 3;
  if (typeof window.bloqueo === 'undefined') window.bloqueo = false;
  if (window.bloqueo) return;
  if (dificultad === 'facil') {
    const paises = {
      'Barcelona': 'España',
      'Real Madrid': 'España',
      'AC Milan': 'Italia',
      'Boca Juniors': 'Argentina',
      'River Plate': 'Argentina',
      'Millonarios': 'Colombia'
    };
    const pais = form.pais.value.trim().toLowerCase();
    const paisCorrecto = paises[camisetaActual.equipo].toLowerCase();
    correcto = pais === paisCorrecto;
    feedbackDiv.textContent = correcto ? '¡Correcto!' : `Incorrecto. Era: ${paises[camisetaActual.equipo]}`;
  } else if (dificultad === 'dificil') {
    const equipo = form.equipo.value.trim().toLowerCase();
    const temporada = form.temporada.value.trim();
    correcto = equipo === camisetaActual.equipo.toLowerCase() && temporada === camisetaActual.temporada;
    feedbackDiv.textContent = correcto ? '¡Correcto!' : `Incorrecto. Era: ${camisetaActual.equipo}, ${camisetaActual.temporada}`;
  }
  if (correcto) {
    racha++;
    window.vidas = 3;
    resetJuego();
    if (racha >= 5) {
      guardarPartidaHoy();
      window.bloqueo = true;
      mostrarVictoria();
      racha = 0;
      return;
    }
    setTimeout(() => {
      feedbackDiv.textContent = '';
      form.reset();
      elegirCamisetaAleatoria();
    }, 1200);
  } else {
    racha = 0;
    window.vidas--;
    document.getElementById('vidas').innerHTML = 'Vidas: ' + '❤️'.repeat(window.vidas) + '🖤'.repeat(3 - window.vidas);
    if (window.vidas <= 0) {
      guardarPartidaHoy();
      window.bloqueo = true;
      mostrarFinJuego();
    } else {
      setTimeout(() => {
        feedbackDiv.textContent = '';
        form.reset();
        elegirCamisetaAleatoria();
      }, 1200);
    }
  }
});

// --- Iniciar modal de inicio al cargar ---
window.addEventListener('DOMContentLoaded', mostrarModalInicio);

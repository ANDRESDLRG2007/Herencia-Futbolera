// juego.js - Lógica del minijuego de camisetas

// --- Datos de camisetas ---
const camisetas = [
  { equipo: "Barcelona", temporada: "2006", img: "/Herencia-Futbolera/camisetas_clubes/barcelona/camisetas_barca/2006.jpg" },
  { equipo: "Barcelona", temporada: "2010", img: "/Herencia-Futbolera/camisetas_clubes/barcelona/camisetas_barca/2010.jpg" },
  { equipo: "Barcelona", temporada: "2015", img: "/Herencia-Futbolera/camisetas_clubes/barcelona/camisetas_barca/2015.jpg" },
  { equipo: "Barcelona", temporada: "2021", img: "/Herencia-Futbolera/camisetas_clubes/barcelona/camisetas_barca/2021.jpg" },
  { equipo: "Real Madrid", temporada: "2009", img: "/Herencia-Futbolera/camisetas_clubes/real_madrid/camisetas_rm/2009.jpg" },
  { equipo: "Real Madrid", temporada: "2017", img: "/Herencia-Futbolera/camisetas_clubes/real_madrid/camisetas_rm/2017.jpg" },
  { equipo: "Real Madrid", temporada: "2014", img: "/Herencia-Futbolera/camisetas_clubes/real_madrid/camisetas_rm/2014.jpg" },
  { equipo: "Real Madrid", temporada: "2021", img: "/Herencia-Futbolera/camisetas_clubes/real_madrid/camisetas_rm/2021.jpg" },
  { equipo: "Boca Juniors", temporada: "1997", img: "/Herencia-Futbolera/camisetas_clubes/boca/camisetas_boca/1997.jpg" },
  { equipo: "Boca Juniors", temporada: "2003", img: "/Herencia-Futbolera/camisetas_clubes/boca/camisetas_boca/2003.jpg" },
  { equipo: "Boca Juniors", temporada: "2014", img: "/Herencia-Futbolera/camisetas_clubes/boca/camisetas_boca/2014.jpg" },
  { equipo: "Boca Juniors", temporada: "2020", img: "/Herencia-Futbolera/camisetas_clubes/boca/camisetas_boca/2020.jpg" },
  { equipo: "River Plate", temporada: "2001", img: "/Herencia-Futbolera/camisetas_clubes/river/camisetas_river/2001.jpg" },
  { equipo: "River Plate", temporada: "2008", img: "/Herencia-Futbolera/camisetas_clubes/river/camisetas_river/2008.jpg" },
  { equipo: "River Plate", temporada: "2014", img: "/Herencia-Futbolera/camisetas_clubes/river/camisetas_river/2014.jpg" },
  { equipo: "River Plate", temporada: "2018", img: "/Herencia-Futbolera/camisetas_clubes/river/camisetas_river/2018.jpg" },
  { equipo: "AC Milan", temporada: "2006", img: "/Herencia-Futbolera/camisetas_clubes/milan/camisetas_milan/2006.jpg" },
  { equipo: "AC Milan", temporada: "2009", img: "/Herencia-Futbolera/camisetas_clubes/milan/camisetas_milan/2009.jpg" },
  { equipo: "AC Milan", temporada: "2011", img: "/Herencia-Futbolera/camisetas_clubes/milan/camisetas_milan/2011.jpg" },
  { equipo: "AC Milan", temporada: "2015", img: "/Herencia-Futbolera/camisetas_clubes/milan/camisetas_milan/2015.jpg" },
  { equipo: "Millonarios", temporada: "2007", img: "/Herencia-Futbolera/camisetas_clubes/millonarios/camisetas_millos/2007.jpg" },
  { equipo: "Millonarios", temporada: "2010", img: "/Herencia-Futbolera/camisetas_clubes/millonarios/camisetas_millos/2010.jpg" },
  { equipo: "Millonarios", temporada: "2014", img: "/Herencia-Futbolera/camisetas_clubes/millonarios/camisetas_millos/2014.jpg" },
  { equipo: "Millonarios", temporada: "2017", img: "/Herencia-Futbolera/camisetas_clubes/millonarios/camisetas_millos/2017.jpg" }
];

// --- Variables globales ---
let dificultad = null;
let camisetaActual = null;
let ultimoClub = null;
let camisetasShuffled = [];
let idxCamiseta = 0;
let racha = 0;
let vidas = 3;

// --- Elementos del DOM ---
const camisetaDiv = document.getElementById('juego-camiseta');
const form = document.getElementById('juego-form');
const inputsDiv = document.getElementById('juego-inputs');
const feedbackDiv = document.getElementById('juego-feedback');
const dificultadContainer = document.getElementById('seleccion-dificultad');
const filasDificultad = dificultadContainer.querySelectorAll('.modal-dif-row');
const vidasDiv = document.getElementById('vidas');

// --- Funciones ---
function mezclarCamisetas(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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

function renderInputs() {
  if (dificultad === 'facil') {
    inputsDiv.innerHTML = `<input type="text" name="pais" placeholder="¿De qué país es el club?" required>`;
  } else {
    inputsDiv.innerHTML = `
      <input type="text" name="equipo" placeholder="¿De qué equipo es?" required><br>
      <input type="text" name="temporada" placeholder="¿De qué temporada es?" required>
    `;
  }
}

function actualizarVidas() {
  vidasDiv.textContent = 'Vidas: ' + '❤️'.repeat(vidas) + '🖤'.repeat(3 - vidas);
}

// --- Eventos ---
filasDificultad.forEach(fila => {
  fila.addEventListener('click', () => {
    dificultad = fila.dataset.dificultad;
    dificultadContainer.style.display = 'none';
    form.style.display = 'flex';
    renderInputs();
    elegirCamisetaAleatoria();
    actualizarVidas();
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  let correcto = false;

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
    correcto = pais === paises[camisetaActual.equipo].toLowerCase();
    feedbackDiv.textContent = correcto ? '¡Correcto!' : `Incorrecto. Era: ${paises[camisetaActual.equipo]}`;
  } else {
    const equipo = form.equipo.value.trim().toLowerCase();
    const temporada = form.temporada.value.trim();
    correcto = equipo === camisetaActual.equipo.toLowerCase() && temporada === camisetaActual.temporada;
    feedbackDiv.textContent = correcto ? '¡Correcto!' : `Incorrecto. Era: ${camisetaActual.equipo}, ${camisetaActual.temporada}`;
  }

  if (correcto) {
    racha++;
    vidas = 3;
    actualizarVidas();
    form.reset();
    elegirCamisetaAleatoria();
  } else {
    racha = 0;
    vidas--;
    actualizarVidas();
    if (vidas <= 0) {
      feedbackDiv.textContent += ' - Juego terminado';
      setTimeout(() => {
        alert(`Fin del juego. La respuesta correcta era: ${dificultad==='facil'? (function(){const paises={'Barcelona':'España','Real Madrid':'España','AC Milan':'Italia','Boca Juniors':'Argentina','River Plate':'Argentina','Millonarios':'Colombia'}; return paises[camisetaActual.equipo];})() : camisetaActual.equipo + ', ' + camisetaActual.temporada}`);
        window.location.reload();
      }, 100);
      return;
    }
  }
});

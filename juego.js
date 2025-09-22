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
    // AC Milan
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

// --- Mezclar camisetas ---
function mezclarCamisetas(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// --- Elegir camiseta aleatoria ---
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
    } else {
        inputsDiv.innerHTML = `<input type="text" name="equipo" placeholder="¿De qué equipo es?" required autocomplete="off"><br>
                               <input type="text" name="temporada" placeholder="¿De qué temporada es?" required autocomplete="off">`;
    }
}

// --- Resetear juego ---
function resetJuego() {
    window.vidas = 3;
    const viejas = document.getElementById('vidas');
    if (viejas) viejas.remove();
    const vidasDiv = document.createElement('div');
    vidasDiv.id = 'vidas';
    vidasDiv.style.margin = '1em 0 0.5em 0';
    vidasDiv.innerHTML = 'Vidas: ' + '❤️'.repeat(window.vidas) + '🖤'.repeat(3 - window.vidas);
    document.querySelector('.juego-container').insertBefore(vidasDiv, document.getElementById('juego-camiseta').nextSibling);
}

// --- Guardar partida diaria ---
function guardarPartidaHoy() {
    const key = 'juego-camisetas-' + dificultad;
    const hoy = new Date().toISOString().slice(0, 10);
    localStorage.setItem(key, JSON.stringify({ fecha: hoy }));
}

// --- Comprobar bloqueo ---
function checkBloqueo(dif = dificultad) {
    const key = 'juego-camisetas-' + dif;
    const data = localStorage.getItem(key);
    if (!data) return false;
    const { fecha } = JSON.parse(data);
    const hoy = new Date().toISOString().slice(0, 10);
    return fecha === hoy;
}

// --- Modal de bloqueo diario ---
function mostrarBloqueo() {
    // Crear modal dinámicamente
    const modal = document.createElement('div');
    modal.id = 'bloqueo-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        background: rgba(58,57,89,0.9);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    modal.innerHTML = `
        <div style="background:#fff;border-radius:1.5em;box-shadow:0 4px 24px #0003;padding:2.2em 2.5em 2em 2.5em;max-width:370px;text-align:center;">
            <h2>¡Ya jugaste hoy en esta dificultad!</h2>
            <p style='color:#444;'>Podrás volver a intentarlo en:</p>
            <div id='contador-tiempo' style='font-size:1.5em;font-weight:600;margin:1em 0;'></div>
            <button class='juego-btn' onclick='window.location.href="inicio_juego.html"'>Cambiar dificultad</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.querySelector('.juego-container').style.filter = 'blur(2px)';
    actualizarContadorTiempo();
}

// --- Contador de tiempo ---
function actualizarContadorTiempo() {
    const ahora = new Date();
    const manana = new Date();
    manana.setHours(24, 0, 0, 0);
    const diff = manana - ahora;
    const h = Math.floor(diff / 1000 / 60 / 60);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);
    const cont = document.getElementById('contador-tiempo');
    if (cont) cont.textContent = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    if (diff > 0) setTimeout(actualizarContadorTiempo, 1000);
}

// --- Finalizar juego ---
function finalizarJuego(correcto) {
    guardarPartidaHoy();
    window.bloqueo = true;

    if (correcto) alert('¡Victoria! Has completado 5 respuestas correctas seguidas.'); 
    else alert('Juego terminado, perdiste todas las vidas.');

    mostrarBloqueo();
}

// --- Enviar formulario ---
form.addEventListener('submit', e => {
    e.preventDefault();
    if (!window.vidas) window.vidas = 3;
    if (window.bloqueo) return;

    let correcto = false;

    if (dificultad === 'facil') {
        const paises = {
            'Barcelona':'España','Real Madrid':'España','AC Milan':'Italia',
            'Boca Juniors':'Argentina','River Plate':'Argentina','Millonarios':'Colombia'
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
        window.vidas = 3;
        resetJuego();
        if (racha >= 5) {
            finalizarJuego(true);
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

        if (window.vidas <= 0) finalizarJuego(false);
        else setTimeout(() => {
            feedbackDiv.textContent = '';
            form.reset();
            elegirCamisetaAleatoria();
        }, 1200);
    }
});

// --- Mostrar selección de dificultad en juego.html ---
function mostrarSeleccionDificultad() {
    const modal = document.createElement('div');
    modal.id = 'seleccion-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        background: rgba(58,57,89,0.9);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    modal.innerHTML = `
        <div style="background:#fff;border-radius:1.5em;box-shadow:0 4px 24px #0003;padding:2.2em 2.5em 2em 2.5em;max-width:420px;text-align:center;">
            <h2>Selecciona la dificultad</h2>
            <div style="margin: 1em 0;">
                <div class="modal-dif-row" data-dif="facil" style="margin: 0.5em 0; padding: 0.8em; border: 2px solid var(--azul-oscuro); border-radius: 0.7em; cursor: pointer; background: var(--gris-fondo); display: flex; justify-content: space-between; align-items: center;">
                    <div style="text-align: left;">
                        <strong>Fácil</strong><br>
                        <small>Adivina el país del club</small>
                    </div>
                    <span id="timer-facil" style="font-size: 0.85em; font-weight: 500; color: #2a7c2a;">Disponible</span>
                </div>
                <div class="modal-dif-row" data-dif="dificil" style="margin: 0.5em 0; padding: 0.8em; border: 2px solid var(--azul-oscuro); border-radius: 0.7em; cursor: pointer; background: var(--gris-fondo); display: flex; justify-content: space-between; align-items: center;">
                    <div style="text-align: left;">
                        <strong>Difícil</strong><br>
                        <small>Adivina equipo y temporada</small>
                    </div>
                    <span id="timer-dificil" style="font-size: 0.85em; font-weight: 500; color: #2a7c2a;">Disponible</span>
                </div>
            </div>
            <div id="descripcion-dificultad" style="margin: 1em 0; padding: 1em; background: var(--gris-fondo); border-radius: 0.5em; min-height: 60px; color: var(--azul-oscuro); font-size: 0.95em; text-align: left;">
                Selecciona una dificultad para ver la descripción del modo de juego.
            </div>
            <div id="disponibilidad-info" style="margin: 0.5em 0; font-size: 0.9em; font-weight: 600; color: var(--azul-oscuro);">
                
            </div>
            <button id="confirmar-dificultad" class="juego-btn" disabled style="margin-top: 1em;">Selecciona una dificultad</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Actualizar timers inmediatamente
    actualizarTimersEnModal();
    
    let dificultadTemp = null;
    const filas = modal.querySelectorAll('.modal-dif-row');
    const btnConfirmar = modal.querySelector('#confirmar-dificultad');
    const descripcion = modal.querySelector('#descripcion-dificultad');
    const disponibilidad = modal.querySelector('#disponibilidad-info');
    
    filas.forEach(fila => {
        fila.addEventListener('click', () => {
            dificultadTemp = fila.dataset.dif;
            
            // Actualizar selección visual
            filas.forEach(f => {
                f.style.background = 'var(--gris-fondo)';
                f.style.borderColor = 'var(--azul-oscuro)';
            });
            fila.style.background = 'var(--amarillo)';
            fila.style.borderColor = 'var(--amarillo)';
            
            // Actualizar descripción
            if (dificultadTemp === 'facil') {
                descripcion.innerHTML = `
                    <strong>Modo Fácil:</strong><br>
                    • Adivina el país del club al que pertenece la camiseta<br>
                    • Tienes 3 vidas<br>
                    • Gana completando 5 respuestas correctas seguidas
                `;
            } else {
                descripcion.innerHTML = `
                    <strong>Modo Difícil:</strong><br>
                    • Adivina el equipo exacto y la temporada de la camiseta<br>
                    • Tienes 3 vidas<br>
                    • Gana completando 5 respuestas correctas seguidas
                `;
            }
            
            // Verificar disponibilidad
            const yaJugado = checkBloqueo(dificultadTemp);
            btnConfirmar.disabled = yaJugado;
            
            if (yaJugado) {
                btnConfirmar.textContent = 'Ya jugaste hoy';
                btnConfirmar.style.opacity = '0.6';
                disponibilidad.innerHTML = '⏰ No disponible hasta mañana';
                disponibilidad.style.color = '#b00';
            } else {
                btnConfirmar.textContent = 'Empezar Juego';
                btnConfirmar.style.opacity = '1';
                disponibilidad.innerHTML = '✅ Disponible para jugar';
                disponibilidad.style.color = '#2a7c2a';
            }
        });
    });
    
    btnConfirmar.addEventListener('click', () => {
        if (dificultadTemp && !checkBloqueo(dificultadTemp)) {
            dificultad = dificultadTemp;
            document.body.removeChild(modal);
            iniciarJuego();
        }
    });
}

// --- Actualizar timers en modal ---
function actualizarTimersEnModal() {
    ['facil','dificil'].forEach(dif => {
        const timerSpan = document.getElementById('timer-' + dif);
        if (!timerSpan) return;
        
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
                if (timerSpan) {
                    timerSpan.textContent = `${h}h ${m}m`;
                    timerSpan.style.color = '#b00';
                }
                if(diff > 0 && document.getElementById('timer-' + dif)) {
                    setTimeout(update, 60000); // Actualizar cada minuto
                }
            }
            update();
        }
    });
}

// --- Iniciar juego después de seleccionar dificultad ---
function iniciarJuego() {
    // Verificar bloqueo
    if (checkBloqueo(dificultad)) {
        mostrarBloqueo();
        return;
    }

    renderInputs();
    resetJuego();
    elegirCamisetaAleatoria();
    
    // Mostrar el formulario
    form.style.display = 'block';
}

// --- Inicializar ---
document.addEventListener('DOMContentLoaded', () => {
    // Verificar si viene de la página de inicio con dificultad seleccionada
    const dificultadGuardada = localStorage.getItem('dificultad-juego');
    if (dificultadGuardada) {
        dificultad = dificultadGuardada;
        localStorage.removeItem('dificultad-juego'); // Limpiar después de usar
        iniciarJuego();
    } else {
        // Si no hay dificultad seleccionada, mostrar modal de selección
        mostrarSeleccionDificultad();
    }
});
/* barcelona.js
   Estructura de datos: claves únicas por temporada + tipo
   (ej: barca2006_home, barca2006_away, barca2006_keeper)
*/

const data = {
  /* 2006 */
  "barca2006_home": {
  img: "./camisetas_barca/2006.jpg",
    season: "2006-07",
    role: "Local",
    design: "Rayas clásicas",
    colors: "Azul / Rojo",
    brand: "Nike",
    sponsor: "Unicef",
    competitions: "La Liga · Champions League · Copa del Rey",
    trophies: "Liga, Champions League, Copa del Rey",
    description: "Camiseta usada en la temporada del histórico triplete; diseño clásico de franjas verticales y patrocinador UNICEF.",
    players: [
  { name: "Lionel Messi", img: "./jugadores/messi 2006.jpg" },
  { name: "Ronaldinho", img: "./jugadores/ronaldinho 2006.jpg" }
    ]
  },

  "barca2006_away": {
    img: "./camisetas_barca/2006-visitante.jpg",
    season: "2006-07",
    role: "Visitante",
    design: "Alterna",
    colors: "Blanco / Azul",
    brand: "Nike",
    sponsor: "Unicef",
    competitions: "La Liga",
    trophies: "—",
    description: "Uniforme alterno para partidos fuera de casa.",
    players: [
      { name: "Lionel Messi", img: "./jugadores/messi 2006.jpg" },
      { name: "Ronaldinho", img: "./jugadores/ronaldinho 2006.jpg" }
    ]
  },

  "barca2006_keeper": {
    img: "./camisetas_barca/2006-portero.jpg",
    season: "2006-07",
    role: "Portero",
    design: "Unicolor",
    colors: "Amarillo",
    brand: "Nike",
    sponsor: "Unicef",
    competitions: "La Liga",
    trophies: "—",
    description: "Equipación utilizada por el portero del equipo en esa temporada.",
    players: [
      { name: "Víctor Valdés", img: "./jugadores/victor valdes 2006.jpg" }
    ]
  },

  /* 2010 */
  "barca2010_home": {
  img: "./camisetas_barca/2010.jpg",
    season: "2010-11",
    role: "Local",
    design: "Rayas finas",
    colors: "Azul / Rojo",
    brand: "Nike",
    sponsor: "Unicef",
    competitions: "La Liga · Champions League",
    trophies: "La Liga, Champions League",
    description: "Camiseta de la era Guardiola, con predominio de técnica y posesión.",
    players: [
  { name: "Xavi", img: "./jugadores/xavi 2010.webp" },
  { name: "Andrés Iniesta", img: "./jugadores/iniesta 2010.jpg" }
    ]
  },

  "barca2010_away": {
    img: "./camisetas_barca/2010 - visitante.jpg",
    season: "2010-11",
    role: "Visitante",
    design: "Oscura",
    colors: "Negro",
    brand: "Nike",
    sponsor: "Unicef",
    competitions: "La Liga",
    trophies: "—",
    description: "Uniforme alterno de color oscuro.",
    players: [
      { name: "Xavi", img: "./jugadores/xavi 2010.webp" },
      { name: "Andrés Iniesta", img: "./jugadores/iniesta 2010.jpg" }
    ]
  },
  "barca2010_keeper": {
    img: "./camisetas_barca/2010 - portero.jpg",
    season: "2010-11",
    role: "Portero",
    design: "Unicolor",
    colors: "Naranja",
    brand: "Nike",
    sponsor: "Unicef",
    competitions: "La Liga",
    trophies: "—",
    description: "Equipación de portero característica por su color vivo.",
    players: [
      { name: "Víctor Valdés", img: "./jugadores/victor valdes 2010.jpeg" }
    ]
  },
  /* 2015 */
  "barca2015_home": {
    img: "./camisetas_barca/2015.jpg",
    season: "2014-15",
    role: "Local",
    design: "Rayas modernas",
    colors: "Azul / Rojo",
    brand: "Nike",
    sponsor: "Qatar Airways",
    competitions: "La Liga · Champions League · Copa del Rey",
    trophies: "Liga, Copa del Rey, Champions League",
    description: "Camiseta de la temporada del segundo triplete con la delantera MSN.",
    players: [
      { name: "Lionel Messi", img: "./jugadores/messi 2015.webp" },
      { name: "Neymar", img: "./jugadores/neymar 2015.jpg" },
      { name: "Luis Suárez", img: "./jugadores/suarez 2015.jpg" }
    ]
  },
  "barca2015_away": {
    img: "./camisetas_barca/2015 - visitante.jpg",
    season: "2014-15",
    role: "Visitante",
    design: "Alterna",
    colors: "Blanco / Azul",
    brand: "Nike",
    sponsor: "Qatar Airways",
    competitions: "La Liga",
    trophies: "—",
    description: "Camiseta visitante de la temporada 14-15.",
    players: [
      { name: "Lionel Messi", img: "./jugadores/messi 2015.webp" },
      { name: "Neymar", img: "./jugadores/neymar 2015.jpg" },
      { name: "Luis Suárez", img: "./jugadores/suarez 2015.jpg" }
    ]
  },
  "barca2015_keeper": {
    img: "./camisetas_barca/2015 - portero.jpg",
    season: "2014-15",
    role: "Portero",
    design: "Unicolor",
    colors: "Verde",
    brand: "Nike",
    sponsor: "Qatar Airways",
    competitions: "La Liga",
    trophies: "—",
    description: "Equipación típica del guardameta.",
    players: [
      { name: "Marc-André ter Stegen", img: "./jugadores/TER STEGEN-2015.jpg" }
    ]
  },

  /* 2021 */
  "barca2021_home": {
    img: "./camisetas_barca/2021.jpg",
    season: "2020-21",
    role: "Local",
    design: "Rayas modernas",
    colors: "Azul / Rojo",
    brand: "Nike",
    sponsor: "Rakuten",
    competitions: "Copa del Rey",
    trophies: "Copa del Rey",
    description: "Camiseta con diseño más contemporáneo y toques modernos.",
    players: [
      { name: "Kun aguero", img: "./jugadores/KUN aguero 2021.jpg" },
      { name: "Antoine Griezmann", img: "./jugadores/Griezmann 2021.jpg"}
    ]
  },
  "barca2021_away": {
    img: "./camisetas_barca/2021 - visitante.jpg",
    season: "2020-21",
    role: "Visitante",
    design: "Alterna",
    colors: "Amarillo / Azul",
    brand: "Nike",
    sponsor: "Rakuten",
    competitions: "Copa del Rey",
    trophies: "—",
    description: "Alternativa para partidos fuera de casa.",
    players: [
      { name: "Kun aguero", img: "./jugadores/KUN aguero 2021.jpg" },
      { name: "Antoine Griezmann", img: "./jugadores/griezmann 2021.jpg" }
    ]
  },
  "barca2021_keeper": {
    img: "./camisetas_barca/2021 - portero.jpg",
    season: "2020-21",
    role: "Portero",
    design: "Unicolor",
    colors: "Negro",
    brand: "Nike",
    sponsor: "Rakuten",
    competitions: "Copa del Rey",
    trophies: "—",
    description: "Camiseta del portero en la temporada 20-21.",
    players: [
      { name: "Marc-André ter Stegen", img: "./jugadores/TER STEGEN-2021.jpg" }
    ]
  }
};

/* ---------- Lógica del modal y eventos ---------- */

const modal = document.getElementById('modal');
const modalInfo = document.getElementById('modal-info');
const modalClose = document.getElementById('modalClose');

if (modalClose) {
  modalClose.addEventListener('click', cerrarModal);
}

/* abrir modal con key */
function mostrarModal(key) {
  const info = data[key];
  if (!info) return console.warn("No existe la clave:", key);

  const playersHTML = (info.players || []).map(p => {
     return `<div style="display:flex;flex-direction:column;align-items:center;margin:0 10px;">
      <img src="${p.img || 'img/placeholder-player.png'}" alt="${p.name}" title="${p.name}" style="width:70px;height:90px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px #0002;">
      <span style="font-size:0.95em;margin-top:4px;color:#333;font-weight:500;">${p.name}</span>
     </div>`;
  }).join("");

  modalInfo.innerHTML = `
    <div class="modal-info">
      <div class="top">
        <img class="jersey-large" src="${info.img || 'img/placeholder-jersey.png'}" alt="Camiseta ${info.season} - ${info.role}">
        <div class="details">
          <h3 style="margin:0 0 8px;">${info.season} — ${info.role}</h3>
          <p><strong>Diseño:</strong> ${info.design}</p>
          <p><strong>Colores:</strong> ${info.colors}</p>
          <p><strong>Marca:</strong> ${info.brand}</p>
          <p><strong>Patrocinador:</strong> ${info.sponsor}</p>
          <p><strong>Competiciones:</strong> ${info.competitions}</p>
          <div class="palmares"><strong>Palmarés:</strong> ${info.trophies}</div>
          <p style="margin:10px 0;"><strong>Breve historia:</strong> ${info.description}</p>
          <div>
            <p style="margin:6px 0;"><strong>Jugadores icónicos:</strong></p>
            <div class="players">${playersHTML || '<span style="color:#666">Sin jugadores añadidos</span>'}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');

  // focus para accesibilidad
  const firstFocusable = modal.querySelector('.modal-content');
  if (firstFocusable) firstFocusable.focus();
}

/* cierre del modal */
function cerrarModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

/* cerrar con clic fuera */
window.addEventListener('click', function(e) {
  if (e.target === modal) cerrarModal();
});

/* cerrar con ESC */
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') cerrarModal();
});

/* Delegación: escuchar clicks en cualquier imagen de jersey (data-key) */
document.addEventListener('click', function (e) {
  const img = e.target.closest('img[data-key]');
  if (img) {
    const key = img.getAttribute('data-key');
    mostrarModal(key);
  }
});

/* CONFIG: si quieres marcar el dot activo según scroll, se puede añadir más lógica.
   Por ahora los links harán scroll suave a la sección correspondiente.
*/

/* real_madrid.js - Estructura base, edita los datos según tus camisetas */
const data = {
  "rm2000_home": {
    img: "./camisetas_rm/2000.jpg",
    season: "2000-01",
    role: "Local",
    design: "",
    colors: "",
    brand: "",
    sponsor: "",
    competitions: "",
    trophies: "",
    description: "",
    players: []
  },
  "rm2000_away": {
    img: "./camisetas_rm/2000-visitante.jpg",
    season: "2000-01",
    role: "Visitante",
    design: "",
    colors: "",
    brand: "",
    sponsor: "",
    competitions: "",
    trophies: "",
    description: "",
    players: []
  },
  "rm2000_keeper": {
    img: "./camisetas_rm/2000-portero.jpg",
    season: "2000-01",
    role: "Portero",
    design: "",
    colors: "",
    brand: "",
    sponsor: "",
    competitions: "",
    trophies: "",
    description: "",
    players: []
  }
  // Agrega más temporadas aquí
};

// Lógica de modal igual que barcelona.js
const modal = document.getElementById('modal');
const modalInfo = document.getElementById('modal-info');
const modalClose = document.getElementById('modalClose');
if (modalClose) { modalClose.addEventListener('click', cerrarModal); }
function mostrarModal(key) {
  const info = data[key];
  if (!info) return;
  const playersHTML = (info.players || []).map(p => `<div style="display:flex;flex-direction:column;align-items:center;margin:0 10px;"><img src="${p.img || 'img/placeholder-player.png'}" alt="${p.name}" title="${p.name}" style="width:70px;height:90px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px #0002;"><span style="font-size:0.95em;margin-top:4px;color:#333;font-weight:500;">${p.name}</span></div>`).join("");
  modalInfo.innerHTML = `<div class="modal-info"><div class="top"><img class="jersey-large" src="${info.img || 'img/placeholder-jersey.png'}" alt="Camiseta ${info.season} - ${info.role}"><div class="details"><h3 style="margin:0 0 8px;">${info.season} — ${info.role}</h3><p><strong>Diseño:</strong> ${info.design}</p><p><strong>Colores:</strong> ${info.colors}</p><p><strong>Marca:</strong> ${info.brand}</p><p><strong>Patrocinador:</strong> ${info.sponsor}</p><p><strong>Competiciones:</strong> ${info.competitions}</p><div class="palmares"><strong>Palmarés:</strong> ${info.trophies}</div></div></div><div><p style="margin:10px 0;"><strong>Breve historia:</strong> ${info.description}</p><div><p style="margin:6px 0;"><strong>Jugadores icónicos:</strong></p><div class="players">${playersHTML || '<span style="color:#666">Sin jugadores añadidos</span>'}</div></div></div></div>`;
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
  const firstFocusable = modal.querySelector('.modal-content');
  if (firstFocusable) firstFocusable.focus();
}
function cerrarModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}
window.addEventListener('click', function(e) { if (e.target === modal) cerrarModal(); });
window.addEventListener('keydown', function(e) { if (e.key === 'Escape') cerrarModal(); });
document.addEventListener('click', function (e) { const img = e.target.closest('img[data-key]'); if (img) { const key = img.getAttribute('data-key'); mostrarModal(key); } });

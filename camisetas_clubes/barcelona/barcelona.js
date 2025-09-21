const data = {
  barca2006: {
    img: "img/barca2006.png",
    year: "2006-07",
    tipo: "Local",
    diseño: "Rayas",
    colores: "Azul / Rojo",
    marca: "Nike",
    patrocinador: "Unicef",
    liga: "La Liga, Champions League, Club World Cup",
    jugadores: [
      { nombre: "Messi", img: "img/messi.png" },
      { nombre: "Ronaldinho", img: "img/ronaldinho.png" },
      { nombre: "Xavi", img: "img/xavi.png" },
      { nombre: "Iniesta", img: "img/iniesta.png" },
      { nombre: "Puyol", img: "img/puyol.png" }
    ]
  }
};

function mostrarModal(id) {
  const modal = document.getElementById("modal");
  const info = data[id];
  
  let jugadoresHTML = info.jugadores.map(j => `
    <img src="${j.img}" alt="${j.nombre}" title="${j.nombre}">
  `).join("");

  document.getElementById("modal-info").innerHTML = `
    <div class="jersey-info">
      <img src="${info.img}" alt="Camiseta ${info.year}">
      <div class="jersey-details">
        <p><strong>Temporada:</strong> ${info.year}</p>
        <p><strong>Tipo:</strong> ${info.tipo}</p>
        <p><strong>Diseño:</strong> ${info.diseño}</p>
        <p><strong>Colores:</strong> ${info.colores}</p>
        <p><strong>Marca:</strong> ${info.marca}</p>
        <p><strong>Patrocinador:</strong> ${info.patrocinador}</p>
        <p><strong>Ligas:</strong> ${info.liga}</p>
      </div>
      <div class="jersey-players">
        <p><strong>Jugadores icónicos:</strong></p>
        ${jugadoresHTML}
      </div>
    </div>
  `;
  
  modal.style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

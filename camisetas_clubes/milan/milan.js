/* milan.js - Datos camisetas AC Milan */
const data = {
  "milan0607_home": "/Herencia-Futbolera/camisetas_clubes/milan/milan2006_home.html",
  "milan0607_away": "/Herencia-Futbolera/camisetas_clubes/milan/milan2006_away.html",
  "milan0607_keeper": "/Herencia-Futbolera/camisetas_clubes/milan/milan2006_keeper.html",

  "milan0910_home": "/Herencia-Futbolera/camisetas_clubes/milan/milan2009_home.html",
  "milan0910_away": "/Herencia-Futbolera/camisetas_clubes/milan/milan2009_away.html",
  "milan0910_keeper": "/Herencia-Futbolera/camisetas_clubes/milan/milan2009_keeper.html",

  "milan1112_home": "/Herencia-Futbolera/camisetas_clubes/milan/milan2011_home.html",
  "milan1112_away": "/Herencia-Futbolera/camisetas_clubes/milan/milan2011_away.html",
  "milan1112_keeper": "/Herencia-Futbolera/camisetas_clubes/milan/milan2011_keeper.html",

  "milan1516_home": "/Herencia-Futbolera/camisetas_clubes/milan/milan2015_home.html",
  "milan1516_away": "/Herencia-Futbolera/camisetas_clubes/milan/milan2015_away.html",
  "milan1516_keeper": "/Herencia-Futbolera/camisetas_clubes/milan/milan2015_keeper.html"
};

// === Redirigir a HTML de descripción ===
document.addEventListener('click', e => {
  const img = e.target.closest('img[data-key]');
  if (img) {
    const key = img.getAttribute('data-key');
    const url = data[key];
    if (url) window.location.href = url;
  }
});

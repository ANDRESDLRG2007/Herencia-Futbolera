/* boca.js - Redirección a HTML de descripción */

const htmlMap = {
  // 1997-98
  "boca9798_home": "/Herencia-Futbolera/camisetas_clubes/boca/boca1997_home.html",
  "boca9798_away": "/Herencia-Futbolera/camisetas_clubes/boca/boca1997_away.html",
  "boca9798_keeper": "/Herencia-Futbolera/camisetas_clubes/boca/boca1997_keeper.html",

  // 2002-03
  "boca0203_home": "/Herencia-Futbolera/camisetas_clubes/boca/boca2003_home.html",
  "boca0203_away": "/Herencia-Futbolera/camisetas_clubes/boca/boca2003_away.html",
  "boca0203_keeper": "/Herencia-Futbolera/camisetas_clubes/boca/boca2003_keeper.html",

  // 2014-15
  "boca1415_home": "/Herencia-Futbolera/camisetas_clubes/boca/boca2014_home.html",
  "boca1415_away": "/Herencia-Futbolera/camisetas_clubes/boca/boca2014_away.html",
  "boca1415_keeper": "/Herencia-Futbolera/camisetas_clubes/boca/boca2014_keeper.html",

  // 2020-21
  "boca2021_home": "/Herencia-Futbolera/camisetas_clubes/boca/boca2020_home.html",
  "boca2021_away": "/Herencia-Futbolera/camisetas_clubes/boca/boca2020_away.html",
  "boca2021_keeper": "/Herencia-Futbolera/camisetas_clubes/boca/boca2020_keeper.html"
};

/* Delegación: click sobre cualquier imagen de camiseta */
document.addEventListener('click', function (e) {
  const img = e.target.closest('img[data-key]');
  if (!img) return;
  const key = img.getAttribute('data-key');
  const url = htmlMap[key];
  if (url) {
    window.location.href = url; // Redirige al HTML correspondiente
  } else {
    console.warn("No hay HTML definido para la clave:", key);
  }
});

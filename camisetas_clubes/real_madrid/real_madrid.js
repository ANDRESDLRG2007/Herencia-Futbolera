// real_madrid_redirect.js
document.addEventListener('click', function (e) {
  const img = e.target.closest('img[data-key]');
  if (!img) return;

  const key = img.getAttribute('data-key');

  // Mapear cada key a su ruta HTML correspondiente
  const rutasHTML = {
    "rm2122_home": "/Herencia-Futbolera/camisetas_clubes/real_madrid/madrid2122_home.html",
    "rm2122_away": "/Herencia-Futbolera/camisetas_clubes/real_madrid/madrid2122_away.html",
    "rm2122_keeper": "/Herencia-Futbolera/camisetas_clubes/real_madrid/madrid2122_keeper.html",

    "rm1718_home": "/Herencia-Futbolera/camisetas_clubes/real_madrid/madrid1718_home.html",
    "rm1718_away": "/Herencia-Futbolera/camisetas_clubes/real_madrid/madrid1718_away.html",
    "rm1718_keeper": "/Herencia-Futbolera/camisetas_clubes/real_madrid/madrid2017_keeper.html",

    "rm1415_home": "/Herencia-Futbolera/camisetas_clubes/real_madrid/madrid1415_home.html",
    "rm1415_away": "/Herencia-Futbolera/camisetas_clubes/real_madrid/madrid1415_away.html",
    "rm1415_keeper": "/Herencia-Futbolera/camisetas_clubes/real_madrid/madrid1415_keeper.html",

    "rm0910_home": "/Herencia-Futbolera/camisetas_clubes/real_madrid/madrid0910_home.html",
    "rm0910_away": "/Herencia-Futbolera/camisetas_clubes/real_madrid/madrid0910_away.html",
    "rm0910_keeper": "/Herencia-Futbolera/camisetas_clubes/real_madrid/madrid0910_keeper.html"
  };

  const url = rutasHTML[key];
  if (url) {
    window.location.href = url; // Redirige a la página HTML correspondiente
  } else {
    console.warn("No existe ruta HTML para la clave:", key);
  }
});

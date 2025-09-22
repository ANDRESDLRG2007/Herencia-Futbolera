// river_redirect.js
document.addEventListener('click', function (e) {
  const img = e.target.closest('img[data-key]');
  if (!img) return;

  const key = img.getAttribute('data-key');

  // Mapear cada key a su ruta HTML correspondiente
  const rutasHTML = {
    // 2001-02
    "river0102_home": "/Herencia-Futbolera/camisetas_clubes/river/river0102_home.html",
    "river0102_away": "/Herencia-Futbolera/camisetas_clubes/river/river0102_away.html",
    "river0102_keeper": "/Herencia-Futbolera/camisetas_clubes/river/river0102_keeper.html",

    // 2008-09
    "river0809_home": "/Herencia-Futbolera/camisetas_clubes/river/river0809_home.html",
    "river0809_away": "/Herencia-Futbolera/camisetas_clubes/river/river0809_away.html",
    "river0809_keeper": "/Herencia-Futbolera/camisetas_clubes/river/river0809_keeper.html",

    // 2014-15
    "river1415_home": "/Herencia-Futbolera/camisetas_clubes/river/river1415_home.html",
    "river1415_away": "/Herencia-Futbolera/camisetas_clubes/river/river1415_away.html",
    "river1415_keeper": "/Herencia-Futbolera/camisetas_clubes/river/river1415_keeper.html",

    // 2018-19
    "river1819_home": "/Herencia-Futbolera/camisetas_clubes/river/river1819_home.html",
    "river1819_away": "/Herencia-Futbolera/camisetas_clubes/river/river1819_away.html",
    "river1819_keeper": "/Herencia-Futbolera/camisetas_clubes/river/river1819_keeper.html"
  };

  const url = rutasHTML[key];
  if (url) {
    window.location.href = url; // Redirige a la página HTML correspondiente
  } else {
    console.warn("No existe ruta HTML para la clave:", key);
  }
});

document.addEventListener('click', function (e) {
  const img = e.target.closest('img[data-key]');
  if (!img) return;

  const key = img.getAttribute('data-key');

  // Mapear cada key a su ruta HTML
  const rutasHTML = {
    "barca2006_home": "/Herencia-Futbolera/camisetas_clubes/barcelona/barca2006_home.html",
    "barca2006_away": "/Herencia-Futbolera/camisetas_clubes/barcelona/barca2006_away.html",
    "barca2006_keeper": "/Herencia-Futbolera/camisetas_clubes/barcelona/barca2006_keeper.html",
    
    "barca2010_home": "/Herencia-Futbolera/camisetas_clubes/barcelona/barca2010_home.html",
    "barca2010_away": "/Herencia-Futbolera/camisetas_clubes/barcelona/barca2010_away.html",
    "barca2010_keeper": "/Herencia-Futbolera/camisetas_clubes/barcelona/barca2010_keeper.html",

    "barca2015_home": "/Herencia-Futbolera/camisetas_clubes/barcelona/barca2015_home.html",
    "barca2015_away": "/Herencia-Futbolera/camisetas_clubes/barcelona/barca2015_away.html",
    "barca2015_keeper": "/Herencia-Futbolera/camisetas_clubes/barcelona/barca2015_keeper.html",

    "barca2021_home": "/Herencia-Futbolera/camisetas_clubes/barcelona/barca2021_home.html",
    "barca2021_away": "/Herencia-Futbolera/camisetas_clubes/barcelona/barca2021_away.html",
    "barca2021_keeper": "/Herencia-Futbolera/camisetas_clubes/barcelona/barca2021_keeper.html"
  };

  const url = rutasHTML[key];
  if (url) {
    window.location.href = url; // Redirige a la página HTML correspondiente
  } else {
    console.warn("No existe ruta HTML para la clave:", key);
  }
});

document.addEventListener('click', function (e) {
  const img = e.target.closest('img[data-key]');
  if (!img) return;

  const key = img.getAttribute('data-key');

  // Mapear cada key a su ruta HTML correspondiente
  const rutasHTML = {
    // 2007
    "millos2007_home": "/Herencia-Futbolera/camisetas_clubes/millonarios/millos2007_home.html",
    "millos2007_away": "/Herencia-Futbolera/camisetas_clubes/millonarios/millos2007_away.html",
    "millos2007_keeper": "/Herencia-Futbolera/camisetas_clubes/millonarios/millos2007_keeper.html",

    // 2010
    "millos2010_home": "/Herencia-Futbolera/camisetas_clubes/millonarios/millos2010_home.html",
    "millos2010_away": "/Herencia-Futbolera/camisetas_clubes/millonarios/millos2010_away.html",
    "millos2010_keeper": "/Herencia-Futbolera/camisetas_clubes/millonarios/millos2010_keeper.html",

    // 2014
    "millos2014_home": "/Herencia-Futbolera/camisetas_clubes/millonarios/millos2014_home.html",
    "millos2014_away": "/Herencia-Futbolera/camisetas_clubes/millonarios/millos2014_away.html",
    "millos2014_keeper": "/Herencia-Futbolera/camisetas_clubes/millonarios/millos2014_keeper.html",

    // 2017
    "millos2017_home": "/Herencia-Futbolera/camisetas_clubes/millonarios/millos2017_home.html",
    "millos2017_away": "/Herencia-Futbolera/camisetas_clubes/millonarios/millos2017_away.html",
    "millos2017_keeper": "/Herencia-Futbolera/camisetas_clubes/millonarios/millos2017_keeper.html"
  };

  const url = rutasHTML[key];
  if (url) {
    window.location.href = url; // redirige a la página HTML correspondiente
  } else {
    console.warn("No existe ruta HTML para la clave:", key);
  }
});

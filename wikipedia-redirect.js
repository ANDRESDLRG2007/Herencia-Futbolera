// wikipedia-redirect.js
// Script general para redirigir imágenes de jugadores a Wikipedia

document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar todas las imágenes que estén en la carpeta de jugadores
  const imagenes = document.querySelectorAll('img[src*="/jugadores/"]');
  
  imagenes.forEach(img => {
    // Hacer que la imagen sea clickeable
    img.style.cursor = 'pointer';
    
    // Agregar efecto hover
    img.addEventListener('mouseenter', function() {
      this.style.opacity = '0.7';
      this.style.transition = 'opacity 0.3s ease';
    });
    
    img.addEventListener('mouseleave', function() {
      this.style.opacity = '1';
    });
    
    // Agregar evento click
    img.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Obtener el nombre del jugador del atributo alt
      let nombreJugador = this.alt;
      
      // Si no hay alt, intentar extraer del nombre del archivo
      if (!nombreJugador || nombreJugador === '') {
        const src = this.src;
        const nombreArchivo = src.split('/').pop();
        nombreJugador = nombreArchivo.split('.')[0];
        nombreJugador = nombreJugador.split(' ')[0];
      }
      
      // Limpiar el nombre (eliminar años, espacios extra, etc)
      nombreJugador = nombreJugador.trim();
      
      // Construir URL de Wikipedia en español
      const urlWikipedia = `https://es.wikipedia.org/wiki/${encodeURIComponent(nombreJugador)}`;
      
      // Detectar si está en Android WebView
      const isAndroidWebView = /wv/.test(navigator.userAgent) || 
                               /Android/.test(navigator.userAgent);
      
      if (isAndroidWebView) {
        // En Android WebView, simplemente navegar a la URL
        // El MainActivity interceptará la navegación y abrirá el navegador externo
        window.location.href = urlWikipedia;
      } else {
        // En navegador normal, abrir en nueva pestaña
        window.open(urlWikipedia, '_blank');
      }
    });
  });
});

// Función alternativa si quieres más control sobre qué imágenes son clickeables
function hacerImagenClickeable(selector) {
  const imagenes = document.querySelectorAll(selector);
  
  imagenes.forEach(img => {
    img.style.cursor = 'pointer';
    img.title = 'Click para ver en Wikipedia';
    
    img.addEventListener('click', function(e) {
      e.preventDefault();
      const nombreJugador = this.alt || this.dataset.jugador;
      
      if (nombreJugador) {
        const urlWikipedia = `https://es.wikipedia.org/wiki/${encodeURIComponent(nombreJugador)}`;
        
        const isAndroidWebView = /wv/.test(navigator.userAgent) || 
                                 /Android/.test(navigator.userAgent);
        
        if (isAndroidWebView) {
          window.location.href = urlWikipedia;
        } else {
          window.open(urlWikipedia, '_blank');
        }
      }
    });
  });
}

// Ejemplos de uso de la función alternativa:
// hacerImagenClickeable('img[src*="/jugadores/"]');
// hacerImagenClickeable('.jugador-img');
// hacerImagenClickeable('[data-wikipedia]');
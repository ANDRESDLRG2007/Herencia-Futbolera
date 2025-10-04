# ⚽ Herencia Futbolera

Una aplicación móvil interactiva para Android que celebra la historia del fútbol a través de sus camisetas icónicas y jugadores legendarios.

## 📱 Descripción

Herencia Futbolera es una aplicación que permite a los aficionados del fútbol explorar la historia de los clubes más emblemáticos del mundo mediante sus camisetas históricas. La app incluye un minijuego diario donde puedes poner a prueba tus conocimientos sobre equipos y temporadas.

## ✨ Características

- **Galería de Camisetas Históricas**: Explora camisetas icónicas de clubes legendarios
- **Minijuego Diario**: Desafío diario con dos niveles de dificultad
  - **Modo Fácil**: Adivina el país del club
  - **Modo Difícil**: Adivina el equipo exacto y la temporada
- **Sistema de Vidas**: 3 oportunidades por partida
- **Racha de Victoria**: Completa 5 respuestas correctas seguidas para ganar
- **Bloqueo Diario**: Una partida por día en cada dificultad
- **Biografías de Jugadores**: Click en las imágenes de jugadores para acceder a su Wikipedia

## 🏆 Clubes Incluidos

- **FC Barcelona** 🔴🔵
- **Real Madrid** ⚪
- **AC Milan** 🔴⚫
- **Boca Juniors** 💙💛
- **River Plate** ⚪🔴
- **Millonarios FC** 💙

## 🎮 Cómo Jugar

1. Abre la aplicación y selecciona tu nivel de dificultad
2. Observa la camiseta que aparece en pantalla
3. **Modo Fácil**: Escribe el país al que pertenece el club
4. **Modo Difícil**: Escribe el nombre del equipo y el año de la temporada
5. Completa 5 respuestas correctas consecutivas para ganar
6. Pierdes si te quedas sin las 3 vidas

## 🛠️ Tecnologías

### Frontend
- HTML5
- CSS
- JavaScript (Vanilla JS)

### Backend/Móvil
- **Kotlin**
- **WebView** con integración nativa
- **Android Studio**

### Hosting
- GitHub Pages

## 🚀 Instalación

### Opción 1: Descargar APK
1. Descarga el APK desde [Google Drive](https://drive.google.com/file/d/157K7LcZ9-agI1Zl6GdrwQmWcrmm_iP9m/view?usp=sharing)
2. Instala en tu dispositivo Android
3. Permite instalación de fuentes desconocidas si es necesario

### Opción 2: Clonar y Compilar
```bash
# Clonar el repositorio
git clone https://github.com/andresdlrg2007/Herencia-Futbolera.git

# Abrir en Android Studio
# Compilar y ejecutar en dispositivo o emulador
```

## 💾 Almacenamiento de Datos

La aplicación utiliza **localStorage** del navegador para:
- Guardar el estado del juego diario
- Controlar el sistema de bloqueo de 24 horas
- No requiere conexión a internet después de la primera carga

## 🎨 Paleta de Colores
Pricipal para la app
```css
--azul-oscuro: #3A3959
--azul-claro: #8596A6
--negro: #222222
--amarillo: #F2BD1D
--gris-fondo: #F2F2F2
```
CSS cambia dependiendo del club al que se dirija

## 📱 Requisitos del Sistema

- Android 7.0 (API 24) o superior
- 50 MB de espacio disponible
- Conexión a internet (solo para primera carga y Wikipedia)

## 📝 Proximas actualizaciones

- [ ] Agregar más clubes históricos
- [ ] Incluir trivia de jugadores
- [ ] Soporte para múltiples idiomas

## 👨‍💻 Autor

**Andrés de la Rue**
- GitHub: [@andresdlrg2007](https://github.com/andresdlrg2007)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [MIT License](LICENSE).

## 🙏 Agradecimientos

- Wikipedia por las biografías de jugadores

## ⚠️ Aviso Legal
“Herencia Futbolera” es un proyecto educativo y sin fines de lucro.
Los logotipos, camisetas y demás elementos visuales de los clubes son utilizados únicamente con fines informativos e históricos.
Todos los derechos y marcas registradas pertenecen a sus respectivos propietarios.



---

**⚽ ¡Disfruta recordando la historia del fútbol a través de sus camisetas más emblemáticas!**

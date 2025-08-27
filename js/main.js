document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash-screen");
  const menuPrincipal = document.getElementById("menu-principal");
  const enterBtn = document.getElementById("enter-btn");
  const audio = document.getElementById("welcome-audio");

  const desdeOtraPagina = sessionStorage.getItem("desdeOtraPagina");

  // Intentar reproducir apenas carga (algunos navegadores lo permiten)
  if (audio) {
    audio.play().catch(err => {
      console.log("El navegador bloqueó el autoplay. Se habilitará al primer click.");
      // Si lo bloquea, la próxima interacción lo habilita
      document.addEventListener("click", () => {
        if (audio.paused) {
          audio.play();
        }
      }, { once: true });
    });
  }

  if (desdeOtraPagina === "true") {
    splash.style.display = "none";
    menuPrincipal.style.display = "block";
    sessionStorage.removeItem("desdeOtraPagina");
    if (audio) audio.pause();
  } else {
    enterBtn.addEventListener("click", () => {
      splash.style.display = "none";
      menuPrincipal.style.display = "block";
      if (audio) {
        audio.pause();
        audio.currentTime = 0; // reinicia por si volvés
      }
    });
  }
});





/*
document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash-screen");
  const menuPrincipal = document.getElementById("menu-principal");

  const desdeOtraPagina = sessionStorage.getItem("desdeOtraPagina");

  if (desdeOtraPagina === "true") {
    splash.style.display = "none";
    menuPrincipal.style.display = "block";
    sessionStorage.removeItem("desdeOtraPagina");
  } else {
    const btn = document.getElementById("enter-btn");
    btn.addEventListener("click", () => {
      splash.style.display = "none";
      menuPrincipal.style.display = "block";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const splash = document.getElementById("splash-screen");
  const menu = document.getElementById("menu-principal");
  const audio = document.getElementById("welcome-audio");

  enterBtn.addEventListener("click", () => {
    // Ocultar pantalla de bienvenida
    splash.style.display = "none";
    // Mostrar menú
    menu.style.display = "block";
    // Pausar música
    if (audio) {
      audio.pause();
    }
  });
});
*/

/*
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("enter-btn");
  const splash = document.getElementById("splash-screen");
  const menuPrincipal = document.getElementById("menu-principal");

  btn.addEventListener("click", () => {
    splash.style.display = "none";
    menuPrincipal.style.display = "block";
  });
});
*/
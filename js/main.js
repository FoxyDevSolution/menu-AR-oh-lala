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



/*

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash-screen");
  const menuPrincipal = document.getElementById("menu-principal");
  const enterBtn = document.getElementById("enter-btn");
  const audio = document.getElementById("welcome-audio");

  // Al inicio ocultamos el splash hasta que acepte la alerta
  splash.style.display = "none";

  // Mostrar alerta inicial
  alert("Un viaje gastronómico comienza aquí. ¿Listo para entrar?");

  // Una vez que acepta la alerta, mostramos el splash
  splash.style.display = "block";

  // Intentar reproducir música
  if (audio) {
    audio.play().catch(err => {
      console.log("El navegador bloqueó el autoplay. Se habilitará al primer click.");
      document.addEventListener("click", () => {
        if (audio.paused) {
          audio.play();
        }
      }, { once: true });
    });
  }

  // Botón ingresar
  enterBtn.addEventListener("click", () => {
    splash.style.display = "none";
    menuPrincipal.style.display = "block";
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
});


*/



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
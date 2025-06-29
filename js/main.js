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
  const btn = document.getElementById("enter-btn");
  const splash = document.getElementById("splash-screen");
  const menuPrincipal = document.getElementById("menu-principal");

  btn.addEventListener("click", () => {
    splash.style.display = "none";
    menuPrincipal.style.display = "block";
  });
});
*/
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("enter-btn");
  const splash = document.getElementById("splash-screen");
  const menuPrincipal = document.getElementById("menu-principal");

  btn.addEventListener("click", () => {
    splash.style.display = "none";
    menuPrincipal.style.display = "block";
  });
});

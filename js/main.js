document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("enter-btn");
  const splash = document.getElementById("splash-screen");
  const scene = document.getElementById("ar-scene");

  btn.addEventListener("click", () => {
    splash.style.display = "none";
    scene.style.display = "block";
  });
});

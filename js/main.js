// main.js
document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enter-btn');
    const splashScreen = document.getElementById('splash-screen');

    // Asegúrate de que los elementos existen antes de intentar usarlos
    if (enterBtn && splashScreen) {
        enterBtn.addEventListener('click', () => {
            splashScreen.style.display = 'none'; // O splashScreen.remove();
            // También podrías cambiar el overflow del body si es necesario
            document.body.style.overflow = 'auto'; // Si estaba hidden
        });
    } else {
        console.warn('Elementos #enter-btn o #splash-screen no encontrados.');
    }
});
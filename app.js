// Selecciona el botón de descarga
const downloadButton = document.querySelector('a button');

downloadButton.addEventListener('click', (event) => {
  // Opcional: mostrar mensaje de confirmación
  alert('La descarga se iniciará ahora.');

  // Deshabilitar botón para evitar múltiples clics
  downloadButton.disabled = true;
  downloadButton.style.opacity = 0.6;
  downloadButton.style.cursor = 'not-allowed';

  // Opcional: volver a habilitar el botón después de unos segundos
  setTimeout(() => {
    downloadButton.disabled = false;
    downloadButton.style.opacity = 1;
    downloadButton.style.cursor = 'pointer';
  }, 5000); // 5 segundos
});


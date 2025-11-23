// Función para generar el HTML del minijuego de la Fábrica de Juguetes
function loadToyFactoryGame() {
    const gameContainer = document.getElementById('minigame-container');
   
    // Contenido del minijuego (replicando el diseño de la imagen)
    gameContainer.innerHTML = `
        <div class="game-scenario">
            <img src="images/Fábrica de juguetes navideña.png" alt="Fábrica de Juguetes" class="factory-background">
            <div class="clue-box">
                <p>The elves have hidden a clue in the Toy Factory but there are many boxes and it's easy to get confused.</p>
            </div>
            <div class="game-options">
                <div class="option" data-correct="false" data-index="1">
                    <img src="images/gift_red.png" alt="Regalo Izquierdo">
                </div>
                <div class="option correct-option" data-correct="true" data-index="2">
                    <img src="images/gift_gold.png" alt="Regalo Derecho Brillante">
                    </div>
                <div class="option" data-correct="false" data-index="3">
                    <img src="images/coal.png" alt="Carbón">
                </div>
            </div>
            <p class="game-hint">El regalo perdido brilla como la luz de un árbol de Navidad.</p>
           
            <button id="back-to-map-btn" class="map-button">Back to map</button>
        </div>
        <p id="result-message"></p>
    `;
    // 1. Agregar Listeners de Eventos a las Opciones
    const options = document.querySelectorAll('.game-options .option');
    options.forEach(option => {
        option.addEventListener('click', handleSelection);
    });
    // 2. Listener para el botón "Back to map" (por ahora solo muestra un mensaje)
    document.getElementById('back-to-map-btn').addEventListener('click', () => {
        alert('Volviendo al mapa... ¡Aún no hemos implementado la navegación!');
    });
}
// Función que se ejecuta al hacer clic en una de las opciones
function handleSelection(event) {
    const selectedOption = event.currentTarget;
    const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
    const resultMessage = document.getElementById('result-message');
   
    // Desactivar clics después de la selección
    document.querySelectorAll('.game-options .option').forEach(opt => opt.style.pointerEvents = 'none');
    if (isCorrect) {
        resultMessage.textContent = '¡Felicidades! Has encontrado la pista y el regalo de Piter. ¡Avancemos al Bosque Nevado!';
        resultMessage.className = 'success';
        // Aquí se llamaría a una función para avanzar el juego
        document.getElementById('back-to-map-btn').style.display = 'block';
    } else {
        resultMessage.textContent = '¡Oh, oh! No es este. Los Elfos te han confundido. ¡Inténtalo de nuevo!';
        resultMessage.className = 'error';
        // Reactivar clics después de un breve retraso para que el usuario pueda volver a intentar
        setTimeout(() => {
            document.querySelectorAll('.game-options .option').forEach(opt => opt.style.pointerEvents = 'auto');
            resultMessage.textContent = ''; // Limpiar el mensaje de error
            resultMessage.className = '';
        }, 2000);
    }
}
// Inicializar el juego al cargar la página
window.onload = loadToyFactoryGame;

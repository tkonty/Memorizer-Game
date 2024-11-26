const startButton = document.getElementById('start-btn');
const homeButton = document.getElementById('home-btn');

startButton.addEventListener('click', () => {
    window.location.href = 'game.html';
});

homeButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});
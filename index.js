const startButton = document.getElementById('start-btn');
const rulesButton = document.getElementById('rules-btn');

startButton.addEventListener('click', () => {
    window.location.href = 'game.html';
});

rulesButton.addEventListener('click', () => {
    window.location.href = 'rules.html';
});
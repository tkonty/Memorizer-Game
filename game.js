let displayDigitElement = document.getElementById('display-digit');
let userInputElement = document.getElementById('user-input');
let submitButtonElement = document.getElementById('submit-btn')
let finalAnswerElement = document.getElementById('final-answer');
let gameOverElement = document.getElementById('game-over');
let userFinalAnswerElement = document.getElementById('user-final-answer');
let scoreTitleElement = document.getElementById('score-title');
let restartButtonElement = document.getElementById('restart-btn');
let mainMenuButtonElement = document.getElementById('main-menu-btn');

let numberAnswer = "";

function updateDisplayDigit(newDigit){
    displayDigitElement.textContent = newDigit;
}

function randomDigit(){
    return Math.floor(Math.random() * 10);
}

function startGame(){
    userInputElement.focus()
    userInputElement.value = "";
    let r = randomDigit();
    updateDisplayDigit(r);
    numberAnswer += r.toString();
}

function checkAnswer(userNumber){
    if (userNumber == numberAnswer){
        console.log("Correct!");
        startGame();
    }
    else {
        finalAnswerElement.textContent = numberAnswer;
        userFinalAnswerElement.textContent = userNumber;
        displayDigitElement.textContent = numberAnswer.length - 1;
        gameOverElement.classList.remove('hidden');
        scoreTitleElement.classList.remove('hidden');
        console.log("Wrong :(");
    }
}

window.onload = function () {
    startGame();
}

submitButtonElement.addEventListener('click', () => {
    checkAnswer(userInputElement.value);
})

restartButtonElement.addEventListener('click', () => {
    location.reload();
})

mainMenuButtonElement.addEventListener('click', () => {
    window.location.href = 'start.html';
})

userInputElement.addEventListener('keydown', function(event) {
    console.log(event);
    if (event.key === "Enter"){
        submitButtonElement.click();
    }
})


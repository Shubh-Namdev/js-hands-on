let randomNumber = parseInt(Math.random()*100 + 1);
console.log(randomNumber);

//form details
const submitButton = document.getElementById('subt');
const userInput = document.querySelector('#guessField');

//for user information
const userGuessesContainer = document.querySelector('.guesses');
const guessesRemainingContainer = document.querySelector('.lastResult');
const userMessage = document.querySelector('.lowOrHi');

//new game setup
const newSpace = document.createElement('p');
const userInfoContainer = document.querySelector('.resultParas');

//variables
let previousGuesses = [];
let allowedAttempts = 10;
let canUserPlay = true;

if ( canUserPlay ) {
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        userMessage.innerHTML = "";
        const userInputVal = parseInt(userInput.value);
        validateInput(userInputVal);
    })
}

function validateInput(guessedNumber) {
    if ( isNaN(guessedNumber) ) {
        alert("please enter a valid number");
    }else if ( guessedNumber < 1 ) {
        alert("please enter a valid number");
    }else if ( guessedNumber > 100 ) {
        alert("please enter a valid number");
    }else {
        if( allowedAttempts <= 0 ) {
            displayMessage(`no attempts left, game over`);
            endGame();
        }else {
            checkGuess(guessedNumber);
            displayGuess(guessedNumber);
        }
    }
}

function checkGuess(guessedNumber) {
    if ( guessedNumber === randomNumber ) {
        displayMessage("You guessed it correctly")
        endGame();
    }else if ( guessedNumber < randomNumber ) {
        displayMessage("Number too low,try higher");
    }else {
        displayMessage("Number too high,try lower");
    } 
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute('disabled','');
    // const restartButton = document.createElement('button');
    // restartButton.id = "newGame";
    // restartButton.appendChild(document.createTextNode('Start Game'));
    // newSpace.appendChild(restartButton);
    // userInfoContainer.appendChild(newSpace);
    newSpace.classList.add('button');
    newSpace.innerHTML = `<h2 id="newGame" style="color:blue">Start Again</h2>`;
    userInfoContainer.appendChild(newSpace);

    canUserPlay = false;
    startGame();
}

function startGame() {
    const gameRes = document.querySelector('#newGame');
    gameRes.addEventListener('click', (e) => {

        randomNumber = parseInt(Math.random()*100 + 1);
        previousGuesses = [];
        allowedAttempts = 10;

        userGuessesContainer.innerHTML = "";
        guessesRemainingContainer.innerHTML = `${allowedAttempts}`;
        userMessage.textContent = "";
        
        userInput.removeAttribute('disabled');
        userInfoContainer.removeChild(newSpace);

        canUserPlay = true;
    })
}

function displayGuess(guessedNumber) {
    userInput.value = "";
    userGuessesContainer.innerHTML += `${guessedNumber},`;
    allowedAttempts--;
    guessesRemainingContainer.innerHTML = `${allowedAttempts}`;
}

function displayMessage(message) {
    userMessage.innerHTML = `<h2>${message}</h2>`;
}
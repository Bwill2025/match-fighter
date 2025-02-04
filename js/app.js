

let firstCard, secondCard;

let hasFlippedCard = false;

let lockBoard = false;

let matchCount = 0;

let totalCards = [];

let incorrectAttempts = 0;

const gameBoard = document.getElementById('gameBoard');

const resetButton = document.getElementById('resetButton');

const gameMessage = document.querySelector('.message')

const winSound = document.getElementById('winSound');

const cardsArray = Array.from(gameBoard.children);

 
function initializeGame() {

    cardsArray.sort(() => 0.5 - Math.random());

    cardsArray.forEach((card) => {

        card.innerHTML = '';

        card.classList.remove('flip');

        card.addEventListener('click', flipCard);

        gameBoard.appendChild(card);

        

    });
    
    matchCount = 0;

    incorrectAttempts = 0;

    gameMessage.textContent = '';

    resetBoard();

  

}

function checkForWinner () {

    if (matchCount === cardsArray.length) {

        gameMessage.textContent = "You Win"

        winSound.play();

    } 

}

function checkForLoser() {

    if (incorrectAttempts >= 5) {

        gameMessage.textContent = 'You Lose';

       

    }

}



function flipCard() {

    if (lockBoard || this === firstCard) 
        
        return;

    this.textContent = this.dataset.value;

    this.classList.add('flip');


    if (!hasFlippedCard) {

        hasFlippedCard = true;

        firstCard = this;

       


    

        

    } else {

        secondCard = this;

        

        checkForMatch();

    }

}

function checkForMatch() {

    if (firstCard.dataset.value === secondCard.dataset.value) {

        disableCards();

   matchCount += 2

    checkForWinner();

     

    } else {

        incorrectAttempts++;

        checkForLoser();

        unflipCards();

    }
}

function disableCards() {

    firstCard.removeEventListener('click', flipCard);

    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {

    lockBoard = true;

    setTimeout(() => {

        firstCard.textContent = '';

        secondCard.textContent = '';

        firstCard.classList.remove('flip');

        secondCard.classList.remove('flip');

        resetBoard();

    }, 1000);
}

function resetBoard() {

    [hasFlippedCard, lockBoard] = [false, false];

    [firstCard, secondCard] = ['', ''];

}

resetButton.addEventListener('click',() => {

    initializeGame();

});






initializeGame();

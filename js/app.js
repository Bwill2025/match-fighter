

let firstCard, secondCard;

let hasFlippedCard = false;

let lockBoard = false;



let totalCards = [];

const gameBoard = document.getElementById('gameBoard');

const resetButton = document.getElementById('resetButton');

const gameMessage = document.querySelector('.message')

const cardsArray = Array.from(gameBoard.children);

 
function initializeGame() {

    

   
    cardsArray.sort(() => 0.5 - Math.random());

    cardsArray.forEach((card) => {

        card.innerHTML = '';

        card.classList.remove('flip');

        card.addEventListener('click', flipCard);

        gameBoard.appendChild(card);

    });

    resetBoard();

  

}

function checkForWinner () {
    if (totalCards.length === 8) {
        gameMessage.textContent = "You Win"
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

        totalCards.push(firstCard) 


    

        

    } else {

        secondCard = this;

        totalCards.push(secondCard)

        checkForMatch();

    }

}

function checkForMatch() {

    if (firstCard.dataset.value === secondCard.dataset.value) {

        disableCards();

   

    checkForWinner();

     

    } else {

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

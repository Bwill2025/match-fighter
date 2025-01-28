/*-------------------------------- Constants --------------------------------*/

const cardsArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
const gameBoard = document.getElementById('gameBoard');

/*---------------------------- Variables (state) ----------------------------*/
let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
cardsArray.sort(() => 0.5 - Math.random());

cardsArray.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.value = card;
    cardElement.addEventListener('click', flipCard);
    gameBoard.appendChild(cardElement);
});

function flipCard() {
    if (lockBoard || this === firstCard) return;

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
    
    setTimeout(() => {
        firstCard.textContent = '';
        secondCard.textContent = '';
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
        lockBoard = true;
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
/*----------------------------- Event Listeners -----------------------------*/

document.querySelectorAll('.box').forEach((square) =>{
    box.addEventListener('click', handleClick);
});




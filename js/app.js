
const cardsArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
// hmmmm letters now arent showing but reset button
// and heading and cards arent shifting but background is jacked again
let firstCard, secondCard;

let hasFlippedBox = false;

let lockBoard = false;

const gameBoard = document.getElementById('gameBoard');

const resetButton = document.getElementById('resetButton');

function initializeGame() {

    const cardsArray = Array.from(gameBoard.children);

   
    cardsArray.sort(() => 0.5 - Math.random());

    cardsArray.forEach((card) => {

        card.innerHTML = '';

        card.classList.remove('flip');

        card.addEventListener('click', flipCard);

        gameBoard.appendChild(card);

    });

    resetBoard();

}

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

    lockBoard = true;

    setTimeout(() => {

        firstCard.textContent = '';

        secondCard.textContent = '';

        firstCard.classList.remove('flip');

        secondCard.classList.remove('flip');

        resetBoard();

    }, 1500);
}

function resetBoard() {

    [hasFlippedCard, lockBoard] = [false, false];

    [firstCard, secondCard] = [null, null];

}
resetButton.addEventListener('click', initializeGame);

initializeGame();
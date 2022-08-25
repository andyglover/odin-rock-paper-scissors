let computerScore = 0;
let playerScore = 0;
const selectionBtns = document.querySelectorAll('.selectionBtn');
const resultsDiv = document.querySelector('#roundResults');
const scoreDiv = document.querySelector('#score');
const gameOverDiv = document.querySelector('#gameOver');
const newGameButton = document.querySelector('#newGameButton');

function getComputerChoice () {
    let rand3 = Math.floor(Math.random()*3) + 1;
    switch(true){
        case (rand3 == 1):
            return "rock";
            break;
        case (rand3 == 2):
            return "paper";
            break;
        case (rand3 == 3):
            return "scissors";
            break;
        default:
            return "error";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection=="rock") {
        if (computerSelection=="rock") {
            playerScore++;
            computerScore++;
            return "Both players chose Rock! This round is a tie!";
        }
        else if (computerSelection=="paper") {
            computerScore++;
            return "You lose this round! Paper beats Rock!";
        }
        else if (computerSelection=="scissors") {
            playerScore++;
            return "You win this round! Rock beats Scissors!";
        }
    }
    else if (playerSelection=="paper") {
        if (computerSelection=="rock") {
            playerScore++;
            return "You win this round! Paper beats Rock!";
        }
        else if (computerSelection=="paper") {
            computerScore++;
            return "Both players chose Paper! This round is a tie!";
        }
        else if (computerSelection=="scissors") {
            computerScore++;
            return "You lose this round! Scissors beats Paper!";
        }
    }
    else if (playerSelection=="scissors") {
        if (computerSelection=="rock") {
            computerScore++;
            return "You lose this round! Rock beats Scissors!";
        }
        else if (computerSelection=="paper") {
            playerScore++;
            return "You win this round! Scissors beats Paper!";
        }
        else if (computerSelection=="scissors") {
            computerScore++;
            playerScore++;
            return "Both players chose Scissors! This round is a tie!";
        }
    }
}

function getScore() {
    return `Computer score: ${computerScore}, Player score: ${playerScore}`;
}
function postScore() {
    scoreDiv.textContent = getScore();
}
function unpostScore() {
    scoreDiv.textContent = "";
}
function unpostResults() {
    resultsDiv.textContent = "";
}
function unpostWinner() {
    gameOverDiv.textContent = "";
}

function determineWinner() {
    if (playerScore > computerScore) {
        return "The player is the winner!";
    }
    if (playerScore < computerScore) {
        return "The computer is the winner!";
    }    
    if (playerScore == computerScore) {
        return "It's a tie!";
    }
}

function disableSelectionBtns(){
    selectionBtns.forEach((selectionBtn) => {selectionBtn.setAttribute("disabled", "true");})
}
function enableSelectionBtns(){
    selectionBtns.forEach((selectionBtn) => {selectionBtn.removeAttribute("disabled");})
}
function hideNewGameButton(){
    newGameButton.style.display = "none";    
}
function showNewGameButton(){
    newGameButton.style.display = "inline-block";
}

function newGame(){
    hideNewGameButton();
    enableSelectionBtns();
    resetScores();
    unpostScore();
    unpostResults();
    unpostWinner();
}
function resetScores(){
    computerScore = 0;
    playerScore = 0;
}

newGameButton.addEventListener('click',()=>{
    newGame();
})

selectionBtns.forEach((selectionBtn) => {
    selectionBtn.addEventListener(
        'click', () => {
            resultsDiv.textContent = playRound(selectionBtn.innerText,getComputerChoice());
            postScore();
            if (playerScore == 5 || computerScore == 5){
                gameOverDiv.textContent = "Game over! " + determineWinner();
                disableSelectionBtns();
                showNewGameButton();
            }
        }
    )        
})
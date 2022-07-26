let computerScore = 0;
let playerScore = 0;
let roundCounter = 1;
const selectionBtns = document.querySelectorAll('.selectionBtn');
const resultsDiv = document.querySelector('#results');

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

function getPlayerChoice () {
    return prompt(`ROUND ${roundCounter} of 5. What's your choice? Type \"rock\" or \"paper\" or \"scissors\"`, "");
}
//TODO detect invalid input

function playRound(playerSelection, computerSelection) {
    if (playerSelection=="rock") {
        if (computerSelection=="rock") {
            playerScore++;
            computerScore++;
            return "Both players chose Rock! It's a tie!";
        }
        else if (computerSelection=="paper") {
            computerScore++;
            return "You lose! Paper beats Rock!";
        }
        else if (computerSelection=="scissors") {
            playerScore++;
            return "You win! Rock beats Scissors!";
        }
    }
    else if (playerSelection=="paper") {
        if (computerSelection=="rock") {
            playerScore++;
            return "You win! Paper beats Rock!";
        }
        else if (computerSelection=="paper") {
            computerScore++;
            return "Both players chose Paper! It's a tie!";
        }
        else if (computerSelection=="scissors") {
            computerScore++;
            return "You lose! Scissors beats Paper!";
        }
    }
    else if (playerSelection=="scissors") {
        if (computerSelection=="rock") {
            computerScore++;
            return "You lose! Rock beats Scissors!";
        }
        else if (computerSelection=="paper") {
            playerScore++;
            return "You win! Scissors beats Paper!";
        }
        else if (computerSelection=="scissors") {
            computerScore++;
            playerScore++;
            return "Both players chose Scissors! It's a tie!";
        }
    }
}

function logScore() {
    console.log(`Computer score: ${computerScore}, Player score: ${playerScore}`);
}

function determineWinner() {
    if (playerScore > computerScore) {
        console.log("The player wins!");
    }
    
    if (playerScore < computerScore) {
        console.log("The computer wins!");
    }    
    if (playerScore == computerScore) {
        console.log("It's a tie!");
    }
}

function game(){
    let playerSelection = getPlayerChoice().toLowerCase();
    let computerSelection = getComputerChoice();
    console.log("Round " + i);
    console.log(`The player chose ${playerSelection}, and the computer chose ${computerSelection}!`)
    console.log(playRound(playerSelection, computerSelection));
    logScore();
    console.log("");
    roundCounter++;
}

function oldgame() {
    //this code plays 5 rounds
    // for (let i = 1; i <=5; i++) {
    // }
    //this is the game over code after the 5 rounds
    // console.log("Game over! Final score:");
    // logScore();
    // determineWinner();
}

selectionBtns.forEach((selectionBtn) => {
    selectionBtn.addEventListener(
        'click', () => {
            resultsDiv.textContent = playRound(selectionBtn.innerText,getComputerChoice());
        }
    )        
})
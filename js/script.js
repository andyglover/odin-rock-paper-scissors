function getComputerChoice (){
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
let computerScore = 0;
let playerScore = 0;

function game(){    
    //keep score and report winner or loser
    for (let i = 0; i <5; i++) {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Computer score: ${computerScore}, Player score: ${playerScore}`)
    }
}

game();

//TODO: case insensitivity with .toLowerCase() after adding prompt
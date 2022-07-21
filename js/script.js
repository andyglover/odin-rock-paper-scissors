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
            return "Both players chose Rock! It's a tie!";
        }
        else if (computerSelection=="paper") {
            return "You lose! Paper beats Rock!";
        }
        else if (computerSelection=="scissors") {
            return "You win! Rock beats Scissors!";
        }
    }
    else if (playerSelection=="paper") {
        if (computerSelection=="rock") {
            return "You win! Paper beats Rock!";
        }
        else if (computerSelection=="paper") {
            return "Both players chose Paper! It's a tie!";
        }
        else if (computerSelection=="scissors") {
            return "You lose! Scissors beats Paper!";
        }
    }
    else if (playerSelection=="scissors") {
        if (computerSelection=="rock") {
            return "You lose! Rock beats Scissors!";
        }
        else if (computerSelection=="paper") {
            return "You win! Scissors beats Paper!";
        }
        else if (computerSelection=="scissors") {
            return "Both players chose Scissors! It's a tie!";
        }
    }
    
}

//TODO: case insensitivity with .toLowerCase() after adding prompt
const playerSelection = "rock";
    const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

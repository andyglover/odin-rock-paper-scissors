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
    return `Player selection ${playerSelection}` + 
            `\nComputer selection ${computerSelection}`;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

console.log("Hello Dear Player!");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.random();
    if (computerChoice >= 0 && computerChoice < 0.33) {
        return "Rock";
    }
    if (computerChoice >= 0.33 && computerChoice < 0.66){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
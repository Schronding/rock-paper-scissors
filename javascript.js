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

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (humanChoice === "rock") return "Rock";
    if (humanChoice === "paper") return "Paper";
    if (humanChoice === "scissors") return "Scissors";
    else{
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It is a tie! Try again");
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper" ||
    humanChoice === "Paper" && computerChoice === "Scissors" ||
    humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log(`You lose! ${humanChoice} is beaten by ${computerChoice}.`)
        console.log(`Computer: ${++computerScore} Human: ${humanScore}.`)
    }
    else {
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`)
        console.log(`Computer: ${computerScore} Human: ${++humanScore}.`)    }
}

function playGame(){
    while (computerScore < 5 && humanScore < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();

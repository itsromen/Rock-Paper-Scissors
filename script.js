function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "scissor";
    } else {
        return "paper";
    }   
}

function getHumanChoice () {
    return ((prompt("Choose rock, paper, or scissor: ", "")).toLowerCase());
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissor") {
            console.log ("You win! Rock beats Scissor");
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log ("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "rock") {
            console.log ("It's a draw!");
        } else if (humanChoice === "scissor" && computerChoice === "scissor") {
            console.log("It's a draw!");
        } else if (humanChoice === "scissor" && computerChoice === "paper") {
            console.log("You Win! Scissor beats Paper");
            humanScore++;
        } else if (humanChoice === "scissor" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissor");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissor") {
            console.log("You lose! Scissor beats Paper");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("It's a draw!");
        } else {
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
    }

    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Game Over");
    if (humanScore > computerScore) {
        console.log("You Win!!!");
    } else if (computerScore > humanScore) {
        console.log("You Lose :(");
    } else {
        console.log("It's a draw!");
    }
    
}

playGame();
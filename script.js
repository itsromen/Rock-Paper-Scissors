function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "scissor";
  } else {
    return "paper";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissor") {
    console.log("You win! Rock beats Scissor");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("It's a draw!");
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

  if (humanScore === 5 || computerScore === 5) {
    console.log("Game Over");
    if (humanScore > computerScore) {
      console.log("You Win!!!");
    } else if (computerScore > humanScore) {
      console.log("You Lose :(");
    } else {
      console.log("It's a draw!");
    }
    humanScore = 0;
    computerScore = 0;
  }
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let computerSelection = getComputerChoice();
    playRound(e.target.textContent.toLowerCase(), computerSelection);
  });
});

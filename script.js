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

const result = document.querySelector("div");

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissor") {
    result.textContent = "You win! Rock beats Scissors";
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    result.textContent = "You lose! Paper beats Rock";
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    result.textContent = "It's a draw!";
  } else if (humanChoice === "scissor" && computerChoice === "scissor") {
    result.textContent = "It's a draw!";
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    result.textContent = "You Win! Scissors beats Paper";
    humanScore++;
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    result.textContent = "You lose! Rock beats Scissors";
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    result.textContent = "You Lose! Scissors beats Paper";
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    result.textContent = "It's a draw!";
  } else {
    result.textContent = "You win! Paper beats Rock";
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

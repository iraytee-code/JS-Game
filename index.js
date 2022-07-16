//an array of game options
const gameOptions = ["ROCK", "PAPER", "SCISSORS"];
//computer randomly selects ane option from the game options array
function computerPlay() {
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}
// function to play a single round of the game
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    return ` It's a tie!`;
  } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
    return "Player wins!";
  } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
    return "Computer wins!";
  } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
    return "Computer wins!";
  } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
    return "Player wins!";
  } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
    return "Player wins!";
  } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
    return "Computer wins!";
  } else if (playerSelection === "") {
    return "Please enter a valid selection";
  }
}
// game Loop function that  runs the game
function game() {
  let playerScore = 0;
  let computerScore = 0;
  console.log("welcome to ROCK PAPER SCISSORS game");
  //   loop that runs the game five times per round
  for (let i = 0; i < 5; i++) {
    let playerSelections = prompt("ROCK, PAPER, or SCISSORS?");
    let playerSelection = playerSelections;
    //check for option validity
    if (
      playerSelection !== "ROCK" ||
      playerSelection !== "PAPER" ||
      playerSelection !== "SCISSORS" ||
      playerSelection === undefined ||
      playerSelection === null ||
      playerSelection === ""
    ) {
      alert("Please enter a valid selection");
      i--;
    } else {
      let playerSelection = playerSelections.toUpperCase();
      let computerSelection = computerPlay();
      let roundResult = playRound(computerSelection, playerSelection);
      if (roundResult.includes("Player wins!")) {
        playerScore++;
      } else if (roundResult.includes("Computer wins!")) {
        computerScore++;
      }
      console.log(roundResult);
    }
  }
  if (playerScore > computerScore) {
    return `Player wins the game with ${playerScore} points! to Computer's ${computerScore} points`;
  } else if (playerScore < computerScore) {
    return `Computer wins the game with ${computerScore} points! to Player's ${playerScore} points`;
  } else {
    return `Computer has ${computerScore} points and Player has ${playerScore} points. It's a tie!`;
  }
}

console.log(game());
console.log("Game Over");

prompt("Press any key to continue");
console.log(game());

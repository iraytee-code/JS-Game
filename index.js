let computerSelection = ["rock", "paper", "scissors"]; //declare computerSelection
let computerPlay = Math.floor(Math.random() * computerSelection.length); //declare computerPlay
console.log(
  "The computer choose " + computerPlay,
  computerSelection[computerPlay]
); //define computer input
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() == "rock" &&
      computerSelection[computerPlay] == "scissors") ||
    (playerSelection.toLowerCase() == "paper" &&
      computerSelection[computerPlay] == "rock") ||
    (playerSelection.toLowerCase() == "scissors" &&
      computerSelection[computerPlay] == "paper")
  ) {
    playerScore++;
    return win;
  } else if (
    (playerSelection.toLowerCase() == "rock" &&
      computerSelection[computerPlay] == "paper") ||
    (playerSelection.toLowerCase() == "scissors" &&
      computerSelection[computerPlay] == "rock") ||
    (playerSelection.toLowerCase() == "paper" &&
      computerSelection[computerPlay] == "scissors")
  ) {
    computerScore++;
    return lose;
  } else if (playerSelection.toLowerCase() == computerSelection[computerPlay]) {
    tieScore++;
    return tie;
  } //if player input rock compare to rock, its a tie
  else {
    return "you must input rock, paper or scissors";
  } //else if player input paper compare to rock, you win
}

let playerSelection = prompt("lets play rock papper scissors"); //define player, player input
//let player = playerSelection.toLowerCase(); //convert user input to lowercase *old
console.log("you choose " + playerSelection.toLowerCase()); //show user input in lowercase

//define scores
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

//define win, lose or tie
const win = "You Win this round!"; //define win
const lose = "You Lose this round!"; //define lose
const tie = "This round is a tie!"; //define tie

//define playround
console.log(playRound(playerSelection, computerSelection));

//loop
function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("lets play rock papper scissors"); //define player, player input

    console.log("you choose " + playerSelection.toLowerCase()); //show user input in lowercase

    computerSelection = ["rock", "paper", "scissors"]; //update computerSelection
    computerPlay = Math.floor(Math.random() * computerSelection.length); //update computerPlay

    console.log(
      "The computer choose " + computerPlay,
      computerSelection[computerPlay]
    ); //define computer input

    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    return "You Win this game";
  }
  if (playerScore == computerScore) {
    return "This game is a tie";
  } else {
    return "You Lose this game";
  }
}

console.log(game()); //play the loop

console.log(
  "Your final score is " +
    playerScore +
    " wins " +
    computerScore +
    " loses and " +
    tieScore +
    " draws"
);

score = playerScore + computerScore + tieScore;

console.log("You played this game " + score + " times, Game over.");

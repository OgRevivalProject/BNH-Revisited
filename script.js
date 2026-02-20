// ================================
// VARIABLES
// ================================

// Game choices stored in an array
var choices = ["Bear", "Ninja", "Hunter"];

// Win counters that persist across rounds in a session
var playerScore = 0;
var computerScore = 0;

// ================================
// PLAY GAME - runs when a button is clicked
// ================================

function playGame(playerChoice) {

  // Pick a random index to get the computer's choice from the array
  var randomIndex = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[randomIndex];

  // Figure out who won this round
  var winner;

  if (playerChoice === computerChoice) {
    winner = "Tie";
  } else {
    // Check player choice against computer choice using game rules
    if (playerChoice === "Bear" && computerChoice === "Ninja") {
      winner = "Player";
    } else if (playerChoice === "Ninja" && computerChoice === "Hunter") {
      winner = "Player";
    } else if (playerChoice === "Hunter" && computerChoice === "Bear") {
      winner = "Player";
    } else {
      winner = "Computer";
    }
  }

  // Update score counters
  if (winner === "Player") {
    playerScore++;
  } else if (winner === "Computer") {
    computerScore++;
  }

  // Build the result lines to show in the box
  var playerLine = "You chose " + playerChoice + ".";
  var computerLine = "The computer chose " + computerChoice;
  var winnerLine;

  if (winner === "Player") {
    winnerLine = "You win!";
  } else if (winner === "Computer") {
    winnerLine = "The computer wins!";
  } else {
    winnerLine = "It's a tie!";
  }

  // Put the text into the results box
  document.getElementById("playerChoiceLine").innerHTML = playerLine;
  document.getElementById("computerChoiceLine").innerHTML = computerLine;
  document.getElementById("winnerLine").innerHTML = winnerLine;

  // Show the results box
  document.getElementById("resultsBox").classList.remove("hidden");

  // Update and show the win counter
  document.getElementById("yourWins").innerHTML = "Your Wins: " + playerScore;
  document.getElementById("compWins").innerHTML = "Computer Wins: " + computerScore;
  document.getElementById("winCounter").classList.remove("hidden");

  // Show the Play Again button and its surrounding hrs
  document.getElementById("playAgainRow").classList.remove("hidden");
  document.getElementById("bottomHr").classList.remove("hidden");
  document.getElementById("bottomHr2").classList.remove("hidden");
}

// ================================
// RESET GAME - runs when Play Again is clicked
// ================================

function resetGame() {

  // Clear the result text
  document.getElementById("playerChoiceLine").innerHTML = "";
  document.getElementById("computerChoiceLine").innerHTML = "";
  document.getElementById("winnerLine").innerHTML = "";

  // Hide the results box and play again button
  document.getElementById("resultsBox").classList.add("hidden");
  document.getElementById("winCounter").classList.add("hidden");
  document.getElementById("playAgainRow").classList.add("hidden");
  document.getElementById("bottomHr").classList.add("hidden");
  document.getElementById("bottomHr2").classList.add("hidden");

  // Scores stay as-is so they keep adding up during the session
}

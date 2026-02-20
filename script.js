// game choices array
var choices = ["Bear", "Ninja", "Hunter"];

// win counters persist across rounds
var playerScore = 0;
var computerScore = 0;

// runs when player clicks a choice button
function playGame(playerChoice) {

  // pick computer choice using random index
  var randomIndex = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[randomIndex];

  // determine winner
  var winner;

  if (playerChoice === computerChoice) {
    winner = "Tie";
  } else {
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

  // update scores
  if (winner === "Player") {
    playerScore++;
  } else if (winner === "Computer") {
    computerScore++;
  }

  // build result text
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

  // display results
  document.getElementById("playerChoiceLine").innerHTML = playerLine;
  document.getElementById("computerChoiceLine").innerHTML = computerLine;
  document.getElementById("winnerLine").innerHTML = winnerLine;

  document.getElementById("resultsBox").classList.remove("hidden");

  // display win counter
  document.getElementById("yourWins").innerHTML = "Your Wins: " + playerScore;
  document.getElementById("compWins").innerHTML = "Computer Wins: " + computerScore;
  document.getElementById("winCounter").classList.remove("hidden");

  // show play again button
  document.getElementById("playAgainRow").classList.remove("hidden");
  document.getElementById("bottomHr").classList.remove("hidden");
  document.getElementById("bottomHr2").classList.remove("hidden");
}

// runs when player clicks Play Again
function resetGame() {

  // clear result text
  document.getElementById("playerChoiceLine").innerHTML = "";
  document.getElementById("computerChoiceLine").innerHTML = "";
  document.getElementById("winnerLine").innerHTML = "";

  // hide results, counter, and play again button
  document.getElementById("resultsBox").classList.add("hidden");
  document.getElementById("winCounter").classList.add("hidden");
  document.getElementById("playAgainRow").classList.add("hidden");
  document.getElementById("bottomHr").classList.add("hidden");
  document.getElementById("bottomHr2").classList.add("hidden");

  // scores keep adding up until page refresh
}

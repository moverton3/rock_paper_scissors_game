// RPS Game Logic

var score = 0;

var userChoice;

var options = {
  "0": "Paper",
  "1": "Scissors",
  "2": "Rock"
};

var oppChoice = {
  init: function() {
    this.store = Math.floor(Math.random() * 3);
    this.display = options[this.store];
  },
  display: " ",
  store: " "
}

var pickWinner = function(player, computer) {
// numbers are equal to options variable at top
  var order [0, 1, 2, 0];
  if ( player === computer ) { return "Whoops! Looks like a tie." }
  if order[player] === order[computer + 1]) {
    score++;
    return "You win!";
  } else {
    score--;
    return "You lose."
  }
}

console.log("oppChoice": oppChoice);

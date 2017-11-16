
function activate(playerChoice) {
  var options = ["Paper", "Scissors", "Rock"]
  var computerChoice = options[Math.floor(Math.random() * 3)];
  console.log("You chose " + playerChoice)
  console.log("Computer chose " + computerChoice)
// decide who and how player or computer wins
    if ( playerChoice === computerChoice ) {
      document.getElementById("decision").innerHTML = "Whoops! Looks like a tie."
    }
    else if ( playerChoice === "Rock" && computerChoice === "Scissors" ||
         playerChoice === "Paper" && computerChoice === "Rock" ||
         playerChoice === "Scissors" && computerChoice === "Paper") {
      document.getElementById("decision").innerHTML = "You won!"
      document.getElementById("gameoutcome").innerHTML = ("You chose: " + playerChoice + " Computer chose: " + computerChoice)
    }
    else {
      document.getElementById("decision").innerHTML = "You lost!"
      document.getElementById("gameoutcome").innerHTML = ("You chose: " + playerChoice + " Computer chose: " + computerChoice)
    }

}
//
var paperButton = document.getElementById('paperButton')
paperButton.addEventListener('click', function() {
  activate("Paper")
})

var scissorButton = document.getElementById('scissorButton')
scissorButton.addEventListener('click', function() {
  activate("Scissors")
})

var rockButton = document.getElementById('rockButton')
rockButton.addEventListener('click', function() {
  activate("Rock")
})

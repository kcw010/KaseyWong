var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls;
balance = 0;
var die1Image = new Image ()
var die2Image = new Image ()

function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars.";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you 5 dollars.";
      balance += 5;
    } else {
      outcome = "It's a draw, nobody wins or loses.";
    }

    // Report the outcome:
    banner = die1 + " + " + die2 + " = " + dieSum;
}

function letsPlayOnce() {
  balance = 0;
  currentRound = 1;

  rollDice();
  whoWon();

  var text = "";
  text = text + "Round: " + currentRound + "<br>";
  text = text + banner + "<br>";
  text = text + outcome + "<br>";
  text = text + "Final Balance: " + balance;

  document.querySelector("h3").innerHTML= text;
}

function letsPlay() {
 input = prompt("Enter the number of rounds you want to play!");
 let rounds = parseInt(input);


 if (isNaN(rounds) || rounds <=0) {
   alert("Please enter a positive whole number.");
   return;
 }

  balance = 0;
  document.querySelector("h3").innerHTML= "";

  for (let i = 0; i < rounds; i++) {
    setTimeout(function () {
      rollDice();
      whoWon();

      let roundNumber = i +1;
      let text = "";
      text += "Round: " + roundNumber + "<br>";
      text += banner + "<br>";
      text += outcome + "<br>";

      if (roundNumber === rounds) {
        text += "Final Balance: " + balance;
      } else {
        text += "Balance so far: " + balance;
      }
      document.querySelector("h3").innerHTML = text;
    }, i * 1000);
  }
}



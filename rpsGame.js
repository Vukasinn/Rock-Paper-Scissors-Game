// var rock = document.getElementById("rock");
// var paper = document.getElementById("paper");
// var scissors = document.getElementById("scissors");

// var playerChoice = prompt("Rock,Paper,or Scissors ?").toUpperCase;
var computerChoice;
var playerChoice;
var button;
var choices = ["ROCK", "PAPER", "SCISSORS"];
button = document.getElementById("sendBtn");
button.addEventListener("click", function () {
    playerChoice = (document.querySelector("#personChoice").value).toUpperCase();


    computerChoice = (choices[Math.floor(Math.random() * choices.length)]);




    document.querySelector("#computer").innerHTML = "Computer Choice: " + computerChoice;
    document.querySelector("#you").innerHTML = "Your Choice: " + playerChoice;

    if (playerChoice == "ROCK" && computerChoice == "ROCK") {
        document.querySelector("#start").innerHTML = "It is a tie !";
    } else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
        document.querySelector("#start").innerHTML = "Computer Wins !";
        lives--;
    } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
        document.querySelector("#start").innerHTML = "You Win !";
    } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        document.querySelector("#start").innerHTML = "You Win !";
    } else if (playerChoice == "PAPER" && computerChoice == "PAPER") {
        document.querySelector("#start").innerHTML = "It is a tie !";
    } else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
        document.querySelector("#start").innerHTML = "Computer Wins !";
        lives--;
    } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
        document.querySelector("#start").innerHTML = "Computer Wins !";
        lives--;
    } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
        document.querySelector("#start").innerHTML = "You Win !";
        lives--;
    } else if (playerChoice == "SCISSORS" && computerChoice == "SCISSORS") {
        document.querySelector("#start").innerHTML = "It is a tie !";
    }else if(playerChoice !== "ROCK" || "PAPER" || "SCISSORS"){
        document.querySelector("#start").innerHTML = "Please choose from Rock, Paper or Scissors.";
    }
});
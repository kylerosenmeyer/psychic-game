
// Variables: Computer Choice Array

var computerChoices = ["a", "b", "c", "d", "e", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// Variables: Game Tallies

var Win = 0;
var Loss = 0;
var Left = 9;
// var Sofar = ""

// Variables: HTML References

var uGuess = document.getElementById("userGuess");
var cGuess = document.getElementById("computerGuess");
var wTally = document.getElementById("winsTally");
var lTally = document.getElementById("lossesTally");
var gLeft = document.getElementById("guessesLeft");
// gSofar = document.getElementById("guessesSofar"),

// Variables: The Computer's Guess

var cpGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

// Functions: Reset Game

function reset() {
    location.reload();
}

// This is the User's Guess

document.onkeyup = function(event) {
    var usGuess = event.key

    // This Loop finds the user's choice within the computerChoice Array

    var i;
    for (i=0; i < computerChoices.length; i++) {
        usGuess === computerChoices[i];
    }

    // This is the main game Logic
    
    if ( usGuess === cpGuess ) {
        Win++;

    } else if (usGuess !== cpGuess) {
        Left--;
    }

    // This is the display of the results

    uGuess.insertAdjacentText("beforeend", usGuess + ", ");
    wTally.textContent = "Wins: " + Win;
    lTally.textContent = "Losses: " + Loss;
    gLeft.textContent = "Guesses Left: " - Left;

    



    console.log("this is a text log");
};
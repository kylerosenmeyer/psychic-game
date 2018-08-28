
// Variables: Computer Choice Array

var computerChoices = ["a", "b", "c", "d", "e", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

//Variables: Guesses Letter Array

var guessedLetters = [];

// Variables: Game Tallies

var Win = 0;
var Loss = 0;
var Guesses = 9;


// Variables: HTML References

var uGuess = document.getElementById("userGuess");
var wTally = document.getElementById("winsTally");
var lTally = document.getElementById("lossesTally");
var gLeft = document.getElementById("guessesLeft");
var cGuess = document.getElementById("computerGuess");

// Variables: The Computer's Guess

var cpGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

// Variables: Convert the Computer's Guess to a keycode

var cpKey = cpGuess.which || cpGuess.keycode;

// Function: Refresh the Computer's choice

function cpRefresh() {
    cpGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

// Function: Empty the User guess array

function guessRefresh() {
    guessedLetters= [];
};

// This is the User's Guess

document.onkeyup = function(event) {
    var usGuess = event.key;

    //Function: Grab the Keycode for the user Guess

    var key = event.which || event.keycode;

    // First, Check if usGuess is a lowercase letter

    if ( (key >= 65 ) && (key <= 90 ) ) {

        //Then, check to see if the user guess matches the computer's guess

        if ( usGuess === cpGuess ) {
            Win++,
            Guesses = 9,
            cpRefresh(),
            guessRefresh();

        //Then, see if the user guess is in the guessedLetters array. If not, add it and subract a guess. 

        } else if ( guessedLetters.indexOf(" " + usGuess + " ") === -1 ) {
            guessedLetters.push(" " + usGuess + " "), 
            Guesses--;
        }  
    };

    // When the guesses get down to Zero, add 1 to the Losses, and reset the Guess fields.

    if ( Guesses === 0 ) {
        Loss++, 
        Guesses = 9, 
        cpRefresh(),
        guessRefresh();
    };

    var guessR = guessedLetters.toString();

    // This is the display of the results
    uGuess.innerText = "Your Guesses So Far: " + guessR;
    wTally.textContent = "Wins: " + Win;
    lTally.textContent = "Losses: " + Loss;
    gLeft.textContent = "Guesses Left: " + Guesses;

    // Cheat (Show the Computer's Guess)

    cGuess.textContent = "Cheat: " + cpGuess;

    



    // console.log("this is a text log");
    // console.log(key);
    // console.log(guessR);
};
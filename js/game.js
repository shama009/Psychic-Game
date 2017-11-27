
// Alphabet string
var alphabet = "abcdefghijklmnopqrstuvwxyz";
// score variables
var wins = 0, loses = 0, guessesLeft = 9, guesses = "", userGuessesDisplay = "";
var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    var userGuessLower = userGuess.toLowerCase();

    if (userGuessesDisplay.length > 0) {
        userGuessesDisplay += "," + userGuessLower;
    }
    else {
        userGuessesDisplay = userGuessLower;
    }

    // compare user and computer guesses
    if ((getRandomLetter != userGuessLower) && (guessesLeft <= 1)) {
        loses++;
        guessesLeft = 9;
        userGuessesDisplay = "";
        getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    else if ((getRandomLetter == userGuessLower) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        userGuessesDisplay = "";
        getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    else {
        guessesLeft--;
    }

    // Display updated scores
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = loses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guesses").innerHTML = userGuessesDisplay;
    document.getElementById("cg").innerHTML = getRandomLetter;
}
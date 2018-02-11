var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerGuess);

var guessedLetters = [];

document.onkeyup = function addGuess(event){

    var userGuess = event.key;

    guessedLetters.push(userGuess);

    document.getElementById("lettersGuessed").innerHTML = guessedLetters.toString();

    document.getElementById("guessesLeft").innerHTML = guessesLeft - guessedLetters.length;


    if (userGuess===computerGuess){
        wins++;
        alert(computerGuess + " was correct! You Win!");
        document.getElementById("wins").innerHTML= wins;
        guessedLetters.length=0;
        document.getElementById("lettersGuessed").innerHTML = "No guesses yet";
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerGuess);
        guessesLeft=10;
        document.getElementById("guessesLeft").innerHTML = guessesLeft - guessedLetters.length;

    
    }
    else if(guessedLetters.length===10){
        losses++;
        alert("You Lose!")
        document.getElementById("losses").innerHTML= losses;
        guessedLetters.length=0;
        document.getElementById("lettersGuessed").innerHTML = "No guesses yet"
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerGuess);
        guessesLeft=10;
        document.getElementById("guessesLeft").innerHTML = guessesLeft - guessedLetters.length;

    }
};






// Alphabet array
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//Win Count
var wins = 0;
//Loss Count
var losses = 0;
//Initial Guesses Left
var guessesLeft = 10;

//Establishes a random letter from Aphabet array and logs it to console for viewing
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);
//Creates an empty array to be filled later
var guessedLetters = [];
//Initialized the event to collect key data
document.onkeyup = function addGuess(event){

    //creates a function to reset everything to it's original value
    function reset(){
        guessedLetters.length=0;
        document.getElementById("lettersGuessed").innerHTML = "No guesses yet";
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerGuess);
        guessesLeft=10;
        document.getElementById("guessesLeft").innerHTML = guessesLeft - guessedLetters.length;
    }
    // creates a variable for the key pressed by the user and pushes it to the array, 
    var userGuess = event.key;
    //detects if userGuess has been selected before, only allows letters found in alphabet array that haven't been entered before
    if (guessedLetters.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        guessedLetters.push(userGuess);
        document.getElementById("lettersGuessed").innerHTML = guessedLetters.toString();
	}
    


    // writes the array of letters guessed to the webpage and incremements the number of guesses left down
    
    document.getElementById("guessesLeft").innerHTML = guessesLeft - guessedLetters.length;


    //determines if the user has guessed the correct letter
    if (userGuess===computerGuess){
        wins++;
        alert(computerGuess + " was correct! You Win!");
        document.getElementById("wins").innerHTML= wins;
        reset();


    
    }

    // determines if the user spent all their guesses
    else if(guessedLetters.length===10){
        losses++;
        alert("You Lose!")
        document.getElementById("losses").innerHTML= losses;
        reset();

    }
};

// declare and initialize array
let game = ["DEPAU", "LOYOLA", "BROWN", "HARVARD", "ELMHURST", "AURORA", "ROOSEVELT", "AMHERST", "HAMILTON", "SMITH"];
let choice = Math.floor(Math.random() * game.length);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let usedLetters = []; // array to store guessed letters

// game setup
function setup() {
    //alert(answer); 
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}

// function for handling the letter guesses
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value.toUpperCase();
    document.getElementById("guess").value = '';

    // check if the letter has already been guessed
    if (!usedLetters.includes(userLetter)) {
        usedLetters.push(userLetter); // add guessed letter to usedLetters array
        document.getElementById("guessed").innerHTML = 'Guessed letters: ' + usedLetters.join(', ');

        let found = false; // rrack if the letter was found

        // loop through the letters of the word
        for (let c = 0; c < answer.length; c++) {
            if (userLetter == letters[c]) {
                if (display[c] == "_ ") {
                    display[c] = userLetter;
                    win--;
                }
                found = true;
            }
            output = output + display[c] + ' ';
        }

        if (!found) {
            attemptsLeft--;
            document.getElementById("hangman").src = "images/0" + (7 - attemptsLeft) + ".png"; // Update hangman image
        }

        if (win < 1) {
            document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
        } else if (attemptsLeft < 1) {
            document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
        } else {
            document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
        }

        document.getElementById("word").innerHTML = output;
        output = '';
    } else {
        alert('You already guessed that letter!');
    }
});

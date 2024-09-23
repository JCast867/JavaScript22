let randomNumber;
let attempts = 0;

function setup() {
    randomNumber = Math.floor(Math.random() * 1000) + 1;
    attempts = 0;
    document.getElementById("feedback").textContent = "Make your first guess!";
    document.getElementById("attempts").textContent = "Attempts: 0";
}

document.getElementById("submit").addEventListener("click", function() {
    let guess = parseInt(document.getElementById("guess").value);
    attempts++;
    
    if (isNaN(guess) || guess < 1 || guess > 1000) {
        document.getElementById("feedback").textContent = "Please enter a number between 1 and 1000!";
        return;
    }
    
    let difference = Math.abs(randomNumber - guess);

    // Check how "hot" or "cold" the guess is
    if (guess === randomNumber) {
        document.getElementById("feedback").textContent = "Correct! You guessed the number!";
        document.getElementById("feedback").className = "correct";
    } else if (difference <= 5) {
        document.getElementById("feedback").textContent = "SUPER HOT!! YOU'RE RIGHT THERE";
        document.getElementById("feedback").className = "hot";
    } else if (difference <= 25) {
        document.getElementById("feedback").textContent = "Hot! Very close!";
        document.getElementById("feedback").className = "hot";
    } else if (difference <= 50){
        document.getElementById("feedback").textContent = "Warmer!"
        document.getElementById("feedback").className = "warm";
    } else if (difference <= 80) {
        document.getElementById("feedback").textContent = "Warm!";
        document.getElementById("feedback").className = "warm";
    } else if (difference <= 120) {
        document.getElementById("feedback").textContent = "A little bit less warm";
        document.getElementById("feedback").className = "warm";
    } else if (difference <= 300) {
        document.getElementById("feedback").textContent = "Cold but not as cold!";
        document.getElementById("feedback").className = "cold";
    } else if (difference <= 500) {
        document.getElementById("feedback").textContent = "Cold!";
        document.getElementById("feedback").className = "cold";
    } else {
        document.getElementById("feedback").textContent = "Coldest you'll ever be!";
        document.getElementById("feedback").className = "cold";
    }

    document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
});

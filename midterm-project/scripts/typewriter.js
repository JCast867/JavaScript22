const welcome = "Welcome to Finance App!"; // strings
const typewriterElementWelcome = document.getElementById('typewriter-text'); // variables
let index = 0; // variables

function typeWriter() { // functions
    if (index < welcome.length) {
        typewriterElementWelcome.innerHTML += welcome.charAt(index); // operator
        index++; // operator
        setTimeout(typeWriter, 100);
    }
}




const welcome = "Welcome to Finance App!";
const typewriterElementWelcome = document.getElementById('typewriter-text');
let index = 0;

function typeWriter() {
    if (index < welcome.length) {
        typewriterElementWelcome.innerHTML += welcome.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

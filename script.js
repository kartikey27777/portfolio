// Typewriter Effect for the Hero Section
const words = ["Full-Stack Developer", "Game Developer", "Tech Enthusiast"];
let i = 0;
let timer;
const typingText = document.querySelector('.typing-text');

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            typingText.innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000); // Wait before deleting
            return false;
        }
        timer = setTimeout(loopTyping, 100); // Typing speed
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            typingText.innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500); // Wait before typing next word
            return false;
        }
        timer = setTimeout(loopDeleting, 50); // Deleting speed
    };
    loopDeleting();
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
    typingEffect();
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

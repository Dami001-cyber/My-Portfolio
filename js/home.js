// Responsive Navbar Toggle
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarNav = document.querySelector(".navbar-nav");

navbarToggle.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
});

// Typewriter Effect
const typewriterElement = document.querySelector(".typewriter");
const typewriterTexts = [
    "A Passionate Web Developer.",
    "I Design Modern Websites.",
    "Let's Build Something Amazing Together!"
];
let currentTextIndex = 0;
let currentCharIndex = 0;

function typeText() {
    const currentText = typewriterTexts[currentTextIndex];
    typewriterElement.textContent = currentText.slice(0, currentCharIndex);

    if (currentCharIndex < currentText.length) {
        currentCharIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(() => {
            currentCharIndex = 0;
            currentTextIndex = (currentTextIndex + 1) % typewriterTexts.length;
            typeText();
        }, 2000);
    }
}

typeText();

const sequence = [];
const userSequence = [];
const colors = ["red", "yellow", "green", "purple"];
let level = 0;

function nextSequence() {
    level++;
    document.querySelector("h2").innerText = `Level ${level}`;
    const randomColor = colors[Math.floor(Math.random() * 4)];
    sequence.push(randomColor);

    // Flash the buttons in the sequence
    sequence.forEach((color, index) => {
        setTimeout(() => {
            const button = document.querySelector(`.${color}`);
            button.classList.add("flash");
            setTimeout(() => button.classList.remove("flash"), 300);
        }, 500 * index);
    });

    userSequence.length = 0; // Clear user sequence for the new level
}

function handleClick(event) {
    const clickedColor = event.target.classList[1]; // Get color from class
    userSequence.push(clickedColor);

    // Check user input
    const currentIndex = userSequence.length - 1;
    if (userSequence[currentIndex] !== sequence[currentIndex]) {
        document.querySelector("h2").innerText = "Game Over! Press Start to Retry.";
        sequence.length = 0;
        level = 0;
        return;
    }

    if (userSequence.length === sequence.length) {
        setTimeout(nextSequence, 1000);
    }
}

// Add event listeners to buttons
document.querySelectorAll(".item").forEach((button) => {
    button.addEventListener("click", handleClick);
});

// Start game
document.getElementById("start-button").addEventListener("click", () => {
    document.querySelector("h2").innerText = "The game will start soon";
    nextSequence();
});

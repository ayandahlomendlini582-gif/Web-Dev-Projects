const choices = ["rock", "paper", "scissors"];
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        userChoiceDisplay.textContent = `You chose: ${userChoice}`;
        playGame(userChoice);
    });
});

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
    
    determineWinner(userChoice, computerChoice);
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        winnerDisplay.textContent = "It's a draw!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        winnerDisplay.textContent = "You win!";
    } else {
        winnerDisplay.textContent = "You lose!";
    }
}

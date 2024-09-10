
/*  to get the computer's choice */
function getComputerChoice() {
    const pcChoice = ['Rock', 'Paper', 'Scissors'];
    return pcChoice[Math.floor(Math.random() * 3)];
}


/*  to get the user's choice */
function getHumanChoice() {
    const userChoice = window.prompt('Which one do you choose? Type "Rock", "Paper" or "Scissors".');
    return userChoice
}


/* Declare the players score variables */
let humanScore = 0
let computerScore = 0


/*  write the logic to play a single round*/
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    console.log(`You chose ${humanChoice}.The computer chose ${computerChoice}.`)

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log("You win!"); humanScore++;
    }
    else {
        console.log("You lose!"); computerScore++;
    }

    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

}

/*  write the logic to play the entire game for 5 rounds*/
function playGame(number) {

    for (let i = 1; i <= number; i++) {
        console.log(`Round ${i}:`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if (humanScore < computerScore) {
        console.log("The computer won the game!");
    }
    else {
        console.log("The game ended in a tie!");
    }
}


playGame(5);
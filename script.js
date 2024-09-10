
/*  to get the computer's choice */
function getComputerChoice() {
    const pcChoice = ['Rock', 'Paper', 'Scissors'];
    return pcChoice[Math.floor(Math.random() * 3)];
}

console.log(`The computer chose ${getComputerChoice()}.`);


/*  to get the user's choice */
function getHumanChoice() {1
    return window.prompt('Which one do you choose? Type "Rock", "Paper" or "Scissors".');
}


console.log(`You chose ${getHumanChoice()}.`);


/* Declare the players score variables */
let humanScore = 0
let computerScore = 0


/*  write the logic to play a single round*/
function playRound(humanChoice,computerChoice){
   /*  humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase(); */

if (humanChoice === computerChoice) {
    console.log("It's a draw!"); }
else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock')|| 
    (humanChoice === 'scissors' && computerChoice === 'paper'))
    {
        console.log('You win!');humanScore++;}
else{console.log('You lose!');computerScore++;
}
console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

}

const humanSelection = getHumanChoice().toLowerCase;
const computerSelection = getComputerChoice().toLocaleLowerCase;


/*  write the logic to play the entire game for 5 rounds*/
function playGame(number){

    for (let i = 1; i <= number; i++){

        getComputerChoice();
        console.log(`The computer chose ${getComputerChoice()}.`);
        getHumanChoice();
        const userChoice = getHumanChoice();  
        console.log(`You chose ${userChoice}.`);
        playRound(humanSelection,computerSelection);
    }
} 


playGame(5);
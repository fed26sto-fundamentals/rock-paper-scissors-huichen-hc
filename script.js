
/*  to get the computer's choice */
function getComputerChoice() {
    const pcChoice = ['Rock', 'Paper', 'Scissors'];
    return pcChoice[Math.floor(Math.random() * 3)];
}

console.log(`The computer chose ${getComputerChoice()}.`);

/*  to get the user's choice */
function getHumanChoice() {
    userChoice = window.prompt('Which one do you choose? Type "Rock", "Paper" or "Scissors".');
    return userChoice
}
console.log(`You chose ${getHumanChoice()}.`); /* 为什么一旦加了这句，窗口就弹出两次，但user choice还是以第一次的输入为准 */
/* console.log(getHumanChoice()); */


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

playRound(humanSelection, computerSelection);


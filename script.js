let humanScore = 0;
let computerScore = 0;

function playGame(){

    function getComputerChoice(){
        let choice = Math.random();
        if (choice >= 0 && choice < 1/3) return "rock";
        else if (choice >= 1/3 && choice < 2/3) return "paper";
        else return "scissors";
    }
    
    
    function getHumanChoice(){
       let humanChoice = prompt("Enter your choice >.< ").toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") return humanChoice;
        else alert("enter a valid choice between rock, paper or scissors");
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice){
        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return "You win! Rock beats scissors.";
        }
       else if (humanChoice === "paper" && computerChoice === "scissors"){
            computerScore++;
            return "You lose! Scissors beat paper.";
        }
       else if (humanChoice === "scissors" && computerChoice === "paper"){
            humanScore++;
            return "You win! Scissors beat paper.";
        }
       else if (humanChoice === "paper" && computerChoice === "rock"){
            humanScore++;
            return "You win! Paper beats rock.";
        }
       else  if (humanChoice === "rock" && computerChoice === "paper"){
            computerScore++;
            return "You lose! Paper beats rock";
        }
       else if (humanChoice === "rock" && computerChoice === "scissors"){
            humanScore++;
            return "You win! Rock beats scissors.";
        }
        else return "draw!";
        
    }
    return playRound(humanSelection, computerSelection);
}


for(let i=0; i<5; i++){
console.log(playGame());
}

console.log("Score: You - Opp");
console.log(humanScore, " - ",computerScore);
if (humanScore>computerScore) console.log("The final victory is yours!");
else if (humanScore<computerScore) console.log("Better luck next time!");
else console.log("Finally its a draw!");

function refreshPage() {
    location.reload();
}
let humanScore = 0, computerScore = 0;
const btnRock = document.querySelector("button#rock");
const btnPaper = document.querySelector("button#paper");
const btnScissors = document.querySelector("button#scissors");

function getComputerChoice(){
    let CC = Math.floor(Math.random() * 3);
    let ComChoice;
    switch (CC){
        case 0:
            ComChoice = "Rock";
            break;
        case 1:
            ComChoice = "Paper";
            break;
        case 2:
            ComChoice = "Scissors";
            break;
        default: 
            ComChoice = "none"
            break;
    }
    return ComChoice;    
}

function playRound (humanC, ComputerC){       
    switch (humanC.toLowerCase()){
        case "paper":
            if (ComputerC == 'Rock'){
                console.log("You Win! Paper beats Rock.");
                humanScore++;
            }else if (ComputerC == 'Paper'){
                console.log("It's a Tie! Both players choosed Paper.");
            }else{
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
            }
        break;
        case "scissors":
            if (ComputerC == "Paper"){
                console.log("You Win! Scissors beats Paper.");
                humanScore++
            }else if (ComputerC == "Scissors"){
                console.log("It's a Tie! Both players choosed Scissors.");
            }else{
                console.log("You lose! Rock beats Paper.");
                computerScore++;
            }
        break;
        case "rock":
            if (ComputerC == "Scissors"){
                console.log("You Win! Rock beats Scissors.");
                humanC++;
            }else if (ComputerC == "Rock"){
                console.log("It's a Tie! Both players choosed Rock.");
            }else{
                console.log("You lose! Paper beats Rock.");
                computerScore++;
            }
        break;  
        default:
            console.log("Either you misspelled the word or your choose wasn't an option. Round skipped.")                        
            break;                      
    }
}

function playGame (humanC){   
    const computerSelection = getComputerChoice();
    const humanSelection = humanC
    playRound(humanSelection, computerSelection);
}



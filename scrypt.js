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

function getHumanChoice(){
    let HC = prompt ("Choose between Rock, Paper and Scissors:")
    return HC;
}

let humanScore = 0, computerScore = 0;

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

function playGame (){    
    for (var index = 0; index < 5; index++) {        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)            
    }    
    if (humanScore > computerScore){
        return "Congratulations! You Won."
    }else{
        return "Unfontunately, You Lost."
    }
}
console.log(playGame());
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


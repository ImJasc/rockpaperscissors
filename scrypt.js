let humanScore = 0, computerScore = 0;
const btnRock = document.querySelector("button#rock");
const btnPaper = document.querySelector("button#paper");
const btnScissors = document.querySelector("button#scissors");
const btnStart = document.querySelector("button#start");
const playScore = document.querySelector("p#playScore");
const comScore = document.querySelector("p#comScore");
const btnContainer = document.querySelector("div#btnContainer");
const scoreContainer = document.querySelector("div#scoreContainer");
const divText = document.querySelector("div#text");

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
    switch (humanC){
        case "paper":
            if (ComputerC == 'Rock'){
                divText.textContent = "You Win! Paper beats Rock.";
                humanScore++;
                playScore.textContent = humanScore;
                if (humanScore === 5) {
                    playAgain();
                }else{
                    playGame();
                }                
            }else if (ComputerC == 'Paper'){
                divText.textContent = "It's a Tie! Both players choosed Paper.";
            }else{
                divText.textContent = "You lose! Scissors beats Paper.";
                computerScore++;
                comScore.textContent = computerScore;
                if (computerScore === 5) {
                    playAgain();
                }else{
                    playGame();
                }              
            }
        break;
        case "scissors":
            if (ComputerC == "Paper"){
                divText.textContent = "You Win! Scissors beats Paper.";
                humanScore++;
                playScore.textContent = humanScore;
                if (humanScore === 5) {
                    playAgain();
                }else{
                    playGame();
                }              
            }else if (ComputerC == "Scissors"){
                divText.textContent = "It's a Tie! Both players choosed Scissors.";
            }else{
                divText.textContent = "You lose! Rock beats Paper.";
                computerScore++;
                comScore.textContent = computerScore;
                if (computerScore === 5) {
                    playAgain();
                }else{
                    playGame();
                }              
            }
        break;
        case "rock":
            if (ComputerC == "Scissors"){
                divText.textContent = "You Win! Rock beats Scissors.";
                humanScore++;
                playScore.textContent = humanScore;
                if (humanScore === 5) {
                    playAgain();
                }else{
                    playGame();
                }              
            }else if (ComputerC == "Rock"){
                divText.textContent = "It's a Tie! Both players choosed Rock.";
            }else{
                divText.textContent = "You lose! Paper beats Rock.";
                computerScore++;
                comScore.textContent = computerScore;
                if (computerScore === 5) {
                    playAgain();
                }else{
                    playGame();
                }              
            }
        break;                       
    }
}

function playGame (){       
    const computerSelection = getComputerChoice();    
    btnRock.onclick = function () {playRound("rock", computerSelection)};
    btnPaper.onclick = function () {playRound("paper", computerSelection)};
    btnScissors.onclick = function () {playRound("scissors", computerSelection)};        
}

function makeVisibleTheInvisible(){
    humanScore = 0;
    computerScore = 0;
    comScore.textContent = computerScore;
    playScore.textContent = humanScore;
    btnContainer.style.display = "flex";
    scoreContainer.style.display = "flex";
    divText.textContent = "Choose: Rock, Paper or Scissors?";
    btnStart.style.display = "none"; 
    playGame() 
}



btnStart.onclick = function(){makeVisibleTheInvisible()};




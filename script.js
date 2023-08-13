
function getComputerChoice() {
    let random = ["Rock", "Paper", "Scissors"];
    return random[Math.floor(Math.random()* random.length)];
}


function game(){ 
    let playerScore = 1;
    let computerScore = 1;
    let draw = 1;

    for (let oneRound = 0; oneRound < 5; oneRound++) {
    

    function oneRound(playerSelection, ComputerSelection) {
        if (playerSelection == "Rock" && ComputerSelection == "Scissors") {
            return "You win" + " " +
            playerScore++;
        } else if (playerSelection == "Scissors" && ComputerSelection == "Paper") {
            return "You win" + " " +
            playerScore++;
        } else if (playerSelection == "Paper" && ComputerSelection == "Rock") {
            return "You win" + " " +
            playerScore++;
        } else if (playerSelection == "Rock" && ComputerSelection == "Paper") {
            return "You lose" + " " +
            computerScore++;
        } else if (playerSelection == "Scissors" && ComputerSelection == "Rock") {
            return "You lose" + " " +
            computerScore++;
        } else if (playerSelection == "Paper" && ComputerSelection == "Scissors") {
            return "You lose" + " " +
            computerScore++;
        } else {
            return "Draw" + " " +
            draw ++;
        }
        
    }

    function formatString(str) {
        return str
        .replace(/(\B)[^ ]*/g, match => (match.toLowerCase()))
        .replace(/^[^ ]/g, match => (match.toUpperCase()));
    }
    

    let playerSelection = formatString(prompt("Choose your selection"));
    let ComputerSelection = getComputerChoice();
    console.log(oneRound(playerSelection, ComputerSelection));

    }

    if (playerScore > computerScore && playerScore > draw) {
        return "You won the game"
    } else if (playerScore < computerScore && draw < computerScore) {
        return "You lost the game"
    } else {
        return "You draw with the computer"
    }
}


console.log(game());




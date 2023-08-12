
function getComputerChoice() {
    let random = ["Rock", "Paper", "Scissors"];
    return random[Math.floor(Math.random()* random.length)];
}


function game(){ 
    for (let oneRound = 0; oneRound < 5; oneRound++) {

    function oneRound(playerSelection, ComputerSelection) {
        if (playerSelection == "Rock" && ComputerSelection == "Scissors") {
            return "You win";
        } else if (playerSelection == "Scissors" && ComputerSelection == "Paper") {
            return "You win";
        } else if (playerSelection == "Paper" && ComputerSelection == "Rock") {
            return "You win";
        } else if (playerSelection == "Rock" && ComputerSelection == "Paper") {
            return "You lose";
        } else if (playerSelection == "Scissors" && ComputerSelection == "Rock") {
            return "You lose";
        } else if (playerSelection == "Paper" && ComputerSelection == "Scissors") {
            return "You lose";
        } else {
            return "Draw"
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

}


console.log(game());




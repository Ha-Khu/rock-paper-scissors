

function getComputerChoice() {
    let random = ["Rock", "Paper", "Scissors"];
    return random[Math.floor(Math.random()* random.length)];
}

console.log(getComputerChoice());



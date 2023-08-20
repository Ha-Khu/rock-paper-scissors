
function getComputerChoice() {
    let random = ["Rock", "Paper", "Scissors"];
    return random[Math.floor(Math.random()* random.length)];
}
    

const player_score_DOM = document.getElementById("player-score");
const pc_score_DOM = document.getElementById("pc-score");
const reset_game_DOM = document.getElementById("reset-game");
const game_status_DOM = document.getElementById("game-status");
const round_status_DOM = document.getElementById("round-status");
const rock_DOM = document.getElementById("rock");
const paper_DOM = document.getElementById("paper");
const scissors_DOM = document.getElementById("scissors");

PlayerScore = 0
ComputerScore = 0 


    function game(PlayerSelection) {
        let ComputerSelection = getComputerChoice();
        if (PlayerSelection == "Rock" && ComputerSelection == "Paper") {
            lose(ComputerScore += 1) 
        } else if (PlayerSelection == "Rock" && ComputerSelection == "Scissors") {
            win(PlayerScore += 1)
        } else if (PlayerSelection == "Paper" && ComputerSelection == "Rock") {
            win()
        } else if (PlayerSelection == "Paper" && ComputerSelection == "Scissors") {
            lose()
        } else if (PlayerSelection == "Scissors" && ComputerSelection == "Rock") {
            lose()
        } else if (PlayerSelection == "Scissors" && ComputerSelection == "Paper") {
            win()
        } else {
            draw()
        }
        
    } 



    function win() {
        player_score_DOM.innerHTML = PlayerScore
        round_status_DOM.innerHTML = "You won against computer this round"
    }

    function lose() {
        pc_score_DOM.innerHTML = ComputerScore
        round_status_DOM.innerHTML = "You lost against computer this round"
    }

    function draw() {
        round_status_DOM.innerHTML = "You draw with the computer this round"
    }

    function choosing() {
        rock_DOM.addEventListener("click",  function() {
            game("Rock")
        })
    
        paper_DOM.addEventListener("click", function() {
            game("Paper")
        })
    
        scissors_DOM.addEventListener("click", function() {
            game("Scissors")
        })
    }
    
choosing()







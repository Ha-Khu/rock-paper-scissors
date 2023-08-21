
function getComputerChoice() {
    let random = ["Rock", "Paper", "Scissors"];
    return random[Math.floor(Math.random()* random.length)];
}
    

const player_score_DOM = document.getElementById("player-score");
const pc_score_DOM = document.getElementById("pc-score");
const reset_game_DOM = document.getElementById("reset-game");
const round_status_DOM = document.getElementById("round-status");
const rock_DOM = document.getElementById("rock");
const paper_DOM = document.getElementById("paper");
const scissors_DOM = document.getElementById("scissors");

PlayerScore = 0
ComputerScore = 0 

function resetGame() {
    player_score_DOM.textContent = "0"
    pc_score_DOM.textContent = "0"
    round_status_DOM.textContent = ""
    PlayerScore = 0
    ComputerScore = 0
    document.getElementById("rock").disabled = false
    document.getElementById("paper").disabled = false
    document.getElementById("scissors").disabled = false
}

reset_game_DOM.addEventListener("click", function() {
    resetGame()
})



    function game(PlayerSelection) {
        let ComputerSelection = getComputerChoice();
        if (PlayerSelection == "Rock" && ComputerSelection == "Paper") {
            lose(PlayerSelection,ComputerSelection) 
        } else if (PlayerSelection == "Rock" && ComputerSelection == "Scissors") {
            win(PlayerSelection,ComputerSelection)
        } else if (PlayerSelection == "Paper" && ComputerSelection == "Rock") {
            win(PlayerSelection,ComputerSelection)
        } else if (PlayerSelection == "Paper" && ComputerSelection == "Scissors") {
            lose(PlayerSelection,ComputerSelection)
        } else if (PlayerSelection == "Scissors" && ComputerSelection == "Rock") {
            lose(PlayerSelection,ComputerSelection)
        } else if (PlayerSelection == "Scissors" && ComputerSelection == "Paper") {
            win(PlayerSelection,ComputerSelection)
        } else {
            draw()
        }

       
        
    } 


    function win(PlayerSelection,ComputerSelection) {
        PlayerScore++
        player_score_DOM.textContent = PlayerScore
        round_status_DOM.textContent = PlayerSelection + " beats " + ComputerSelection + ", you won this round"
        getWinner(PlayerScore, ComputerScore) 
    }

    function lose(PlayerSelection,ComputerSelection) {
        ComputerScore++
        pc_score_DOM.textContent = ComputerScore
        round_status_DOM.textContent = ComputerSelection + " beats " + PlayerSelection + ", you lost this round"
        getWinner(PlayerScore, ComputerScore)
    }

    function draw() {
        round_status_DOM.textContent = "It's a draw"
    }

    function getWinner(PlayerScore, ComputerScore) {
        if (PlayerScore === 5) {
            round_status_DOM.textContent = "WINNER WINNER CHICKEN DINNER"
            document.getElementById("rock").disabled = true
            document.getElementById("paper").disabled = true
            document.getElementById("scissors").disabled = true
            

        } if (ComputerScore === 5) {
            round_status_DOM.textContent = "YOU LOST, GOOD LUCK NEXT TIME I GUESS"
            document.getElementById("rock").disabled = true
            document.getElementById("paper").disabled = true
            document.getElementById("scissors").disabled = true
            
        }
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


   







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
    player_score_DOM.innerHTML = "0"
    pc_score_DOM.innerHTML = "0"
    round_status_DOM.innerHTML = ""
    PlayerScore = 0
    ComputerScore = 0
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
        player_score_DOM.innerHTML = PlayerScore
        round_status_DOM.innerHTML = PlayerSelection + " beats " + ComputerSelection + " you won this round"
        getWinner() 
    }

    function lose(PlayerSelection,ComputerSelection) {
        ComputerScore++
        pc_score_DOM.innerHTML = ComputerScore
        round_status_DOM.innerHTML = ComputerSelection + " beats " + PlayerSelection + " you lost this round"
        getWinner()
    }

    function draw() {
        round_status_DOM.innerHTML = "You draw with the computer this round"
    }

    function getWinner() {
        if (PlayerScore === 5) {
            round_status_DOM.textContent = "YEY YOU WON THE WHOLE GAME"
            PlayerScore = PlayerScore 
        } else if (ComputerScore === 5) {
            round_status_DOM.textContent = "OUU YOU LOST THE GAME"
            
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


   






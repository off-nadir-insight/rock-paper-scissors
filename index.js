const arr = ['rock', 'paper', 'scissors'];
let playerWins = "0";
let computerWins = "0";
// let gameRound = 0;

const btnRock = document.getElementById("btn--rock")
const btnPaper = document.getElementById("btn--paper")
const btnScissors = document.getElementById("btn--scissors")
const buttons = document.querySelectorAll("button")
const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore")
const turnDisplay = document.querySelector('#turnDisplay')
const modal = document.querySelector("#simpleModal")
const gameOverText = document.querySelector("#gameOverText")
const modalContent = document.querySelector(".modal-content")
const closeText = document.querySelector("#closeText")

function updateDisplay() {
  playerScore.textContent = playerWins
  computerScore.textContent = computerWins
}

function endGameAnnounce() {
  if (playerWins > computerWins) {
    modal.style.display = "block"
    gameOverText.textContent = 'player wins!'
  } else if (computerWins > playerWins) {
    modal.style.display = "block"
    gameOverText.textContent = 'computer wins!'
  }
  window.addEventListener('click', clickOutsideModal)
}

function resetGame() {
  modal.style.display = "none"
  playerWins = "0"
  computerWins = "0"
  updateDisplay()
}

function clickOutsideModal(e) {
  if (e.target === modal || e.target === closeText) {
    resetGame()
  }
}

function checkGameOver() {
  if (playerWins >= 5 || computerWins >= 5) {
    endGameAnnounce()
  }
}

function runTurn(event) {
  const computerSelection = computerPlay()
  const playerSelection = event.target.dataset.value
  singleRoundRPS(playerSelection, computerSelection)
  updateDisplay()
  checkGameOver()
}

/* set up buttons to progress game */
buttons.forEach(btn => {
  btn.addEventListener("click", runTurn)
})

/*
    =========================================
    computer's move
*/

// return random element from array 'arr'
function computerPlay() {
    const ele = getRandomInt(arr.length);
    return arr[ele];
}

// return random positive integer up to max, exclusive
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*
    =========================================
    player's move
*/

// prompt & return player's move in lowercase format
// function askPlayer() {
//     let play = prompt('Rock, Paper, or Scissors?')
//     play = play.toLowerCase();
//     if (play === "rock" || play === "paper" || play === "scissors") {
//         return play;
//     } else {
//         console.error("invalid selection");
//         computerWins++;
//     }
// }

/*
    =========================================
    organized possible outcome messaging into object
*/

const outcomeMsg = {
    rockWin: "You win! Rock beats scissors",
    rockLose: "You lose! Paper beats rock",
    paperWin: "You win! Paper beats rock",
    paperLose: "You lose! Scissors beats paper",
    scissorsWin: "You win! Scissors beats paper",
    scissorsLose: "You lose! Rock beats scissors",
    tie: "It's a tie!"
}

/*
    =========================================
    single game
*/

function updateTurnDisplay(player, computer, turnMesg) {
  turnDisplay.textContent = `You chose ${player}, the computer chose ${computer} -- ${turnMesg}`
}

function singleRoundRPS(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
        // console.log (outcomeMsg.rockWin);
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.rockWin)
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++;
        // console.log (outcomeMsg.rockLose);
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.rockLose);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        // console.log (outcomeMsg.paperWin);
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.paperWin);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins++;
        // console.log (outcomeMsg.paperLose);
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.paperLose);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins++;
        // console.log (outcomeMsg.scissorsLose);
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.scissorsLose);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        // console.log (outcomeMsg.scissorsWin);
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.scissorsWin);
    } else if (playerSelection === computerSelection) {
        // console.log (outcomeMsg.tie);
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.tie);
    } 
    else {
        // console.log (`player: ${playerSelection} comp: ${computerSelection}`);
    }
}


/* 
    =========================================
    expand to 5 round game
*/ 

// function play5Rounds() {
    
//     for (gameRound; gameRound < 5; gameRound++) {
//         const playerSelection = askPlayer();
//         const computerSelection = computerPlay();
//         singleRoundRPS(playerSelection, computerSelection);
//         console.log(`Player wins: ${playerWins} || Computer wins: ${computerWins}`);
//     }

//     let finalOutcome = playerWins > computerWins ? "player wins" :
//         playerWins < computerWins ? "computer wins" :
//         "guess it's a tie";  

//     console.log(`Final score: ${finalOutcome}`);
// }

// play5Rounds();
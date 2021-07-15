/* game settings */
const arr = ['rock', 'paper', 'scissors'];
let playerWins = "0";
let computerWins = "0";
const victoryCondition = 5;

/* DOM variables */
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
  turnDisplay.textContent = "---"
  updateDisplay()
}

function clickOutsideModal(e) {
  if (e.target === modal || e.target === closeText) {
    resetGame()
    window.removeEventListener('click', clickOutsideModal)
  }
}

function checkGameOver() {
  if (playerWins >= victoryCondition || computerWins >= victoryCondition) {
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

/*    computer's move     */

// return random element from array 'arr'
function computerPlay() {
    const ele = getRandomInt(arr.length);
    return arr[ele];
}

// return random positive integer up to max, exclusive
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*    organized possible outcome messaging into object     */

const outcomeMsg = {
    rockWin: "You win! Rock beats scissors",
    rockLose: "You lose! Paper beats rock",
    paperWin: "You win! Paper beats rock",
    paperLose: "You lose! Scissors beats paper",
    scissorsWin: "You win! Scissors beats paper",
    scissorsLose: "You lose! Rock beats scissors",
    tie: "It's a tie!"
}

function updateTurnDisplay(player, computer, turnMesg) {
  turnDisplay.textContent = `You chose ${player}, the computer chose ${computer} -- ${turnMesg}`
}

function singleRoundRPS(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.rockWin)
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++;
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.rockLose);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.paperWin);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins++;
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.paperLose);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins++;
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.scissorsLose);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.scissorsWin);
    } else if (playerSelection === computerSelection) {
        updateTurnDisplay(playerSelection, computerSelection, outcomeMsg.tie);
    } 
    else {
      console.log('unexpected outcome')
    }
}

/* set up buttons to progress game */
buttons.forEach(btn => {
  btn.addEventListener("click", runTurn)
})
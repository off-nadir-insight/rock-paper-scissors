const arr = ['rock', 'paper', 'scissors'];

// return random element from array 'arr'
function computerPlay() {
    const ele = getRandomInt(arr.length);
    return arr[ele];
}

// return random positive integer up to max, exclusive
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const errorMsg = [
    "You win! Rock beats scissors",
    "You win! Scissors beats paper",
    "You win! Paper beats rock",
    "You lose! Rock beats scissors",
    "You lose! Scissors beats paper",
    "You lose! Paper beats rock",
    "It's a tie!"
]

// attempt to refactor into reference object
const outcomeMsg = {
    rockWin: "You win! Rock beats scissors",
    rockLose: "You lose! Paper beats rock",
    paperWin: "You win! Paper beats rock",
    paperLose: "You lose! Scissors beats paper",
    scissorsWin: "You win! Scissors beats paper",
    scissorsLose: "You lose! Rock beats scissors",
    tie: "It's a tie!"
}

function singleRoundRPS(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        alert(outcomeMsg.rockWin);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert(outcomeMsg.rockLose);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert(outcomeMsg.paperWin);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert(outcomeMsg.paperLose);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert(outcomeMsg.scissorsLose);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert(outcomeMsg.scissorsWin);
    } else if (playerSelection === computerSelection) {
        alert(outcomeMsg.tie);
    } 
    else {
        alert(`player: ${playerSelection} comp: ${computerSelection}`);
    }
}

// prompt & return player's move in lowercase format
function askPlayer() {
    let play = prompt('Rock, Paper, or Scissors?')
    play = play.toLowerCase();
    if (play === "rock" || play === "paper" || play === "scissors") {
        return play;
    } else {
        console.error("invalid selection");
    }
}

function getValidFmPlayer() {
    let reply = askPlayer();
    switch (reply) {
        case "rock":
        case "paper":
        case "scissors":
            return reply;
            break;
        default:
            return "invalid selection";
    }
}


singleRoundRPS(askPlayer(), "rock");

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
        return (outcomeMsg.rockWin);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return (outcomeMsg.rockLose);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return (outcomeMsg.paperWin);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return (outcomeMsg.paperLose);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return (outcomeMsg.scissorsLose);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return (outcomeMsg.scissorsWin);
    } else if (playerSelection === computerSelection) {
        return (outcomeMsg.tie);
    } 
    else {
        return (`player: ${playerSelection} comp: ${computerSelection}`);
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

const playerSelection = askPlayer();
const computerSelection = computerPlay();
console.log(singleRoundRPS(playerSelection, computerSelection));

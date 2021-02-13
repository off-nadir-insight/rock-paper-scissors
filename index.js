const arr = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;
let gameRound = 0;

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
function askPlayer() {
    let play = prompt('Rock, Paper, or Scissors?')
    play = play.toLowerCase();
    if (play === "rock" || play === "paper" || play === "scissors") {
        return play;
    } else {
        console.error("invalid selection");
        computerWins++;
    }
}

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

function singleRoundRPS(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
        console.log (outcomeMsg.rockWin);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++;
        console.log (outcomeMsg.rockLose);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        console.log (outcomeMsg.paperWin);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins++;
        console.log (outcomeMsg.paperLose);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins++;
        console.log (outcomeMsg.scissorsLose);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        console.log (outcomeMsg.scissorsWin);
    } else if (playerSelection === computerSelection) {
        console.log (outcomeMsg.tie);
    } 
    else {
        console.log (`player: ${playerSelection} comp: ${computerSelection}`);
    }
}


/* 
    =========================================
    expand to 5 round game
*/ 

function play5Rounds() {
    
    for (gameRound; gameRound < 5; gameRound++) {
        const playerSelection = askPlayer();
        const computerSelection = computerPlay();
        singleRoundRPS(playerSelection, computerSelection);
        console.log(`Player wins: ${playerWins} || Computer wins: ${computerWins}`);
    }

    let finalOutcome = playerWins > computerWins ? "player wins" :
        playerWins < computerWins ? "computer wins" :
        "guess it's a tie";  

    console.log(`Final score: ${finalOutcome}`);
}

play5Rounds();
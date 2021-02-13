
/*
COMPLETE

// randomly return 'rock', 'paper', 'scissors'
    // randomly pick from array: ['rock', 'paper', 'scissors']
        // random number between 0-2 and return that element of the array

*/
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

// print area for display:
// console.log(computerPlay(arr));

/*
FOCUS:
// play a round of rock paper scissors
    // x ask user "provide your move" and store the answer in "playerSelection"
        // x make case insensitive (rock, ROCK, rOcK, etc)
        // return error message if not valid selection
            // 
    // x generate computer play as "computerSelection"
    // compare playerSelection to computerSelection to determine winner
        // x win/lose scenarios
        // x tie
        // invalid
    // x return the outcome
*/

const errorMsg = [
    "You win! Rock beats scissors",
    "You win! Scissors beats paper",
    "You win! Paper beats rock",
    "You lose! Rock beats scissors",
    "You lose! Scissors beats paper",
    "You lose! Paper beats rock",
    "It's a tie!"
]

function singleRoundRPS(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        alert(errorMsg[0])
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert(errorMsg[5])
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert(errorMsg[2]);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert(errorMsg[4]);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert(errorMsg[3]);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert(errorMsg[1]);
    } else if (playerSelection === computerSelection) {
        alert(errorMsg[6]);
    } 
    else {
        alert(`player: ${playerSelection} comp: ${computerSelection}`)
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


singleRoundRPS(askPlayer(), computerPlay());

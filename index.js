
/*
COMPLETE

// randomly return 'rock', 'paper', 'scissors'
    // randomly pick from array: ['rock', 'paper', 'scissors']
        // random number between 0-2 and return that element of the array

*/
const arr = ['rock', 'paper', 'scissors'];

// return random element from array 'arr'
function computerPlay(arr) {
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
    // ask user "provide your move" and store the answer in "playerSelection"
        // x make case insensitive (rock, ROCK, rOcK, etc)
        // return error message if not valid selection
    // generate computer play as "computerSelection"
    // compare playerSelection to computerSelection to determine winner
    // return the outcome
*/

function singleRoundRPS(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! Rock beats scissors!")
    } else {
        alert(`player: ${playerSelection} comp: ${computerSelection}`)
    }
}

// prompt & return player's move in lowercase format
function askPlayer() {
    let play = prompt('Rock, Paper, or Scissors?')
    return play.toLowerCase();
}


singleRoundRPS(askPlayer(), "scissors");

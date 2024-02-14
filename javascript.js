
function getComputerChoice() {
    const computerAnswer = Math.floor(Math.random()*3)
    if (computerAnswer == 0) {
        return 'Rock'
    }
    else if (computerAnswer ==1) {
        return 'Paper'
    }
    else if (computerAnswer == 2) {
        return 'Scissors'
    }
}

// function testStats() {
//     let stats = []
//     for (let i=1; i<10000; i+=1) {
//         stats.push(getComputerChoice())
//     }
//     let counterRock = 0
//     let counterPaper = 0
//     let counterScissors = 0
//     for (let j=0; j<stats.length; j+=1) {
//         if (stats[j] == 'Rock') {
//             counterRock += 1
//         }
//         else if (stats[j] == 'Paper') {
//             counterPaper += 1
//         }
//         else if (stats[j] == 'Scissors') {
//             counterScissors += 1
//         }
//     }
//     return [counterRock, counterPaper, counterScissors]
// }

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection == computerSelection) {
        return `Tie: ${playerSelection} equals ${computerSelection}`
    }
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'paper') {
                return `You lose: ${playerSelection} loses against ${computerSelection}`
            }
            if (computerSelection == 'scissors') {
                return `You win: ${playerSelection} beats ${computerSelection}`
            }
            break
        case 'paper':
            if (computerSelection == 'scissors') {
                return `You lose: ${playerSelection} loses against ${computerSelection}`
            }
            if (computerSelection == 'rock') {
                return `You win: ${playerSelection} beats ${computerSelection}`
            }
            break
        case 'scissors':
            if (computerSelection == 'rock') {
                return `You lose: ${playerSelection} loses against ${computerSelection}`
            }
            if (computerSelection == 'paper') {
                return `You win: ${playerSelection} beats ${computerSelection}`
            }
            break
        default:
            return "Bad value entered"
    }   
}


const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
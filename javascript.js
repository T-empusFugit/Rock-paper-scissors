
function getComputerChoice() {
    const computerAnswer = Math.floor(Math.random()*3);
    if (computerAnswer == 0) {
        return 'Rock';
    }
    else if (computerAnswer ==1) {
        return 'Paper';
    }
    else if (computerAnswer == 2) {
        return 'Scissors';
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
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "Tie"
    }
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'paper') {
                return "Lose"
            }
            if (computerSelection == 'scissors') {
                return "Win"
            }
            break;
        case 'paper':
            if (computerSelection == 'scissors') {
                return "Lose"
            }
            if (computerSelection == 'rock') {
                return "Win"
            }
            break;
        case 'scissors':
            if (computerSelection == 'rock') {
                return "Lose"
            }
            if (computerSelection == 'paper') {
                return "Win"
            }
            break;
        default:
            return "Bad value entered";
    }   
}

function playGame(numRound) {
    let playerSelection = ""
    let computerSelection = ""

    let counterPlayer = 0
    let counterComputer = 0
    for (let i=1; i<=numRound; i+=1) {
        playerSelection = String(prompt("Choose between Paper, Rock and Scissors"))
        computerSelection = computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection)
        // console.log(result)
        // console.log(counterPlayer)
        // console.log(counterComputer)
        // console.log(result == [0, 0])
        if (result=="Tie") {
            console.log(`Tie: ${playerSelection} equals ${computerSelection}`)
        }
        else if (result=="Win") {
            console.log(`You win: ${playerSelection} beats ${computerSelection}`)
            console.log(`Score: ${++counterPlayer} - ${counterComputer}`)
        }
        else if (result=="Lose") {
            console.log(`You lose: ${playerSelection} loses against ${computerSelection}`)
            console.log(`Score: ${counterPlayer} - ${++counterComputer}`)
        }

        // else if (counterPlayer == 5 || counterComputer == 5) {
        //     console.log("End of game")
        // }
    console.log("End of game")
    }
}


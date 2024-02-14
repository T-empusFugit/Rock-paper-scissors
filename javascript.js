
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


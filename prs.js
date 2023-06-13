function getComputerChoice(){
    var choiceArr = ["Rock", "Paper", "Scissor"]

    var randomChoice = Math.floor(Math.random()*choiceArr.length);

    return choiceArr[randomChoice];
}

function startGame(playerChoice, computerChoice){
/** Converts choice into numbers from 3-5, where (a) will always equal the greater value. 
 * If the result of (a mod b) = 1 - b will lose. 
 * If the result of (a mod b) = 2 - a will lose. 
 * If the result of (a mod b) = 0 - game equals a tie.
 * For info values, 1 equals "Player", 0 equals "Computer"
 * Results Key: 0 = Draw , 1 = lose, 2 = win.
 */

    var gameArr = ["PAPER","SCISSORS","ROCK"];

    playerChoice = playerChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    var a = (gameArr.indexOf(playerChoice)) + 3;
    var b = (gameArr.indexOf(computerChoice)) + 3;
    var aInfo = 1;
    var bInfo = 0;
    var result = 1;

    if (a === -1){
        return "Sorry, not a correct value. Please select Paper, Scissors, Rock.";
    }

    if (a < b){
        [a,b] = [b,a];
        [aInfo,bInfo] = [bInfo,aInfo];
    }


    if (a % b === 1){
        if (aInfo === 1){
            result = 2;
        }

    }
    else if (a % b === 2){
        if (aInfo === 0){
            result = 2;
        }
    }
    else if (a % b === 0 ){
        result = 0
    }

    if (result === 0) {
        return "It's a Draw! " + playerChoice + " cancels out " + computerChoice + ".";
    }
    else if (result === 1){
        return "You Lose! " + computerChoice + " beats " + playerChoice + ".";
    }
    else if (result === 2){
        return "You Win! " + playerChoice + " beats " + computerChoice + ".";
    }
}

function game(){

    let pv = document.getElementById("player-choice").value;
    let cv = getComputerChoice();

    let result = startGame(pv, cv);

    document.getElementById("result").innerHTML = result
}
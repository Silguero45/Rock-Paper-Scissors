function getComputerChoice(){
    var choiceArr = ["Rock", "Paper", "Scissors"]

    var randomChoice = Math.floor(Math.random()*choiceArr.length);

    return choiceArr[randomChoice].toUpperCase();
}

function getPlayerChoice(){
    let pv = prompt("Please choose Paper, Scissors, or Rock.", "Paper");
    return pv.toUpperCase();
}

function playRound(playerChoice, computerChoice){
/** Converts choice into numbers from 3-5, where (a) will always equal the greater value. 
 * If the result of (a mod b) = 1 - b will lose. 
 * If the result of (a mod b) = 2 - a will lose. 
 * If the result of (a mod b) = 0 - game equals a tie.
 * For info values, 1 equals "Player", 0 equals "Computer"
 * Results Key: 0 = Draw , 1 = lose, 2 = win.
 */

    let gameArr = ["PAPER","SCISSORS","ROCK"];

    let a = (gameArr.indexOf(playerChoice)) + 3;
    let b = (gameArr.indexOf(computerChoice)) + 3;
    let aInfo = 1;
    let bInfo = 0;
    let result = 1;

    if (a === -1){
        return -1;
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

    return result;
    
}

function interface(round){

    let pv = getPlayerChoice();
    let cv = getComputerChoice();
    let count = round;

    let result = playRound(pv, cv);

    if (result === 0) {
        alert("Round - Draw!");
        document.getElementById("round"+round).innerText = "It's a Draw! " + pv + " cancels out " + cv + ".";
        
    }
    else if (result === 1){
        alert("Round - Lost")
        document.getElementById("round"+round).innerText = "You Lose! " + cv + " beats " + pv + ".";
    }
    else if (result === 2){
        alert("Round - Win!");
        document.getElementById("round"+round).innerText = "You Win! " + pv + " beats " + cv + ".";
        count++;
    }
    else if (result === -1){
        document.getElementById("round"+round).innerText = "Sorry, not a correct value. Please select Paper, Scissors, Rock."
        interface(count);
    }

    return count;
}

function game(){

    var rounds = 5;
    var counter = 0;

    for(var i = 0; i < rounds; i++){
        counter = interface(i+1);
    }

    if (counter >= 3){
        document.getElementById("final-result").innerText = "You Win the game!"
    }
    else if(counter < 3 && counter > 0){
        document.getElementById("final-result").innerText = "You lose the game!"
    }
    else if(counter === 0){
        document.getElementById("final-result").innerText = "The game is a draw!"
    }
}
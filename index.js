var scoreP1 = 0;
var scoreP2 = 0;

function roll(){
    var p1Dice = Math.floor(Math.random()*6)+1;
    var p2Dice = Math.floor(Math.random()*6)+1;
     return [p1Dice,p2Dice]
}

function updateDiceImg(a,b){
p1Dice = a;
p2Dice = b;
document.querySelector(".img1").setAttribute("src","./des"+p1Dice+".png");
document.querySelector(".img2").setAttribute("src","./des"+p2Dice+".png");
}


function checkWinner(a,b){
    var winner = 0;
    p1Dice = a;
    p2Dice = b;
if (p1Dice>p2Dice){
    document.querySelector("h1").textContent = "🚩Player 1 WINS !";
    winner = 1;
}else if (p2Dice>p1Dice) {
    document.querySelector("h1").textContent = "Player 2 WINS !🚩";
    winner = 2;
}else{
    document.querySelector("h1").textContent = "It's a draw :/";
    winner = 0;
}

return winner
}

function updateScores(winner){
    
    if (winner === 1){
        scoreP1++;
    }else if(winner===2){
        scoreP2++;
    }else{
        
    }

    document.querySelector("#scorep1").innerHTML = scoreP1;
    document.querySelector("#scorep2").innerHTML = scoreP2;

}

function main(){
    var r = roll();
    updateDiceImg(r[0],r[1]);
    var game = checkWinner(r[0],r[1]);
    updateScores(game);
}
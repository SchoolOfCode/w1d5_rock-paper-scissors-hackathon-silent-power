//to write a set of if statements that will determine 
//the winner of rock, paper, scissors
let playerMove = "paper";
let computerMove = "paper";
// rock paper paper win
// rock scissor rock win
// scissor paper scissor win
if (playerMove  ===  computerMove){
console.log("it's a draw");
} else if (playerMove  ===  "rock"){
    if (computerMove === "paper"){
    console.log("computerMove win");
    }
    else if (computerMove === "scissors"){
    console.log("playerMove win");
    }
    
}
else if (playerMove  ===  "paper"){
    if (computerMove === "scissors"){
    console.log("computerMove win");
    }
    else if (computerMove === "rock"){
    console.log("playerMove win");
    }
    
}
else if (playerMove  ===  "scissors"){
    if (computerMove === "rock"){
    console.log("computerMove win");
    }
    else if (computerMove === "paper"){
    console.log("playerMove win");
    }
    
}
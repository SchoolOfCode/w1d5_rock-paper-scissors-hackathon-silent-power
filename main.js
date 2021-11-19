
//The variables from before should now be taken in as parameters 
//so that you can call the function with any two moves.
//Instead of printing the result to the console, the function should return:
let wins = 0;
let losses = 0;
let draws = 0;







function getWinner(playerMove,computerMove) {

//let playerMove = "paper";
//let computerMove = "paper";

if (playerMove  ===  computerMove){
//console.log("it's a draw");
draws ++;
return 0;
} else if (playerMove  ===  "rock"){
    if (computerMove === "paper"){
    //console.log("computerMove win");
    losses ++;
    return -1; 
    }
    else if (computerMove === "scissors"){
    //console.log("playerMove win");
    wins ++;
    return 1;
    }
    
}
else if (playerMove  ===  "paper"){
    if (computerMove === "scissors"){
   // console.log("computerMove win");
   losses ++;
   return -1;
    }
    else if (computerMove === "rock"){
    //console.log("playerMove win");
    wins ++;
    return 1;
    }
    
}
else if (playerMove  ===  "scissors"){
    if (computerMove === "rock"){
    //console.log("computerMove win");
    losses ++;
    return -1;
    }
    else if (computerMove === "paper"){
    //console.log("playerMove win");
    wins ++;
    return 1;
    }
    
}
}
let confirm = "yes";
let counts = 0;
while (confirm === "yes") {
let computerInput = ["rock","paper","scissors"];
let randomNumber = Math.floor((Math.random() * 3));

let playerInput = prompt("Enter your move.");
let result = getWinner(playerInput, computerInput[randomNumber]);
counts ++;
alert(`Result: ${result}, Counts: ${counts}, Wins: ${wins},
 Losses${losses}, Draws: ${draws}`);
confirm = prompt ("Would you like to play again? ");
}
// track how many games played
// track numbers of wins, losses, draws 
// display after each round

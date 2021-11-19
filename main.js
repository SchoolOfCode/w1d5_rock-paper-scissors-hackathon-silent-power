
//The variables from before should now be taken in as parameters 
//so that you can call the function with any two moves.
//Instead of printing the result to the console, the function should return:
function getWinner(playerMove,computerMove) {

//let playerMove = "paper";
//let computerMove = "paper";

if (playerMove  ===  computerMove){
//console.log("it's a draw");
return 0;
} else if (playerMove  ===  "rock"){
    if (computerMove === "paper"){
    //console.log("computerMove win");
    return -1;
    }
    else if (computerMove === "scissors"){
    //console.log("playerMove win");
    return 1;
    }
    
}
else if (playerMove  ===  "paper"){
    if (computerMove === "scissors"){
   // console.log("computerMove win");
   return -1;
    }
    else if (computerMove === "rock"){
    //console.log("playerMove win");
    return 1;
    }
    
}
else if (playerMove  ===  "scissors"){
    if (computerMove === "rock"){
    //console.log("computerMove win");
    return -1;
    }
    else if (computerMove === "paper"){
    //console.log("playerMove win");
    return 1;
    }
    
}
}

let computerInput = ["rock","paper","scissors"];
let randomNumber = Math.floor((Math.random() * 3));

let playerInput = prompt("Enter your move.");
let result = getWinner(playerInput, computerInput[randomNumber]);
alert(result);


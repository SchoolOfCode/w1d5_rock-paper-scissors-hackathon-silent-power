
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

let username = prompt("Please enter your username.");
while ( /^[A-Z]/.test(username) === false )
 {username = 
    prompt('Username must start with capital letter.')};

while (username.length > 10) {username = 
    prompt('Username must be less than ten characters.')};

//Game Start
while (confirm === "yes") {
let computerInput = ["rock","paper","scissors"];
let randomNumber = Math.floor((Math.random() * 3));

let playerInput = prompt(`Enter your move. ${username}`);

//100% Cheater
//if (playerInput === "rock"){
//    randomNumber = 1;
//} else if (playerInput === "paper"){
//    randomNumber = 2;
//    } else if (playerInput === "scissors"){
//        randomNumber = 0;
//        }
//Computer wins 50%
if (Math.random()*4 === 0){
    if (playerInput === "rock"){
        randomNumber = 1;
    } else if (playerInput === "paper"){
        randomNumber = 2;
        } else if (playerInput === "scissors"){
            randomNumber = 0;
            }
    };
//use Math.random() to pick 0 or 1
// If 0 cheat else choose wrong option
//Computer wins 25%
//use Math.random()*4 to pick 0 to 3
// if 0  cheat else play normally        
//End of cheating

let result = getWinner(playerInput, computerInput[randomNumber]);
counts ++;
alert(`Result: ${result}, Counts: ${counts}, Wins: ${wins},
 Losses${losses}, Draws: ${draws}, ${username} `);
confirm = prompt (`Would you like to play again? ${username}`);
}


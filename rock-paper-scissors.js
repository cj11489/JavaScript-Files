var userChoice = prompt("Do you choose rock, paper, scissors or water balloon?");

var computerChoice = Math.random();

if (computerChoice < 0.26) {
	computerChoice = "rock";
} 

else if(computerChoice <= 0.51) {
	computerChoice = "paper";
} 

else if (computerChoice <= 0.76) {
    computerChoice = "scissors";   
}

else {
	computerChoice = "water balloon";
} 

console.log("Computer: " + " " + computerChoice);

var compare = function (choice1, choice2) {

    if (choice1 === choice2){
        return "The result is a tie!"
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins!";   
        }
        else if (choice2 === "water balloon") {
            return "rock wins";   
        }
        else {
            return "paper wins";   
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        }
        else if (choice2 === "water balloon") {
            return "water balloon wins";   
        }
        else {
            return "scissors win";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        }
        else if (choice2 === "water balloon") {
            return "scissors wins";   
        }
        else {
            return "scissors win";   
        }
    }
    else if (choice1 === "water balloon") {
        if (choice2 === "rock") {
            return "rock wins"   
        }
        else if (choice2 === "paper") {
            respond === "water balloon wins"   
        }
        else {
           return "scissors win"
        }
    }
}

compare(userChoice, computerChoice)
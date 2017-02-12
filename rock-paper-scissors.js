var html = " ";

function print (message) {
    document.getElementById("js").innerHTML = html;
}

function playGame () {
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

    var compare = function (choice1, choice2) {

        if (choice1 === choice2){
            return "The result is a tie!"
        }
        else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "Rock wins!";   
            }
            else if (choice2 === "water balloon") {
                return "Rock wins";   
            }
            else {
                return "Paper wins";   
            }
        }
        else if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "Paper wins";
            }
            else if (choice2 === "water balloon") {
                return "Water balloon wins";   
            }
            else {
                return "Scissors win";
            }
        }
        else if (choice1 === "scissors") {
            if (choice2 === "rock") {
                return "Rock wins";
            }
            else if (choice2 === "water balloon") {
                return "Scissors wins";   
            }
            else {
                return "Scissors win";   
            }
        }
        else if (choice1 === "water balloon") {
            if (choice2 === "rock") {
                return "Rock wins"   
            }
            else if (choice2 === "paper") {
                respond === "Water balloon wins"   
            }
            else {
               return "Scissors win"
            }
        }
    }

    html += "<p>You chose: " + userChoice + "</p>";

    html += "<p>Computer chose: " + computerChoice + "</p>"

    html += "<p>" + compare(userChoice, computerChoice) + "</p>"

    print(html);
}
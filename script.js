// rps psuedo code

//  capture player choice
    // create a popup asking user for their coice, prompt?
    var userChoice = prompt("Pick your choice! r (rock), p (paper), or s (scissors)?");
    // store that choice in a variable
    console.log(userChoice);
    // make sure the user only chooses a valid choice EDGE

// TODO: random computer choice
    // list possible choices
    var computerChoiceArray = ["r", "p", "s"];
    // randomly select from list
    var randomElement = Math.floor(Math.random()*computerChoiceArray.length);
    var randomPick = computerChoiceArray[randomElement];
    // store in variable
    console.log(randomElement);
    console.log(randomPick);
    // popup computer's choice
    alert("Computer picked " + randomPick + "!")

// TODO: determine wins vs losses
    // if/else statements?

    var userScore = 0;
    var computerScore = 0;

    function userWins(x,y) {
        if (userChoice === "r" && randomPick === "s"){
            alert("You win!");
            userScore++;
            return;
        } else if (userChoice === "s" && randomPick === "p") {
            alert("You win!");
            userScore++;
            return;
        } else if (userChoice === "p" && randomPick === "s") {
            alert("You win!");
            userScore++;
            return;
        }
    }

    function computerWins(x,y) {
        if (userChoice === "r" && randomPick === "p"){
            alert("You lost!");
            computerScore++;
            return;
        } else if (userChoice === "s" && randomPick === "r") {
            alert("You lost!");
            computerScore++;
            return;
        } else if (userChoice === "p" && randomPick === "s") {
            alert("You lost!");
            computerScore++;
            return;
        }
    }

    if (userChoice === randomPick) {
        alert("The game tied!")
    } else if (userWins()) {
        console.log(userScore);
    } else if (computerWins()) {
        console.log(computerScore);
    } 



// TODO: track wins and losses

    // variables for wins losses and ties
    // for (i = 0; i < 100; i++) {
    //     alert("Wins: " + wins + i);
    //     alert("Losses: " + losses);
    // }

    // for (j = 0; j < 100; j++) {
    //     alert("Wins: " + wins);
    //     alert("Losses : " + losses + j);
    // }


    // show to user after each game


// TODO: keep playing until user quits
    // give popup with true/false options?
    // if true, keep going
    // recursive or while loop
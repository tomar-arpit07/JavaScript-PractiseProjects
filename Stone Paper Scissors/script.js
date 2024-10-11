let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");
const msg = document.querySelector(".text");

const genCompChoice = () =>{
    const compArray = ["rock","paper","scissor"];
    const compRand = Math.floor(Math.random() * 3);
    return compArray[compRand];
};

const draw = () =>{
    console.log("Match is drawn! Play again.");
    msg.innerText = "Match is drawn! Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin) => {
    if(userwin){
        console.log("you win");
        userScore++;
        userscore.innerText = userScore;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("you lose");
        compScore++ ;
        compscore.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log(userChoice);
    console.log(genCompChoice())
    const compChoice = genCompChoice();
    if (userChoice === compChoice){
        draw();
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper"? false :true ;
        }
        else if(userChoice === "paper"){
            userwin = compChoice === "scissor"? false :true ;
        }
        else{
            userwin = compChoice === "rock"? false :true ;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
     let userChoice = choice.getAttribute("id");
     playGame(userChoice);
    });
});
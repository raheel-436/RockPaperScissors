let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


let msg = document.querySelector("#msg");

const genCompChoice = () =>{
    let options = ["rock","paper","scissors"];
    let randidx = Math.floor(Math.random()*options.length);
    return options[randidx];
}

const drawGame = () => {
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "#2f2d2e"
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#0FBA00";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You loose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#FF6868";
    }
}

const playGame = (userChoice) =>{
    console.log(`user choice = ${userChoice}`);
    //computer choice
    const compChoice = genCompChoice();
    console.log(`computer choice = ${compChoice}`);

    if (userChoice===compChoice) {
        drawGame();
    }else{
        let userWin = true;
        if (userChoice==="rock") {
            //paper,scissors
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice==="paper") {
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }

}


choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log(`${userChoice} was clicked`);
        playGame(userChoice);
     })
});
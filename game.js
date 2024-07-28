let userScore=0;
let compScore=0;
const yourchoice=document.querySelector("#ys");
const compchoice=document.querySelector("#cs");
const choices=document.querySelectorAll(".choice");
const resulttext=document.querySelector("#result-text")
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        resulttext.innerText=`You Win!,${userChoice} beats ${compChoice}`;
        resulttext.style.backgroundColor="green";
        userScore++;
        yourchoice.innerText=userScore;


    }
    else{
        resulttext.innerText=`You Loose!,${compChoice} beats ${userChoice}`;
        resulttext.style.backgroundColor="red";
        compScore++;
        compchoice.innerText=compScore;
    }
}

const genCompChoice=()=>{
    const opt=["stone","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return opt[randomIdx];
}
const drawgame=()=>{
    resulttext.innerText="It's a Draw!";
    resulttext.style.backgroundColor= "#415a77";
}
const playGame=(userChoice,compChoice)=>{
    console.log("user choice is ",userChoice);
    console.log("comp choice is ",compChoice);
    if(userChoice===compChoice){
        drawgame();
    }
    else{
        let userwin=true;
      if(userChoice==="stone"){
        userwin=compChoice==="paper"?false:true;
      }
      else if(userChoice==="paper"){
        userwin=compChoice==="stone"?true:false;
      }
      else{
        userwin=compChoice==="paper"?true:false;
      }
      showWinner(userwin,userChoice,compChoice);//we have to call shoWinner here only
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        const compChoice=genCompChoice();
       playGame(userChoice,compChoice);
       
    });
});
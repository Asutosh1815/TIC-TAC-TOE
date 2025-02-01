let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newgame = document.querySelector("#newgame")
let msgcontainer = document.querySelector(".msgcontainer")
let msg = document.querySelector("#msg")

let turnO = true; //playerX,playerO

const winpatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [3,4,5],
  [6,7,8],
  [2,5,8],
  [2,4,6]
];

const resetGame=()=>{
  turnO=true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if (turnO){
      box.innerText="O";
      turnO=false;
    }
    else{
      box.innerText="X";
      turnO=true;
    }
    box.disabled=true;
    checkWinner();
    
  });
});

const enableBoxes=()=>{
  for (let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};

const disableBoxes=()=>{
  for (let box of boxes){
    box.disabled=true;
  }
};

const showWinner=(winner)=>{
  msg.innerText=`congrats,winner is ${winner}`;
  msgcontainer.classList.remove("hide");
}

const checkWinner=()=>{
  for (let pattern of winpatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    
    if (pos1val != "" && pos2val != "" && pos3val != ""){
      if (pos1val===pos2val && pos2val===pos3val){
        disableBoxes();
        showWinner(pos1val);
      }
    }
  }
};

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);







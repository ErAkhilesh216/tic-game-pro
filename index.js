let boxes = document.querySelectorAll(".box"); // Access the all box classes 
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn =document.querySelector("#new-btn");//Access the new Game start
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO= true; // Player X, Player O

const winPattern= [  //create 2D array and store data winPattern
    [0,1,2],// index0
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnO){ // box click player O 
            box.innerText = "O";
            turnO = false;
        }
        else{ //player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; // eska kaam yadi ek baar kisi cheez par click ho jaye to us par o dubara click nhi ho sakta.

        checkWinner()
    })
})

// show winner msg print 

const showWinner=(winner)=>{
    msg.innerText = `Congrulation ♕, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); // call the function disable
}

const checkWinner = ()=> {
    for ( let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2])
      let pos1Val =  boxes[pattern[0]].innerText;
      let pos2Val =  boxes[pattern[1]].innerText;
      let pos3Val =  boxes[pattern[2]].innerText;
      if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val===pos2Val &&pos2Val==pos3Val){
            console.log("Player X Winner",pos1Val);
            showWinner(pos1Val);
        }
      }
    }
}
// Frist winner ke baad change game ya disable button 

const disableBoxes = ()=>{ // create a  function disableBoxes ()
    for(let box of boxes){
        box.disabled = true;  
    }
}

// Reset game button logic
const resetGame = ()=>{ // create a varibel 
    turnO= true;
    enableBoxes(); // call the enable box function
    msgContainer.classList.add("hide")
}

const enableBoxes = ()=>{ // create a  function EnableBox ()
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}

// New game start  Button

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
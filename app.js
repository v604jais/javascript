let boxes = document.querySelectorAll(".box");
let resetGameBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;  //playerX playerY

const winPatterns = [

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "green";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});


const disableBoxes = () => {
   
    for(box of boxes){
        box.disabled= true;
    }
};

const enableBoxes = () => {
   
    for(box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
};


const resetGame = () => {
      
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

const showWinner = (winner) => {
    
    msg.innerText =` Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};
const checkWinner = () => {
    for (let pattern of winPatterns) {
        

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2val != "" && pos3val != "") {

            if (pos1Val === pos2val && pos2val === pos3val) {
                 
               // console.log("winner", pos1Val);
               showWinner(pos1Val);

            }

        }


    }
};


newGameBtn.addEventListener("click",resetGame);
resetGameBtn.addEventListener("click",resetGame);
let Boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGame = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let turnO = true;//player X,//player o

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turn0 = true;
    enable();
    msgContainer.classList.add("hide");
};

Boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();

    });
});
const enable = () => {
    for (let box of Boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disable = () => {
    for (let box of Boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = "Congratulations";
    msgContainer.classList.remove("hide");
    disable();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {



        let pos1Val = Boxes[pattern[0]].innerText;
        let pos2Val = Boxes[pattern[1]].innerText;
        let pos3Val = Boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);

                showWinner(pos1Val);
            }
        }
    }
};
newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


let board = [
    1,3,6,
    5,0,2,
    4,7,8
];

const correctBoard = [
    1,2,3,
    4,5,6,
    7,8,0
];

function showPuzzle(){

    const msg = document.getElementById("puzzlelock");

    if(msg.style.display === "block"){

        msg.style.display = "none";

    }
    else{

        msg.style.display = "block";

        drawPuzzle();

    }

}
function moveSteamer(index){

    let empty = board.indexOf(0);

    if(canMove(index, empty)){

        let temp = board[index];

        board[index] = 0;

        board[empty] = temp;

        drawPuzzle();

        checkPuzzle();

    }

}
function canMove(index, empty){

    if(index == empty-1 && empty%3 != 0)return true;

    if(index == empty+1 && index%3 != 0)return true;

    if(index == empty-3)return true;

    if(index == empty+3)return true;

    return false;

}
function drawPuzzle(){

    for(let i=0;i<9;i++){

        let tile =
        document.getElementById("s"+i);

        if(board[i] == 0){

            tile.innerText = "";

        }
        else{

            tile.innerText = board[i];

        }

    }

}

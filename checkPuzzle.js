function checkPuzzle(){
    let correct=true;
    for(let i=0; i<9; i++){
        if(board[i]!=correctBoard[i]){
            correct=false;
            break;
        }
    }
    if(correct)document.getElementById("steamerresult").innerHTML = "上方有我最喜歡也最討厭的東西，如果我早一點出生就好了!";
}

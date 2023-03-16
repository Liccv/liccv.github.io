const gameStatus = document.querySelector('#gamestatus');
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winMessage = () =>'Zwyciężył gracz ${currentPlayer}.';
const drawMessage = () => 'Remis.'
const playerTurn = () => 'Tura gracza ${currentPlayer}';
const winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
gameStatus.innerHTML = playerTurn();

function cellPlayed(){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function playerChange(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameStatus.innerHTML = currentPlayerTurn();
}

function resultValidation(){
    let roundWon = false;
    for (let i=0; i<=7; i++){
        const win = winningCondition[i];
        let a = gameState[win[0]];
        let b = gameState[win[1]];
        let c = gameState[win[2]];
        if(a==='' || b==='' || c===''){
            continue;
        }
        if (a === b && b === c){
            roundWon = true;
            break
        }
    }
    if (roundWon){
        gameStatus.innerHTML = winMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw){
        gameStatus.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    playerChange();
}

function cellClick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('cell-index')
    );
    if (gameState[clickedCellIndex] !== "" || !gameActive){
        return;
    }

    cellPlayed(clickedCell, clickedCellIndex);
    resultValidation();
}

function restartGame(){
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameStatus.innerHTML = currentPlayerTurn();
    document.querySelectorAll('#cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('#cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector("#gamerestart").addEventListener('click', restartGame);
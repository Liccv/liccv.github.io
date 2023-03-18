const cells = document.querySelectorAll("[cell-index]");
const board = document.getElementById("gamecontainer");
const gameStatus = document.getElementById("gamestatus");
const restartButton = document.getElementById("gamerestart");
let OplayerTurn = false;
let running = false;
const playerX = "X";
const playerO = "O";
const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startGame();
restartButton.addEventListener("click", startGame);

function startGame() {
  running = true;
  OplayerTurn = false;
  cells.forEach((cell) => {
    cell.classList.remove(playerX);
    cell.classList.remove(playerO);
    cell.removeEventListener("click", handleCellClick);
    cell.addEventListener("click", handleCellClick, { once: true });
  });
  setBoardHoverClass();
  gameStatus.innerText = `Tura gracza ${OplayerTurn ? "O" : "X"}`;
}

function handleCellClick(e) {
  if (running) {
    const cell = e.target;
    const currentPlayer = OplayerTurn ? playerO : playerX;
    placeMark(cell, currentPlayer);
    if (checkWin(currentPlayer)) {
      endGame(false);
    } else if (isDraw()) {
      endGame(true);
    } else {
      swapTurns();
      setBoardHoverClass();
    }
  }
}

function endGame(draw) {
  if (draw) {
    gameStatus.innerText = "Remis";
  } else {
    gameStatus.innerText = `Gracz ${OplayerTurn ? "O" : "X"} wygrywa`;
  }
  running = false;
}

function isDraw() {
  return [...cells].every((cell) => {
    return cell.classList.contains(playerX) || cell.classList.contains(playerO);
  });
}

function placeMark(cell, currentPlayer) {
  cell.classList.add(currentPlayer);
}

function swapTurns() {
  OplayerTurn = !OplayerTurn;
  gameStatus.innerText = `Tura gracza ${OplayerTurn ? "O" : "X"}`;
}

function setBoardHoverClass() {
  board.classList.remove(playerX);
  board.classList.remove(playerO);
  if (OplayerTurn) {
    board.classList.add(playerO);
  } else {
    board.classList.add(playerX);
  }
}

function checkWin(currentPlayer) {
  return winningCombination.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(currentPlayer);
    });
  });
}

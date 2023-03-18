const cells = document.querySelectorAll("[cell-index]");
const gameStatus = document.getElementById("gamestatus");
const restartButton = document.getElementById("gamerestart");
var changeMode = document.getElementById("gamemode");
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
changeMode.addEventListener("change", startGame);

function startGame() {
  running = true;
  OplayerTurn = false;
  twoPlayer = document.getElementById("gamemode").checked;
  cells.forEach((cell) => {
    cell.classList.remove(playerX);
    cell.classList.remove(playerO);
    cell.removeEventListener("click", handleCellClick);
    cell.addEventListener("click", handleCellClick, { once: true });
    cell.innerText = "";
  });
  gameStatus.innerText = `Tura gracza ${OplayerTurn ? "O" : "X"}`;
}

function handleCellClick(e) {
  if (running) {
    const cell = e.target;
    const currentPlayer = OplayerTurn ? playerO : playerX;
    placeMark(cell, currentPlayer);
    nextMove(currentPlayer);
  }
}

function computerMove() {
  var randomCell = (randomCell = Math.floor(Math.random() * 9));
  console.log("Pierwsze losowanie " + randomCell);
  while (
    cells[randomCell].innerText == "X" ||
    cells[randomCell].innerText == "O"
  ) {
    randomCell = Math.floor(Math.random() * 9);
    console.log(randomCell);
  }
  placeMark(cells[randomCell], playerO);
  cells[randomCell].removeEventListener("click", handleCellClick);
  nextMove(playerO);
}

function nextMove(currentPlayer) {
  if (checkWin(currentPlayer)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
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
  cell.innerText = `${OplayerTurn ? "O" : "X"}`;
}

function swapTurns() {
  OplayerTurn = !OplayerTurn;
  gameStatus.innerText = `Tura gracza ${OplayerTurn ? "O" : "X"}`;
  if (!twoPlayer && OplayerTurn) {
    computerMove();
  }
}

function checkWin(currentPlayer) {
  return winningCombination.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(currentPlayer);
    });
  });
}

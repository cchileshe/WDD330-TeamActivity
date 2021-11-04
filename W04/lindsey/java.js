
const view = {
  start: document.getElementById("start"),
  reset: document.getElementById("reset"),
  table: document.getElementById("table"),
  output: document.getElementById("output"),
  player1: "X",
  player2: "O"
}

let gameActive = false;
let usedCells = [];
let currentPlayer = view.player1;
let turnNumber = 0;

function startGame() {
  gameActive = true;
  view.output.innerHTML = "It is currently " + currentPlayer + "'s turn.";
}

function cellClicked(cell) {

  const cellId = cell.target.id;

  if (gameActive) {
    
    if (!(cellId in usedCells)) {
      cell.target.innerHTML = currentPlayer;
      usedCells[cellId] = currentPlayer;
      turnNumber++;

      let won = checkForWin(currentPlayer);
      if (!won) {
        if (turnNumber >= 9) {
          noWin();
        } else {
          if (currentPlayer == view.player1) {
            currentPlayer = view.player2;
            
          } else {
            currentPlayer = view.player1;
          }
          view.output.innerHTML = "It is currently " + currentPlayer + "'s turn.";
        }
      } else {
        gameWin(currentPlayer);
      }
    } 
  }
}

function noWin() {
  gameActive = false;
  view.output.innerHTML = "Game over! Sorry, no winner today!";
}

function gameWin(player) {
  gameActive = false;
  view.output.innerHTML = "We have a winner! Congratulations, " + player + "!";
}

function resetGame() {
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    for (let j = 0; j < row.cells.length; j++) {
      row.cells[j].innerHTML = '';
    }
  }
  usedCells = [];
  view.output.innerHTML = "";
  gameActive = false;
  currentPlayer = view.player1;
  turnNumber = 0;
}

function checkForWin(player) {
  if (usedCells[4] === player) {
    if (usedCells[0] === player && usedCells[8] === player) return true;
    if (usedCells[1] === player && usedCells[7] === player) return true;
    if (usedCells[2] === player && usedCells[6] === player) return true;
    if (usedCells[3] === player && usedCells[5] === player) return true;
  }
  if (usedCells[0] === player) {
    if (usedCells[1] === player && usedCells[2] === player) return true;
    if (usedCells[3] === player && usedCells[6] === player) return true;
  }
  if (usedCells[8] === player) {
    if (usedCells[2] === player && usedCells[5] === player) return true;
    if (usedCells[6] === player && usedCells[7] === player) return true;
  }
  return false;
}

view.start.addEventListener('click', startGame);
view.reset.addEventListener('click', resetGame);
view.table.addEventListener('click', function(event) {
  if(turnNumber < 9 && gameActive) {
    cellClicked(event);
  }
});
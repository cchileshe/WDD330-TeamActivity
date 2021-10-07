const firstPlayer = "X";
const secondPlayer = "O";
const board = document.querySelector(".board");
const button = document.getElementById("reset");
const display = document.getElementById("result");
let gameState = [];
let player = firstPlayer;

function boxClicked(e) {
    const id = e.target.id;
    if (!(id in gameState)) {
        gameState[id] = player;
        e.target.innerHTML = player;
        if (win()) {
          display.innerText = "Winner: " + player;
          return;
        }
        if (draw()) {
          return;
        }
        if (player === firstPlayer) {
            player = secondPlayer;
        } else {
            player = firstPlayer;
        }
    }
    console.log(gameState);
}

function win() {
    if (gameState[0] === player) {
      if (gameState[1] === player && gameState[2] === player) {
        return true;
      }
      if (gameState[3] === player && gameState[6] === player) {
        return true;
      }
      if (gameState[4] === player && gameState[8] === player) {
        return true;
      }
    }
    if (gameState[8] === player) {
      if (gameState[2] === player && gameState[5] === player) {
        return true;
      }
      if (gameState[6] === player && gameState[7] === player) {
        return true;
      }
    }
    if (gameState[4] === player) {
      if (gameState[1] === player && gameState[7] === player) {
        return true;
      }
      if (gameState[3] === player && gameState[5] === player) {
        return true;
      }
      if (gameState[2] === player && gameState[6] === player) {
        return true;
      }
    }
};

function draw() {
    let draw = 0;
    gameState.forEach((cell, i) => {
      if (gameState[i] !== null) draw++;
    });
    if (draw === 9) {
      display.innerText = "Draw";
    }
};

function resetBoard() {
    console.dir(board);
    gameState = [];
    display.innerText = "";
    for (let i = 0; i < board.rows.length; i++) {
        let row = board.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            row.cells[j].innerHTML = "";
        }
    }
}

board.addEventListener("touchend", boxClicked);
button.addEventListener("touchend", resetBoard);
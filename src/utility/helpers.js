// ----> FUNCTIONS FOR DECIDING WINNING CONDITIONS.
export function checkWinner(player, board){
  const val = player === 1 ? "O" : "X";

  if (checkRows(val, board)) return true;
  if (checkColumns(val, board)) return true;
  if (checkDiagonals(val, board)) return true;

  return false;
}

function checkRows(val, board){
  let win = false;

  for (let i = 0; i <= 6; i+=3){
    let row = board.slice(i, i+3);
    if (row.every(item => item === val) && row.length === 3) {
      win = true;
      break;
    }
  }
  return win;
}

function checkColumns(val, board){
  let win = false;

  for (let i = 0; i <= 3; i++){
    let column = [board[i], board[i+3], board[i+6]];
    if (column.every(item => item === val)) {
      win = true;
      break;
    }
  }
  return win;
}

function checkDiagonals(val, board){
  const diagonalOne = [board[0], board[4], board[8]];
  const diagonalTwo = [board[2], board[4], board[6]];

  return (diagonalOne.every(item => item === val) || diagonalTwo.every(item => item === val))
}

// ----> DYNAMIC STYLING OF BOXES.
export function makeBorders(index) {
  let style = "";

  switch(index) {
    case 0:
    case 2:
      style = "top";
      break;
    case 6:
    case 8:
      style = "bottom";
      break;
    case 4:
      style = "middle";
      break;
    case 1:
      style = "middle-top";
      break;
    case 7:
      style = "middle-bottom";
      break;
    default:
      style = "";
  }


  return style;
}
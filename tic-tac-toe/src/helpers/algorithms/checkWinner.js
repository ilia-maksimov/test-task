function getRow(array, cellPosition) {
  const boardLength = array[0].length;
  let y = cellPosition[0];
  let x = cellPosition[1];
  let rowStart = x - 4 < 0 ? 0 : x - 4;
  let rowEnd = x + 4 > boardLength ? boardLength : x + 5;
  return array[y].slice(rowStart, rowEnd);
}

function getColumn(array, cellPosition) {
  const column = [];
  const boardLength = array[0].length;
  let y = cellPosition[0];
  let x = cellPosition[1];
  let columnStart = y - 4 < 0 ? 0 : y - 4;
  let columnEnd = y + 4 > boardLength - 1 ? boardLength - 1 : y + 4;
  for(let i = columnStart; i <= columnEnd; i++) {
    column.push(array[i][x])
  }
  return column
}

function validateStartPositionForMainDiagonal(cellPosition) {
  let y = cellPosition[0] - 4;
  let x = cellPosition[1] - 4;
  let count = 0;
  while ((y < 0) || (x < 0) ) {
    y++;
    x++;
    count++;
  }
  const validPosition = [y, x, count];
  return validPosition
}

function getMainDiagonal(array, cellPosition) {
  const diagonal = [];
  const boardLength = array[0].length;
  const validPosition = validateStartPositionForMainDiagonal(cellPosition);
  let j = validPosition[1];
  for (let i = validPosition[0]; i < validPosition[0] + 9 - validPosition[2]; i++) {
    if ((i < boardLength) && (j < boardLength)) {
      diagonal.push(array[i][j])
      j++;
    }
  }
  return diagonal
}

function validateStartPositionForDiagonal(cellPosition, boardLength) {
  let y = cellPosition[0] + 4;
  let x = cellPosition[1] - 4;
  let count = 0;
  while ((y > boardLength - 1) || (x < 0) ) {
    y--;
    x++;
    count++;
  }
  const validPosition = [y, x, count];
  return validPosition
}

function getDiagonal(array, cellPosition) {
  const diagonal = [];
  const boardLength = array[0].length;
  const validStarPosition = validateStartPositionForDiagonal(cellPosition, boardLength);
  let j = validStarPosition[1];
  for (let i = validStarPosition[0]; i > validStarPosition[0] - 9 + validStarPosition[2]; i--) {
    if ((i >= 0) && (j < boardLength)) {
      diagonal.push(array[i][j])
      j++;
    }
  }
  return diagonal
}

function checkWin(array, isPlayerMove) {
  let count = 0;
  array.map((it) => {
    if (isPlayerMove ? it.value === 'x' : it.value === 'o') {
      count++
      if (count === 5) {
        if (isPlayerMove) {
          alert('Player win')
        } else {
          alert('Computer win')
        }
      }
    } else {
      count = 0
    }
  })
}

export function isWinner(cellPosition, isPlayerMove, field) {
  const row = getRow(field, cellPosition);
  const column = getColumn(field, cellPosition);
  const mainDiagonal = getMainDiagonal(field, cellPosition);
  const diagonal = getDiagonal(field, cellPosition);
  checkWin(row, isPlayerMove);
  checkWin(column, isPlayerMove);
  checkWin(mainDiagonal, isPlayerMove);
  checkWin(diagonal, isPlayerMove)
}

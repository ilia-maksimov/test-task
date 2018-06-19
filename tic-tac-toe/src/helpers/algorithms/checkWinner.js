// function sliceLittleMatrix(array, cellPosition) {
//   const boardLength = array[0].length;
//   let newLittleMatrix = [];
//   let y = cellPosition[0];
//   let x = cellPosition[1];
//   let rowStart = x - 4 < 0 ? 0 : x - 4;
//   let rowEnd = x + 4 > boardLength ? boardLength : x + 5;
//   return const row = array[y].slice(rowStart, rowEnd);
//   let collStart = y - 4 < 0 ? 0 : y - 4;
//   let collEnd = x + 4 > boardLength ? boardLength : x + 5;

//   console.log(row);
// }

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

function checkWin(array, isPlayerMove) {
  let count = 0;
  array.map((it) => {
    if (it.value !== null) {
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
  checkWin(row, isPlayerMove);
  checkWin(column, isPlayerMove);
}

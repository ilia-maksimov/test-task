export const array = [];
export let isPlayerMove = true;

export function getField() {
  return array;
}

export function countFieldSize(windowSize, cellSize) {
  return Math.floor(windowSize / cellSize);
}

export function createGameField(windowSize, cellSize) {
  const size = countFieldSize(windowSize, cellSize);
  let count = 1;
  for (let i = 0; i < size; i++) {
    array.push([]);
    for(let j = 0; j < size; j++) {
      array[i].push({ id: count, position: [i, j], value: null });
      count++;
    }
  }
}

export function changeMove() {
  isPlayerMove = !isPlayerMove;
}

export function makeAMove(cellPosition) {
  if (isPlayerMove) {
    array[cellPosition[0]][cellPosition[1]].value = 'x';
  } else {
    array[cellPosition[0]][cellPosition[1]].value = 'o';
  }
}

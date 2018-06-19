export const array = [];

export function getField() {
  return array;
}

export function countFieldSize(windowSize, cellSize) {
  const boardSize = Math.floor(windowSize / cellSize);
  if (boardSize >= 5) {
    return boardSize;
  } else {
    return 5;
  }
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

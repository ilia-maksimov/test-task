export const array = [];

export function countFieldSize(windowSize, cellSize) {
  return Math.floor(windowSize / cellSize);
}

export function createGameField(windowSize, cellSize) {
  const size = countFieldSize(windowSize, cellSize);
  let count = 1;
  for (let i = 0; i < size; i++) {
    array.push([]);
    for(let j = 0; j < size; j++) {
      array[i].push({ id: count, value: 'o' });
      count++;
    }
  }
}

export function makeAMove(cellId) {
  array.map((it) => it.map((it) => {
    if (it.id === cellId) {
      return it.value = 'x';
    }
  }))
}

function getEmptyCellsForComputerMovement(array) {
  let a = [];
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array[i].length; j++) {
        a.push(array[i][j]);
    }
  }
  return a.filter((it) => it.value === null).map((elem) => elem.position)
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export function computerPlayer(field) {
  const emptyCellsForMovement = getEmptyCellsForComputerMovement(field);
  const cp = Math.floor(getRandomArbitrary(0, emptyCellsForMovement.length));
  const cellChoosen = emptyCellsForMovement[cp];
  return cellChoosen;
}

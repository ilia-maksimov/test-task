import { array, changeMove, makeAMove } from './fieldControl';

function getEmptyCellsForComputerMovement() {
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

export function computerPlayer() {
  const emptyCellsForMovement = getEmptyCellsForComputerMovement();
  const cp = Math.floor(getRandomArbitrary(0, emptyCellsForMovement.length));
  const cellChoosen = emptyCellsForMovement[cp];
  makeAMove(cellChoosen);
  changeMove();
}

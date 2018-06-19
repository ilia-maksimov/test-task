export function makeAMove(cellPosition, isPlayerMove, field) {
  let array = field;
  if (isPlayerMove) {
    array[cellPosition[0]][cellPosition[1]].value = 'x';
    return array;
  } else {
    array[cellPosition[0]][cellPosition[1]].value = 'o';
    return array;
  }
}

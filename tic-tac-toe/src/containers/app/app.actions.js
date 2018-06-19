export const SET_FIELD = 'SET_FIELD';
export const CHANGE_PLAYER = 'CHANGE_PLAYER';
export const SET_NEW_ARRAY = 'SET_NEW_ARRAY';
export const COMPUTER_MOVE = 'COMPUTER_MOVE';
export const SET_WINNER = 'SET_WINNER';

export function setWinner(winner) {
  return { type: SET_WINNER, winner }
}

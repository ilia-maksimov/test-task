import { put, call, select, takeEvery } from 'redux-saga/effects';
import { COMPUTER_MOVE, CHANGE_PLAYER } from './app.actions';
import { computerPlayer } from './../../helpers/algorithms/computerPlayer';
import { makeAMove } from './../../helpers/algorithms/fieldControl';

const getBoard = (state) => {
  return state.appReducer.field;
}

const getIsPlayerMove = (state) => {
  return !state.appReducer.isPlayerMove;
}

function* computerMoveAsync(action) {
  try {
    const field = yield select(getBoard);
    const choosenCell = yield call(computerPlayer, field);
    yield call(makeAMove, choosenCell, false, field);
    const isPlayerMove = yield select(getIsPlayerMove);
    yield put({ type: CHANGE_PLAYER, isPlayerMove });
  } catch (error) {
    console.log(error);
  }
}

export function* watchComputerMove() {
  yield takeEvery(COMPUTER_MOVE, computerMoveAsync)
}

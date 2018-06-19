import { put, call, select, takeEvery } from 'redux-saga/effects';
import { COMPUTER_MOVE, CHANGE_PLAYER } from './app.actions';
import { computerPlayer } from './../../helpers/algorithms/computerPlayer';
import { makeAMove } from './../../helpers/algorithms/fieldControl';
import { isWinner} from './../../helpers/algorithms/checkWinner';

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
    const newField = yield call(makeAMove, choosenCell, false, field);
    yield call(isWinner, choosenCell, false, newField);
    const isPlayerMove = yield select(getIsPlayerMove);
    yield put({ type: CHANGE_PLAYER, isPlayerMove });
  } catch (error) {
    console.log(error);
  }
}

export function* watchComputerMove() {
  yield takeEvery(COMPUTER_MOVE, computerMoveAsync)
}

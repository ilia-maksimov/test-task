import { all } from 'redux-saga/effects';
import { watchComputerMove } from './../containers/app/app.saga';

export default function* rootSaga() {
	yield all([
    watchComputerMove()
  ]);
}

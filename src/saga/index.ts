import { fork } from 'redux-saga/effects';

import entity from './game';

export function* rootSaga() {
  yield fork(entity);
}

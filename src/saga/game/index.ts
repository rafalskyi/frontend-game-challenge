import { call, takeEvery, put } from 'redux-saga/effects';

import { EntityItem } from '../../store/game/model';
import { GET_ENTITIES, USER_CHOICE } from '../../store/game/types';
import * as entitiesActions from '../../store/game/actions';

import { getEntity, userChoiceRequest } from '../../mock/requests';

export function* getEntitiesWorkerSaga() {
  try {
    const response: EntityItem[] = yield call(getEntity);

    yield put(entitiesActions.getEntitiesSuccess(response));
  } catch (error) {
    yield put(entitiesActions.getEntitiesFail());
  }
}

export function* userChoiceWorkerSaga() {
  try {
    const response: string = yield call(userChoiceRequest);

    yield put(entitiesActions.userChoiceSuccess(response));
  } catch (error) {
    yield put(entitiesActions.userChoiceFail());
  }
}

function* entity() {
  yield takeEvery(GET_ENTITIES, getEntitiesWorkerSaga);
  yield takeEvery(USER_CHOICE, userChoiceWorkerSaga);
}

export default entity;

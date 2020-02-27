import { call, takeEvery, put } from 'redux-saga/effects';

import { EntityItem } from '../../store/game/model';
import { GET_ENTITIES, USER_CHOICE } from '../../store/game/types';
import * as entitiesActions from '../../store/game/actions';

import { getEntity, userChoiceRequest } from '../../mock/requests';

function* getEntities() {
  try {
    const response: EntityItem[] = yield call(getEntity);

    yield put(entitiesActions.getEntitiesSuccess(response));
  } catch (error) {
    yield put(entitiesActions.getEntitiesFail());
  }
}

function* userChoice() {
  try {
    const response: string = yield call(userChoiceRequest);

    yield put(entitiesActions.userChoiceSuccess(response));
  } catch (error) {
    yield put(entitiesActions.userChoiceFail());
  }
}

function* entity() {
  yield takeEvery(GET_ENTITIES, getEntities);
  yield takeEvery(USER_CHOICE, userChoice);
}

export default entity;

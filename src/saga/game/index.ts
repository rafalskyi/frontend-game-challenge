import { call, takeEvery, put } from 'redux-saga/effects';

import { EntityItem } from '../../store/game/model';
import { GET_ENTITIES, USER_CHOISE } from '../../store/game/types';
import * as entitiesActions from '../../store/game/actions';

import { getEntity, userChoiseReques } from '../../mock/requests';

function* getEntities() {
  try {
    const response: EntityItem[] = yield call(getEntity);

    yield put(entitiesActions.getEntitiesSuccess(response));
  } catch (error) {
    yield put(entitiesActions.getEntitiesFail());
  }
}

function* userChoise() {
  try {
    const response: string = yield call(userChoiseReques);

    yield put(entitiesActions.userChoiseSuccess(response));
  } catch (error) {
    yield put(entitiesActions.userChoiseFail());
  }
}

function* entity() {
  yield takeEvery(GET_ENTITIES, getEntities);
  yield takeEvery(USER_CHOISE, userChoise);
}

export default entity;

import { call, takeEvery, put } from 'redux-saga/effects';

import { EntityItem } from '../../store/game/model';
import { GET_ENTITIES } from '../../store/game/types';
import * as entitiesActions from '../../store/game/actions';

import { getEntity } from '../../mock/requests';

function* getEntities() {
  try {
    const response: EntityItem[] = yield call(getEntity);

    yield put(entitiesActions.getEntitiesSuccess(response));
  } catch (error) {
    yield put(entitiesActions.getEntitiesFail());
  }
}

function* entity() {
  yield takeEvery(GET_ENTITIES, getEntities);
}

export default entity;

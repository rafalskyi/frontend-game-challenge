import * as types from './types';
import { EntityItem } from './model';

export const getEntities = () => ({
  type: types.GET_ENTITIES,
});

export const getEntitiesSuccess = (payload: EntityItem[]) => ({
  type: types.GET_ENTITIES_SUCCESS,
  payload,
});

export const getEntitiesFail = () => ({
  type: types.GET_ENTITIES_FAIL,
});

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

export const userChoise = (payload: string) => ({
  type: types.USER_CHOISE,
  payload,
});

export const userChoiseSuccess = (payload: string) => ({
  type: types.USER_CHOISE_SUCCESS,
  payload,
});

export const userChoiseFail = () => ({
  type: types.USER_CHOISE_FAIL,
});

export const setANewGame = () => ({
  type: types.SET_A_NEW_GAME,
});

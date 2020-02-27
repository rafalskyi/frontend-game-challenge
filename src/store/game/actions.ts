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

export const userChoice = (payload: string) => ({
  type: types.USER_CHOICE,
  payload,
});

export const userChoiceSuccess = (payload: string) => ({
  type: types.USER_CHOICE_SUCCESS,
  payload,
});

export const userChoiceFail = () => ({
  type: types.USER_CHOICE_FAIL,
});

export const setANewGame = () => ({
  type: types.SET_A_NEW_GAME,
});

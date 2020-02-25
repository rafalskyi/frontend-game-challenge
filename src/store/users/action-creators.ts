import * as actionTypes from './action-types';

export const setUserName = (payload: { name: string }) => ({
  type: actionTypes.SET_USER_NAME,
  payload,
});

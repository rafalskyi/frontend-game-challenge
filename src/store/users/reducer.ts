import { Reducer, AnyAction } from 'redux';

// TYPES
import { USER } from './model';

// ACTION TYPES
import * as actionTypes from './action-types';

// INITIAL STATE
import { initialStore } from '../store.initial-store';

export const userReducer: Reducer<USER, AnyAction> = (state = initialStore.users, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_NAME: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          name: action.payload.name,
        },
      };
    }
    default: {
      return state;
    }
  }
};

import { Reducer, AnyAction } from 'redux';

// TYPES
import { ENTITY } from './model';

// ACTION TYPES
import * as types from './types';

// INITIAL STATE
import { initialStore } from '../store.initial-store';

export const entityReducer: Reducer<ENTITY, AnyAction> = (state = initialStore.entity, { type, payload }) => {
  switch (type) {
    case types.GET_ENTITIES: {
      return { ...state, isFetching: true };
    }
    case types.GET_ENTITIES_SUCCESS: {
      return { ...state, entities: payload, isFetching: false };
    }
    case types.GET_ENTITIES_FAIL: {
      return { ...state, isFetching: false };
    }
    default: {
      return state;
    }
  }
};

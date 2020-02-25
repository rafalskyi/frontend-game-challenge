import { combineReducers, Reducer, AnyAction } from 'redux';
import { GLOBAL_STORE_RESET } from './global/action-types';
import { initialStore } from './store.initial-store';
import { STORE } from './store.model';

// reducers
import { userReducer } from './users/reducer';

const appReducer = combineReducers({
  users: userReducer,
});

export const rootReducer: Reducer<STORE, AnyAction> = (state, action): STORE => {
  if (action.type === GLOBAL_STORE_RESET) {
    // way to set global action
    return initialStore;
  }

  return appReducer(state, action);
};

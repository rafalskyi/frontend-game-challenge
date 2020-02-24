import { Action, ActionCreator, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// action type(s)
export const APP_START = 'APP_START';
export type APP_START = typeof APP_START;
export interface IAppStartAction extends Action<APP_START> {
  type: APP_START;
}

export type AppActions = IAppStartAction;

// action builder(s)
export const appStartAction: ActionCreator<IAppStartAction> = () => ({
  type: APP_START,
});

// state definition
export interface IAppState {
  started: boolean;
}

export const initialState: IAppState = {
  started: false,
};

// app reducer
export function appReducer(state: IAppState = initialState, action: AppActions | Action) {
  switch (action.type) {
    case APP_START:
      return {
        ...state,
        started: true,
      };
    default:
      return state;
  }
}

// started state selector
export const isAppStarted = (state: IAppState) => state.started;

export type AppStore = Store<IAppState, AppActions | Action>;

export default function getStore(): AppStore {
  const store = createStore(appReducer, composeWithDevTools(applyMiddleware()));
  return store;
}

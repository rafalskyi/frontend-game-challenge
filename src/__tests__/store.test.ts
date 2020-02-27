import store from '../store';
import { initialStore } from '../store/store.initial-store';
import { rootReducer } from '../store/store.global-reducer';
import { STORE } from '../store/store.model';

import { getEntities } from '../store/game/actions';
import { setUserName } from '../store/users/action-creators';

describe('redux related tests', () => {
  it('reducer should return initial state', () => {
    const state = rootReducer(undefined, { type: 'something' });
    expect(state).toEqual(initialStore);
  });

  it('reducer should set user name', () => {
    const testPayload = {
      name: 'Test Name',
    };
    const testAction = setUserName(testPayload);

    const expectedState: STORE = {
      ...initialStore,
      users: {
        ...initialStore.users,
        currentUser: {
          ...testPayload,
        },
      },
    };

    const state = rootReducer(initialStore, testAction);
    expect(state).toEqual(expectedState);
  });

  it('creates redux store without crashing', () => {
    expect(store.getState).toBeDefined();
    expect(store.dispatch).toBeDefined();
    expect(store.subscribe).toBeDefined();
  });
});

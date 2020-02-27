import { runSaga } from 'redux-saga';

import store from '../store';
import { initialStore } from '../store/store.initial-store';
import { rootReducer } from '../store/store.global-reducer';
import { STORE } from '../store/store.model';

// GAME
import { getEntitiesSuccess, getEntitiesFail } from '../store/game/actions';
import { userChoiceSuccess, userChoiceFail } from '../store/game/actions';
import { getEntitiesWorkerSaga, userChoiceWorkerSaga } from '../saga/game';
import * as mockApiCalls from '../mock/requests';
import { ENTITIES } from '../mock/data';

// USER
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

  it('getEntitiesWorkerSaga should call api and dispatch correctly on SUCCESS', async () => {
    const getEntities = jest.spyOn(mockApiCalls, 'getEntity').mockImplementation(() => Promise.resolve(ENTITIES));

    const dispatched: ReturnType<typeof getEntitiesSuccess>[] = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action as any),
      },
      getEntitiesWorkerSaga as any
    );

    expect(getEntities).toHaveBeenCalledTimes(1);
    expect(dispatched[0]).toEqual(getEntitiesSuccess(ENTITIES));
    getEntities.mockClear();
  });

  it('getEntitiesWorkerSaga should call api and dispatch correctly on FAILURE', async () => {
    const requestAuthors = jest
      .spyOn(mockApiCalls, 'getEntity')
      .mockImplementation(() => Promise.reject(new Error('TEST ERROR')));

    const dispatched: ReturnType<typeof getEntitiesFail>[] = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action as any),
      },
      getEntitiesWorkerSaga as any
    );

    expect(requestAuthors).toHaveBeenCalledTimes(1);
    expect(dispatched[0]).toEqual(getEntitiesFail());
    requestAuthors.mockClear();
  });

  it('userChoiceWorkerSaga should call api and dispatch correctly on SUCCESS', async () => {
    const testValue = 'TEST VALUE';
    const userChoiceRequest = jest
      .spyOn(mockApiCalls, 'userChoiceRequest')
      .mockImplementation(() => Promise.resolve(testValue));

    const dispatched: ReturnType<typeof userChoiceSuccess>[] = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action as any),
      },
      userChoiceWorkerSaga as any
    );

    expect(userChoiceRequest).toHaveBeenCalledTimes(1);
    expect(dispatched[0]).toEqual(userChoiceSuccess(testValue));
    userChoiceRequest.mockClear();
  });

  it('userChoiceWorkerSaga should call api and dispatch correctly on FAILURE', async () => {
    const userChoiceRequest = jest
      .spyOn(mockApiCalls, 'userChoiceRequest')
      .mockImplementation(() => Promise.reject(new Error('TEST')));

    const dispatched: ReturnType<typeof userChoiceFail>[] = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action as any),
      },
      userChoiceWorkerSaga as any
    );

    expect(userChoiceRequest).toHaveBeenCalledTimes(1);
    expect(dispatched[0]).toEqual(userChoiceFail());
    userChoiceRequest.mockClear();
  });

  it('creates redux store without crashing', () => {
    expect(store.getState).toBeDefined();
    expect(store.dispatch).toBeDefined();
    expect(store.subscribe).toBeDefined();
  });
});

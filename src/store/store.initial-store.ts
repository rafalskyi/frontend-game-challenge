import { STORE } from './store.model';

export const initialStore: STORE = {
  users: {
    currentUser: {
      name: null,
    },
    opponent: {
      name: null,
    },
  },
  entity: {
    entities: [],
    isFetching: false,
  },
};

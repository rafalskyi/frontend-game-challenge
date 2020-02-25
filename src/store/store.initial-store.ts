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
    userOneChoise: {
      id: '',
      score: 0,
    },
    userTwoChoise: {
      id: '',
      score: 0,
    },
    numberOfRound: 0,
    roundResult: '',
  },
};

import { STORE } from './store.model';

export const initialStore: STORE = {
  users: {
    currentUser: {
      name: null,
    },
    opponent: {
      name: 'Mega Brain',
    },
  },
  entity: {
    entities: [],
    isFetching: false,
    userOneChoice: {
      id: '',
      score: 0,
    },
    userTwoChoice: {
      id: '',
      score: 0,
    },
    numberOfRound: 0,
    roundResult: '',
  },
};

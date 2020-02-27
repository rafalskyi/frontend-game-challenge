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
      return { ...state, isFetching: false, entities: payload };
    }

    case types.GET_ENTITIES_FAIL: {
      return { ...state, isFetching: false };
    }

    case types.USER_CHOICE: {
      return {
        ...state,
        isFetching: true,
        roundResult: '',
        userOneChoice: { ...state.userOneChoice, id: payload },
        userTwoChoice: { ...state.userTwoChoice, id: '' },
      };
    }

    case types.USER_CHOICE_SUCCESS: {
      if (state.userOneChoice.id === payload) {
        return {
          ...state,
          isFetching: false,
          roundResult: 'DRAW',
          numberOfRound: state.numberOfRound + 1,
          userTwoChoice: {
            ...state.userTwoChoice,
            id: payload,
          },
        };
      }

      const userOneEntity = state.entities.find((el) => el.id === state.userOneChoice.id);
      const userOneWin = userOneEntity ? userOneEntity.defeat.some((el) => el === payload) : false;

      // user win
      if (userOneWin) {
        return {
          ...state,
          isFetching: false,
          roundResult: 'YOU WIN',
          numberOfRound: state.numberOfRound + 1,
          userOneChoice: {
            ...state.userOneChoice,
            score: state.userOneChoice.score + 1,
          },
          userTwoChoice: {
            ...state.userTwoChoice,
            id: payload,
          },
        };
      }

      // user lose
      return {
        ...state,
        isFetching: false,
        roundResult: 'YOU LOSE',
        numberOfRound: state.numberOfRound + 1,
        userTwoChoice: {
          ...state.userTwoChoice,
          score: state.userTwoChoice.score + 1,
          id: payload,
        },
      };
    }

    case types.USER_CHOICE_FAIL: {
      return { ...state, isFetching: false };
    }

    case types.SET_A_NEW_GAME: {
      const { roundResult, numberOfRound, userTwoChoice, userOneChoice } = initialStore.entity;
      return { ...state, roundResult, numberOfRound, userTwoChoice, userOneChoice };
    }

    default: {
      return state;
    }
  }
};

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

    case types.USER_CHOISE: {
      return { ...state, isFetching: true, roundResult: '', userOneChoise: { ...state.userOneChoise, id: payload } };
    }

    case types.USER_CHOISE_SUCCESS: {
      if (state.userOneChoise.id === payload) {
        return {
          ...state,
          isFetching: false,
          roundResult: 'DROW',
          numberOfRound: state.numberOfRound + 1,
          userTwoChoise: {
            ...state.userTwoChoise,
            id: payload,
          },
        };
      }

      const userOneEntity = state.entities.find((el) => el.id === state.userOneChoise.id);
      const userOneWin = userOneEntity ? userOneEntity.defeat.some((el) => el === payload) : false;

      // user win
      if (userOneWin) {
        return {
          ...state,
          isFetching: false,
          roundResult: 'YOU WIN',
          numberOfRound: state.numberOfRound + 1,
          userOneChoise: {
            ...state.userOneChoise,
            score: state.userOneChoise.score + 1,
          },
          userTwoChoise: {
            ...state.userTwoChoise,
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
        userTwoChoise: {
          ...state.userTwoChoise,
          score: state.userTwoChoise.score + 1,
          id: payload,
        },
      };
    }

    case types.USER_CHOISE_FAIL: {
      return { ...state, isFetching: false };
    }

    case types.SET_A_NEW_GAME: {
      const { roundResult, numberOfRound, userTwoChoise, userOneChoise } = initialStore.entity;
      return { ...state, roundResult, numberOfRound, userTwoChoise, userOneChoise };
    }

    default: {
      return state;
    }
  }
};

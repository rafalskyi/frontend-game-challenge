import { ENTITIES, ENTITIES_TYPE } from './data';

import { getRandomNumber } from '../utils/randomizer';

const generateProbability = (arr: ENTITIES_TYPE[], preferIndex: number): ENTITIES_TYPE[] => {
  return arr.reduce((acc, item) => {
    const prevRange = acc[acc.length - 1] ? acc[acc.length - 1].probability[1] : 0;
    const nextRange = item.index !== preferIndex ? prevRange + 25 : prevRange + 50;

    return acc.concat({
      ...item,
      probability: [prevRange === 0 ? prevRange : prevRange + 1, nextRange],
    });
  }, [] as ENTITIES_TYPE[]);
};

const getOpponentChoice = (arr: ENTITIES_TYPE[], randomNumber: number): string => {
  return arr.reduce(
    (acc, item) => (item.probability[0] <= randomNumber && randomNumber <= item.probability[1] ? item.id : acc),
    ''
  );
};

export const getEntity: () => Promise<ENTITIES_TYPE[]> = () =>
  new Promise((res, rej) => setTimeout(() => res(ENTITIES), 500));

export const userChoiceRequest: () => Promise<string> = () =>
  new Promise((res, rej) =>
    setTimeout(() => {
      const preferIndex = getRandomNumber(ENTITIES.length);
      const randomNumber = getRandomNumber(100);

      const entitiesWithProbability = generateProbability(ENTITIES, preferIndex);

      const userTwoChoice = getOpponentChoice(entitiesWithProbability, randomNumber);

      res(userTwoChoice);
    }, 1000)
  );

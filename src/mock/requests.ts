import { ENTITIES, ENTITIESTYPE } from './data';

import { getRandomnumber } from '../utils/randomizer';

const generateProbability = (arr: ENTITIESTYPE[], preferIndex: number): ENTITIESTYPE[] => {
  return arr.reduce((acc, item) => {
    const prevRange = acc[acc.length - 1] ? acc[acc.length - 1].probability[1] : 0;
    const nextRange = item.index !== preferIndex ? prevRange + 25 : prevRange + 50;

    return acc.concat({
      ...item,
      probability: [prevRange === 0 ? prevRange : prevRange + 1, nextRange],
    });
  }, [] as ENTITIESTYPE[]);
};

const getOpponentChoise = (arr: ENTITIESTYPE[], randomNumber: number): string => {
  return arr.reduce(
    (acc, item) => (item.probability[0] <= randomNumber && randomNumber <= item.probability[1] ? item.id : acc),
    ''
  );
};

export const getEntity = () => new Promise((res, rej) => setTimeout(() => res(ENTITIES), 500));

export const userChoiseRequest = () =>
  new Promise((res, rej) =>
    setTimeout(() => {
      const preferIndex = getRandomnumber(ENTITIES.length);
      const randomNumber = getRandomnumber(100);

      const entitiesWithProbability = generateProbability(ENTITIES, preferIndex);

      const userTwoChoise = getOpponentChoise(entitiesWithProbability, randomNumber);

      res(userTwoChoise);
    }, 1000)
  );

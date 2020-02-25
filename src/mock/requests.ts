import { ENTITIES, ENTITIESTYPE } from './data';

import { getRandomnumber } from '../utils/randomizer';

export const getEntity = () => new Promise((res, rej) => setTimeout(() => res(ENTITIES), 500));

export const userChoiseReques = () =>
  new Promise((res, rej) =>
    setTimeout(() => {
      const preferIndex = getRandomnumber(ENTITIES.length);
      const randomNumber = getRandomnumber(100);

      const userTwoChoise = ENTITIES.reduce((acc, item) => {
        const prevRange = acc[acc.length - 1] ? acc[acc.length - 1].range[1] : 0;
        const nextRange = item.index !== preferIndex ? prevRange + 25 : prevRange + 50;

        return acc.concat({
          ...item,
          range: [prevRange === 0 ? prevRange : prevRange + 1, nextRange],
        });
      }, [] as ENTITIESTYPE[]).reduce(
        (acc, item) => (item.range[0] <= randomNumber && randomNumber <= item.range[1] ? item.id : acc),
        ''
      );
      res(userTwoChoise);
    }, 1000)
  );

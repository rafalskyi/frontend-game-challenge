import { ENTITIES } from './data';

export const getEntity = () => new Promise((res, rej) => setTimeout(() => res(ENTITIES), 500));

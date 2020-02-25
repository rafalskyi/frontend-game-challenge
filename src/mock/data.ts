export type ENTITIESTYPE = {
  id: string;
  title: string;
  icon: string;
  defeat: string[];
  isDefeated: string[];
  index: number;
  range: number[];
};

export const ENTITIES = [
  {
    id: 'Archer#hash',
    title: 'Archer',
    icon: 'https://cdn4.iconfinder.com/data/icons/knight-and-war/92/icon112-10-512.png',
    defeat: ['Pikemen#hash'],
    isDefeated: ['Cavalry#hash'],
    index: 1,
    range: [],
  },
  {
    id: 'Cavalry#hash',
    title: 'Cavalry',
    icon: 'https://cdn4.iconfinder.com/data/icons/knight-and-war/92/icon112-01-512.png',
    defeat: ['Archer#hash'],
    isDefeated: ['Pikemen#hash'],
    index: 2,
    rangeS: [],
  },
  {
    id: 'Pikemen#hash',
    title: 'Pikemen',
    icon: 'https://cdn4.iconfinder.com/data/icons/knight-and-war/92/icon112-12-512.png',
    defeat: ['Cavalry#hash'],
    isDefeated: ['Archer#hash'],
    index: 3,
    range: [],
  },
];

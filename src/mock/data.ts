export const ENTITIES = [
  {
    id: 'Archer',
    title: 'Archer',
    icon: 'https://cdn4.iconfinder.com/data/icons/knight-and-war/92/icon112-10-512.png',
    defeat: ['Pikemen'],
    isDefeated: ['Cavalry'],
  },
  {
    id: 'Cavalry',
    title: 'Cavalry',
    icon: 'https://cdn4.iconfinder.com/data/icons/knight-and-war/92/icon112-01-512.png',
    defeat: ['Archers'],
    isDefeated: ['Pikemen'],
  },
  {
    id: 'Pikemen',
    title: 'Pikemen',
    icon: 'https://cdn4.iconfinder.com/data/icons/knight-and-war/92/icon112-12-512.png',
    defeat: ['Cavalry'],
    isDefeated: ['Archers'],
  },
];

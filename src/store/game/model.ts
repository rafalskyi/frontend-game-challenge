export type EntityItem = {
  id: string;
  title: string;
  icon: string;
  defeat: string[];
  isDefeated: string[];
};

export type ENTITY = {
  entities: EntityItem[];
  isFetching: boolean;
};

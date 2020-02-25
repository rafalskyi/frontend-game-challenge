export type EntityItem = {
  id: string;
  title: string;
  icon: string;
  defeat: string[];
  isDefeated: string[];
};

export type ISER_CHOISE = {
  id: string;
  score: number;
};

export type getEntitiesType = () => void;
export type setANewGameType = () => void;
export type userChoiseType = (payload: string) => void;

export type ENTITY = {
  entities: EntityItem[];
  isFetching: boolean;
  userOneChoise: ISER_CHOISE;
  userTwoChoise: ISER_CHOISE;
  numberOfRound: number;
  roundResult: string;
};

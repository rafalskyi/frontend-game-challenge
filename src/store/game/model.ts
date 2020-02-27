export type EntityItem = {
  id: string;
  title: string;
  icon: string;
  defeat: string[];
  isDefeated: string[];
};

export type USER_CHOICE = {
  id: string;
  score: number;
};

export type getEntitiesType = () => void;
export type setANewGameType = () => void;
export type userChoiceType = (payload: string) => void;

export type ENTITY = {
  entities: EntityItem[];
  isFetching: boolean;
  userOneChoice: USER_CHOICE;
  userTwoChoice: USER_CHOICE;
  numberOfRound: number;
  roundResult: string;
};

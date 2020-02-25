import { UserI } from '../../entities/User';

export type UserReducerI = {
  currentUser: UserI;
  opponent: UserI;
};

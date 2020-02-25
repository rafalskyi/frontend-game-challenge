import { USER } from './users/model';
import { ENTITY } from './game/model';

export interface STORE {
  users: USER;
  entity: ENTITY;
}

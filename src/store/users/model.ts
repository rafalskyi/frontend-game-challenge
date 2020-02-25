export interface UserI {
  name: string | null;
}

export type USER = {
  currentUser: UserI;
  opponent: UserI;
};

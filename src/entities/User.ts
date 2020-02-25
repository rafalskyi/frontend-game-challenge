export interface UserI {
  name: string | null;
}

export class User implements UserI {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

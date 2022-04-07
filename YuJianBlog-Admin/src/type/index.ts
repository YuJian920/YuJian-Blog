import store from "../model";

export interface ResponseData<T> {
  code: number;
  data: T[];
  mas: string;
}

export interface User {
  id?: number;
  username: string;
  password: string;
}

export interface Artcile {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  content: string;
  author: string;
}

export interface UserState {
  token?: string | undefined;
  userList?: User[];
}

export type UserDefaultState = ReturnType<typeof store.getState>;

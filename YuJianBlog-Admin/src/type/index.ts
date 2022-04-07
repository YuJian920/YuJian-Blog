import store from "../model";

export interface User {
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
  createdAt?: string;
  deletedAt?: string;
  updatedAt?: string;
}

export interface UserState {
  token: string | undefined;
  userList: User[];
}

export type UserDefaultState = ReturnType<typeof store.getState>;

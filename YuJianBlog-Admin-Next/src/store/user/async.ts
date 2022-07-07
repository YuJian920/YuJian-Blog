import { Dispatch } from "@reduxjs/toolkit";
import { userLogin } from "./slice";
import { postUserLogin } from "../../service/user";

interface UserLoginParams {
  username: string;
  password: string;
}

export const loginActionAsync =
  (params: UserLoginParams) => async (dispatch: Dispatch) => {
    const result = await postUserLogin(params);
    dispatch(userLogin(result.token));
  };

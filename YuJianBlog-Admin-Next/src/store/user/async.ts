import { Dispatch } from "@reduxjs/toolkit";
import { userLogin } from "./slice";
import { postUserLogin } from "../../service/user";
import type { UserLoginParams } from "../../pages/Login/type";

export const loginActionAsync =
  (params: UserLoginParams) => async (dispatch: Dispatch) => {
    const result = await postUserLogin(params);
    dispatch(userLogin(result.token));
  };

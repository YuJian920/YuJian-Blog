import { Dispatch } from "redux";
import * as actionTypes from "./actionTypes";
import * as service from "../../service/user";
import CookieHelper from "../../utils/token";
import { User } from "../../type";

export const setUserToken = (token: string) => ({
  type: actionTypes.USER_SET_TOKEN,
  payload: token,
});

export const cleanUserToken = () => ({
  type: actionTypes.USER_RESET_TOKEN,
  payload: ""
});

export const postUserLogin = (params: User) => async (dispatch: Dispatch) => {
  const res = await service.postUserLogin(params);
  dispatch(setUserToken(res.data.token));
  CookieHelper.set(res.data.token);
  return res;
};

export const cleanToken = () => async (dispatch: Dispatch) => {
  CookieHelper.delete();
  dispatch(cleanUserToken());
};

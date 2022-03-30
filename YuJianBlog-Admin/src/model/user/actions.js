import * as actionTypes from "./actionTypes";
import * as service from "@service/user";
import CookieHelper from "@/utils/token";

export const setUserToken = (token) => ({
  type: actionTypes.USER_SET_TOKEN,
  token,
});

export const cleanUserToken = () => ({
  type: actionTypes.USER_RESET_TOKEN,
});

export const setUserList = () => ({
  type: actionTypes.USER_SET_LIST,
});

export const postUserLogin = (params) => async (dispatch) => {
  const res = await service.postUserLogin(params);
  dispatch(setUserToken(res.data.token));
  CookieHelper.set(res.data.token);
  return res;
};

export const cleanToken = () => async (dispatch) => {
  CookieHelper.delete();
  dispatch(cleanUserToken());
};

export const getUserList = () => async (dispatch) => {
  const res = await service.getUserList();
  dispatch(setUserList(res.data));
  return res.data;
};

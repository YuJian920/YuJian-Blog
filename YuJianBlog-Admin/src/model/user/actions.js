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

export const postUserLogin = (params) => async (dispatch) => {
  const res = await service.postUserLogin(params);
  dispatch(setUserToken(res.data.token));
  CookieHelper.set(res.data.token);
  return res;
};

export const cleanToken = () => (dispatch) => {
  CookieHelper.delete();
  dispatch(cleanUserToken());
};

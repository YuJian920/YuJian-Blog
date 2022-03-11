import * as actionTypes from "./actionTypes";
import * as service from "@service/user";

export const setUserToken = (token) => ({
  type: actionTypes.USER_SET_TOKEN,
  token,
});

export const postUserLogin = (params) => (dispatch) => {
  service.postUserLogin(params).then((res) => {
    console.log(res);
    dispatch(setUserToken(res.data.token));
  });
};

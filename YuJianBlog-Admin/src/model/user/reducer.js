import * as actionTypes from "./actionTypes";
import CookieHelper from "@/utils/token";

const defaultState = {
  token: CookieHelper.get(),
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.USER_SET_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

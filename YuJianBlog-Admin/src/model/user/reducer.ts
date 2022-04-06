import * as actionTypes from "./actionTypes";
import CookieHelper from "../../utils/token";
import { User } from "../../type";

interface UserAction {
  type: string;
  token: any;
}

const defaultState: { token: string | undefined; userList: User[] } = {
  token: CookieHelper.get(),
  userList: [],
};

export default (state = defaultState, action: UserAction) => {
  switch (action.type) {
    case actionTypes.USER_SET_TOKEN:
      return { ...state, token: action.token };
    case actionTypes.USER_RESET_TOKEN:
      return { ...defaultState, token: "" };
    case actionTypes.USER_SET_LIST:
      return { ...defaultState, userList: action };
    default:
      return state;
  }
};

import { USER_SET_TOKEN, USER_RESET_TOKEN } from "./actionTypes";
import CookieHelper from "../../utils/token";
import { UserState } from "../../type";

interface UserAction {
  type: typeof USER_SET_TOKEN | typeof USER_RESET_TOKEN;
  payload: string;
}

const defaultState: UserState = {
  token: CookieHelper.get(),
  userList: [],
};

export default (state = defaultState, action: UserAction) => {
  switch (action.type) {
    case USER_SET_TOKEN:
      return { ...state, token: action.payload };
    case USER_RESET_TOKEN:
      return { ...defaultState, token: action.payload };
    default:
      return state;
  }
};

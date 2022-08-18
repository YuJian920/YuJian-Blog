import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserState } from "../../pages/Login/type";
import TokenHelper from "../../utils/tokenHelper";

const initialState: UserState = {
  token: TokenHelper.get(),
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<UserState["token"]>) => {
      state.token = action.payload;
      TokenHelper.set(action.payload || "");
    },
    userLogout: (state) => {
      state.token = "";
      TokenHelper.clean();
    },
  },
});

export const { userLogin, userLogout } = UserSlice.actions;
export default UserSlice.reducer;

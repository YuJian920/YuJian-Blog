import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginActionAsync } from "../../../store/user/async";
import type { UserLoginParams } from "../type";

const useLoginLogic = () => {
  const [loginType, setloginType] = useState(true);
  const dispatch = useDispatch();

  const onPostUser = (params: UserLoginParams) => {
    dispatch<any>(loginActionAsync(params));
  };

  return {
    loginType,
    setloginType,
    onPostUser,
  };
};

export default useLoginLogic;

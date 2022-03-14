import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import * as actions from "@model/user/actions";

import { verifyLogin } from "../../service/user";

const Dashboard = (props) => {
  const { postUserLogin, cleanToken } = props;

  const onLogin = () => {
    postUserLogin({
      username: "YuJian",
      password: "123456789",
    });
  };

  const onVerify = async () => {
    const res = await verifyLogin();
    console.log("onVerify", res);
  };

  const onClean = () => cleanToken();

  return (
    <div>
      <Button onClick={() => onLogin()}>Login</Button>
      <Button onClick={() => onVerify()}>Verify</Button>
      <Button onClick={() => onClean()}>Clean</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({ token: state.user.token });
const mapDispatchToProps = (dispatch) => ({
  postUserLogin(params) {
    dispatch(actions.postUserLogin(params));
  },
  cleanToken() {
    dispatch(actions.cleanToken());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

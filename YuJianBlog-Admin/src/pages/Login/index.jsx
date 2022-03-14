import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "@model/user/actions";
import "./index.less";

const Login = (props) => {
  const { postUserLogin } = props;
  const navigate = useNavigate();

  const onLogin = async () => {
    await postUserLogin({ username: "YuJian", password: "123456789" });
    navigate("/");
  };
  return <Button onClick={() => onLogin()}>Login</Button>;
};

const mapStateToProps = (state) => ({ token: state.user.token });
const mapDispatchToProps = (dispatch) => ({
  postUserLogin(params) {
    return dispatch(actions.postUserLogin(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

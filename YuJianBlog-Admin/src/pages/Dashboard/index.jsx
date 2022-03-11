import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import * as actions from "@model/user/actions";

const Dashboard = (props) => {
  const { postUserLogin  } = props
  const onLogin = async () => {
    const abc = await postUserLogin({
      username: "YuJian",
      password: "123456789",
    });
    console.log(abc);
  };
  return (
    <div>
      <Button onClick={() => onLogin()}>Login</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({ token: state.token });
const mapDispatchToProps = (dispatch) => ({
  postUserLogin(params) {
    dispatch(actions.postUserLogin(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

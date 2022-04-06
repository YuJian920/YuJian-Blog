// @ts-nocheck
import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import * as actions from "@model/user/actions";

import { verifyLogin } from "../../service/user";

const Dashboard = (props) => {
  const { cleanToken } = props;

  const onVerify = async () => {
    const res = await verifyLogin();
    console.log("onVerify", res);
  };

  const onClean = () => cleanToken();

  return (
    <>
      <h1>A Simple Blog Admin base React</h1>
      <Button onClick={() => onVerify()}>Verify</Button>
      <Button onClick={() => onClean()}>Clean</Button>
    </>
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

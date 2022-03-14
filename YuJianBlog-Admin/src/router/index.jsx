import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import Login from "@/pages/Login";
import Layout from "@/components/Layout";

const Router = (props) => {
  const { token } = props;
  const renderRouter = token ? <Layout /> : <Navigate to="/login" />;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/" element={renderRouter} />
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = ({ user }) => ({ token: user.token });
const mapDispatchToProps = (dispatch) => ({
  postUserLogin(params) {
    dispatch(actions.postUserLogin(params));
  },
  cleanToken() {
    dispatch(actions.cleanToken());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Router);

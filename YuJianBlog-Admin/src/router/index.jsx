import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
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

const mapStateToProps = (state) => ({ token: state.user.token });
export default connect(mapStateToProps, {})(Router);

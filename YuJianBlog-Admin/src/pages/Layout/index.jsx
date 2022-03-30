import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";
import Sider from "./components/Sider";
import Dashboard from "../Dashboard";
import "./index.less";

const PageLayout = () => {
  const { pathname } = useLocation();

  return (
    <Layout className="pageLayout">
      <Header />
      <Layout>
        <Sider />
        <Layout
          className="pageLayout__content"
          style={{ padding: "0 24px 24px" }}
        >
          <Layout.Content
            className="pageLayout__content-box"
            style={{ padding: 24, margin: 0, minHeight: 280 }}
          >
            {pathname === "/" ? <Dashboard /> : <Outlet />}
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout;

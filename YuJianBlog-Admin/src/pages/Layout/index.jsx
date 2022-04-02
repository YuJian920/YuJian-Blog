import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";
import Sider from "./components/Sider";
import "./index.less";

const PageLayout = () => {
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
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout;

import React from "react";
import { Layout, Breadcrumb } from "antd";
import Header from "./components/Header";
import Sider from "./components/Sider";
import Dashboard from "@/pages/Dashboard";
import "./index.less";

const { Content } = Layout;

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
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="pageLayout__content-box"
            style={{ padding: 24, margin: 0, minHeight: 280 }}
          >
            <Dashboard />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout;

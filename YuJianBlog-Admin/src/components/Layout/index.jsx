import React from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  BookOutlined,
  DashboardOutlined,
  HighlightOutlined,
  FileSearchOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import Dashboard from "../../pages/Dashboard";
import "./index.less";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const PageLayout = () => {
  return (
    <Layout className="pageLayout">
      <Header className="pageLayout__header">
        <div className="pageLayout__header-left">YuJian</div>
        <div className="pageLayout__header-right">
          <Button shape="circle" icon={<WifiOutlined />} />
        </div>
      </Header>
      <Layout>
        <Sider width={200} collapsed={false}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            <SubMenu key="2" icon={<BookOutlined />} title="博客管理">
              <Menu.Item key="2-1" icon={<HighlightOutlined />}>
                新建文章
              </Menu.Item>
              <Menu.Item key="2-2" icon={<FileSearchOutlined />}>
                文章列表
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
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

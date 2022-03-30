import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  BookOutlined,
  DashboardOutlined,
  HighlightOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import "../../index.less";

const { SubMenu } = Menu;
const { Sider } = Layout;

const pageSider = () => {
  return (
    <Sider width={200} collapsed={false}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <SubMenu key="2" icon={<BookOutlined />} title="博客管理">
          <Menu.Item key="2-1" icon={<HighlightOutlined />}>
            <Link to="/Article/Edit">新建文章</Link>
          </Menu.Item>
          <Menu.Item key="2-2" icon={<FileSearchOutlined />}>
            <Link to="/Article/List">文章列表</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default React.memo(pageSider);

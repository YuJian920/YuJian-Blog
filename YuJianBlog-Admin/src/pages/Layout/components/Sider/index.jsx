import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  BookOutlined,
  DashboardOutlined,
  HighlightOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import "../../index.less";

const pageSider = () => {
  const [selectedKeys, setSelectedKeys] = useState(["Dashboard"]);
  const { pathname } = useLocation();

  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  return (
    <Layout.Sider width={200} collapsed={false}>
      <Menu
        mode="inline"
        defaultSelectedKeys={selectedKeys}
        selectedKeys={selectedKeys}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="/" icon={<DashboardOutlined />}>
          <Link to="/Dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.SubMenu key="/Article" icon={<BookOutlined />} title="博客管理">
          <Menu.Item key="/Article/List" icon={<FileSearchOutlined />}>
            <Link to="/Article/List">文章列表</Link>
          </Menu.Item>
          <Menu.Item key="/Article/Edit" icon={<HighlightOutlined />}>
            <Link to="/Article/Edit">新建文章</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  );
};

export default React.memo(pageSider);

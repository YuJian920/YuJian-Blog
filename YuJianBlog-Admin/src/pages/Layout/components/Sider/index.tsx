import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  BookOutlined,
  DashboardOutlined,
  HighlightOutlined,
  FileSearchOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import "../../index.less";

const pageSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(["Dashboard"]);
  const { pathname } = useLocation();

  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  return (
    <Layout.Sider
      width={200}
      collapsed={collapsed}
      collapsible
      onCollapse={() => setCollapsed((collapsed) => !collapsed)}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={selectedKeys}
        selectedKeys={selectedKeys}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="/" icon={<DashboardOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.SubMenu
          key="/Blog"
          icon={<BookOutlined />}
          title="博客管理"
        >
          <Menu.Item key="/Blog/ArticleList" icon={<FileSearchOutlined />}>
            <Link to="/Blog/ArticleList">文章列表</Link>
          </Menu.Item>
          <Menu.Item key="/Blog/ArticleEdit" icon={<HighlightOutlined />}>
            <Link to="/Blog/ArticleEdit">新建文章</Link>
          </Menu.Item>
          <Menu.Item key="/Blog/Custom" icon={<DeploymentUnitOutlined />}>
            <Link to="/Blog/Custom">博客样式</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  );
};

export default React.memo(pageSider);

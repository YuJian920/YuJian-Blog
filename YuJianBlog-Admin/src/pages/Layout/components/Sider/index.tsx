import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, MenuProps } from "antd";
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

  const menuItem: MenuProps["items"] = useMemo(
    () => [
      {
        label: <Link to="/">Dashboard</Link>,
        key: "/",
        icon: <DashboardOutlined />,
      },
      {
        label: "博客管理",
        key: "/Blog",
        icon: <BookOutlined />,
        children: [
          {
            label: <Link to="/Blog/ArticleList">文章列表</Link>,
            key: "/Blog/ArticleList",
            icon: <FileSearchOutlined />,
          },
          {
            label: <Link to="/Blog/ArticleEdit">文章编辑</Link>,
            key: "/Blog/ArticleEdit",
            icon: <HighlightOutlined />,
          },
          {
            label: <Link to="/Blog/Custom">博客样式</Link>,
            key: "/Blog/Custom",
            icon: <DeploymentUnitOutlined />,
          },
        ],
      },
    ],
    []
  );

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
        items={menuItem}
      />
    </Layout.Sider>
  );
};

export default React.memo(pageSider);

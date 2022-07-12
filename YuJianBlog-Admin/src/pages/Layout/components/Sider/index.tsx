import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, MenuProps } from "antd";
import routerConfig from "../../../../router";
import type { RouterConfig } from "../../../../router";
import "../../index.less";

interface MenuItemType {
  label: JSX.Element;
  key: string;
  icon: JSX.Element;
  children?: RouterConfig[];
}

/**
 * 获取路由配置自动生成菜单项
 * @param router
 * @returns
 */
const generateRouter = (router: RouterConfig[]) => {
  const flattenRecursion = (data: RouterConfig[]): MenuItemType[] => {
    const children: MenuItemType[] = [];
    data.forEach((item: any) => {
      if (item["children"]) {
        children.push({
          label: <Link to={item.path}>{item.name}</Link>,
          key: item.path,
          icon: item.icon,
          children: flattenRecursion(item["children"]),
        });
      } else {
        children.push({
          label: <Link to={item.path}>{item.name}</Link>,
          key: item.path,
          icon: item.icon,
        });
      }
    });

    return children;
  };

  return flattenRecursion(router)[0].children;
};

const pageSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(["Dashboard"]);
  const { pathname } = useLocation();

  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  // 菜单项
  const menuItem = useMemo(() => generateRouter(routerConfig), []);

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
        items={menuItem as MenuProps["items"]}
      />
    </Layout.Sider>
  );
};

export default React.memo(pageSider);

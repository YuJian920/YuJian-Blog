import {
  BookOutlined,
  DashboardOutlined,
  DeploymentUnitOutlined,
  FileSearchOutlined,
  HighlightOutlined,
} from "@ant-design/icons";
import type { RouteObject } from "react-router-dom";

import ArticleList from "../pages/Article";
import ArticleEdit from "../pages/Article/ArticleEdit";
import BlogCustom from "../pages/Article/Custom";
import Dashboard from "../pages/Dashboard";
import Layout from "../pages/Layout";

export interface RouterConfig extends RouteObject {
  name?: string;
  icon?: JSX.Element;
  children?: RouterConfig[];
}

const routerConfig: RouterConfig[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        icon: <DashboardOutlined />,
        name: "Dashboard",
      },
      {
        path: "/Blog",
        name: "博客管理",
        icon: <BookOutlined />,
        children: [
          {
            path: "/Blog/ArticleList",
            element: <ArticleList />,
            icon: <FileSearchOutlined />,
            name: "文章列表",
          },
          {
            path: "/Blog/ArticleEdit",
            element: <ArticleEdit />,
            icon: <HighlightOutlined />,
            name: "文章编辑",
          },
          {
            path: "/Blog/Custom",
            element: <BlogCustom />,
            icon: <DeploymentUnitOutlined />,
            name: "博客样式",
          },
        ],
      },
    ],
  },
];

export default routerConfig;

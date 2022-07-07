import type { RouteObject } from "react-router-dom";
import Layout from "../layout";
import Dashboard from "../pages/Dashboard";
import ArticleList from "../pages/Blog/ArticleList";
import ArticleEdit from "../pages/Blog/ArticleEdit";
import BlogCustom from "../pages/Blog/BlogCustom";
import NotFound from "../pages/NotFound";

interface RouterConfig extends RouteObject {
  name?: string;
  children?: RouterConfig[];
}

const routerMap: RouterConfig[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        name: "Dashboard",
      },
      {
        path: "/Blog",
        name: "博客管理",
        children: [
          {
            path: "/Blog/ArticleList",
            element: <ArticleList />,
            name: "文章列表",
          },
          {
            path: "/Blog/ArticleEdit",
            element: <ArticleEdit />,
            name: "文章编辑",
          },
          {
            path: "/Blog/Custom",
            element: <BlogCustom />,
            name: "博客样式",
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routerMap;

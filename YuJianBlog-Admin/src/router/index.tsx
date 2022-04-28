import Login from "../pages/Login";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import ArticleList from "../pages/Article";
import ArticleEdit from "../pages/Article/ArticleEdit";
import BlogCustom from "../pages/Article/Custom";

const routerConfig = [
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
    path: "/login",
    element: <Login />,
  },
];

export default routerConfig;

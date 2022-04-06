import React from "react";
import Login from "../pages/Login";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import ArticleList from "../pages/ArticleList";
import ArticleEdit from "../pages/ArticleEdit";

const routerConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/Article/List",
        element: <ArticleList />,
      },
      {
        path: "/Article/Edit",
        element: <ArticleEdit />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routerConfig;

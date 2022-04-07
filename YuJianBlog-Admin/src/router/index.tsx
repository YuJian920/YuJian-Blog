import React from "react";
import Login from "../pages/Login";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import ArticleList from "../pages/Article";
import ArticleEdit from "../pages/Article/ArticleEdit";
import BlogCustom from "../pages/Article/Custom";
import { Navigate } from "react-router-dom";

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
        path: "/Blog",
        // element: <Navigate to="/Blog/ArticleList" replace />,
        children: [
          {
            path: "/Blog/ArticleList",
            element: <ArticleList />,
          },
          {
            path: "/Blog/ArticleEdit",
            element: <ArticleEdit />,
          },
          {
            path: "/Blog/Custom",
            element: <BlogCustom />,
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

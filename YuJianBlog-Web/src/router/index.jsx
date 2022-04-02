import React, { lazy } from "react";
// import Layout from "../pages/Layout";
// import Home from "../pages/Home";
// import Article from "../pages/Article";
// import About from "../pages/About";

const Layout = lazy(() => import("../pages/Layout"));
const Home = lazy(() => import("../pages/Home"));
const Article = lazy(() => import("../pages/Article"));
const About = lazy(() => import("../pages/About"));

const routerConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Article/:id",
        element: <Article />,
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
];

export default routerConfig;

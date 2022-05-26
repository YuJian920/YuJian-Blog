import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Article from "../pages/Article";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

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
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routerConfig;

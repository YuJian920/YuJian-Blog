import { Navigate } from "react-router-dom";
import Article from "../pages/Article";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";

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

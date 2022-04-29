import { lazy } from "react";
import Article from "../pages/Article";

const Layout = lazy(() => import("../pages/Layout"));
const Home = lazy(() => import("../pages/Home"));
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

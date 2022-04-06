import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routerConfig from "../router";
import Loading from "../components/Loading";

const App = () => {
  const routerMap = useRoutes(routerConfig);
  return <Suspense fallback={<Loading />}>{routerMap}</Suspense>;
};

export default App;

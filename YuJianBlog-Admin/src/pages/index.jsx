import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";
import routerConfig from "../router";

const App = () => {
  const { token } = useSelector((state) => state.user);
  const routerMap = useRoutes(routerConfig);

  if (!token) return <Login />;
  else return <>{routerMap}</>;
  // else return <Suspense fallback={<div>Loading...</div>}>{routerMap}</Suspense>;
};

export default App;

import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";
import routerConfig from "../router";
import { UserDefaultState } from "../type";

const App = () => {
  const { token } = useSelector((state: UserDefaultState) => state.user);
  const routerMap = useRoutes(routerConfig);

  if (!token) return <Login />;
  else return <>{routerMap}</>;
  // else return <Suspense fallback={<div>Loading...</div>}>{routerMap}</Suspense>;
};

export default App;

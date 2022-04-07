import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import routerConfig from "../router";
import { UserDefaultState } from "../type";
import Login from "./Login";

const App = () => {
  const { token } = useSelector<UserDefaultState, UserDefaultState["user"]>((state) => state.user);
  const routerMap = useRoutes(routerConfig);

  if (!token) return <Login />;
  else return <>{routerMap}</>;
  // else return <Suspense fallback={<div>Loading...</div>}>{routerMap}</Suspense>;
};

export default App;

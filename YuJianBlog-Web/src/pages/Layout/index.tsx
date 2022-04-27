import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import "./index.less";

const Layout = () => {
  return (
    <div className="layout">
      <Navigation />
      <div className="article">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

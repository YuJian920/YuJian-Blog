import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import style from "./index.module.scss";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className={style.layout}>
      <Navigation />
      <div className={style.articleLayout}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

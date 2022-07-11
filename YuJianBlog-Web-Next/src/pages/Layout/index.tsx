import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import style from "./index.module.scss";
import { AppProps } from "../../type";

const Layout = ({ children }: AppProps) => (
  <div className={style.layout}>
    <Navigation />
    <div className={style.articleLayout}>{children}</div>
    <Footer />
  </div>
);

export default Layout;

import { Layout } from "antd";
import Header from "./components/Header";
import Sider from "./components/Sider";
import Content from "./components/Content";
import "./index.less";

const PageLayout = () => {
  return (
    <Layout className="pageLayout">
      <Header />
      <Layout>
        <Sider />
        <Content />
      </Layout>
    </Layout>
  );
};

export default PageLayout;

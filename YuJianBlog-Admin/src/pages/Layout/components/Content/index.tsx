import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import PageTab from "../PageTab";
import { TabProvider } from "../../../../context/TabContext";
import "../../index.less";

const Content = () => {
  return (
    <Layout className="pageLayout__content">
      <TabProvider>
        <PageTab />
      </TabProvider>
      <Layout.Content className="pageLayout__content-box">
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default Content;

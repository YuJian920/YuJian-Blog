import React from "react";
import { Layout, Button } from "antd";
import { WifiOutlined } from "@ant-design/icons";
import "../../index.less";

const { Header } = Layout;

const pageHeader = () => {
  return (
    <Header className="pageLayout__header">
      <div className="pageLayout__header-left">YuJian Admin</div>
      <div className="pageLayout__header-right">
        <Button shape="circle" icon={<WifiOutlined />} />
      </div>
    </Header>
  );
};

export default React.memo(pageHeader);

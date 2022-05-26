import React from "react";
import { useDispatch } from "react-redux";
import { Layout, Button, Dropdown, Menu } from "antd";
import { cleanToken } from "../../../../model/user/actions";
import YuJianLogo from "../../../../assets/image/YuJianLogo.webp";
import "../../index.less";

const pageHeader = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const onClean = () => dispatch(cleanToken());

  return (
    <Layout.Header className="pageLayout__header">
      <div className="pageLayout__header-left">
        <img className="leftLogo" src={YuJianLogo} alt="YuJianLogo" />
        <span>YuJian Admin</span>
      </div>
      <div className="pageLayout__header-right">
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>
                <Button type="link" onClick={onClean}>
                  Logout
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type="link">Hi YuJian</Button>
        </Dropdown>
      </div>
    </Layout.Header>
  );
};

export default React.memo(pageHeader);

import React from "react";
import { useDispatch } from "react-redux";
import { Layout, Button } from "antd";
import YuJianLogo from "../../../../assets/image/YuJianLogo.png";
import "../../index.less";

const { Header } = Layout;

const pageHeader = () => {
  const dispatch = useDispatch();

  return (
    <Header className="pageLayout__header">
      <div className="pageLayout__header-left">
        <img className="leftLogo" src={YuJianLogo} alt="YuJianLogo" />
        <span>YuJian Admin</span>
      </div>
      <div className="pageLayout__header-right">
        <Button
          type="link"
          onClick={() => dispatch({ type: "user/USER_RESET_TOKEN" })}
        >
          Hi YuJian
        </Button>
        {/* <Dropdown
          overlay={
            <Menu>
              <Menu.Item>
                <Button type="link">Logout</Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type="link">Hi YuJian</Button>
        </Dropdown> */}
      </div>
    </Header>
  );
};

export default React.memo(pageHeader);

import React, { useState } from "react";
import { Form, Button, Input } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../../model/user/actions";
import "./index.less";
import { User } from "../../type";

const { Password } = Input;
const { Item } = Form;

interface Props extends PropsFromRedux {}

const Login = (props: Props) => {
  const { postUserLogin } = props;

  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();

  const onLogin = async (values: User) => {
    setLoginLoading(true);
    await postUserLogin(values);
    navigate("/");
  };

  return (
    <div className="login flexEle">
      <div className="login__box flexEle">
        <Form
          className="login__box-form"
          initialValues={{ username: "", password: "" }}
          onFinish={onLogin}
        >
          <Item
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input
              size="large"
              placeholder="用户名"
              prefix={<UserOutlined />}
            />
          </Item>
          <Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Password
              size="large"
              placeholder="密码"
              prefix={<KeyOutlined />}
            />
          </Item>
          <Button
            className="button"
            size="large"
            htmlType="submit"
            block
            loading={loginLoading}
          >
            登录
          </Button>
        </Form>
      </div>
    </div>
  );
};

// @ts-ignore
const mapStateToProps = (state) => ({ token: state.user.token });
// @ts-ignore
const mapDispatchToProps = (dispatch) => ({
  postUserLogin(params: User) {
    return dispatch(actions.postUserLogin(params));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Login);

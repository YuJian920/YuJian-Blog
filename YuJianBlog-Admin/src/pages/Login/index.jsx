import React, { useState } from "react";
import { Form, Button, Input } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "@model/user/actions";
import "./index.less";

const { Password } = Input;
const { Item } = Form;

const Login = (props) => {
  const { postUserLogin } = props;

  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();

  const onLogin = async (values) => {
    setLoginLoading(true);
    await postUserLogin(values);
    navigate("/");
  };

  return (
    <div className="login flexEle">
      <div className="login__box flexEle">
        <Form
          className="login__box-form"
          initialValues={{ username: "YuJian", password: "123456789" }}
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

const mapStateToProps = (state) => ({ token: state.user.token });
const mapDispatchToProps = (dispatch) => ({
  postUserLogin(params) {
    return dispatch(actions.postUserLogin(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

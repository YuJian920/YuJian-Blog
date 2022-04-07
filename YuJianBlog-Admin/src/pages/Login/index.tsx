import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUserLogin } from "../../model/user/actions";
import { User } from "../../type";
import "./index.less";

const { Password } = Input;
const { Item } = Form;

const Login = () => {
  const [loginLoading, setLoginLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = (values: User) => {
    setLoginLoading(true);
    dispatch(postUserLogin(values));
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

export default Login;

import {
  Anchor,
  Button,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginActionAsync } from "../../store/user/async";
import useLoginStyles from "./style";

const Login = () => {
  const [loginType, setloginType] = useState(true);
  const [userNameValue, setUserNameValue] = useInputState("");
  const [passWordValue, setPassWordValue] = useInputState("");
  const [confirmValue, setConfirmValue] = useInputState("");
  const dispatch = useDispatch();
  const { classes } = useLoginStyles();

  /**
   * 提交登录或注册
   */
  const _onSumbit = () => {
    const params = {
      username: userNameValue,
      password: passWordValue,
    };
    if (loginType) {
      dispatch<any>(loginActionAsync(params));
    }
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          YuJianBlog Admin
        </Title>

        <TextInput
          label="Username"
          placeholder="Your Username"
          size="md"
          onChange={setUserNameValue}
        />
        <PasswordInput
          label="Password"
          placeholder="Your Password"
          mt="md"
          size="md"
          onChange={setPassWordValue}
        />
        {!loginType && (
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm Your Password"
            mt="md"
            size="md"
            onChange={setConfirmValue}
          />
        )}
        <Button fullWidth mt="xl" size="md" onClick={_onSumbit}>
          {loginType ? "登录" : "注册"}
        </Button>

        <Text align="center" mt="md">
          {!loginType ? "已经有账号？" : "还没有账号？"}
          <Anchor<"a">
            href="#"
            weight={700}
            onClick={(event) => {
              event.preventDefault();
              setloginType((value) => !value);
            }}
          >
            {loginType ? "注册" : "登录"}
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default Login;

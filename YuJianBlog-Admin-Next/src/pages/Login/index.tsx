import { Anchor, Button, Paper, Text, Title } from "@mantine/core";
import React from "react";
import ConfirmInput from "./components/ConfirmInput";
import PasswordInputAny from "./components/PasswordInput";
import UsernameInput from "./components/UsernameInput";
import useLoginLogic from "./hooks/useLoginLogic";
import useLoginRef from "./hooks/useLoginRef";
import useLoginStyles from "./style";
import type { LoginIocPropsType } from "./type";

const Login = () => {
  const { classes } = useLoginStyles();

  return (
    <LoginIoc classes={classes}>
      <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
        YuJianBlog Admin
      </Title>
    </LoginIoc>
  );
};

const LoginIoc = ({ classes, children }: LoginIocPropsType) => {
  const { loginType, setloginType, onPostUser } = useLoginLogic();
  const { passwordRef, usernameRef, confirmRef } = useLoginRef();

  /**
   * 切换注册模式
   * @param event
   */
  const onLoginTypeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setloginType(!loginType);
  };

  /**
   * 提交登录或注册
   */
  const _onSumbit = () => {
    const username = usernameRef.current?.usernameValue() || "";
    const password = passwordRef.current?.passwordValue() || "";
    const confirm = confirmRef.current?.confirmValue() || "";

    const params = {
      username,
      password,
      confirm,
    };

    if (loginType) onPostUser(params);
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        {children}
        <UsernameInput ref={usernameRef} />
        <PasswordInputAny ref={passwordRef} />
        {!loginType && <ConfirmInput ref={confirmRef} />}
        <Button fullWidth mt="xl" size="md" onClick={_onSumbit}>
          {loginType ? "登录" : "注册"}
        </Button>

        <Text align="center" mt="md">
          {!loginType ? "已经有账号？" : "还没有账号？"}
          <Anchor<"a">
            href="#"
            weight={700}
            onClick={(e) => onLoginTypeChange(e)}
          >
            {loginType ? "注册" : "登录"}
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default Login;

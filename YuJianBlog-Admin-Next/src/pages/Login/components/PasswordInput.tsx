import { PasswordInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { forwardRef, useImperativeHandle } from "react";
import type { PasswordInputForwardRefType } from "../type";

const PasswordInputAny = forwardRef<PasswordInputForwardRefType>(
  (props, passwordRef) => {
    const [passwordValue, setPasswordValue] = useInputState("");

    useImperativeHandle(passwordRef, () => {
      return {
        passwordValue() {
          return passwordValue;
        },
      };
    });

    return (
      <PasswordInput
        label="Password"
        placeholder="Your Password"
        mt="md"
        size="md"
        onChange={setPasswordValue}
      />
    );
  }
);

export default PasswordInputAny;

import { TextInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { forwardRef, useImperativeHandle } from "react";
import { UsernameInputForwardRefType } from "../type";

const UsernameInput = forwardRef<UsernameInputForwardRefType>(
  (props, usernameRef) => {
    const [usernameValue, setUserNameValue] = useInputState("");

    useImperativeHandle(usernameRef, () => {
      return {
        usernameValue() {
          return usernameValue;
        },
      };
    });

    return (
      <TextInput
        label="Username"
        placeholder="Your Username"
        size="md"
        onChange={setUserNameValue}
      />
    );
  }
);

export default UsernameInput;

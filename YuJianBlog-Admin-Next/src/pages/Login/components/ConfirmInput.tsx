import { PasswordInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { forwardRef, useImperativeHandle } from "react";
import type { ConfirmInputForwardRefType } from "../type";

const ConfirmInput = forwardRef<ConfirmInputForwardRefType>(
  (props, confirmRef) => {
    const [confirmValue, setConfirmValue] = useInputState("");

    useImperativeHandle(confirmRef, () => {
      return {
        confirmValue() {
          return confirmValue;
        },
      };
    });

    return (
      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm Your Password"
        mt="md"
        size="md"
        onChange={setConfirmValue}
      />
    );
  }
);

export default ConfirmInput;

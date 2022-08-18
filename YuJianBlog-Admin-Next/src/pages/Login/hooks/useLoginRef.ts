import { useRef } from "react";
import type {
  PasswordInputForwardRefType,
  UsernameInputForwardRefType,
  ConfirmInputForwardRefType,
} from "../type";

const useLoginRef = () => {
  const passwordRef = useRef<PasswordInputForwardRefType>(null);
  const usernameRef = useRef<UsernameInputForwardRefType>(null);
  const confirmRef = useRef<ConfirmInputForwardRefType>(null);

  return { passwordRef, usernameRef, confirmRef };
};

export default useLoginRef;

export interface UsernameInputForwardRefType {
  usernameValue: () => string;
}

export interface PasswordInputForwardRefType {
  passwordValue: () => string;
}

export interface ConfirmInputForwardRefType {
  confirmValue: () => string;
}

export interface UserLoginParams {
  username: string;
  password: string;
}

export interface LoginIocPropsType {
  classes: Record<"wrapper" | "form" | "title" | "logo", string>;
  children: JSX.Element;
}

export interface UserState {
  token: string | null;
}
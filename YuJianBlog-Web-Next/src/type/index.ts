export interface ArticleData {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  content: string;
  createdAt: string;
  tips: string;
  notFound: boolean;
}

export interface BlogCustom {
  id: number;
  slogan: string;
  footer: string;
}

export interface AppProps {
  children?: React.ReactNode; // best, accepts everything React can render
  // childrenElement: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
  // onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
  // props: Props & React.ComponentPropsWithoutRef<"button">; // to impersonate all the props of a button element and explicitly not forwarding its ref
  // props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
}

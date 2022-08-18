interface BaseResponse<T> {
  code: number;
  msg: string;
  data: T;
}

interface AppProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

interface Article {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  content: string;
  author: string;
  createdAt?: string;
  tips?: string;
}

interface User {
  id?: number;
  username: string;
  password: string;
}

interface UserResponse {
  token: string;
}

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
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism' {
  export { default as oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark'
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark' {
  const style: any
  export default style
}
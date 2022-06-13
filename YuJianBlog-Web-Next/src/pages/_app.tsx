import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "../assets/style/index.css";
import Layout from "./Layout";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <HeadConf />
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  </>
);

const HeadConf = () => (
  <Head>
    <meta charSet="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.webp" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="apple-mobile-web-app-title" content="YuJian's Blog" />
    <meta name="apple-mobile-web-app-status-bar-style" content="white" />
    <meta
      name="description"
      content="YuJian's Blog，一个很简单的前端博客"
    ></meta>
    <title>YuJian's Blog</title>
  </Head>
);

export default App;
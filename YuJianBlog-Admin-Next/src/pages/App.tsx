import type { ColorScheme } from "@mantine/core";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { Fragment, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import "../assets/style/index.css";
import routerMap from "../router";
import { selectUserToken } from "../store/user/select";
import Login from "./Login";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const CoreApp = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const routerElement = useRoutes(routerMap);
  const token = useSelector(selectUserToken);

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withNormalizeCSS
        withGlobalStyles
      >
        <QueryClientProvider client={queryClient}>
          {token ? <Fragment children={routerElement} /> : <Login />}
        </QueryClientProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default CoreApp;

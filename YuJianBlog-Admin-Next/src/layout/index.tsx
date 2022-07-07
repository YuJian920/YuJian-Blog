import type { MantineTheme } from "@mantine/core";
import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  const LayoutTheme = (theme: MantineTheme) => ({
    main: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  });

  return (
    <AppShell padding="md" navbar={<Navbar />} styles={LayoutTheme}>
      <Outlet />
    </AppShell>
  );
};

export default Layout;

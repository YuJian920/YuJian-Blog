import { createStyles } from "@mantine/core";

const useUserButtonStyles = createStyles((theme) => ({
  user: {
    display: "block",
    width: "100%",
    padding: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
  },
  userInfo: {
    flex: 1,
  },
}));

export default useUserButtonStyles;

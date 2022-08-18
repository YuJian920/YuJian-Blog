import {
  ActionIcon,
  Avatar,
  Group,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";
import type { UserButtonProps } from "../../type";
import useUserButtonStyles from "./style";

const UserButton = ({ image, name, email }: UserButtonProps) => {
  const { classes } = useUserButtonStyles();

  return (
    <div className={classes.user}>
      <Group>
        <Avatar src={image} radius="xl" />

        <div className={classes.userInfo}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        <ToggleColorButton />
      </Group>
    </div>
  );
};

/**
 * 切换模式按钮
 * @returns JSX.Element
 */
const ToggleColorButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
      {colorScheme === "dark" ? <Sun size={16} /> : <MoonStars size={16} />}
    </ActionIcon>
  );
};

export default UserButton;

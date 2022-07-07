import {
  ActionIcon,
  Avatar,
  Group,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";
import useUserButtonStyles from "./style";

interface UserButtonProps {
  image: string;
  name: string;
  email: string;
}

const UserButton = ({ image, name, email }: UserButtonProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
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

        <ActionIcon
          variant="default"
          onClick={() => toggleColorScheme()}
          size={30}
        >
          {colorScheme === "dark" ? <Sun size={16} /> : <MoonStars size={16} />}
        </ActionIcon>
      </Group>
    </div>
  );
};

export default UserButton;

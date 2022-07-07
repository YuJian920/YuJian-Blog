import { Title, Text, Button, Container, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import useNotFoundStyles from "./style";

const NotFound = () => {
  const { classes } = useNotFoundStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>这里什么也没有</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        你访问的内容并不在这里
      </Text>
      <Group position="center">
        <Link to="/">
          <Button variant="subtle" size="md">
            返回首页
          </Button>
        </Link>
      </Group>
    </Container>
  );
};

export default NotFound;

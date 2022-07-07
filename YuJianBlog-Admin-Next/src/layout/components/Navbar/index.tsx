import { Group, Navbar, ScrollArea, Title } from "@mantine/core";
import { Dashboard, Notes } from "tabler-icons-react";
import YuJianLogo from "../../../assets/image/YuJianLogo.webp";
import Avatar from "../Avatar";
import LinkGroup from "../LinkGroup";
import useLayoutStyles from "./style";

const mockdata = [
  { label: "Dashboard", icon: Dashboard, links: "/" },
  {
    label: "博客管理",
    icon: Notes,
    initiallyOpened: true,
    links: [
      { label: "文章列表", link: "/Blog/ArticleList" },
      { label: "文章编辑", link: "/Blog/ArticleEdit" },
      { label: "博客样式", link: "/Blog/Custom" },
    ],
  },
];

const linkMap = mockdata.map((mapItem) => (
  <LinkGroup {...mapItem} key={mapItem.label} />
));

const LayoutNavbar = () => {
  const { classes } = useLayoutStyles();

  return (
    <Navbar
      width={{ sm: 300 }}
      p="md"
      style={{ paddingBottom: 0 }}
      className={classes.navbar}
    >
      <Navbar.Section className={classes.header}>
        <Group position="center" spacing="xs">
          <img className={classes.logo} src={YuJianLogo} alt="YuJianLogo" />
          <Title order={3}>YuJian Blog</Title>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{linkMap}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Avatar image="" name="YuJian" email="YuJian@yujian.icu" />
      </Navbar.Section>
    </Navbar>
  );
};

export default LayoutNavbar;

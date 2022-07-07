import { Box, Collapse, Group, ThemeIcon, UnstyledButton } from "@mantine/core";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Icon as TablerIcon } from "tabler-icons-react";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import useLinkGroupStyles from "./style";

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[] | string;
}

const LinkGroup = ({
  icon: Icon,
  label,
  initiallyOpened,
  links,
}: LinksGroupProps) => {
  const { classes, theme } = useLinkGroupStyles();
  const navigate = useNavigate();

  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? ChevronRight : ChevronLeft;

  /**
   * 渲染子菜单项
   */
  const linkItem = (hasLinks ? links : []).map((mapItem) => (
    <Link className={classes.link} to={mapItem.link} key={mapItem.label}>
      {mapItem.label}
    </Link>
  ));

  /**
   * 菜单按钮点击
   */
  const _onBigMenuItem = () => {
    if (!Array.isArray(links)) navigate(links as string);
    setOpened((opened) => !opened);
  };

  return (
    <>
      <UnstyledButton onClick={_onBigMenuItem} className={classes.control}>
        <Group position="apart" spacing={0}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{linkItem}</Collapse> : null}
    </>
  );
};

export default LinkGroup;

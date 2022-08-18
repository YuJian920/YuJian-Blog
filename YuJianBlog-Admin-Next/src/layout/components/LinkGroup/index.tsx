import { Box, Collapse, Group, ThemeIcon, UnstyledButton } from "@mantine/core";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import type { LinkGroupFineTypeProps, LinksGroupProps } from "../../type";
import useLinkGroupStyles from "./style";

const LinkGroup = ({
  icon: Icon,
  label,
  initiallyOpened,
  links,
}: LinksGroupProps) => (
  <LinkGroupIoc links={links} initiallyOpened={initiallyOpened}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <ThemeIcon variant="light" size={30}>
        <Icon size={18} />
      </ThemeIcon>
      <Box ml="md">{label}</Box>
    </Box>
  </LinkGroupIoc>
);

const LinkGroupIoc = ({
  links,
  initiallyOpened,
  children,
}: LinkGroupFineTypeProps) => {
  const [opened, setOpened] = useState(initiallyOpened || false);
  const { classes, theme } = useLinkGroupStyles();
  const navigate = useNavigate();

  const hasLinks = Array.isArray(links);
  const ChevronIcon = theme.dir === "ltr" ? ChevronRight : ChevronLeft;

  const chevronIconStyle = {
    transform: opened ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)` : "none",
  };

  /**
   * 渲染子菜单项
   * @returns JSX.Element[]
   */
  const linkItem = useMemo(
    () =>
      (Array.isArray(links) ? links : []).map((mapItem) => (
        <Link className={classes.link} to={mapItem.link} key={mapItem.label}>
          {mapItem.label}
        </Link>
      )),
    [links]
  );

  /**
   * 菜单按钮点击
   */
  const _onBigMenuItem = () => {
    if (!Array.isArray(links)) navigate(links!);
    setOpened(!opened);
  };

  return (
    <>
      <UnstyledButton onClick={_onBigMenuItem} className={classes.control}>
        <Group position="apart" spacing={0}>
          {children}
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              style={chevronIconStyle}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{linkItem}</Collapse> : null}
    </>
  );
};

export default LinkGroup;

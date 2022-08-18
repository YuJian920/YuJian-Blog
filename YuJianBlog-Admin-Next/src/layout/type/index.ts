import type { Icon as TablerIcon } from "tabler-icons-react";

export interface UserButtonProps {
  image: string;
  name: string;
  email: string;
}

export interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[] | string;
}

export type LinkGroupFineTypeProps = Pick<
  LinksGroupProps,
  "links" | "initiallyOpened"
> & {
  children: JSX.Element;
};

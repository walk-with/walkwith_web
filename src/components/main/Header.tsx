import { FC } from "react";
import { MenuIcon, SearchIcon } from "../../assets/icons";
import { HeaderFrame } from "../layout/HeaderFrame";

export const Header: FC = () => {
  return (
    <HeaderFrame justifyContent="justify-between">
      <MenuIcon width="20px" height="20px" />
      <span>WalkWith</span>
      <SearchIcon width="20px" height="20px" />
    </HeaderFrame>
  );
};

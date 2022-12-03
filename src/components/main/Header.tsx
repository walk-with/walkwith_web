import { FC } from "react";
import { MenuIcon, SearchIcon } from "../../assets/icons";
import { HeaderFrame } from "../layout/HeaderFrame";

export const Header: FC = () => {
  return (
    <HeaderFrame>
      <HeaderFrame.Left>
        <MenuIcon width="20px" height="20px" />
      </HeaderFrame.Left>
      <HeaderFrame.Title>WalkWith</HeaderFrame.Title>
      <HeaderFrame.Right>
        <SearchIcon width="20px" height="20px" />
      </HeaderFrame.Right>
    </HeaderFrame>
  );
};

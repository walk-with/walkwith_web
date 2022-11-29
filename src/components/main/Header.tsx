import { FC } from "react";
import { MenuIcon, SearchIcon } from "../../assets/icons";

export const Header: FC = () => {
  return (
    <div className="flex w-screen h-8 items-center justify-between p-2">
      <MenuIcon width="20px" height="20px" />
      <span>WalkWith</span>
      <SearchIcon width="20px" height="20px" />
    </div>
  );
};

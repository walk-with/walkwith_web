import classNames from "classnames";
import { FC, ReactNode } from "react";

interface HeaderFrameProps {
  children: ReactNode;
  justifyContent?: "justify-between" | "justify-center";
}

export const HeaderFrame: FC<HeaderFrameProps> = ({
  children,
  justifyContent,
}) => {
  return (
    <div
      className={classNames(
        "relative",
        "flex",
        "w-screen",
        "h-8",
        "items-center",
        "p-2",
        justifyContent
      )}
    >
      {children}
    </div>
  );
};

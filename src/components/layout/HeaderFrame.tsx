import { FC, ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const HeaderLeft: FC<HeaderProps> = ({ children }) => {
  return <div className="absolute left-0">{children}</div>;
};

const HeaderRight: FC<HeaderProps> = ({ children }) => {
  return <div className="absolute right-0">{children}</div>;
};

const HeaderTitle: FC<HeaderProps> = ({ children }) => {
  return <p>{children}</p>;
};

export const BaseFrame: FC<HeaderProps> = ({ children }) => {
  return (
    <div
      className={"relative flex w-screen h-8 items-center justify-center p-2"}
    >
      {children}
    </div>
  );
};

export const HeaderFrame = Object.assign(BaseFrame, {
  Left: HeaderLeft,
  Right: HeaderRight,
  Title: HeaderTitle,
});

import { ChevronLeftIcon } from "../../assets/icons";
import { HeaderFrame } from "../layout/HeaderFrame";

export const PartiesPageHearder = () => {
  return (
    <HeaderFrame>
      <HeaderFrame.Left>
        <ChevronLeftIcon width="20px" height="20px" />
      </HeaderFrame.Left>
      <HeaderFrame.Title>파티타이틀</HeaderFrame.Title>
    </HeaderFrame>
  );
};

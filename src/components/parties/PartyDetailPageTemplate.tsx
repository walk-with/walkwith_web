"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { FC } from "react";
import { PartiesPageHearder } from "./Header";
import { PartyInformationTemplate } from "./PartyInformationTemplate";

enum PartyDetailTab {
  INFORMATION = "information",
  CHAT = "chat",
}

interface PartyDetailPageTemplateProps {
  partyId: string;
}
export const PartyDetailPageTemplate: FC<PartyDetailPageTemplateProps> = ({
  partyId,
}) => {
  return (
    <>
      <PartiesPageHearder />
      <div className="flex flex-col gap-6">
        <Tabs.Root
          className="PartiesPageTabsRoot"
          defaultValue={PartyDetailTab.INFORMATION}
        >
          <Tabs.List className="flex">
            <Tabs.Trigger
              value={PartyDetailTab.INFORMATION}
              className="flex-1 py-2 radixActive:border-b"
            >
              상세 정보
            </Tabs.Trigger>
            <Tabs.Trigger
              value={PartyDetailTab.CHAT}
              className="flex-1 py-2 radixActive:border-b"
            >
              채팅
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value={PartyDetailTab.INFORMATION}>
            <PartyInformationTemplate partyId={partyId} />
          </Tabs.Content>
          <Tabs.Content value={PartyDetailTab.CHAT}></Tabs.Content>
        </Tabs.Root>
      </div>
    </>
  );
};

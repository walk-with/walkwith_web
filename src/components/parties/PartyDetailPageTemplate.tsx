"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { PartiesPageHearder } from "./Header";

enum PartyDetailTab {
  INFORMATION = "information",
  CHAT = "chat",
}

export const PartyDetailPageTemplate = () => {
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
              className="flex-1 py-2"
            >
              상세 정보
            </Tabs.Trigger>
            <Tabs.Trigger value={PartyDetailTab.CHAT} className="flex-1 py-2">
              채팅
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value={PartyDetailTab.INFORMATION}></Tabs.Content>
          <Tabs.Content value={PartyDetailTab.CHAT}></Tabs.Content>
        </Tabs.Root>
      </div>
    </>
  );
};

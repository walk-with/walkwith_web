"use client";

import { FC } from "react";
import { useQuery } from "react-query";
import { Party } from "../../../types";
import { getParty } from "../../api/getParty";
import { PartyAttendees } from "./PartyAttendees";
import { PartyInfoCard } from "./PartyInfoCard";
import { PartyMap } from "./PartyMap";

export const PartyInformationTemplate: FC<{ partyId: string }> = ({
  partyId,
}) => {
  const { data } = useQuery<Party>(
    ["party", partyId],
    ({ queryKey }) => getParty(queryKey[1] as string),
    { enabled: !!partyId }
  );

  if (!data) return <div>SKELETON</div>;

  return (
    <div className="flex flex-col gap-6 px-6 py-8">
      <PartyInfoCard
        startAt={new Date().toISOString()}
        location="우리집 앞"
        tags={["태그1", "태그2"]}
      />
      <PartyAttendees attendees={data.attendees} />
      <PartyMap longitude={0} latitude={0} />
    </div>
  );
};

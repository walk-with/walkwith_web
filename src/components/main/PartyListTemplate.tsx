"use client";
import { FC } from "react";
import { useQuery } from "react-query";
import { getParties } from "../../api/getParties";
import { PartyList } from "./PartyList";

export const PartyListTemplate: FC = () => {
  const { data } = useQuery("parties", getParties);

  return <PartyList parties={data!} />;
};

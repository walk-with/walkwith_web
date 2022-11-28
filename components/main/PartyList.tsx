"use client";

import { FC } from "react";
import { getParties } from "../../api/getParties";
import Image from "next/image";
import { useQuery } from "react-query";

export const PartyList: FC = () => {
  const { data } = useQuery("parties", getParties);
  return (
    <div>
      <p>주변 산책 리스트</p>
      {data?.map((party) => (
        <div key={party.id} className="flex justify-between p-2">
          <Image
            src={"/person.svg"}
            width={30}
            height={30}
            alt={`${party.host.name}의 사진`}
            className="bg-slate-50 w-8 h-8"
          />
          <div>
            <div>{party.name}</div>
            <div className="flex gap-2">
              {party.tags.map((tag, i) => (
                <span key={i} className="p-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>{party.startAt}</div>
        </div>
      ))}
    </div>
  );
};

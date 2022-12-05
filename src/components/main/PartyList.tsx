"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Party } from "../../../types";

interface PartyListProps {
  parties: Party[];
}

export const PartyList: FC<PartyListProps> = ({ parties = [] }) => {
  return (
    <div>
      <p>주변 산책 리스트</p>
      {parties?.map((party) => (
        <Link
          href={`parties/${party.id}`}
          key={party.id}
          className="flex justify-between p-2"
        >
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
        </Link>
      ))}
    </div>
  );
};

import dayjs from "dayjs";
import { NextApiRequest, NextApiResponse } from "next";
import { Party } from "../../../types";

const mockDogs = [
  {
    id: "ogu",
    name: "ogu",
    birthYear: 2019,
    weight: 11.2,
    sex: 0,
    tags: ["똥싸개", "돼지"],
  },
  {
    id: "gom",
    name: "곰",
    birthYear: 2020,
    weight: 7,
    sex: 1,
    tags: ["포메", "인싸"],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const mockParty: Party = {
    id: "id",
    name: "테스트 산책 모임",
    tags: ["대형견", "소형견", "테스트"],
    startAt: dayjs("2021-12-31").toISOString(),
    host: mockDogs[0],
    attendees: mockDogs,
  };

  res.status(200).json(mockParty);
}

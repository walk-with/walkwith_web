import { NextApiRequest, NextApiResponse } from "next";
import { Party } from "../../../types";

const date = new Date().toISOString();
export default function handler(_: NextApiRequest, res: NextApiResponse) {
  const mockPartyList: Party[] = Array.from(Array(10)).map(
    (_, i) =>
      ({
        id: i.toString(),
        name: `테스트 산책 모임 ${i}`,
        tags: ["tag1", "tag2", "tag3"],
        startAt: date,
        host: { name: "오구" },
      } as Party)
  );
  res.status(200).json(mockPartyList);
}

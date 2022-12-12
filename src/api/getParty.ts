import { Party } from "../../types";

// TODO: revalidate , cache 옵션, fetch no-opt 기본 동작 확인하기
export const getParty = (partyId: string) => {
  const url = new URL(process.env.NEXT_PUBLIC_API_BASE_URL!);
  url.pathname = `api/parties/${partyId}`;

  return fetch(url).then(async (res) => {
    const data: Party = await res.json();
    return data;
  });
};

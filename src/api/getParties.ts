import { Party } from "../../types";

// TODO: revalidate , cache 옵션, fetch no-opt 기본 동작 확인하기
export const getParties = () => {
  const url = new URL(process.env.NEXT_PUBLIC_API_BASE_URL!);
  url.pathname = "api/parties";

  return fetch(url, { next: { revalidate: 60 } }).then(async (res) => {
    const data: Party[] = await res.json();
    return data;
  });
};

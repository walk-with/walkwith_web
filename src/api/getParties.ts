import { Party } from "../../types";

export const getParties = () => {
  const url = new URL(process.env.NEXT_PUBLIC_API_BASE_URL!);
  url.pathname = "api/parties";

  return fetch(url).then(async (res) => {
    const data: Party[] = await res.json();
    return data;
  });
};

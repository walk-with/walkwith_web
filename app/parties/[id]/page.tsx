import { getParties } from "../../../src/api/getParties";

export async function generateStaticParams() {
  const parties = await getParties();

  return parties.map((party) => ({
    id: party.id,
  }));
}

export default function PartyDetailPage({ params }: any) {
  const { id } = params;
  return <div>{`Party :${id}`}</div>;
}

import { Map } from "../src/components/main/Map";
import { PartyList } from "../src/components/main/PartyList";
import "../styles/globals.css";

export default function Main() {
  return (
    <div className="flex flex-col gap-6">
      <Map />
      <PartyList />
    </div>
  );
}

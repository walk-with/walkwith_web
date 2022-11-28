import Script from "next/script";
import { Map } from "../components/main/Map";
import { PartyList } from "../components/main/PartyList";
import "../styles/globals.css";

export default function Main() {
  return (
    <div className="flex flex-col gap-6">
      <Map />
      <PartyList />
    </div>
  );
}

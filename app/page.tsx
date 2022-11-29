import { Suspense } from "react";
import { Map } from "../src/components/main/Map";
import { PartyList } from "../src/components/main/PartyList";
import "../styles/globals.css";

export default function Main() {
  return (
    <div className="flex flex-col gap-6">
      <Map />
      <Suspense fallback={<div>LOADING LIST...</div>}>
        <PartyList />
      </Suspense>
    </div>
  );
}

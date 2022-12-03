import { Suspense } from "react";
import { Header } from "../src/components/main/Header";
import { Map } from "../src/components/main/Map";
import { PartyList } from "../src/components/main/PartyList";
import "../styles/globals.css";

export default function Main() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-6">
        <Map />
        {/* TODO: Skeleton */}
        <Suspense fallback={<div>LOADING LIST...</div>}>
          <PartyList />
        </Suspense>
      </div>
    </>
  );
}

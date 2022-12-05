import { Suspense } from "react";
import { Header } from "../src/components/main/Header";
import { Map } from "../src/components/main/Map";
import { PartyListTemplate } from "../src/components/main/PartyListTemplate";
import "../styles/globals.css";

export default function MainPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-6">
        <Map />
        {/* TODO: Skeleton */}
        <Suspense fallback={<div>LOADING LIST...</div>}>
          <PartyListTemplate />
        </Suspense>
      </div>
    </>
  );
}

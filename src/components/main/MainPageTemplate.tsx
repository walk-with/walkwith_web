import { atom } from "jotai";
import { Context, createContext, Suspense } from "react";
import { Header } from "./Header";
import { Map } from "./Map";
import { PartyListTemplate } from "./PartyListTemplate";

export const MainPageTemplate = () => {
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
};

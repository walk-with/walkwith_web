"use client";
import { FC, useEffect } from "react";
import { useMap } from "../../hooks/useMap";

// TODO : 네이버 맵 관련 타이핑 보완, LOADING 보완
interface PartyMapProps {
  longitude: number;
  latitude: number;
}

export const PartyMap: FC<PartyMapProps> = () => {
  const { initializeMap, clearMap } = useMap({
    targetElementId: "party-map",
  });

  useEffect(() => {
    return clearMap;
  }, [clearMap]);

  useEffect(() => {
    initializeMap(37.5663, 126.9779);
  }, [initializeMap]);

  return (
    <div
      id="party-map"
      className="w-screen -mx-6 h-60 flex justify-center items-center outline-none"
    >
      LOADING
    </div>
  );
};

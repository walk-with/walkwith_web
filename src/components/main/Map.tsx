"use client";
import { FC, useEffect } from "react";
import { useMap } from "../../hooks/useMap";
import { usePosition } from "../../stores/position";
import { debounce } from "../../utils/debounce";

// TODO : 네이버 맵 관련 타이핑 보완, LOADING 보완
interface MapProps {}

export const Map: FC<MapProps> = () => {
  const [_, setPosition] = usePosition();

  const { initializeMap, clearMap } = useMap({
    targetElementId: "map",
    onChangeBounds: debounce((b) => setPosition(b), 500),
    onLoad: setPosition,
  });

  useEffect(() => {
    return clearMap;
  }, [clearMap]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords || {};
        initializeMap(latitude, longitude);
      },
      (error) => {
        const SEOUL_CITYHALL_POSITION: [number, number] = [37.33, 126.58];
        initializeMap.apply(null, SEOUL_CITYHALL_POSITION);

        console.error(error);
      }
    );
  }, [initializeMap]);

  return (
    <div
      id="map"
      className="w-screen h-60 flex justify-center items-center outline-none"
    >
      LOADING
    </div>
  );
};

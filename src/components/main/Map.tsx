"use client";
import { FC, useEffect, useRef, useState } from "react";
import { throttle } from "../../utils/throttle";

// TODO : 네이버 맵 관련 타이핑 보완, LOADING 보완
interface MapProps {
  onChangeBounds: (map: any, bounds: any) => void;
}

export const Map: FC<MapProps> = ({ onChangeBounds }) => {
  const mapRef = useRef();

  useEffect(() => {
    const initializeMap = (latitude: number, longitude: number) => {
      mapRef.current = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(latitude, longitude),
        zoomControl: false,
      });

      if (typeof onChangeBounds === "function") {
        const listener = throttle(function (bounds: any) {
          console.log({ CurrentBounds: bounds });
          onChangeBounds(mapRef.current, bounds);
        }, 500);

        window.naver.maps.Event.addListener(
          mapRef.current,
          "bounds_changed",
          listener
        );
      }
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords || {};
        initializeMap(latitude, longitude);
      },
      (error) => {
        const SEOUL_CITYHALL_POSITION: [number, number] = [37.33, 126.58];

        if (error.code == error.PERMISSION_DENIED) {
          console.log("Geolocation: Permission Denied!");
        }

        initializeMap.apply(null, SEOUL_CITYHALL_POSITION);
      }
    );
  }, [onChangeBounds]);

  //   if (!myPos)
  //     return (
  //       <div className="w-screen h-60 flex justify-center items-center">
  //         LOADING
  //       </div>
  //     );

  return (
    <div id="map" className="w-screen h-60">
      LOADING
    </div>
  );
};

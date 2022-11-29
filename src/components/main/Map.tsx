"use client";
import { useEffect, useRef, useState } from "react";

export const Map = () => {
  const [myPos, setMyPos] = useState<{ lat: number; lng: number }>();
  const mapRef = useRef();

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) =>
      setMyPos({ lat: coords.latitude, lng: coords.longitude })
    );
  }, []);

  useEffect(() => {
    if (!myPos) {
      return;
    }
    mapRef.current = new window.naver.maps.Map("map", {
      center: new window.naver.maps.LatLng(myPos.lat, myPos.lng),
      zoomControl: true,
    });
  }, [myPos]);

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

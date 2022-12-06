import { useCallback, useRef } from "react";
import { LatLngBound } from "../../types/map";

interface MapConfig {
  targetElementId: string;
  onChangeBounds?: (bounds: LatLngBound) => void;
  onLoad?: (bounds: LatLngBound) => void;
}
export const useMap = (mapConfig: MapConfig) => {
  const mapRef = useRef<any>();

  const initializeMap = (latitude: number, longitude: number) => {
    if (mapRef.current) return;

    mapRef.current = new window.naver.maps.Map(mapConfig.targetElementId, {
      center: new window.naver.maps.LatLng(latitude, longitude),
      zoomControl: false,
    });

    // add map init event listener
    if (typeof mapConfig.onLoad === "function") {
      window.naver.maps.Event.once(mapRef.current, "init", () => {
        mapConfig.onLoad!(mapRef.current.bounds);
      });
    }

    // add bounds changed event listener
    if (typeof mapConfig.onChangeBounds === "function") {
      window.naver.maps.Event.addListener(
        mapRef.current,
        "bounds_changed",
        () => mapConfig.onChangeBounds!(mapRef.current.bounds)
      );
    }
  };

  const clearMap = useCallback(() => {
    mapRef.current?.destroy();
  }, []);

  return {
    initializeMap,
    clearMap,
  };
};

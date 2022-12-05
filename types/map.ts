export interface LatLng {
  lat: () => number;
  lng: () => number;
  points: () => [number, number];
}

export interface LatLngBound {
  getCenter: () => LatLng;
  getMax: () => LatLng;
  getMin: () => LatLng;
}

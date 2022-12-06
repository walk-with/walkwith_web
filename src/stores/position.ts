import { atom, useAtom } from "jotai";
import { LatLngBound } from "../../types/map";

const positionAtom = atom<LatLngBound | null>(null);

export const usePosition = () => useAtom(positionAtom);

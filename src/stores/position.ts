import { atom } from "jotai";

export interface Position {
  _min: number;
  _max: number;
  _ne: number;
  _sw: number;
}

export const positionAtom = atom<Position | null>(null);

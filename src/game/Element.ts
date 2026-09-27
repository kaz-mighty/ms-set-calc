import * as Data from "./Data";
import lang from "../lang";

export enum ElementID {
  NONE,
  FIRE,
  WATER,
  LEAF,
  LIGHT,
  DARK,
  NUM
}

export const ElementNames = lang == 'jp' ? [
  'NONE',
  '火',
  '水',
  '木',
  '光',
  '闇',
] : new Array(ElementID.NUM).fill(null).map((_, i) => ElementID[i]);

export interface Elements {
  [elementID: number]: number;
}

export function decode(encoded: string, count = 3): Elements {
  const elements: Elements = {};
  for (let i = 0; i < count; i++) {
    const start = i * 3;
    const id = Data.parseInt(encoded, start, 1);
    if (id <= ElementID.NONE) continue;
    elements[id] = Data.parseInt(encoded, start + 1, 2);
  }
  return elements;
}

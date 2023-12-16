import { rotate } from "./vertices";

export const TRIANGLE = [
  { x: 45, y: 0 },
  { x: 90, y: 46 },
  { x: 0, y: 46 },
];

export const RECTANGLE = [
  { x: 0, y: 0 },
  { x: 46, y: 0 },
  { x: 46, y: 90 },
  { x: 0, y: 90 },
];

export const VERTICAL_RECTANGLE = RECTANGLE;
export const HORIZONTAL_RECTANGLE = rotate(RECTANGLE, 90);

export const HALF_HORIZONTAL_RECTANGLE = [
  { x: 0, y: 0 },
  { x: 90, y: 0 },
  { x: 90, y: 23 },
  { x: 0, y: 23 },
];

export const SQUARE = [
  { x: 0, y: 0 },
  { x: 46, y: 0 },
  { x: 46, y: 46 },
  { x: 0, y: 46 },
];

export const BRIDGE = [
  { x: 0, y: 0 },
  { x: 90, y: 0 },
  { x: 90, y: 46 },
  { x: 69, y: 46 },
  { x: 68.88084411621094, y: 43.5937614440918 },
  { x: 67.8717269897461, y: 38.705997467041016 },
  { x: 65.86751556396484, y: 34.135292053222656 },
  { x: 62.96001434326172, y: 30.078617095947266 },
  { x: 59.27958297729492, y: 26.707386016845703 },
  { x: 54.98304748535156, y: 24.16781234741211 },
  { x: 50.252769470214844, y: 22.576385498046875 },
  { x: 45.2949333190918, y: 22.001811981201172 },
  { x: 45, y: 22 },
  { x: 40.32447052001953, y: 22.455034255981445 },
  { x: 35.55621337890625, y: 23.928831100463867 },
  { x: 31.19854164123535, y: 26.361955642700195 },
  { x: 27.436845779418945, y: 29.6422176361084 },
  { x: 24.43075942993164, y: 33.62639236450195 },
  { x: 22.314245223999023, y: 38.1462516784668 },
  { x: 21.18478012084961, y: 43.00761413574219 },
  { x: 21, y: 46 },
  { x: 0, y: 46 },
];

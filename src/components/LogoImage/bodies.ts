import Matter, { Vector } from "matter-js";
import {
  TRIANGLE,
  VERTICAL_RECTANGLE,
  HALF_HORIZONTAL_RECTANGLE,
  SQUARE,
  BRIDGE,
} from "./shapes";

import { move, bottom } from "./vertices";

const PATH_OFFSET = 4;
const BEIGE = "#D7C3AD";
const BLUE = "#2556A2";
const GREEN = "#389642";
const RED = "#D80032";
const YELLOW = "#E6C320";

type Body = {
  name?: string;
  fill: string;
  vertices: Vector[];
};

const triangle: Body = {
  name: "triangle",
  fill: BLUE,
  vertices: move(TRIANGLE, 72, 0),
};

const topRectangle = {
  name: "topRectangle",
  fill: BEIGE,
  vertices: move(
    VERTICAL_RECTANGLE,
    94,
    bottom(triangle.vertices) + PATH_OFFSET
  ),
};

const halfRectangle = {
  name: "halfRectangle",
  fill: BEIGE,
  vertices: move(
    HALF_HORIZONTAL_RECTANGLE,
    72,
    bottom(topRectangle.vertices) + PATH_OFFSET
  ),
};

const firstSquare = {
  name: "firstSquare",
  fill: BEIGE,
  vertices: move(SQUARE, 47, bottom(halfRectangle.vertices) + PATH_OFFSET),
};

const secondSquare = {
  name: "secondSquare",
  fill: BEIGE,
  vertices: move(SQUARE, 141, bottom(halfRectangle.vertices) + PATH_OFFSET),
};

const firstBridge = {
  name: "firstBridge",
  fill: GREEN,
  vertices: move(BRIDGE, 47, bottom(firstSquare.vertices) + PATH_OFFSET),
};

const secondBrigde = {
  name: "secondBrigde",
  fill: RED,
  vertices: move(BRIDGE, 141, bottom(firstSquare.vertices) + PATH_OFFSET),
};

const supportingFirstRectangle = {
  name: "supportingFirstRectangle",
  fill: BEIGE,
  vertices: move(
    VERTICAL_RECTANGLE,
    22,
    bottom(firstBridge.vertices) + PATH_OFFSET
  ),
};

const supportingSquare = {
  name: "supportingSquare",
  fill: BLUE,
  vertices: move(SQUARE, 116, bottom(firstBridge.vertices) + PATH_OFFSET),
};

const supportingSecondRectangle = {
  name: "supportingSecondRectangle",
  fill: BEIGE,
  vertices: move(
    VERTICAL_RECTANGLE,
    210,
    bottom(firstBridge.vertices) + PATH_OFFSET
  ),
};

const bottomFirstRectangle = {
  name: "bottomFirstRectangle",
  fill: RED,
  vertices: move(
    BRIDGE,
    0,
    bottom(supportingFirstRectangle.vertices) + PATH_OFFSET
  ),
};

const bottomSecondRectangle = {
  name: "bottomSecondRectangle",
  fill: BEIGE,
  vertices: move(
    VERTICAL_RECTANGLE,
    116,
    bottom(supportingSquare.vertices) + PATH_OFFSET
  ),
};

const bottomSquare = {
  name: "bottomSquare",
  fill: YELLOW,
  vertices: move(
    SQUARE,
    210,
    bottom(supportingSecondRectangle.vertices) + PATH_OFFSET
  ),
};

export default [
  triangle,
  topRectangle,
  halfRectangle,
  firstSquare,
  secondSquare,
  firstBridge,
  secondBrigde,
  supportingFirstRectangle,
  supportingSquare,
  supportingSecondRectangle,
  bottomFirstRectangle,
  bottomSecondRectangle,
  bottomSquare,
];

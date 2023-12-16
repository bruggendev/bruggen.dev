import Matter, { Vector } from "matter-js";

export const rotate = (vertices: Vector[], angle: number, origin?: Vector) => {
  const { x: originX, y: originY } = origin || Matter.Vertices.centre(vertices);

  const rotatedShape = vertices.map(({ x, y }) => {
    const radians = (Math.PI / 180) * angle;

    const cos = Math.cos(radians);
    const sin = Math.sin(radians);

    const nx = cos * (x - originX) + sin * (y - originY) + originX;
    const ny = cos * (y - originY) - sin * (x - originX) + originY;

    return { x: nx, y: ny };
  });

  const left = Math.min(...rotatedShape.map((v) => v.x));
  const top = Math.min(...rotatedShape.map((v) => v.y));

  return rotatedShape.map((v) => ({
    x: v.x - left,
    y: v.y - top,
  }));
};

export const move = (vertices: Vector[], x: number, y: number) => {
  return vertices.map((v) => ({ x: v.x + x, y: v.y + y }));
};

export const top = (vertices: Vector[]) => {
  return Math.min(...vertices.map((v) => v.y));
};

export const bottom = (vertices: Vector[]) => {
  return Math.max(...vertices.map((v) => v.y));
};

export const left = (vertices: Vector[]) => {
  return Math.min(...vertices.map((v) => v.x));
};

export const right = (vertices: Vector[]) => {
  return Math.max(...vertices.map((v) => v.x));
};

export const width = (vertices: Vector[]) => {
  return Math.max(...vertices.map((v) => v.x)) - left(vertices);
};

export const height = (vertices: Vector[]) => {
  return bottom(vertices) - Math.min(...vertices.map((v) => v.y));
};

export const center = (vertices: Vector[]) => {
  return {
    x: left(vertices) + width(vertices) / 2,
    y: top(vertices) + height(vertices) / 2,
  };
};

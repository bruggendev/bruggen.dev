import { Render } from "matter-js";

export function setSize(render: Render, width: number, height: number) {
  render.options.width = width;
  render.options.height = height;
  render.bounds.max.x = render.bounds.min.x + width;
  render.bounds.max.y = render.bounds.min.y + height;

  if (render.options.pixelRatio !== 1) {
    Render.setPixelRatio(render, render.options.pixelRatio!);
  } else {
    render.canvas.width = width;
    render.canvas.height = height;
  }
}

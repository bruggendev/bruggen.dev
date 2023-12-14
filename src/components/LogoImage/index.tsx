import { onCleanup, onMount } from "solid-js";
import styles from "./style.module.css";
import { SVGPath, RectanglePath, Boundaries } from "./Path";
import LogoSVG from "./LogoSVG";

type Shapes = (SVGPath | RectanglePath)[];

function createShapes(svgElement: SVGElement): Shapes {
  return [...svgElement.childNodes].flatMap((node, index) => {
    let path;
    if (node instanceof SVGPathElement) {
      path = new SVGPath(node);
    }

    if (node instanceof SVGRectElement) {
      path = new RectanglePath(node);
    }

    if (path) {
      path.debug = index === 12;
      return path;
    }

    return [];
  });
}

function translatePosition(x: number, y: number, canvas: HTMLCanvasElement) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  return [(x - rect.left) * scaleX, (y - rect.top) * scaleY];
}

function getScaleForCanvas(canvas: HTMLCanvasElement): [number, number] {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  return [scaleX, scaleY];
}

function findShapeByPoint(shapes: Shapes, [x, y]: [number, number]) {
  return shapes.find((shape) => shape.inInside(x, y));
}

export default function LogoImage() {
  let canvasElement: HTMLCanvasElement;
  let svgElement: SVGElement;

  onMount(() => {
    const context = canvasElement.getContext("2d");

    if (!context) return;

    const shapes = createShapes(svgElement);

    canvasElement.style.display = "inline-block";
    svgElement.style.display = "none";

    context.globalCompositeOperation = "destination-over";

    let frame = requestAnimationFrame(loop);
    let targetShape: SVGPath | RectanglePath | undefined;

    window.addEventListener("mousedown", (event: MouseEvent) => {
      const [x, y] = translatePosition(
        event.clientX,
        event.clientY,
        canvasElement
      );

      const shape = findShapeByPoint(shapes, [x, y]);

      if (shape) {
        targetShape = shape;
      }
    });

    window.addEventListener("mouseup", (_event) => {
      targetShape = undefined;
    });

    window.addEventListener("mousemove", (event) => {
      if (targetShape && canvasElement) {
        const [scaleX, scaleY] = getScaleForCanvas(canvasElement);
        const movementX = event.movementX * scaleX;
        const movementY = event.movementY * scaleY;

        targetShape.x = Math.min(
          canvasElement.width - targetShape.width,
          Math.max(0, targetShape.x + movementX)
        );

        targetShape.y = Math.min(
          canvasElement.height - targetShape.height,
          Math.max(0, targetShape.y + movementY)
        );
      }
    });

    function loop(_timeStamp: number) {
      if (!context) return;

      frame = requestAnimationFrame(loop);

      context.save();
      context.clearRect(0, 0, canvasElement.width, canvasElement.height);

      shapes.forEach((shape) => shape.draw(context));

      context.restore();
    }

    onCleanup(() => cancelAnimationFrame(frame));
  });

  return (
    <>
      <canvas
        ref={(el) => (canvasElement = el)}
        id="logo"
        width="256"
        height="410"
        style="display: none;"
        class={styles.LogoImage}
      ></canvas>
      <LogoSVG ref={(el: SVGElement) => (svgElement = el)} />
    </>
  );
}

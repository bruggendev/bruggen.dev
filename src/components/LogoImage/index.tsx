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

function translateMousePosition(event: MouseEvent, canvas: HTMLCanvasElement) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  return [
    (event.clientX - rect.left) * scaleX,
    (event.clientY - rect.top) * scaleY,
  ];
}

function findShapeByPoint(shapes: Shapes, [x, y]: [number, number]) {
  return shapes.find((shape) => shape.inInside(x, y));
}

function findShapesByPath(shapes: Shapes, boundaries: Boundaries) {
  return shapes.filter((shape) => shape.isOverlapping(boundaries));
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

    canvasElement.addEventListener("mousedown", (event: MouseEvent) => {
      const [x, y] = translateMousePosition(event, canvasElement);
      const shape = findShapeByPoint(shapes, [x, y]);

      if (shape) {
        shape.transformOriginX = x - shape.x;
        shape.transformOriginY = y - shape.y;

        targetShape = shape;
        shape.highlight = true;
      }
    });

    window.addEventListener("mouseup", (_event) => {
      if (targetShape) {
        targetShape.highlight = false;
      }

      targetShape = undefined;
    });

    canvasElement.addEventListener("mousemove", (event) => {
      if (targetShape && canvasElement) {
        const [x, y] = translateMousePosition(event, canvasElement);

        const path = targetShape.simulate(x, y, [
          0,
          canvasElement.width,
          canvasElement.height,
          0,
        ]);

        const conflictingShapes = findShapesByPath(shapes, path);

        conflictingShapes.forEach((conflictingShape) => {
          if (conflictingShape === targetShape) return;
          conflictingShape.error = true;
        });

        // targetShape.move(x, y, [
        //   0,
        //   canvasElement.width,
        //   canvasElement.height,
        //   0,
        // ]);
      }
    });

    function loop(_timeStamp: number) {
      if (!context) return;

      frame = requestAnimationFrame(loop);

      context.save();
      context.clearRect(0, 0, canvasElement.width, canvasElement.height);

      shapes.forEach((shape, index) => shape.draw(context, index));

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

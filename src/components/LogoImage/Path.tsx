export type Boundaries = [number, number, number, number];

export type Boundary = [number, number];

abstract class Path {
  protected path = new Path2D();

  public fill: string;
  public offsetX: number = 0;
  public offsetY: number = 0;
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public transformOriginX: number = 0;
  public transformOriginY: number = 0;
  public highlight: boolean = false;
  public error: boolean = false;

  public debug: boolean = false;

  constructor(element: SVGGraphicsElement) {
    this.path = new Path2D();
    this.fill = element.getAttribute("fill")!;

    const box = element.getBBox();

    this.x = box.x;
    this.y = box.y;
    this.width = box.width;
    this.height = box.height;
  }
  draw(
    context: CanvasRenderingContext2D,
    index: number | undefined = undefined
  ) {
    context.setTransform(new DOMMatrix([1, 0, 0, 1, this.x, this.y]));
    context.fillStyle = this.fill;

    if (this.highlight) {
      context.shadowColor = "rgba(0, 0, 0, 0.2)";
      context.shadowBlur = 10;
    } else {
      context.shadowColor = "";
      context.shadowBlur = 0;
    }

    if (this.error) {
      context.strokeStyle = "red";
      context.lineWidth = 2;
      context.stroke(this.path);
    }

    if (this.debug) {
      context.strokeStyle = "purple";
      context.lineWidth = 2;
      context.stroke(this.path);
    }

    context.fill(this.path);

    if (index !== undefined) {
      context.fillText(index.toString(), 0, 0);
    }
  }
  move(x: number, y: number, [top, right, bottom, left]: Boundaries) {
    this.setX(x, [left, right]);
    this.setY(y, [top, bottom]);
  }

  setX(x: number, [left, right]: Boundary) {
    const [targetX] = this.simulateY(x, [left, right]);
    this.x = targetX;
  }

  setY(y: number, [top, bottom]: Boundary) {
    const [targetY] = this.simulateY(y, [top, bottom]);

    this.y = targetY;
  }

  simulate(
    x: number,
    y: number,
    [top, right, bottom, left]: Boundaries
  ): Boundaries {
    const [leftBoundary, rightBoundary] = this.simulateX(x, [left, right]);
    const [topBoundary, bottomBoundary] = this.simulateY(y, [top, bottom]);

    return [topBoundary, rightBoundary, bottomBoundary, leftBoundary];
  }

  simulateY(y: number, [top, bottom]: Boundary) {
    const targetY = y - this.transformOriginY;

    // if (top !== undefined && targetY < top) {
    //   return [top, top + this.height];
    // } else if (bottom !== undefined && targetY + this.height > bottom) {
    //   return [bottom - this.height, bottom];
    // } else {
    return [targetY, targetY + this.height];
    // }
  }

  simulateX(x: number, [left, right]: Boundary) {
    const targetX = x - this.transformOriginX;

    // if (left !== undefined && targetX < left) {
    //   return [left, left + this.width];
    // } else if (right !== undefined && targetX + this.width > right) {
    //   return [right - this.width, right];
    // } else {
    return [targetX, targetX + this.width];
    // }
  }

  inInside(x: number, y: number) {
    return (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    );
  }

  isOverlapping([top, left, bottom, right]: Boundaries) {
    if (this.debug) {
      // debugger;
    }
    return this.x + this.width < left && this.x > right;
  }
}

export class RectanglePath extends Path {
  constructor(element: SVGRectElement) {
    super(element);
    this.path.roundRect(
      Number(0),
      Number(0),
      Number(element.getAttribute("width")),
      Number(element.getAttribute("height")),
      Number(element.getAttribute("rx"))
    );
  }
}

export class SVGPath extends Path {
  constructor(element: SVGPathElement) {
    super(element);

    this.path.addPath(
      new Path2D(element.getAttribute("d")!),
      new DOMMatrix([1, 0, 0, 1, 0 - this.x, 0 - this.y])
    );
  }
}

export type Boundaries = [number, number, number, number];

export type Boundary = [number, number];

abstract class Path {
  protected path = new Path2D();

  public fill: string;
  public offsetX: number = 0;
  public offsetY: number = 0;
  public x: number = 0;
  public y: number = 0;
  public width: number;
  public height: number;
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

  draw(context: CanvasRenderingContext2D) {
    context.setTransform(new DOMMatrix([1, 0, 0, 1, this.x, this.y]));
    context.fillStyle = this.fill;
    context.fill(this.path);
  }

  inInside(x: number, y: number) {
    return (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    );
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

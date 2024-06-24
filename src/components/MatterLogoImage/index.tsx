"use client";

import "pathseg";

import {
  Bodies,
  Body,
  Common,
  Composite,
  Engine,
  Render,
  Runner,
  Vertices,
} from "matter-js";

import { setSize } from "./Render";

import { decomp } from "poly-decomp-es";
import { onCleanup, onMount, createEffect } from "solid-js";
import paths from "./bodies";
import styles from "./style.module.css";

Common.setDecomp(decomp);

export default function MatterLogoImage(props: {
  run: boolean;
  height: number;
  position: {
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
  };
  width: number;
}) {
  let scene: HTMLDivElement;
  let render: Render;

  const engine = Engine.create();
  const runner = Runner.create();
  const logo = Composite.create();
  const floor = Composite.create();

  const resizeHandler = () => {
    setSize(render, props.width, props.height);
  };

  onMount(() => {
    const CANVAS_WIDTH = props.width;
    const CANVAS_HEIGHT = props.height;

    render = Render.create({
      element: scene,
      engine: engine,
      options: {
        background: "transparent",
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        wireframes: false,
      },
    });

    Composite.add(
      logo,
      paths.map(({ vertices, fill, name }) => {
        const { x, y } = Vertices.centre(vertices);

        const body = Body.create({
          label: name,
          vertices: vertices,
          position: { x, y },
          render: {
            strokeStyle: "#fff",
            fillStyle: fill,
            lineWidth: 0,
          },
        });

        return body;
      })
    );

    Composite.add(
      floor,
      Bodies.rectangle(0, 0, CANVAS_WIDTH, 10, {
        isStatic: true,
        render: {
          fillStyle: "transparent",
          lineWidth: 0,
        },
      })
    );

    Composite.add(engine.world, [logo, floor]);

    Render.run(render);

    onCleanup(() => {
      Runner.stop(runner);
      Render.stop(render);
      Engine.clear(engine);
    });

    window.addEventListener("resize", resizeHandler);
  });

  onCleanup(() => {
    window.removeEventListener("resize", resizeHandler);
  });

  createEffect(() => {
    if (props.run) {
      Runner.run(runner, engine);
    }
  });

  createEffect(() => {
    const { x, y, scaleX, scaleY } = props.position;

    const targetLogoX = x - (scene.getBoundingClientRect().x + window.scrollX);
    const targetLogoY = y - (scene.getBoundingClientRect().y + window.scrollY);

    console.log(props.width, props.height);

    setSize(render, props.width, props.height);

    Composite.scale(logo, scaleX, scaleY, { x: 0, y: 0 });

    Composite.allBodies(logo).forEach((body) => {
      const { vertices } = paths.find(({ name }) => name === body.label)!;
      const { x, y } = Vertices.centre(vertices);

      Body.setPosition(body, { x: x + targetLogoX, y: y + targetLogoY });
    });

    Composite.allBodies(floor).forEach((body) => {
      Body.setPosition(body, {
        x: scene.getBoundingClientRect().width / 2,
        y:
          logo.bodies
            .flatMap((body) => body.bounds.max.y)
            .reduce((a, b) => Math.max(a, b)) + 5,
      });
    });
  });

  return (
    <div ref={(element) => (scene = element)} class={styles.MatterLogoImage} />
  );
}

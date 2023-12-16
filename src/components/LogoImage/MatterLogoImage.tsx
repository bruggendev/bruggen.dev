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
import { decomp } from "poly-decomp-es";
import { onCleanup, onMount, createEffect } from "solid-js";
import paths from "./bodies";
import styles from "./style.module.css";
import { bottom } from "./vertices";

Common.setDecomp(decomp);

const CANVAS_WIDTH = 256;
const CANVAS_HEIGHT = 410;

export default function MatterLogoImage(props: { run: boolean }) {
  let scene: HTMLDivElement;
  const engine = Engine.create();
  const runner = Runner.create();

  onMount(() => {
    const render = Render.create({
      element: scene,
      engine: engine,
      options: {
        background: "transparent",
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        wireframes: false,
      },
    });

    paths.map(({ vertices, fill, name }) => {
      const { x, y } = Vertices.centre(vertices);

      const body = Body.create({
        vertices: vertices,
        position: { x: x, y: y },
        // inertia: Infinity,
        frictionAir: 0.00001,
        density: 0.04,
        render: {
          strokeStyle: "#fff",
          fillStyle: fill,
          lineWidth: 0,
        },
      });

      Composite.add(engine.world, body);

      return body;
    });

    const floor = Bodies.rectangle(
      CANVAS_WIDTH / 2,
      paths
        .flatMap(({ vertices }) => bottom(vertices))
        .reduce((a, b) => Math.max(a, b)) + 5,

      CANVAS_WIDTH,
      10,
      {
        isStatic: true,
        render: {
          fillStyle: "#fff",
        },
      }
    );

    Composite.add(engine.world, floor);

    // run the engine
    Render.run(render);

    onCleanup(() => {
      Runner.stop(runner);
      Render.stop(render);
      Engine.clear(engine);
    });
  });

  createEffect(() => {
    if (props.run) {
      Runner.run(runner, engine);
    }
  }, [props.run]);

  return (
    <div
      ref={(element) => (scene = element)}
      id="logo"
      class={styles.LogoImage}
    ></div>
  );
}

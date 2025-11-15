import { defineConfig } from "@solidjs/start/config";
import { withSolidBase } from "@kobalte/solidbase/config";

export default defineConfig(
  withSolidBase(
    // SolidStart config
    {
      server: {
        prerender: {
          crawlLinks: true,
        },
      },
    },
    // SolidBase config
    {
      title: "Fullstack & Frontend Development",
      titleTemplate: "Bruggen - :title",
      description: "Jesse Dijkstra - Fullstack & Frontend Development",
    }
  )
);

import { defineConfig } from "@solidjs/start/config";


export default defineConfig(
  // SolidStart config
  {
    server: {
      prerender: {
        crawlLinks: true,
      },
    },
  }
);

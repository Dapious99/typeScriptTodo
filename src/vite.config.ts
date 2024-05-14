import { defineConfig } from "vite";

export default defineConfig({
  // other config options
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData can be used to pass variables or mixins globally to all Sass stylesheets
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      comps: path.resolve(__dirname, "src/components"),
      css: path.resolve(__dirname, "src/assets/stylesheets"),
      data: path.resolve(__dirname, "src/data"),
      imgs: path.resolve(__dirname, "src/assets/images"),
      pages: path.resolve(__dirname, "src/pages"),
    },
  },
  server: {
    headers: { "X-Content-Type-Options": "nosniff" },
  },
  preview: {
    headers: { "X-Content-Type-Options": "nosniff" },
  },
});

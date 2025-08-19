import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { writeFileSync, readFileSync } from "fs";

export default defineConfig({
  plugins: [
    react(),
    {
      // Copies index.html to 404.html after build (needed for GitHub Pages SPA routing)
      name: "copy-index-to-404",
      closeBundle() {
        const indexHtml = readFileSync(resolve(__dirname, "dist/index.html"), "utf-8");
        writeFileSync(resolve(__dirname, "dist/404.html"), indexHtml);
      },
    },
  ],
  base: "/", // ensures correct asset loading when deployed
  optimizeDeps: {
    exclude: ["lucide-react"], // keeps your optimization tweak
  },
});

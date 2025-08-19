import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { writeFileSync, readFileSync } from "fs";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-index-to-404",
      closeBundle() {
        const indexHtml = readFileSync(resolve(__dirname, "dist/index.html"), "utf-8");
        writeFileSync(resolve(__dirname, "dist/404.html"), indexHtml);
      }
    }
  ],
  base: "/", // important for gh-pages root
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});

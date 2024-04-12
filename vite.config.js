import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from '@svgr/rollup';

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      assets: path.resolve(__dirname, "src/assets"),
      consts: path.resolve(__dirname, "src/consts"),
      store: path.resolve(__dirname, "src/store"),
    },
  },
});
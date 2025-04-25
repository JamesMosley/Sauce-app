import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
import type { Plugin } from "rollup";

const originalPlugin = rollupNodePolyFill();

const patchedPolyfillPlugin: Plugin = {
  ...originalPlugin,
  resolveId(source, importer, _options) {
    if (typeof originalPlugin.resolveId === "function") {
      return originalPlugin.resolveId.call(this, source, importer || "");

    }
    return null;
  },
};

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: "crypto-browserify",
    },
  },
  optimizeDeps: {
    include: ["crypto-browserify"],
  },
  build: {
    rollupOptions: {
      plugins: [patchedPolyfillPlugin],
    },
  },
});

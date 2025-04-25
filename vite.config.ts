import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
import type { Plugin } from "rollup";

const originalPlugin = rollupNodePolyFill();

// Patch plugin with correct types
const patchedPolyfillPlugin: Plugin = {
  ...originalPlugin,
  resolveId(
    source: string,
    importer: string | undefined,
    options: { custom?: any; isEntry: boolean; attributes: Record<string, string> }
  ) {
    if (typeof originalPlugin.resolveId === "function") {
      return originalPlugin.resolveId.call(this, source, importer ?? "", options);
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

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";

// Patch plugin to make its resolveId signature compatible
const patchedPolyfillPlugin = {
  ...rollupNodePolyFill(),
  resolveId(source, importer, options) {
    // Delegate to the original plugin's resolveId if it exists
    const original = rollupNodePolyFill().resolveId;
    if (typeof original === "function") {
      return original.call(this, source, importer ?? "", options);
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

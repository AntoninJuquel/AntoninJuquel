import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const bigLibs = {
  "@mui": "vendor_mui",
};

function manualChunks(id: string) {
  if (id.includes("node_modules")) {
    for (const [lib, chunk] of Object.entries(bigLibs)) {
      if (id.includes(lib)) {
        return chunk;
      }
    }

    return "vendor";
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
  plugins: [react()],
  base: "/AntoninJuquel/",
});

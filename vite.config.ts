import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import macrosPlugin from "vite-plugin-babel-macros";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: { target: "ESNext" },
  optimizeDeps: {
    esbuildOptions: { target: "ESNext", supported: { bigint: true } },
  },
  plugins: [react(), macrosPlugin(), tsconfigPaths({})],
  server: {
    port: 3038,
  },
});

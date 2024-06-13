/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { extname, relative, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(dirname(fileURLToPath(import.meta.url)), "src/index.ts"),
      formats: ["es"],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "clsx"],
      input: splitCssFiles(),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      }
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
  },
  plugins: [react(), dts(), libInjectCss()],
  resolve: {
    alias: {
      "@": resolve(dirname(fileURLToPath(import.meta.url)), "./src")
    },
  },
});

function splitCssFiles() {
  return Object.fromEntries(
    glob.sync("src/**/*.{ts,tsx}", {
      ignore: ["src/**/*.d.ts", "src/**/*.{spec,test}.{ts,tsx}", "src/**/*.stories.{ts,tsx}"],
    }).map(file => [
      relative(
        "src",
        file.slice(0, file.length - extname(file).length)
      ),
      fileURLToPath(new URL(file, import.meta.url))
    ])
  );
}

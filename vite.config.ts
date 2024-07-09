import { defineConfig } from "vite"

// Plugins
import dts from "vite-plugin-dts"
import paths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    paths(),
    dts({
      include: ["src/lib/**/*.ts"],
      exclude: ["src/lib/**/*.spec.ts"],
    }),
  ],
  build: {
    copyPublicDir: false,
    minify: false,
    lib: {
      name: "unfun",
      entry: "src/lib/index.ts",
      formats: ["es", "cjs"],
    },
  },
})

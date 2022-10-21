import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(
  {
    plugins: [react()],
    build: {
      outDir: './dist/public/js/',
      rollupOptions: {
        input: {
          bundle: './src/app/index.tsx',
        },
        output: {
          entryFileNames: '[name].js',
        }
      },
    }
  }
)

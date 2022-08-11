import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    //manifest: true,
    rollupOptions: {
      input: {//"./src/app/index.js",
        bundle: './src/app/index.js'
      },
      output: {
        entryFileNames: '[name].js',
        dir: "./src/public/js/"
      }
    }
  }
})

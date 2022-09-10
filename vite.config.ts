// vite.config.ts

import { resolve } from 'path'
import { defineConfig } from 'vite'
import compress from 'vite-plugin-compress'

// @see https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },

  plugins: [
    compress()
  ]
})

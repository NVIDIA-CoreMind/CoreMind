import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function spaFallbackPlugin() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const distIndex = path.resolve(__dirname, 'dist/index.html')
      const dist404 = path.resolve(__dirname, 'dist/404.html')
      if (fs.existsSync(distIndex)) {
        fs.copyFileSync(distIndex, dist404)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallbackPlugin()],
  base: process.env.BASE_PATH || '/',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve as pathResolve } from 'path'

// https://vite.dev/config/
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: pathResolve(__dirname, 'index.html'),
        resume: pathResolve(__dirname, 'resume.html'),
      },
    },
  },
})

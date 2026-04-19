import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  build: {
    target: 'es2018',
  },
  plugins: [react(), imagetools()],
})
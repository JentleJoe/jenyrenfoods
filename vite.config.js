import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

<<<<<<< HEAD
// https://vitejs.dev/config/
export default defineConfig({
=======
export default defineConfig({
  build: {
    target: 'es2018',
  },
>>>>>>> c5babf69f9137e478b57d7a5cbcb318d2b9b8735
  plugins: [react(), imagetools()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import path from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')

// https://vitejs.dev/config/
const prerenderRoutes = [
  '/',
  '/products',
  '/products/chinchin',
  '/products/plantain-flour',
  '/products/beans-flour',
  '/products/soybean-powder',
  '/products/tigernut-powder',
  '/pricing',
  '/contact',
]

export default defineConfig({
  build: {
    target: 'es2018',
  },
  plugins: [
    react(),
    imagetools(),
    vitePrerender({
      staticDir: path.resolve(process.cwd(), 'dist'),
      routes: prerenderRoutes,
      renderer: new vitePrerender.PuppeteerRenderer({
        headless: true,
        maxConcurrentRoutes: 4,
        renderAfterTime: 1500,
      }),
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        sortAttributes: true,
      },
    }),
  ],
})

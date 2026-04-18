import { mkdir, readFile, writeFile, access } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const clientDistDir = path.resolve(projectRoot, 'dist/client')

async function resolveServerEntryPath() {
  const candidates = [
    path.resolve(projectRoot, 'dist/server/entry-server.js'),
    path.resolve(projectRoot, 'dist/server/entry-server.mjs'),
  ]

  for (const candidate of candidates) {
    try {
      await access(candidate)
      return candidate
    } catch {
      // Try the next candidate.
    }
  }

  throw new Error('Could not find dist/server/entry-server.js or dist/server/entry-server.mjs')
}

const routes = [
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

const templatePath = path.resolve(clientDistDir, 'index.html')
const template = await readFile(templatePath, 'utf-8')
const serverEntryPath = await resolveServerEntryPath()
const { render } = await import(pathToFileURL(serverEntryPath).href)

for (const route of routes) {
  const appHtml = render(route)
  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const outputPath =
    route === '/'
      ? path.resolve(clientDistDir, 'index.html')
      : path.resolve(clientDistDir, route.slice(1), 'index.html')

  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, html)
}

console.log(`Prerendered ${routes.length} routes into dist/client`)
// Prépare le site complet dans _site/, le dossier publié par Netlify.
//
//   - Page d'accueil : index.html, style.css, projects.js et les captures d'écran
//   - Chaque dossier day-XX-… :
//       · avec un package.json qui a un script "build" (React, Vite…) :
//         on installe, on construit, et on copie le dossier dist/
//       · avec un index.html (HTML, CSS, JS simples) : on copie le dossier tel quel
//       · sinon (projet pas encore commencé) : ignoré
//
// Lancer en local : node scripts/build-site.mjs

import { execSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = join(import.meta.dirname, '..')
const OUT = join(ROOT, '_site')
const ROOT_FILES = ['index.html', 'style.css', 'projects.js', 'preview-days-images']
const IGNORED = new Set(['node_modules', 'dist', '.gitkeep'])

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT)

for (const file of ROOT_FILES) {
  cpSync(join(ROOT, file), join(OUT, file), { recursive: true })
}

const days = readdirSync(ROOT).filter(name => /^day-\d\d-/.test(name)).sort()

for (const day of days) {
  const dir = join(ROOT, day)
  const pkgPath = join(dir, 'package.json')

  if (existsSync(pkgPath) && JSON.parse(readFileSync(pkgPath, 'utf8')).scripts?.build) {
    // Sur Netlify (CI) : installation propre. En local : on réutilise node_modules
    // s'il existe (npm ci le supprimerait, ce qui échoue si un serveur de dev tourne).
    const install = process.env.CI || !existsSync(join(dir, 'node_modules')) ? 'npm ci && ' : ''
    console.log(`▶ ${day} : construction`)
    execSync(`${install}npm run build`, { cwd: dir, stdio: 'inherit' })
    cpSync(join(dir, 'dist'), join(OUT, day), { recursive: true })
  } else if (existsSync(join(dir, 'index.html'))) {
    console.log(`▶ ${day} : copie`)
    cpSync(dir, join(OUT, day), {
      recursive: true,
      filter: src => !IGNORED.has(src.split(/[\\/]/).pop()),
    })
  }
}

console.log(`✓ Site prêt dans _site/`)

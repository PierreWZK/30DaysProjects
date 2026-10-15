// Assemble le site final dans dist/ :
// - les fichiers du portail (racine) sont copiés tels quels ;
// - chaque dossier day-XX avec un package.json contenant un script "build"
//   est installé puis buildé, et son dossier de sortie est copié dans dist/day-XX ;
// - les autres dossiers day-XX (HTML/CSS/JS pur) sont copiés tels quels.
import { execSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const dist = join(root, 'dist')
const OUTPUT_DIRS = ['dist', 'build', 'out']
const IGNORED = new Set(['node_modules', '.git', '.gitkeep', '.netlify', 'dist', 'scripts'])

rmSync(dist, { recursive: true, force: true })
mkdirSync(dist)

const copy = (src, dest) =>
  cpSync(src, dest, { recursive: true, filter: (p) => !IGNORED.has(p.split(/[\\/]/).pop()) || p === src })

for (const entry of readdirSync(root)) {
  if (IGNORED.has(entry) || entry === 'netlify.toml' || entry.startsWith('.')) continue
  const src = join(root, entry)

  if (!entry.startsWith('day-') || !statSync(src).isDirectory()) {
    copy(src, join(dist, entry))
    continue
  }

  const pkgPath = join(src, 'package.json')
  const pkg = existsSync(pkgPath) ? JSON.parse(readFileSync(pkgPath, 'utf8')) : null

  if (!pkg?.scripts?.build) {
    // Projet statique (ou dossier vide) : copie directe
    if (readdirSync(src).some((f) => !IGNORED.has(f))) copy(src, join(dist, entry))
    continue
  }

  console.log(`\n▶ Build de ${entry}`)
  const run = (cmd) => execSync(cmd, { cwd: src, stdio: 'inherit' })
  run(existsSync(join(src, 'package-lock.json')) ? 'npm ci --include=dev' : 'npm install --include=dev')
  run('npm run build')

  // "outputDir" dans package.json permet de surcharger la détection
  const outDir = [pkg.outputDir, ...OUTPUT_DIRS].filter(Boolean).find((d) => existsSync(join(src, d)))
  if (!outDir) throw new Error(`${entry} : aucun dossier de sortie trouvé (${OUTPUT_DIRS.join(', ')})`)
  cpSync(join(src, outDir), join(dist, entry), { recursive: true })
}

console.log('\n✔ Site assemblé dans dist/')

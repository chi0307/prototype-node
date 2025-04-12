import { spawnSync } from 'node:child_process'

// 因為直接執行 node dist/index.js 會因為 crash 調導致 upgrade package 失敗，所以這邊需要另外把它保起來執行，避免 crash 影響到 ncu doctor 的執行
function run(command: string): number {
  const result = spawnSync(command, {
    shell: true,
    stdio: 'inherit',
  })
  return result.status ?? 1
}

console.log('[validate-safe] Running validation...')
const code = run('pnpm run build-only && node dist/index.js')

if (code !== 0) {
  console.error(`[validate-safe] ❌ Validation failed with code ${code}`)
} else {
  console.log('[validate-safe] ✅ Validation passed')
}

process.exit(code)

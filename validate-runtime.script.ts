import { spawnSync } from 'node:child_process'

// 因為直接執行 node dist/index.js 會因為 crash 調導致 upgrade package 失敗，所以這邊需要另外把它保起來執行，避免 crash 影響到 ncu doctor 的執行
function run(command: string): number {
  const result = spawnSync(command, {
    shell: true,
    stdio: 'inherit',
  })
  return result.status ?? 1
}

console.log('Running validation...')
const code = run('pnpm run build-only && pnpm start')

if (code !== 0) {
  console.error(`❌ Validation runtime failed with code ${code}`)
  process.exit(1)
} else {
  process.exit(0)
}

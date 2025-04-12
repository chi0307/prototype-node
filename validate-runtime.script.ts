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
const developCode = run('pnpm run dev')
const productionCode = run('pnpm run build-only && pnpm start')

if (developCode !== 0) {
  console.error(`❌ Validation develop script failed with code ${developCode}`)
  process.exit(1)
} else if (productionCode !== 0) {
  console.error(`❌ Validation production script failed with code ${productionCode}`)
  process.exit(1)
} else {
  process.exit(0)
}

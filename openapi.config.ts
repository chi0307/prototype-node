import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: '',
  output: {
    lint: 'eslint',
    format: 'prettier',
    /** path 可以看專案想放在哪邊來調整放置的位置，這個資料夾建議 gitignore，CI 的時候讓他自動產生出來 */
    path: '',
  },
  plugins: [
    ...defaultPlugins,
    '@hey-api/client-fetch',
    /** 用 zod 來做 runtime 型別檢查，如果回來的型別是錯誤的會噴 error */
    'zod',
    {
      name: '@hey-api/sdk',
      validator: true,
    },
    {
      /** 輸出 javascript 版本的 enum 資料，雖然預設的 false 也可以檢查型別，但這邊寫 javascript 好處是可以在下拉式或列表的時候做迴圈遍歷 */
      enums: 'javascript',
      name: '@hey-api/typescript',
    },
  ],
})

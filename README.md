# 這是一個範本專案，主要供小工具快速開發迭代使用

## 目標

- 提供給 Node 快速執行
- 使用 typescript 開發，省去開發上的思考問題
- 會增加一些之後不一定會用到的 utils 進去 (如果不需要再砍掉)
- 會增加一些不一定會用到的 package 進去 (如果不需要再砍掉)
- 至少基本的 ts, lint, prettier, build, watch 事件會預設好

## 使用時機

- 本地端小工具
- 做套件？ (需要測試看看其他設定的東西會不會多很多)
- 簡單的 server 或 mock server

## 注意事項

- `ts-jest@29.3.0` 以後需要把 tsconfig.json 裡面的 `compilerOptions.isolatedModules` 設定成 false，typia 才有辦法正常運作，是跟那個改版的 `isolatedModules transform option is deprecated` 有關，不然會導致在測試中的 typia 運作失敗

## 複製的專案可以刪掉的內容

### 暴力檢查 package 升級的功能

這些內容是為了暴力檢查 runtime 是否在升級套件以後還是正常運作寫的內容，實際上複製出來的專案應該可以砍掉這些東西，不需要他們的存在

- .github/workflows/update-dependencies.yml => `run: pnpm upgrade-packages-latest`
- validate-runtime.ts
- package.json => `scripts.validate-runtime`
- package.json => `scripts.upgrade-packages-latest`
- .github/workflows/check.yml => `run: pnpm run build && node dist/index.js`

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

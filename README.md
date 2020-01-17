# step1 Typescriptの基本
以下は全てdockerコンテナにアタッチして行ってください。
```$xslt
# APIコンテナにアタッチ
docker exec -it bp-api /bin/bash
```
## トランスコンパイル
### 1つのファイルをトランスコンパイルしてみる
```$xslt
tsc app.ts
```
オプションなしだと、同一Dirにjsファイルが作成される。
### このjsを実行してみる
```$xslt
node app.js
```

### tsconfig.jsonでオプションを指定
```$xslt
# tsconfig.jsonが存在するDirで
tsc
```
tsconfig.jsonでtscのオプションを設定できる。
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
https://www.typescriptlang.org/docs/handbook/compiler-options.html

## tsのメリット
 - jsのコンパイル対象のバージョンを切り替えられる（完全ではないが）
 - 静的型付け言語のメリットを享受できる。特に複数人開発の場合に有効な場合がある。

### コンパイルエラー
```$xslt
# app.ts:9の引数の型を変更してみる
constructor(urls: string) {
```
### strict=trueの厳密さ
```$xslt
# app.ts:26, 27のコメントアウト
urlObjects.nullables = null
urlObjects.nullables = undefined
```
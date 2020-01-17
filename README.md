# step2 Promiseについて

以下は全てdockerコンテナにアタッチして行ってください。
```$xslt
# APIコンテナにアタッチ
docker exec -it bp-api /bin/bash
```
またpromise.jsの実行は以下のコマンドです。
```$xslt
tsc && node lib/promise{n}.js
```
## Promise
Promiseは非同期処理の状態を持つオブジェクトです。  
JSのコールバック地獄を回避できる。また処理の順番が問題にならない場合に複数の処理速度を効率化できる。  
※ ここでいう非同期は並列処理ではない（JavaScriptはシングルスレッドなので）  

  
昨今の通信ライブラリやORMライブラリなどは非同期処理(promise)がほとんどなので、async/awaitも込みで操作できる必要がある。

## async/await
Promiseをより操作しやすくするためのもの
asyncメソッド：必ずpromiseを返すメソッド
await: promiseがresolve or rejectされるのを待つ。（asyncメソッド内でしか書けない）

## Promise.allで全ての処理を待つ
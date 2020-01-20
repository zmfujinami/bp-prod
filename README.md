# step4 VueJsの基本

## 事前準備
以下の2点をチェックしてください。
 - http://localhost:24441/post
```$xslt
# APIコンテナにアタッチ
docker exec -it bp-api /bin/bash
```

## Vue-cli
Vue-CliはVueJSのCLIツールであり、nodeでインストールする（vue/Dockerfileを参照）  
CliコマンドでVueプロジェクト作成などを行う。

## vue create
```$xslt
vue create .
```
(Yes/No)の質問はデフォルト  
(Manually) typescript, routerを選択  
(In package.json)  
(Use NPM)
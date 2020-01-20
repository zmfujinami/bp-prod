# step4 VueJsの基本

以下は全てdockerコンテナにアタッチして行ってください。
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
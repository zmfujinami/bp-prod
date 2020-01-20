# step3 Vue Cli
一旦docker環境を再起動します。
```$xslt
sh run.sh
```

以下は全てdockerコンテナにアタッチして行ってください。
```$xslt
# APIコンテナにアタッチ
docker exec -it bp-vue /bin/bash
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

## vue起動とコンパイル
```$xslt
# サーバー起動(http://localhost:24440)
npm run serve
# distへコンパイル
npm run build
```
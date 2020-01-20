# step3 Vue Cli
一旦docker環境を再起動します。
```$xslt
sh run.sh
```

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
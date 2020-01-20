# step4 VueJsの基本

## 事前準備
以下の2点をチェックしてください。
 - http://localhost:24441/postにアクセスしてjsonが返ってくるか
 - http://localhost:24440にアクセスしてvuejsのデフォルト画面が表示されるか
 
もし、2点が正常に表示されない場合は、以下のコマンド。
```$xslt
# dockerコンテナ外で実行
sh run.sh
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
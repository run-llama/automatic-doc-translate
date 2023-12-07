
# OpenAIを使用した自動ドキュメント翻訳

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```このドキュメントは自動的に翻訳されており、誤りを含んでいる可能性があります。変更を提案するためにプルリクエストを開くことを躊躇しないでください。```


OPEN AI GPT 3.5を使用して、GitHubリポジトリ内のすべての.mdファイルを自動的に翻訳するツールです。

*** 免責事項：このツールはまだ実験的です ***


## 使用方法

まず、インストールします。

```
    npm install -g autotranslatedoc
```

次に、次の環境変数を設定してください：```GITHUB_PERSONAL_ACCESS_TOKEN```と```OPENAI_API_KEY```。または、このトークンをパラメーターで渡すこともできます。

ヘルプページを表示するには、次のコマンドを実行します。

```
 autotranslatedoc -h
```

次に、対象のリポジトリのドキュメントをフランス語とスペイン語に翻訳します。

```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

これにより、指定された出力ディレクトリ（デフォルト=./save）のrun-lamaディレクトリにllama_index.jsonファイルが作成されます。

```
    ls ./save
        run-llama
            llama_index.json 
```

この保存ファイルには、すべての翻訳が含まれており、対象の形式（現在は.mdのみ）のドキュメントを生成するために使用できます。

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

これにより、buildPath（デフォルト=./build）にフランス語とスペイン語のリポジトリが生成され、翻訳されたドキュメントファイルが含まれます。

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

これにより、既存のドキュメント保存ファイル内の既存の翻訳を確認し、更新されたすべてのファイルに対して差分翻訳が実行されます。

```
    autotranslatedoc serve run-llama llama_index
```

これにより、ポート3000またはenv.PORTでドキュメントを簡単に確認できるサーバーが起動します。実験的な機能です。

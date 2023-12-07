
# OpenAI 自動ドキュメンテーション翻訳

[EN](./README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```このドキュメントは自動的に翻訳されており、誤りを含んでいる可能性があります。変更を提案するためにプルリクエストを開くことを躊躇しないでください。```


このツールは、GitHub リポジトリ内のドキュメントファイル（.md/.mdx ファイル）を自動的に翻訳するために、OPEN AI GPT 3.5 / 4 の機能を活用しています。

*** 免責事項：このツールは現在開発中です ***


## インストール

このツールは、NPM を使用してインストールすることができます:


```
    npm install -g autotranslatedoc
```

環境変数 `GITHUB_PERSONAL_ACCESS_TOKEN` と `OPENAI_API_KEY` を設定してください。または、これらのトークンをパラメータとして渡すこともできます。`GITHUB_PERSONAL_ACCESS_TOKEN` の取得方法については、[GitHub のドキュメンテーション](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)を参照してください。
## 使用方法


### ヘルプページ
以下のコマンドでヘルプページにアクセスできます：
```
 autotranslatedoc -h
```
### ドキュメンテーションの翻訳

対象のリポジトリのドキュメンテーションをフランス語とスペイン語に翻訳するには、次のコマンドを使用します：
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


このコマンドは、指定された出力ディレクトリの `run-lama` ディレクトリに `llama_index.json` ファイルを作成します（デフォルトは `./save`）。
```
    ls ./save
        run-llama
            llama_index.json 
```
保存ファイルにはすべての翻訳が含まれており、目標の形式（現在は .md のみ）でドキュメンテーションを生成するために使用できます。

翻訳されたドキュメンテーションをビルドするには、次のコマンドを使用します：

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


このコマンドは、翻訳されたドキュメンテーションファイルを含む `fr` および `es` ディレクトリを `buildPath`（デフォルトは `./build`）に生成します。

元のファイルの変更に基づいて翻訳されたドキュメンテーションを更新するには、次のコマンドを使用します：

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


ドキュメンテーションをサーバーを介して確認するには（実験的な機能）、次のコマンドを使用します：
```
    autotranslatedoc serve run-llama llama_index
```
### Docusaurus ドキュメンテーションの翻訳

Docusaurus でホストされているドキュメンテーションを翻訳するには、次のコマンドを使用します：

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### README.md のみを翻訳する

README ファイルのみを翻訳するには、`readme` モードを使用します:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### すべてのサポートされている言語への翻訳

すべてのサポートされている言語に翻訳するには、`-l all` オプションを使用します:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## 既知の問題

現在、`-all` オプションを使用した翻訳は、英語から他のすべての言語へのみサポートされています。

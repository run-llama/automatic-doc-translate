
# OpenAI 自動ドキュメンテーション翻訳

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```このドキュメントは自動的に翻訳されており、誤りを含んでいる可能性があります。変更を提案するためにプルリクエストを開くことを躊躇しないでください。```


## インストール

このツールは、NPM を介してインストールできます:


```
    npm install -g autotranslatedoc
```

環境変数 `GITHUB_PERSONAL_ACCESS_TOKEN` と `OPENAI_API_KEY` を設定してください。または、これらのトークンをパラメータとして渡すこともできます。`GITHUB_PERSONAL_ACCESS_TOKEN` の取得方法については、[GitHub のドキュメント](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)を参照してください。
## 使用方法


### ヘルプページ
以下のコマンドでヘルプページにアクセスします：
```
 autotranslatedoc -h
```
### ドキュメントの翻訳

Autotranslatedoc は 3 つの引数と多くのオプションを受け取ります。

```
    autotranslatedoc <command> <repo_org> <repo_name> (options)
```

- ```command``` は ```translate```（翻訳するため）、```update```（翻訳を更新するため）、```build```（翻訳をビルドするため）のいずれかです。
- ```repo_org``` は GitHub 上の対象リポジトリの組織です。
- ```repo_name``` は GitHub 上の対象リポジトリの名前です。

利用可能な主なオプションは以下の通りです:

- ```--language <lang_1>(, <lang_2>)*```（または ```-l```）を使用して、翻訳先の言語を選択します。
- ```--docPath </url/path>```（または ```-d```）を使用して、特定のパス内のファイルに翻訳を制限します。
- ```--savePath <./localPath>```（または ```-s```）を使用して、保存ファイルが保存されるディレクトリを選択します（デフォルトは ```./save```）。
- ```--outputPath <./localPath>```（または ```-o```）を使用して、```build``` を使用する場合に、翻訳されたドキュメントファイルが出力される場所を指定します（デフォルトは ```./build```）。

対象リポジトリのドキュメントをフランス語とスペイン語に翻訳するには、次のコマンドを使用します:

```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

このコマンドは、指定された出力ディレクトリ（デフォルトは ```./save```）の ```run-lama``` ディレクトリ内に ```llama_index.json``` ファイルを作成します。

```
    ls ./save
        run-llama
            llama_index.json 
```

保存ファイルにはすべての翻訳が含まれており、対象の形式（現在は .md のみ）でドキュメントを生成するために使用できます。

翻訳されたドキュメントをビルドするには、次のコマンドを使用します:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

このコマンドは、翻訳されたドキュメントファイルが含まれる ```buildPath```（デフォルトは ```./build```）内に ```fr``` と ```es``` のディレクトリを生成します。

元のファイルの変更に基づいて翻訳されたドキュメントを更新するには、次のコマンドを使用します:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

ドキュメントをサーバーを介して確認するために（実験的な機能）、次のコマンドを使用します:

```
    autotranslatedoc serve run-llama llama_index
```
### Docusaurus ドキュメントの翻訳

Docusaurus でホストされているドキュメントを翻訳するには、次のコマンドを使用します:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### README.md のみを翻訳する

READMEファイルのみを翻訳するには、`readme`モードを使用します：

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

現在、`-all`オプションを使用した翻訳は、英語から他のすべての言語へのみサポートされています。

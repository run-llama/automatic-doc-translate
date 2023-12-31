
# OpenAI自动文档翻译

[en](../README.md)| [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```此文档已自动翻译，可能包含错误。如有更改建议，请毫不犹豫地提交 Pull Request。```


## 安装

可以通过NPM安装该工具：

```
    npm install -g autotranslatedoc
```

请确保设置环境变量：`GITHUB_PERSONAL_ACCESS_TOKEN`和`OPENAI_API_KEY`。或者，这些令牌可以作为参数传递。有关获取`GITHUB_PERSONAL_ACCESS_TOKEN`的详细信息，请参阅[GitHub文档](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)。
## 使用方法

### 帮助页面
使用以下命令访问帮助页面：
```
autotranslatedoc -h
```
### 翻译文档

Autotranslatedoc 接受 3 个参数和多个选项

```
    autotranslatedoc <command> <repo_org> <repo_name> (options)
```

- ```command``` 可以是 ```translate```（翻译）、```update```（更新翻译）或 ```build```（构建翻译）
- ```repo_org``` 是目标仓库在 GitHub 上的组织
- ```repo_name``` 是目标仓库在 GitHub 上的名称

可用的主要选项有：

- ```--language <lang_1>(, <lang_2>)*```（或 ```-l```）选择要翻译成的语言。
- ```--docPath </url/path>```（或 ```-d```）限制翻译到特定路径中的文件。
- ```--savePath <./localPath>```（或 ```-s```）选择保存文件的目录（默认为 ```./save```）。
- ```--outputPath <./localPath>```（或 ```-o```）在使用 ```build``` 时，指定翻译后的文档文件输出的位置（默认为 ```./build```）。

要将目标仓库的文档翻译为法语和西班牙语，请使用以下命令：

```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

该命令在指定的输出目录（默认为 ```./save```）的 ```run-llama``` 目录中创建一个 `llama_index.json` 文件。

```
    ls ./save
        run-llama
            llama_index.json 
```

保存文件包含所有翻译内容，可用于生成目标格式（目前仅支持 .md）的文档。

要构建已翻译的文档，请使用以下命令：

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

该命令在 `buildPath`（默认为 ```./build```）中生成 `fr` 和 `es` 目录，其中包含已翻译的文档文件。

要根据原始文件的更改更新已翻译的文档，请使用以下命令：

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

要通过服务器查看文档（实验性功能），请使用以下命令：

```
    autotranslatedoc serve run-llama llama_index
```
### 翻译 Docusaurus 文档

要翻译托管在 Docusaurus 中的文档，请使用以下命令：

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### 仅翻译README.md

要仅翻译README文件，请使用`readme`模式：

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### 翻译为所有支持的语言

要翻译为所有支持的语言，请使用`-l all`选项：

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## 已知问题

目前，仅支持从英语到其他所有语言的使用`-all`进行翻译。

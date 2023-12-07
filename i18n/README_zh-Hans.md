
# OpenAI 自动文档翻译

[en](../README.md)| [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```此文档已自动翻译，可能包含错误。如有更改建议，请毫不犹豫地提交 Pull Request。```


该工具利用 OPEN AI GPT 3.5 / 4 的能力，自动翻译 GitHub 仓库中的文档文件（.md/.mdx 文件）。

*** 免责声明：该工具目前正在开发中 ***


## 安装 

可以通过 NPM 安装该工具:


```
    npm install -g autotranslatedoc
```

请确保设置环境变量：`GITHUB_PERSONAL_ACCESS_TOKEN` 和 `OPENAI_API_KEY`。或者，这些令牌可以作为参数传递。请参考 [GitHub 文档](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) 获取 `GITHUB_PERSONAL_ACCESS_TOKEN`。
## 使用方法

### 帮助页面
使用以下命令访问帮助页面：
```
 autotranslatedoc -h
```
### 翻译文档

要将目标仓库的文档翻译成法语和西班牙语，请使用以下命令：
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


该命令会在指定的输出目录（默认为 `./save`）的 `run-lama` 目录中创建一个 `llama_index.json` 文件。
```
    ls ./save
        run-llama
            llama_index.json 
```
保存文件包含所有翻译内容，可用于生成目标格式（目前仅支持 .md）的文档。

要构建翻译后的文档，请使用以下命令：

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


该命令会在 `buildPath`（默认为 `./build`）中生成 `fr` 和 `es` 目录，其中包含翻译后的文档文件。

要根据原始文件的更改更新翻译后的文档，请使用以下命令：

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


要通过服务器查看文档（实验性功能），请使用以下命令：
```
    autotranslatedoc serve run-llama llama_index
```
### 翻译 Docusaurus 文档

要翻译托管在 Docusaurus 上的文档，请使用以下命令：

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### 仅翻译 README.md

要仅翻译 README 文件，请使用 `readme` 模式：

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

目前，仅支持从英语到其他所有语言的 `-all` 翻译。

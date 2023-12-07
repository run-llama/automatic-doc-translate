
# OpenAI 自動文件翻譯

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```此文件已自動翻譯，可能包含錯誤。如有更改建議，請毫不猶豫地提交 Pull Request。```


此工具利用 OPEN AI GPT 3.5 / 4 的功能，自動翻譯 GitHub 儲存庫中的文件檔案（即 .md/.mdx 檔案）。

*** 聲明：此工具目前正在開發中 ***


## 安裝

可以通過 NPM 安裝此工具：

```
    npm install -g autotranslatedoc
```

請確保設置環境變數：`GITHUB_PERSONAL_ACCESS_TOKEN` 和 `OPENAI_API_KEY`。或者，這些令牌可以作為參數傳遞。有關獲取 `GITHUB_PERSONAL_ACCESS_TOKEN` 的詳細信息，請參閱 [GitHub 文檔](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)。
## 使用方法


### 說明頁面
使用以下指令訪問說明頁面：
```
 autotranslatedoc -h
```
### 翻譯文件

要將目標儲存庫的文件翻譯為法語和西班牙語，請使用以下命令：
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


此命令將在指定的輸出目錄（默認為 `./save`）的 `run-lama` 目錄中創建一個 `llama_index.json` 檔案。
```
    ls ./save
        run-llama
            llama_index.json 
```
保存檔案包含所有翻譯，可用於生成目標格式（目前僅支持 .md）的文件。

要構建翻譯後的文件，請使用以下命令：

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


此命令在 `buildPath`（默認為 `./build`）中生成 `fr` 和 `es` 目錄，其中包含翻譯後的文件。

要根據原始文件的更改更新翻譯後的文件，請使用以下命令：

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


要通過服務器查看文件（實驗性功能），請使用以下命令：
```
    autotranslatedoc serve run-llama llama_index
```
### 翻譯 Docusaurus 文件

要翻譯 Docusaurus 中托管的文件，請使用以下指令：

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### 只翻譯 README.md

若要僅翻譯 README 檔案，請使用 `readme` 模式：

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### 翻譯為所有支援的語言

要翻譯為所有支援的語言，請使用 `-l all` 選項：

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## 已知問題

目前，僅支援從英文到其他所有語言的 `-all` 翻譯。


# 使用 OpenAI 进行自动文档翻译

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```此文件已自動翻譯，可能包含錯誤。如有更改建議，請毫不猶豫地提交 Pull Request。```


使用 OPEN AI GPT 3.5 的工具，自动翻译 GitHub 仓库中的文档（每个 .md 文件）

***免责声明：此工具仍处于实验阶段***

## 使用方法

首先安装

```
    npm install -g autotranslatedoc
```

然后确保设置了以下环境变量：```GITHUB_PERSONAL_ACCESS_TOKEN``` 和 ```OPENAI_API_KEY```。或者您可以将此令牌作为参数传递

查看帮助页面
```
 autotranslatedoc -h
```

然后将目标仓库的文档翻译成法语和西班牙语
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

这将在指定的输出目录（默认为 ./save）的 run-lama 目录中创建一个 llama_index.json 文件

```
    ls ./save
        run-llama
            llama_index.json 
```

此保存文件包含所有的翻译内容，可用于生成目标格式的文档（目前仅支持 .md）

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

这将在生成路径（默认为 ./build）中生成一个包含翻译后文档文件的法语和西班牙语仓库

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

这将查看现有文档保存文件中的预先存在的翻译，并对已更新的每个文件执行差异翻译。

```
    autotranslatedoc serve run-llama llama_index
```

将启动一个服务器，方便在端口 3000 或 env.PORT 上轻松查看文档。实验性功能

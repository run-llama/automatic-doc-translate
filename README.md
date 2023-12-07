# Automatic doc translation with OpenAI


[Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [French](./README_fr.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

A tool that automatically transalte the doc (every .md files) in a github repo using OPEN AI GPT 3.5

*** Disclaimer: This tool is still experiemental ***

## Usage 

First install

```
    npm install -g autotranslatedoc
```

Then make sure you set up the following environment variables: ```GITHUB_PERSONAL_ACCESS_TOKEN``` and ```OPENAI_API_KEY```. Alternatively you can pass this token in parameter

To see helppage
```
 autotranslatedoc -h
```

Then translate the doc of a target repo in french and spanish
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

This will create a llama_index.json file it the run-lama directory of the specified output directory (default=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

This save file contain all the translation and can be used to generate the do to a target format (currently only .md)


```
    autotranslatedoc build run-llama llama_index -l fr,es
```

This will generate a fr and es repository in the buildPath (default ./build) that will contain the translated doc files

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

This will look at pre-existing translation in the existing doc save file and will perform a differential translation of every file that have been updated.

```
    autotranslatedoc serve run-llama llama_index
```

Will launch a server allowing the easy review of the doc on port 3000 or env.PORT. EXPERIMENTAL


# Автоматичен превод на документацията на OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Тази документация е преведена автоматично и може да съдържа грешки. Не се колебайте да отворите Pull Request, за да предложите промени.```


Този инструмент използва възможностите на OPEN AI GPT 3.5 / 4, за да превежда автоматично файлове с документация (т.е. .md/.mdx файлове) в GitHub хранилище.

*** Забележка: Този инструмент се разработва в момента ***


## Инсталация 

Инструментът може да бъде инсталиран чрез NPM:


```
    npm install -g autotranslatedoc
```

Уверете се, че сте настроили променливите на средата: `GITHUB_PERSONAL_ACCESS_TOKEN` и `OPENAI_API_KEY`. Алтернативно, тези токени могат да бъдат подадени като параметри. Вижте [документацията на GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) за получаване на `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Използване


### Страница за помощ
Достъп до страницата за помощ се осъществява със следната команда:
```
 autotranslatedoc -h
```
### Превеждане на документация

За да преведете документацията на целевото хранилище на френски и испански, използвайте:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Тази команда създава файл `llama_index.json` в директорията `run-lama` на посочената изходна директория (по подразбиране е `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Файлът за запазване съдържа всички преводи и може да се използва за генериране на документация в целевия формат (в момента само .md).

За да създадете преведената документация, използвайте:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Тази команда генерира директории `fr` и `es` в `buildPath` (по подразбиране е `./build`), съдържащи преведените файлове с документация.

За да актуализирате преведената документация въз основа на промените в оригиналните файлове, използвайте:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


За да прегледате документацията чрез сървър (експериментална функция), използвайте:
```
    autotranslatedoc serve run-llama llama_index
```
### Превеждане на документация в Docusaurus

За превеждане на документация, хоствана в Docusaurus, използвайте:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Превеждане само на README.md

За да преведете само README файлът, използвайте режима `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Превеждане на всички поддържани езици

За да преведете на всички поддържани езици, използвайте опцията `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Известни проблеми

В момента, преводът с `-all` е поддържан само от английски на всички други езици.

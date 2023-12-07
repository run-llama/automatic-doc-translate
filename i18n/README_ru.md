
# Автоматический перевод документации OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Эта документация была автоматически переведена и может содержать ошибки. Не стесняйтесь открывать Pull Request для предложения изменений.```


Этот инструмент использует возможности OPEN AI GPT 3.5 / 4 для автоматического перевода файлов документации (т.е. файлов .md/.mdx) в репозитории GitHub.

*** Отказ от ответственности: Этот инструмент в настоящее время находится в стадии разработки ***


## Установка

Инструмент можно установить с помощью NPM:


```
    npm install -g autotranslatedoc
```

Убедитесь, что настроены переменные среды: `GITHUB_PERSONAL_ACCESS_TOKEN` и `OPENAI_API_KEY`. В качестве альтернативы, эти токены могут быть переданы в качестве параметров. См. [документацию GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) для получения `GITHUB_PERSONAL_ACCESS_TOKEN`.


"
## Использование


### Страница справки
Доступ к странице справки осуществляется с помощью следующей команды:
```
 autotranslatedoc -h
```
### Перевод документации

Чтобы перевести документацию целевого репозитория на французский и испанский языки, используйте:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Эта команда создает файл `llama_index.json` в директории `run-lama` указанной выходной директории (по умолчанию `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Файл сохранения содержит все переводы и может быть использован для генерации документации в целевом формате (в настоящее время только .md).

Чтобы собрать переведенную документацию, используйте:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Эта команда создает директории `fr` и `es` в `buildPath` (по умолчанию `./build`), содержащие файлы переведенной документации.

Чтобы обновить переведенную документацию на основе изменений в исходных файлах, используйте:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Чтобы просмотреть документацию через сервер (экспериментальная функция), используйте:
```
    autotranslatedoc serve run-llama llama_index
```
### Перевод документации Docusaurus

Для перевода документации, размещенной в Docusaurus, используйте:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Перевод только README.md

Чтобы перевести только файл README, используйте режим `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Перевод на все поддерживаемые языки

Чтобы перевести на все поддерживаемые языки, используйте опцию `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Известные проблемы

В настоящее время перевод с использованием `-all` поддерживается только с английского на все остальные языки.

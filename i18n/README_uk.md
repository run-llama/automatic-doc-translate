
# Автоматичний переклад документації OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Ця документація була автоматично перекладена і може містити помилки. Не соромтеся відкривати Pull Request, щоб запропонувати зміни.```


Цей інструмент використовує можливості OPEN AI GPT 3.5 / 4 для автоматичного перекладу файлів документації (тобто файлів .md/.mdx) у репозиторії GitHub.

*** Відмова від відповідальності: Цей інструмент знаходиться на стадії розробки ***


## Встановлення

Інструмент можна встановити за допомогою NPM:


```
    npm install -g autotranslatedoc
```

Переконайтеся, що ви налаштували змінні середовища: `GITHUB_PERSONAL_ACCESS_TOKEN` та `OPENAI_API_KEY`. Альтернативно, ці токени можна передати як параметри. Для отримання `GITHUB_PERSONAL_ACCESS_TOKEN` дивіться [документацію GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).


"
## Використання


### Сторінка довідки
Отримайте доступ до сторінки довідки за допомогою наступної команди:
```
 autotranslatedoc -h
```
### Переклад документації

Щоб перекласти документацію цільового репозиторію на французьку та іспанську мови, використовуйте:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Ця команда створює файл `llama_index.json` у директорії `run-lama` вказаної вихідної директорії (за замовчуванням `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Файл зберігання містить всі переклади і може бути використаний для генерації документації у цільовому форматі (наразі тільки .md).

Щоб зібрати перекладену документацію, використовуйте:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Ця команда створює каталоги `fr` та `es` у `buildPath` (за замовчуванням `./build`), що містять файли перекладеної документації.

Щоб оновити перекладену документацію на основі змін у вихідних файлах, використовуйте:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Щоб переглянути документацію за допомогою сервера (експериментальна функція), використовуйте:
```
    autotranslatedoc serve run-llama llama_index
```
### Переклад документації Docusaurus

Для перекладу документації, розміщеної в Docusaurus, використовуйте:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Переклад лише README.md

Щоб перекласти лише файл README, використовуйте режим `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Переклад усіх підтримуваних мов

Щоб перекласти на всі підтримувані мови, використовуйте опцію `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Відомі проблеми

Наразі підтримується лише переклад з англійської мови на всі інші мови за допомогою `-all`.

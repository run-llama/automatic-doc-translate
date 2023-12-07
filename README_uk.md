
# Автоматичний переклад документації за допомогою OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Ця документація була автоматично перекладена і може містити помилки. Не соромтеся відкривати Pull Request, щоб запропонувати зміни.```


Інструмент, який автоматично перекладає документацію (кожен файл .md) у репозиторії GitHub за допомогою OPEN AI GPT 3.5

*** Попередження: Цей інструмент все ще експериментальний ***


## Використання

Спочатку встановіть

```
    npm install -g autotranslatedoc
```

Потім переконайтеся, що ви налаштували наступні змінні середовища: ```GITHUB_PERSONAL_ACCESS_TOKEN``` та ```OPENAI_API_KEY```. Альтернативно, ви можете передати цей токен як параметр.

Щоб переглянути сторінку довідки
```
 autotranslatedoc -h
```

Потім перекладіть документацію цільового репозиторію на французьку та іспанську
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Це створить файл llama_index.json у директорії run-lama вказаної вихідної директорії (за замовчуванням=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Цей файл зберігає всі переклади і може бути використаний для генерації документації у цільовому форматі (наразі тільки .md)


```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Це створить репозиторій fr та es у шляху buildPath (за замовчуванням ./build), який буде містити перекладені файли документації.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Це перевірить наявні переклади в існуючому файлі збереження документації та виконає диференційний переклад кожного файлу, який був оновлений.

```
    autotranslatedoc serve run-llama llama_index
```

Запустить сервер, що дозволяє легко переглядати документацію на порту 3000 або env.PORT. ЕКСПЕРИМЕНТАЛЬНО

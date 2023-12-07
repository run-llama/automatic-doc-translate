
# Автоматичен превод на документация с OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Тази документация е преведена автоматично и може да съдържа грешки. Не се колебайте да отворите Pull Request, за да предложите промени.```


Инструмент, който автоматично превежда документацията (всички .md файлове) в github хранилище, използвайки OPEN AI GPT 3.5

*** Забележка: Този инструмент все още е експериментален ***


## Използване

Първо инсталирайте

```
    npm install -g autotranslatedoc
```

След това се уверете, че сте настроили следните променливи на средата: ```GITHUB_PERSONAL_ACCESS_TOKEN``` и ```OPENAI_API_KEY```. Алтернативно, можете да предадете този токен като параметър.

За да видите страницата с помощ
```
 autotranslatedoc -h
```

След това преведете документацията на целевото хранилище на френски и испански език
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Това ще създаде файл llama_index.json в директорията run-lama на указаната изходна директория (по подразбиране=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Този файл съдържа всички преводи и може да се използва за генериране на документация в целевия формат (в момента само .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Това ще генерира френско и испанско хранилище в buildPath (по подразбиране ./build), което ще съдържа преведените файлове с документация

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Това ще провери съществуващите преводи в съществуващия файл с документация и ще извърши диференциален превод на всеки файл, който е бил актуализиран.

```
    autotranslatedoc serve run-llama llama_index
```

Ще стартира сървър, който позволява лесен преглед на документацията на порт 3000 или env.PORT. ЕКСПЕРИМЕНТАЛНО

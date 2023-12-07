
# Автоматический перевод документации с помощью OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Эта документация была автоматически переведена и может содержать ошибки. Не стесняйтесь открывать Pull Request для предложения изменений.```


Инструмент, который автоматически переводит документацию (все файлы .md) в репозитории GitHub с использованием OPEN AI GPT 3.5

*** Отказ от ответственности: Этот инструмент все еще находится в экспериментальном режиме ***


## Использование

Сначала установите

```
    npm install -g autotranslatedoc
```

Затем убедитесь, что вы настроили следующие переменные среды: ```GITHUB_PERSONAL_ACCESS_TOKEN``` и ```OPENAI_API_KEY```. В качестве альтернативы, вы можете передать этот токен в параметре

Чтобы увидеть страницу справки
```
 autotranslatedoc -h
```

Затем переведите документацию целевого репозитория на французский и испанский языки
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Это создаст файл llama_index.json в директории run-lama указанной выходной директории (по умолчанию=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Этот файл сохранения содержит все переводы и может быть использован для генерации документации в целевом формате (в настоящее время только .md)


```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Это создаст репозиторий fr и es в buildPath (по умолчанию ./build), который будет содержать переведенные файлы документации

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Это будет проверять существующие переводы в существующем файле сохранения документации и будет выполнять дифференциальный перевод каждого файла, который был обновлен.

```
    autotranslatedoc serve run-llama llama_index
```

Запустит сервер, позволяющий легко просматривать документацию на порту 3000 или env.PORT. ЭКСПЕРИМЕНТАЛЬНО

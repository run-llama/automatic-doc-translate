
# Automatisk dokumentöversättning med OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Denna dokumentation har översatts automatiskt och kan innehålla fel. Tveka inte att öppna en Pull Request för att föreslå ändringar.```


Ett verktyg som automatiskt översätter dokumentationen (alla .md-filer) i ett GitHub-repo med hjälp av OPEN AI GPT 3.5

*** Ansvarsfriskrivning: Detta verktyg är fortfarande experimentellt ***


## Användning

Först installera

```
    npm install -g autotranslatedoc
```

Se sedan till att du konfigurerar följande miljövariabler: ```GITHUB_PERSONAL_ACCESS_TOKEN``` och ```OPENAI_API_KEY```. Alternativt kan du skicka in denna token som parameter.

För att se hjälpsidan
```
 autotranslatedoc -h
```

Översätt sedan dokumentationen för ett målrepo till franska och spanska
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Detta kommer att skapa en fil llama_index.json i katalogen run-lama i den angivna utdatamappen (standard=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Denna sparade fil innehåller alla översättningar och kan användas för att generera dokumentationen i ett målformat (för närvarande endast .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Detta kommer att generera ett franskt och spanskt repo i byggmappen (standard ./build) som kommer att innehålla de översatta dokumentationsfilerna.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Detta kommer att titta på befintliga översättningar i den befintliga dokumentations-sparfilen och utföra en differentiell översättning av varje fil som har uppdaterats.

```
    autotranslatedoc serve run-llama llama_index
```

Startar en server som möjliggör enkel granskning av dokumentationen på port 3000 eller env.PORT. EXPERIMENTELLT

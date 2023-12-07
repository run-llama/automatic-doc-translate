
# Automatisk dokumentoversættelse med OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Denne dokumentation er blevet automatisk oversat og kan indeholde fejl. Tøv ikke med at åbne en Pull Request for at foreslå ændringer.```


Et værktøj, der automatisk oversætter dokumentationen (alle .md-filer) i et GitHub-repo ved hjælp af OPEN AI GPT 3.5

*** Bemærk: Dette værktøj er stadig eksperimentelt ***


## Brug

Først skal du installere

```
    npm install -g autotranslatedoc
```

Sørg derefter for at konfigurere følgende miljøvariabler: ```GITHUB_PERSONAL_ACCESS_TOKEN``` og ```OPENAI_API_KEY```. Alternativt kan du sende denne token som parameter

For at se hjælpesiden
```
 autotranslatedoc -h
```

Oversæt derefter dokumentationen for et målrepo på fransk og spansk
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Dette vil oprette en llama_index.json-fil i run-lama-mappen i den angivne output-mappe (standard=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Denne gemte fil indeholder alle oversættelser og kan bruges til at generere dokumentationen i et målformat (i øjeblikket kun .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Dette vil generere et fransk og spansk repository i buildPath (standard ./build), der vil indeholde de oversatte dokumentationsfiler

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Dette vil se på eksisterende oversættelser i den eksisterende gemte dokumentationsfil og udføre en differentiel oversættelse af hver fil, der er blevet opdateret.

```
    autotranslatedoc serve run-llama llama_index
```

Vil starte en server, der gør det nemt at gennemgå dokumentationen på port 3000 eller env.PORT. EKSPERIMENTELT

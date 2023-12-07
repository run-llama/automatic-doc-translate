
# Automatisk dokumentoversettelse med OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Denne dokumentasjonen har blitt automatisk oversatt og kan inneholde feil. Ikke nøl med å åpne en Pull Request for å foreslå endringer.```


Et verktøy som automatisk oversetter dokumentasjonen (alle .md-filer) i et GitHub-repo ved hjelp av OPEN AI GPT 3.5

*** Ansvarsfraskrivelse: Dette verktøyet er fortsatt eksperimentelt ***


## Bruk

Først installer

```
    npm install -g autotranslatedoc
```

Sørg deretter for at du setter opp følgende miljøvariabler: ```GITHUB_PERSONAL_ACCESS_TOKEN``` og ```OPENAI_API_KEY```. Alternativt kan du sende denne tokenen som parameter

For å se hjelpesiden
```
 autotranslatedoc -h
```

Deretter oversetter du dokumentasjonen til et målrepo på fransk og spansk
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Dette vil opprette en llama_index.json-fil i run-lama-mappen i den angitte utmappe (standard=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Denne lagringsfilen inneholder all oversettelsen og kan brukes til å generere dokumentasjonen i et målformat (for øyeblikket bare .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Dette vil generere et fransk og spansk repo i byggbanen (standard ./build) som vil inneholde de oversatte dokumentasjonsfilene

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Dette vil se på eksisterende oversettelser i den eksisterende dokumentasjonslagringsfilen og utføre en differensialoversettelse av hver fil som er blitt oppdatert.

```
    autotranslatedoc serve run-llama llama_index
```

Vil starte en server som gjør det enkelt å gjennomgå dokumentasjonen på port 3000 eller env.PORT. EKSPERIMENTELL

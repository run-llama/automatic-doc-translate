
# Automatische documentvertaling met OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Deze documentatie is automatisch vertaald en kan fouten bevatten. Aarzel niet om een Pull Request te openen om wijzigingen voor te stellen.```


Een tool die automatisch de documentatie (elk .md-bestand) in een GitHub-repository vertaalt met behulp van OPEN AI GPT 3.5

*** Disclaimer: Deze tool is nog experimenteel ***


## Gebruik

Installeer eerst

```
    npm install -g autotranslatedoc
```

Zorg er vervolgens voor dat u de volgende omgevingsvariabelen instelt: ```GITHUB_PERSONAL_ACCESS_TOKEN``` en ```OPENAI_API_KEY```. U kunt deze token ook doorgeven als parameter.

Om de helppagina te bekijken
```
 autotranslatedoc -h
```

Vertaal vervolgens de documentatie van een doelrepository naar het Frans en Spaans
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Dit zal een llama_index.json-bestand aanmaken in de run-lama-map van de opgegeven uitvoermap (standaard=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Dit opgeslagen bestand bevat alle vertalingen en kan worden gebruikt om de documentatie naar een doelformaat te genereren (momenteel alleen .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Dit zal een fr en es repository genereren in de buildPath (standaard ./build) die de vertaalde documentatiebestanden bevat

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Dit zal kijken naar reeds bestaande vertalingen in het bestaande documentatieopslagbestand en zal een differentiële vertaling uitvoeren van elk bestand dat is bijgewerkt.

```
    autotranslatedoc serve run-llama llama_index
```

Start een server waarmee de documentatie gemakkelijk kan worden bekeken op poort 3000 of env.PORT. EXPERIMENTEEL

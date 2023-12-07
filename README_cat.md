
# Traducció automàtica de documents amb OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) 

```Aquesta documentació s'ha traduït automàticament i pot contenir errors. No dubteu a obrir una Pull Request per suggerir canvis.```


Una eina que tradueix automàticament els documents (tots els fitxers .md) en un repositori de GitHub utilitzant OPEN AI GPT 3.5

*** Avís legal: Aquesta eina encara és experimental ***


## Ús

Primer, instal·leu

```
    npm install -g autotranslatedoc
```

A continuació, assegureu-vos de configurar les següents variables d'entorn: ```GITHUB_PERSONAL_ACCESS_TOKEN``` i ```OPENAI_API_KEY```. Alternativament, podeu passar aquesta clau com a paràmetre

Per veure la pàgina d'ajuda
```
 autotranslatedoc -h
```

A continuació, traduïu el document d'un repositori de destinació en francès i espanyol
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Això crearà un fitxer llama_index.json al directori run-lama del directori de sortida especificat (per defecte = ./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Aquest fitxer de desament conté totes les traduccions i es pot utilitzar per generar el document en un format de destinació (actualment només .md)


```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Això generarà un repositori fr i es a la ruta de construcció (per defecte = ./build) que contindrà els fitxers de document traduïts

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Això examinarà les traduccions preexistents en el fitxer de desament de document existent i realitzarà una traducció diferencial de cada fitxer que s'hagi actualitzat.

```
    autotranslatedoc serve run-llama llama_index
```

Llançarà un servidor que permetrà revisar fàcilment el document a través del port 3000 o env.PORT. EXPERIMENTAL


"

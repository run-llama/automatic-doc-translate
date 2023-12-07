
# Traducció Automàtica de Documentació OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) 

```Aquesta documentació s'ha traduït automàticament i pot contenir errors. No dubteu a obrir una Pull Request per suggerir canvis.```


Aquesta eina aprofita les capacitats de OPEN AI GPT 3.5 / 4 per traduir automàticament fitxers de documentació (és a dir, fitxers .md/.mdx) dins d'un repositori de GitHub.

*** Avís: Aquesta eina està en desenvolupament ***


## Instal·lació 

L'eina es pot instal·lar mitjançant NPM:


```
    npm install -g autotranslatedoc
```

Assegureu-vos de configurar les variables d'entorn: `GITHUB_PERSONAL_ACCESS_TOKEN` i `OPENAI_API_KEY`. Alternativament, aquests tokens es poden passar com a paràmetres. Consulteu la [documentació de GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) per obtenir un `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Ús


### Pàgina d'Ajuda
Accedeix a la pàgina d'ajuda amb la següent comanda:
```
 autotranslatedoc -h
```
### Traducció de la Documentació

Per traduir la documentació d'un repositori de destinació a francès i espanyol, utilitzeu:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Aquesta comanda crea un fitxer `llama_index.json` al directori `run-lama` del directori de sortida especificat (per defecte és `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
El fitxer de desament conté totes les traduccions i es pot utilitzar per generar la documentació en un format de destinació (actualment només .md).

Per compilar la documentació traduïda, utilitzeu:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Aquesta comanda genera els directoris `fr` i `es` al `buildPath` (per defecte és `./build`) que contenen els fitxers de documentació traduïts.

Per actualitzar la documentació traduïda en base als canvis en els fitxers originals, utilitzeu:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Per revisar la documentació mitjançant un servidor (característica experimental), utilitzeu:
```
    autotranslatedoc serve run-llama llama_index
```
### Traducció de Documentació Docusaurus

Per traduir la documentació allotjada a Docusaurus, utilitzeu:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Traducció només del README.md

Per traduir només el fitxer README, utilitza el mode `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Traducció a Totes les Llengües Suportades

Per traduir a totes les llengües suportades, utilitzeu l'opció `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Problemes Coneguts

Actualment, la traducció amb l'opció `-all` només és compatible des de l'anglès a totes les altres llengües.


# Traducció Automàtica de la Documentació d'OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) 

```Aquesta documentació s'ha traduït automàticament i pot contenir errors. No dubteu a obrir una Pull Request per suggerir canvis.```


## Instal·lació 

L'eina es pot instal·lar a través de NPM:


```
    npm install -g autotranslatedoc
```

Assegureu-vos de configurar les variables d'entorn: `GITHUB_PERSONAL_ACCESS_TOKEN` i `OPENAI_API_KEY`. Alternativament, aquests tokens es poden passar com a paràmetres. Consulteu la [documentació de GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) per obtenir un `GITHUB_PERSONAL_ACCESS_TOKEN`.


 "
## Ús


### Pàgina d'Ajuda
Accedeix a la pàgina d'ajuda amb la següent comanda:
```
 autotranslatedoc -h
```
### Traducció de la Documentació

Autotranslatedoc té 3 arguments i moltes opcions

```
    autotranslatedoc <comanda> <repo_org> <repo_name> (opcions)
```

- ```comanda``` pot ser: ```translate``` (per traduir), ```update``` (per actualitzar una traducció), ```build``` (per construir una traducció)
- ```repo_org``` és l'organització del repositori de destinació a GitHub
- ```repo_name``` és el nom del repositori de destinació a GitHub

Les principals opcions disponibles són:

- ```--language <lang_1>(, <lang_2>)*``` (o ```-l```) per seleccionar l'idioma al qual voleu traduir.
- ```--docPath </url/path>``` (o ```-d```) per limitar la traducció als fitxers en una ruta específica.
- ```--savePath <./localPath>``` (o ```-s```) per seleccionar el directori on es guardarà el fitxer de desament (per defecte ```./save```).
- ```--outputPath <./localPath>``` (o ```-o```) quan s'utilitza ```build```, per especificar on es generaran els fitxers de documentació traduïts (per defecte ```./build```)



Per traduir la documentació d'un repositori de destinació al francès i l'espanyol, utilitzeu:
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

Per construir la documentació traduïda, utilitzeu:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Aquesta comanda genera els directoris `fr` i `es` al `buildPath` (per defecte és `./build`) que contenen els fitxers de documentació traduïts.

Per actualitzar la documentació traduïda en base als canvis en els fitxers originals, utilitzeu:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Per revisar la documentació mitjançant un servidor (funció experimental), utilitzeu:
```
    autotranslatedoc serve run-llama llama_index
```
### Traducció de la Documentació de Docusaurus

Per traduir la documentació allotjada a Docusaurus, utilitzeu:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Traducció Només del README.md

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

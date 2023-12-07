
# OpenAI Automatisk Dokumentationsoversættelse

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Denne dokumentation er blevet automatisk oversat og kan indeholde fejl. Tøv ikke med at åbne en Pull Request for at foreslå ændringer.```


## Installation 

Værktøjet kan installeres via NPM:

```
    npm install -g autotranslatedoc
```

Sørg for at opsætte miljøvariablerne: `GITHUB_PERSONAL_ACCESS_TOKEN` og `OPENAI_API_KEY`. Alternativt kan disse tokens sendes som parametre. Se [GitHub-dokumentationen](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) for at få en `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Brug

### Hjælpeside
Få adgang til hjælpesiden med følgende kommando:
```
 autotranslatedoc -h
```
### Oversættelse af dokumentation

Autotranslatedoc tager 3 argumenter og mange muligheder

```
    autotranslatedoc <kommando> <repo_org> <repo_navn> (muligheder)
```

- ```kommando``` kan enten være: ```translate``` (til oversættelse), ```update``` (til opdatering af en oversættelse), ```build``` (til opbygning af en oversættelse)
- ```repo_org``` er organisationen for det målrettede repository på GitHub
- ```repo_navn``` er navnet på det målrettede repository på GitHub

De vigtigste tilgængelige muligheder er:

- ```--language <sprog_1>(, <sprog_2>)*``` (eller ```-l```) for at vælge det sprog, du vil oversætte til.
- ```--docPath </url/sti>``` (eller ```-d```) for at begrænse oversættelsen til filer i en bestemt sti.
- ```--savePath <./lokalSti>``` (eller ```-s```) for at vælge mappen, hvor gemte filen skal gemmes (standard er ```./save```).
- ```--outputPath <./lokalSti>``` (eller ```-o```) ved brug af ```build```, for at angive, hvor de oversatte dokumentationsfiler skal placeres (standard er ```./build```)

For at oversætte dokumentationen for et målrettet repository til fransk og spansk, skal du bruge:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Denne kommando opretter en `llama_index.json` fil i `run-lama` mappen i den angivne output mappe (standard er `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Gemte fil indeholder alle oversættelser og kan bruges til at generere dokumentationen i et målrettet format (i øjeblikket kun .md).

For at opbygge den oversatte dokumentation skal du bruge:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Denne kommando genererer `fr` og `es` mapper i `buildPath` (standard er `./build`), der indeholder de oversatte dokumentationsfiler.

For at opdatere den oversatte dokumentation baseret på ændringer i de originale filer, skal du bruge:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

For at gennemgå dokumentationen via en server (eksperimentel funktion), skal du bruge:
```
    autotranslatedoc serve run-llama llama_index
```
### Oversættelse af Docusaurus Dokumentation

For at oversætte dokumentation, der er hostet i Docusaurus, skal du bruge:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Kun oversættelse af README.md

For kun at oversætte README-filen, skal du bruge `readme`-tilstand:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Oversættelse til alle understøttede sprog

For at oversætte til alle understøttede sprog, skal du bruge `-l all` muligheden:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Kendte problemer

I øjeblikket understøttes oversættelse med `-all` kun fra engelsk til alle andre sprog.


# OpenAI Automatisk Dokumentation Översättning

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Denna dokumentation har översatts automatiskt och kan innehålla fel. Tveka inte att öppna en Pull Request för att föreslå ändringar.```


Detta verktyg utnyttjar möjligheterna hos OPEN AI GPT 3.5 / 4 för att automatiskt översätta dokumentationsfiler (dvs .md/.mdx-filer) inom ett GitHub-repositorium.

*** Ansvarsfriskrivning: Detta verktyg är för närvarande under utveckling ***


## Installation 

Verktyget kan installeras via NPM:


```
    npm install -g autotranslatedoc
```

Se till att konfigurera miljövariablerna: `GITHUB_PERSONAL_ACCESS_TOKEN` och `OPENAI_API_KEY`. Alternativt kan dessa tokens skickas som parametrar. Se [GitHub-dokumentationen](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) för att få en `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Användning


### Hjälpsida
Få tillgång till hjälpsidan med följande kommando:
```
 autotranslatedoc -h
```
### Översättning av dokumentation

För att översätta dokumentationen för ett målrepository till franska och spanska, använd:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Denna kommando skapar en `llama_index.json`-fil i katalogen `run-lama` i den angivna utdatamappen (standard är `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Sparfilen innehåller alla översättningar och kan användas för att generera dokumentationen i ett målformat (för närvarande endast .md).

För att bygga den översatta dokumentationen, använd:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Denna kommando genererar `fr` och `es`-kataloger i `buildPath` (standard är `./build`) som innehåller de översatta dokumentationsfilerna.

För att uppdatera den översatta dokumentationen baserat på ändringar i de ursprungliga filerna, använd:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


För att granska dokumentationen via en server (experimentell funktion), använd:
```
    autotranslatedoc serve run-llama llama_index
```
### Översättning av Docusaurus-dokumentation

För att översätta dokumentation som är värd för Docusaurus, använd:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Översättning av endast README.md

För att översätta endast README-filen, använd `readme`-läget:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Översättning till alla stödda språk

För att översätta till alla stödda språk, använd `-l all` alternativet:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Kända problem

För närvarande stöds endast översättning med `-all` från engelska till alla andra språk.

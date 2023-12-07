
# OpenAI Automatisk Dokumentasjons Oversettelse

[EN](./README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Denne dokumentasjonen har blitt automatisk oversatt og kan inneholde feil. Ikke nøl med å åpne en Pull Request for å foreslå endringer.```


Dette verktøyet utnytter mulighetene til OPEN AI GPT 3.5 / 4 for å automatisk oversette dokumentasjonsfiler (dvs. .md/.mdx filer) i et GitHub repository.

*** Ansvarsfraskrivelse: Dette verktøyet er for øyeblikket under utvikling ***


## Installasjon 

Verktøyet kan installeres via NPM:


```
    npm install -g autotranslatedoc
```

Sørg for å sette opp miljøvariablene: `GITHUB_PERSONAL_ACCESS_TOKEN` og `OPENAI_API_KEY`. Alternativt kan disse tokenene sendes som parametere. Se [GitHub-dokumentasjonen](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) for å få en `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Bruk

### Hjelpeside
Få tilgang til hjelpesiden med følgende kommando:
```
 autotranslatedoc -h
```
### Oversettelse av dokumentasjon

For å oversette dokumentasjonen i et målrepositorium til fransk og spansk, bruk:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Denne kommandoen oppretter en `llama_index.json`-fil i `run-lama`-mappen i den angitte utmappe (standard er `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Lagringsfilen inneholder alle oversettelser og kan brukes til å generere dokumentasjonen i et målformat (for øyeblikket bare .md).

For å bygge den oversatte dokumentasjonen, bruk:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Denne kommandoen genererer `fr` og `es`-mapper i `buildPath` (standard er `./build`) som inneholder de oversatte dokumentasjonsfilene.

For å oppdatere den oversatte dokumentasjonen basert på endringer i de opprinnelige filene, bruk:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

For å se gjennom dokumentasjonen via en server (eksperimentell funksjon), bruk:
```
    autotranslatedoc serve run-llama llama_index
```
### Oversettelse av Docusaurus-dokumentasjon

For å oversette dokumentasjon som er vert på Docusaurus, bruk:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Oversett kun README.md

For å oversette kun README-filen, bruk `readme`-modusen:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Oversettelse til alle støttede språk

For å oversette til alle støttede språk, bruk `-l all`-alternativet:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Kjente Problemer

For øyeblikket støttes oversettelse med `-all` kun fra engelsk til alle andre språk.

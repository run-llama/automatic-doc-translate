
# OpenAI Automatische Documentatievertaling

[EN](./README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Deze documentatie is automatisch vertaald en kan fouten bevatten. Aarzel niet om een Pull Request te openen om wijzigingen voor te stellen.```


Deze tool maakt gebruik van de mogelijkheden van OPEN AI GPT 3.5 / 4 om automatisch documentatiebestanden (d.w.z. .md/.mdx bestanden) binnen een GitHub repository te vertalen.

*** Disclaimer: Deze tool is momenteel in ontwikkeling ***


## Installatie

De tool kan worden geïnstalleerd via NPM:


```
    npm install -g autotranslatedoc
```

Zorg ervoor dat de omgevingsvariabelen zijn ingesteld: `GITHUB_PERSONAL_ACCESS_TOKEN` en `OPENAI_API_KEY`. Als alternatief kunnen deze tokens als parameters worden doorgegeven. Raadpleeg de [GitHub-documentatie](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) voor het verkrijgen van een `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Gebruik


### Help Pagina
Toegang tot de help pagina met de volgende opdracht:
```
 autotranslatedoc -h
```
### Documentatie vertalen

Om de documentatie van een doelrepository naar het Frans en Spaans te vertalen, gebruik je:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Deze opdracht maakt een `llama_index.json` bestand aan in de `run-lama` map van de opgegeven uitvoermap (standaard is `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Het opgeslagen bestand bevat alle vertalingen en kan worden gebruikt om de documentatie in een doelformaat te genereren (momenteel alleen .md).

Om de vertaalde documentatie te genereren, gebruik je:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Deze opdracht genereert `fr` en `es` mappen in de `buildPath` (standaard is `./build`) met de vertaalde documentatiebestanden.

Om de vertaalde documentatie bij te werken op basis van wijzigingen in de oorspronkelijke bestanden, gebruik je:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Om de documentatie te bekijken via een server (experimentele functie), gebruik je:
```
    autotranslatedoc serve run-llama llama_index
```
### Vertalen van Docusaurus Documentatie

Voor het vertalen van documentatie die wordt gehost in Docusaurus, gebruik:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Alleen README.md vertalen

Om alleen het README-bestand te vertalen, gebruik de `readme` modus:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Vertalen naar alle ondersteunde talen

Om naar alle ondersteunde talen te vertalen, gebruik de `-l all` optie:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Bekende Problemen

Op dit moment wordt vertaling met `-all` alleen ondersteund van Engels naar alle andere talen.

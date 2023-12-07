
# Samodejni prevod dokumentacije OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Ta dokumentacija je bila samodejno prevedena in lahko vsebuje napake. Ne oklevajte odpreti Pull Request za predlaganje sprememb.```


 [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) |  [fr](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 


Ta orodje izkorišča zmogljivosti OPEN AI GPT 3.5 / 4 za samodejni prevod datotek dokumentacije (tj. .md/.mdx datotek) v okviru GitHub skladišča.

*** Opozorilo: To orodje je trenutno v razvoju ***


## Namestitev 

Orodje lahko namestite prek NPM:

```
    npm install -g autotranslatedoc
```

Poskrbite, da nastavite okoljske spremenljivke: `GITHUB_PERSONAL_ACCESS_TOKEN` in `OPENAI_API_KEY`. Alternativno lahko te žetone prenesete kot parametre. Za pridobitev `GITHUB_PERSONAL_ACCESS_TOKEN` si oglejte [GitHub dokumentacijo](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).


"
## Uporaba


### Stran s pomočjo
Dostopajte do strani s pomočjo s sledečim ukazom:
```
 autotranslatedoc -h
```
### Prevajanje dokumentacije

Autotranslatedoc sprejme 3 argumente in veliko možnosti

```
    autotranslatedoc <ukaz> <repo_org> <repo_name> (možnosti)
```

- ```ukaz``` je lahko: ```translate``` (za prevajanje), ```update``` (za posodobitev prevoda), ```build``` (za izgradnjo prevoda)
- ```repo_org``` je organizacija ciljnega skladišča na GitHubu
- ```repo_name``` je ime ciljnega skladišča na GitHubu

Glavne možnosti, ki so na voljo, so:

- ```--language <lang_1>(, <lang_2>)*``` (ali ```-l```) za izbiro jezika, v katerega želite prevajati.
- ```--docPath </url/path>``` (ali ```-d```) za omejitev prevajanja na datoteke v določeni poti.
- ```--savePath <./localPath>``` (ali ```-s```) za izbiro mape, kamor bo shranjena datoteka (privzeto ```./save```).
- ```--outputPath <./localPath>``` (ali ```-o```) pri uporabi ```build```, da določite, kam bodo izhodne datoteke prevedene dokumentacije (privzeto ```./build```)



Za prevajanje dokumentacije ciljnega skladišča v francoščino in španščino uporabite:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Ta ukaz ustvari datoteko `llama_index.json` v mapi `run-lama` določene izhodne mape (privzeto je `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Shranjena datoteka vsebuje vse prevode in se lahko uporablja za generiranje dokumentacije v ciljnem formatu (trenutno samo .md).

Za izgradnjo prevedene dokumentacije uporabite:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Ta ukaz ustvari mape `fr` in `es` v `buildPath` (privzeto je `./build`), ki vsebujejo datoteke prevedene dokumentacije.

Za posodobitev prevedene dokumentacije na podlagi sprememb v izvirnih datotekah uporabite:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Za pregled dokumentacije prek strežnika (eksperimentalna funkcija) uporabite:
```
    autotranslatedoc serve run-llama llama_index
```
### Prevajanje dokumentacije Docusaurus

Za prevajanje dokumentacije, ki je gostovana v Docusaurusu, uporabite:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Prevajanje samo README.md

Za prevajanje samo datoteke README uporabite način `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Prevajanje v vse podprte jezike

Za prevajanje v vse podprte jezike uporabite možnost `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Znane težave

Trenutno je prevod z `-all` podprt samo iz angleščine v vse druge jezike.

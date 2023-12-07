
# OpenAI Automatikus Dokumentáció Fordítás

[EN](./README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Ezt a dokumentációt automatikusan fordították le, és tartalmazhat hibákat. Ne habozzon nyitni egy Pull Requestet a változtatások javasolására.```


Ez az eszköz kihasználja az OPEN AI GPT 3.5 / 4 képességeit a dokumentációs fájlok (pl. .md/.mdx fájlok) automatikus fordításához egy GitHub tárolóban.

*** Figyelem: Ez az eszköz jelenleg fejlesztés alatt áll ***


## Telepítés

Az eszköz telepíthető a NPM segítségével:


```
    npm install -g autotranslatedoc
```

Győződjön meg arról, hogy beállította a környezeti változókat: `GITHUB_PERSONAL_ACCESS_TOKEN` és `OPENAI_API_KEY`. Ezen tokeneket alternatívaként paraméterként is át lehet adni. A `GITHUB_PERSONAL_ACCESS_TOKEN` megszerzéséhez tekintse meg a [GitHub dokumentációt](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).


"
## Használat


### Súgó oldal
A súgó oldalhoz a következő parancsot használja:
```
 autotranslatedoc -h
```
### Dokumentáció Fordítása

A céltároló dokumentációjának fordításához francia és spanyol nyelvre használja a következőt:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Ez a parancs létrehoz egy `llama_index.json` fájlt a megadott kimeneti könyvtár `run-lama` könyvtárában (alapértelmezett: `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
A mentett fájl tartalmazza az összes fordítást, és használható a dokumentáció létrehozásához a célnyelven (jelenleg csak .md formátumban).

A fordított dokumentáció létrehozásához használja a következőt:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Ez a parancs létrehoz egy `fr` és `es` könyvtárat a `buildPath`-ben (alapértelmezett: `./build`), amelyek tartalmazzák a fordított dokumentációs fájlokat.

A fordított dokumentáció frissítéséhez az eredeti fájlokban történt változások alapján használja a következőt:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


A dokumentáció áttekintéséhez egy szerveren keresztül (kísérleti funkció) használja a következőt:
```
    autotranslatedoc serve run-llama llama_index
```
### Docusaurus Dokumentáció Fordítása

A Docusaurusban tárolt dokumentáció fordításához használja a következő parancsokat:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Csak a README.md fordítása

A README fájl fordításához használja a `readme` módot:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Fordítás minden támogatott nyelvre

Az összes támogatott nyelvre történő fordításhoz használja a `-l all` opciót:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Ismert Problémák

Jelenleg a `-all` opcióval történő fordítás csak angolról támogatott minden más nyelvre.

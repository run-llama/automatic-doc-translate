
# Traducerea Automată a Documentației OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Această documentație a fost tradusă automat și poate conține erori. Nu ezitați să deschideți un Pull Request pentru a sugera modificări.```


 [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) |  [fr](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

Această unealtă utilizează capacitățile OPEN AI GPT 3.5 / 4 pentru a traduce automat fișierele de documentație (adică fișierele .md/.mdx) dintr-un depozit GitHub.

*** Notă: Această unealtă este în curs de dezvoltare ***


## Instalare 

Instrumentul poate fi instalat prin intermediul NPM:


```
    npm install -g autotranslatedoc
```

Asigurați-vă că ați configurat variabilele de mediu: `GITHUB_PERSONAL_ACCESS_TOKEN` și `OPENAI_API_KEY`. În mod alternativ, aceste chei pot fi transmise ca parametri. Consultați [documentația GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) pentru obținerea unui `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Utilizare


### Pagina de Ajutor
Accesați pagina de ajutor cu următoarea comandă:
```
 autotranslatedoc -h
```
### Traducerea documentației

Autotranslatedoc primește 3 argumente și multe opțiuni

```
    autotranslatedoc <comandă> <repo_org> <repo_name> (opțiuni)
```

- ```comandă``` poate fi: ```translate``` (pentru a traduce), ```update``` (pentru a actualiza o traducere), ```build``` (pentru a construi o traducere)
- ```repo_org``` este organizația depozitului țintă pe GitHub
- ```repo_name``` este numele depozitului țintă pe GitHub

Principalele opțiuni disponibile sunt:

- ```--language <lang_1>(, <lang_2>)*``` (sau ```-l```) pentru a selecta limba în care doriți să traduceți.
- ```--docPath </url/path>``` (sau ```-d```) pentru a limita traducerea la fișiere dintr-un anumit director.
- ```--savePath <./localPath>``` (sau ```-s```) pentru a selecta directorul în care fișierul salvat va fi salvat (implicit ```./save```).
- ```--outputPath <./localPath>``` (sau ```-o```) atunci când se utilizează ```build```, pentru a specifica unde vor fi plasate fișierele documentației traduse (implicit ```./build```)



Pentru a traduce documentația unui depozit țintă în franceză și spaniolă, utilizați:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Această comandă creează un fișier `llama_index.json` în directorul `run-lama` al directorului de ieșire specificat (implicit este `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Fișierul salvat conține toate traducerile și poate fi utilizat pentru a genera documentația într-un format țintă (în prezent doar .md).

Pentru a construi documentația tradusă, utilizați:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Această comandă generează directoarele `fr` și `es` în `buildPath` (implicit este `./build`) care conțin fișierele documentației traduse.

Pentru a actualiza documentația tradusă pe baza modificărilor din fișierele originale, utilizați:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Pentru a revizui documentația prin intermediul unui server (funcționalitate experimentală), utilizați:
```
    autotranslatedoc serve run-llama llama_index
```
### Traducerea Documentației Docusaurus

Pentru a traduce documentația găzduită în Docusaurus, utilizați:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Traducerea doar a fișierului README.md

Pentru a traduce doar fișierul README, utilizați modul `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Traducerea în Toate Limbile Suportate

Pentru a traduce în toate limbile suportate, utilizați opțiunea `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Probleme Cunoscute

În prezent, traducerea cu `-all` este acceptată doar de la engleză la toate celelalte limbi.

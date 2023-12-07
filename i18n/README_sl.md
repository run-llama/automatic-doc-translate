
# Automatický preklad dokumentácie OpenAI

[EN](./README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Táto dokumentácia bola automaticky preložená a môže obsahovať chyby. Neváhajte otvoriť Pull Request na navrhnutie zmien.```


Tento nástroj využíva schopnosti OPEN AI GPT 3.5 / 4 na automatický preklad súborov dokumentácie (tj. súborov .md/.mdx) v rámci repozitára GitHub.

*** Upozornenie: Tento nástroj je momentálne vo vývoji ***


## Inštalácia 

Nástroj je možné nainštalovať pomocou NPM:


```
    npm install -g autotranslatedoc
```

Uistite sa, že ste nastavili premenné prostredia: `GITHUB_PERSONAL_ACCESS_TOKEN` a `OPENAI_API_KEY`. Alternatívne, tieto tokeny je možné preniesť ako parametre. Pre získanie `GITHUB_PERSONAL_ACCESS_TOKEN` sa pozrite do [dokumentácie GitHubu](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).


"
## Použitie


### Stránka s nápovedou
Prístup k stránke s nápovedou pomocou nasledujúceho príkazu:
```
 autotranslatedoc -h
```
### Preklad dokumentácie

Pre preklad dokumentácie cieľového repozitára do francúzštiny a španielčiny použite:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Tento príkaz vytvorí súbor `llama_index.json` v adresári `run-lama` v zadanom výstupnom adresári (predvolené je `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Súbor save obsahuje všetky preklady a môže byť použitý na generovanie dokumentácie vo vybranom formáte (momentálne iba .md).

Pre zostavenie preloženej dokumentácie použite:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Tento príkaz vytvorí adresáre `fr` a `es` v `buildPath` (predvolené je `./build`), ktoré obsahujú preložené súbory dokumentácie.

Pre aktualizáciu preloženej dokumentácie na základe zmien v pôvodných súboroch použite:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Pre prehliadanie dokumentácie cez server (experimentálna funkcia) použite:
```
    autotranslatedoc serve run-llama llama_index
```
### Preklad dokumentácie Docusaurus

Pre preklad dokumentácie hostovanej v Docusaurus použite:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Preklad iba súboru README.md

Pre preklad iba súboru README použite režim `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Preklad do všetkých podporovaných jazykov

Pre preklad do všetkých podporovaných jazykov použite možnosť `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Známe problémy

Momentálne je preklad s použitím `-all` podporovaný iba z angličtiny do všetkých ostatných jazykov.

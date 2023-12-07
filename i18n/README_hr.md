
# Automatski prijevod OpenAI dokumentacije

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Ova dokumentacija je automatski prevedena i može sadržavati greške. Ne ustručavajte se otvoriti Pull Request za predlaganje promjena.```


 [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) |  [fr](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 


Ovaj alat koristi mogućnosti OPEN AI GPT 3.5 / 4 za automatsko prevođenje datoteka dokumentacije (npr. .md/.mdx datoteke) unutar GitHub repozitorija.

*** Napomena: Ovaj alat je trenutno u razvoju ***


## Instalacija 

Alat se može instalirati putem NPM-a:


```
    npm install -g autotranslatedoc
```

Osigurajte postavljanje okolišnih varijabli: `GITHUB_PERSONAL_ACCESS_TOKEN` i `OPENAI_API_KEY`. Alternativno, ove tokene možete proslijediti kao parametre. Pogledajte [GitHub dokumentaciju](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) za dobivanje `GITHUB_PERSONAL_ACCESS_TOKEN`.


 "
## Upotreba


### Stranica s pomoći
Pristupite stranici s pomoći pomoću sljedeće naredbe:
```
 autotranslatedoc -h
```
### Prevođenje dokumentacije

Autotranslatedoc prima 3 argumenta i mnogo opcija

```
    autotranslatedoc <naredba> <repo_org> <repo_name> (opcije)
```

- ```naredba``` može biti: ```translate``` (za prevođenje), ```update``` (za ažuriranje prijevoda), ```build``` (za izgradnju prijevoda)
- ```repo_org``` je organizacija ciljnog repozitorija na GitHubu
- ```repo_name``` je naziv ciljnog repozitorija na GitHubu

Glavne dostupne opcije su:

- ```--language <lang_1>(, <lang_2>)*``` (ili ```-l```) za odabir jezika na koji želite prevesti.
- ```--docPath </url/path>``` (ili ```-d```) za ograničavanje prijevoda na datoteke u određenom putu.
- ```--savePath <./localPath>``` (ili ```-s```) za odabir direktorija u kojem će se spremiti datoteka za spremanje (zadano je ```./save```).
- ```--outputPath <./localPath>``` (ili ```-o```) prilikom korištenja ```build```, za određivanje gdje će se izlazne datoteke prevedene dokumentacije nalaziti (zadano je ```./build```)



Za prevođenje dokumentacije ciljnog repozitorija na francuski i španjolski jezik, koristite:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Ova naredba stvara datoteku `llama_index.json` u direktoriju `run-lama` određenog izlaznog direktorija (zadano je `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Datoteka za spremanje sadrži sve prijevode i može se koristiti za generiranje dokumentacije u ciljanom formatu (trenutno samo .md).

Za izgradnju prevedene dokumentacije koristite:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Ova naredba generira direktorije `fr` i `es` u `buildPath` (zadano je `./build`) koji sadrže datoteke prevedene dokumentacije.

Za ažuriranje prevedene dokumentacije na temelju promjena u izvornim datotekama, koristite:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Za pregled dokumentacije putem poslužitelja (eksperimentalna značajka), koristite:
```
    autotranslatedoc serve run-llama llama_index
```
### Prevođenje Docusaurus dokumentacije

Za prevođenje dokumentacije smještene u Docusaurusu, koristite:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Samo prevođenje README.md

Za prevođenje samo README datoteke, koristite način rada `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Prevođenje na sve podržane jezike

Za prevođenje na sve podržane jezike, koristite opciju `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Poznati problemi

Trenutno je podržano samo prevođenje s opcijom `-all` iz engleskog na sve ostale jezike.

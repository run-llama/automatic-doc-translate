
# Automatsko prevođenje OpenAI dokumentacije

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Ova dokumentacija je automatski prevedena i može sadržati greške. Ne oklevajte da otvorite Pull Request za predlaganje izmena.```


 [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) |  [fr](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

Ovaj alat koristi mogućnosti OPEN AI GPT 3.5 / 4 da automatski prevede dokumentacione fajlove (tj. .md/.mdx fajlove) unutar GitHub repozitorijuma.

*** Napomena: Ovaj alat je trenutno u razvoju ***


## Instalacija 

Alat se može instalirati putem NPM-a:


```
    npm install -g autotranslatedoc
```

Obavezno postavite okruženjske promenljive: `GITHUB_PERSONAL_ACCESS_TOKEN` i `OPENAI_API_KEY`. Alternativno, ove tokene možete proslediti kao parametre. Pogledajte [GitHub dokumentaciju](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) za dobijanje `GITHUB_PERSONAL_ACCESS_TOKEN`.


"
## Upotreba


### Stranica za pomoć
Pristupite stranici za pomoć pomoću sledeće komande:
```
 autotranslatedoc -h
```
### Prevođenje dokumentacije

Autotranslatedoc prima 3 argumenta i mnogo opcija

```
    autotranslatedoc <komanda> <repo_org> <repo_naziv> (opcije)
```

- ```komanda``` može biti: ```translate``` (za prevođenje), ```update``` (za ažuriranje prevoda), ```build``` (za izgradnju prevoda)
- ```repo_org``` je organizacija ciljnog repozitorijuma na GitHub-u
- ```repo_naziv``` je naziv ciljnog repozitorijuma na GitHub-u

Glavne dostupne opcije su:

- ```--jezik <jezik_1>(, <jezik_2>)*``` (ili ```-l```) za odabir jezika na koji želite prevesti.
- ```--putanjaDokumentacije </url/putanja>``` (ili ```-d```) za ograničavanje prevoda na fajlove u određenoj putanji.
- ```--putanjaCuvanja <./lokalnaPutanja>``` (ili ```-s```) za odabir direktorijuma gde će se sačuvati fajl (podrazumevano je ```./save```).
- ```--putanjaIzlaza <./lokalnaPutanja>``` (ili ```-o```) kada koristite ```build```, za određivanje gde će se izlazni dokumenti prevoda nalaziti (podrazumevano je ```./build```)



Da biste preveli dokumentaciju ciljnog repozitorijuma na francuski i španski jezik, koristite:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Ova komanda kreira fajl `llama_index.json` u direktorijumu `run-lama` određenog izlaznog direktorijuma (podrazumevano je `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Sačuvani fajl sadrži sve prevode i može se koristiti za generisanje dokumentacije u ciljanom formatu (trenutno samo .md).

Za izgradnju prevedene dokumentacije, koristite:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Ova komanda generiše direktorijume `fr` i `es` u `buildPath`-u (podrazumevano je `./build`) koji sadrže fajlove prevedene dokumentacije.

Za ažuriranje prevedene dokumentacije na osnovu promena u originalnim fajlovima, koristite:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Za pregled dokumentacije putem servera (eksperimentalna funkcionalnost), koristite:
```
    autotranslatedoc serve run-llama llama_index
```
### Prevođenje Docusaurus dokumentacije

Za prevođenje dokumentacije hostovane u Docusaurus-u, koristite:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Samo prevod README.md

Da biste preveli samo README fajl, koristite režim `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Prevođenje na sve podržane jezike

Da biste preveli na sve podržane jezike, koristite opciju `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Poznati problemi

Trenutno, prevod sa `-all` je podržan samo iz engleskog na sve ostale jezike.


# OpenAI Automatinis Dokumentacijos Vertimas

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Ši dokumentacija buvo automatiškai išversta ir gali turėti klaidų. Nedvejodami atidarykite Pull Request, jei norite pasiūlyti pakeitimus.```


Šis įrankis naudoja OPEN AI GPT 3.5 / 4 galimybes automatiškai versti dokumentacijos failus (t.y., .md/.mdx failus) GitHub saugykloje.

*** Atsakomybės apribojimas: Šis įrankis šiuo metu yra plėtojimo stadijoje ***


## Diegimas

Įrankis gali būti įdiegtas naudojant NPM:


```
    npm install -g autotranslatedoc
```

Įsitikinkite, kad nustatėte aplinkos kintamuosius: `GITHUB_PERSONAL_ACCESS_TOKEN` ir `OPENAI_API_KEY`. Alternatyviai, šie raktai gali būti perduoti kaip parametrai. Norėdami gauti `GITHUB_PERSONAL_ACCESS_TOKEN`, žiūrėkite [GitHub dokumentaciją](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).


"
## Naudojimas


### Pagalbos puslapis
Pasiekite pagalbos puslapį naudodami šią komandą:
```
 autotranslatedoc -h
```
### Dokumentacijos vertimas

Norėdami išversti tikslo saugyklos dokumentaciją į prancūzų ir ispanų kalbas, naudokite:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Ši komanda sukuria `llama_index.json` failą nurodyto išvesties katalogo `run-lama` aplankale (numatytasis yra `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Išsaugotas failas turi visus vertimus ir gali būti naudojamas generuoti dokumentaciją norimu formatu (kol kas tik .md).

Norėdami sukompiliuoti išverstą dokumentaciją, naudokite:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Ši komanda generuoja `fr` ir `es` aplankus nurodytame `buildPath` (numatytasis yra `./build`) kataloge, kuriuose yra išverstų dokumentacijos failai.

Norėdami atnaujinti išverstą dokumentaciją pagal pakeitimus originaliuose failuose, naudokite:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Norėdami peržiūrėti dokumentaciją per serverį (eksperimentinė funkcija), naudokite:
```
    autotranslatedoc serve run-llama llama_index
```
### Docusaurus dokumentacijos vertimas

Norint išversti Docusaurus talpinamą dokumentaciją, naudokite:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Tik README.md Vertimas

Norėdami išversti tik README failą, naudokite `readme` režimą:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Vertimas į Visas Palaikomas Kalbas

Norėdami išversti į visas palaikomas kalbas, naudokite `-l all` parinktį:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Žinomos Problemos

Šiuo metu, vertimas su `-all` parametru palaikomas tik iš anglų kalbos į visas kitas kalbas.
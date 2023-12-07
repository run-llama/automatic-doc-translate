
# OpenAI automaatne dokumentatsiooni tõlge

[EN](./README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [cat](/i18n/README_cat.md) 

```See dokumentatsioon on tõlgitud automaatselt ja võib sisaldada vigu. Ärge kartke avada Pull Request, et pakkuda muudatusi.```


See tööriist kasutab OPEN AI GPT 3.5 / 4 võimeid dokumentatsioonifailide (nt .md/.mdx failid) automaatseks tõlkimiseks GitHubi repositooriumis.

*** Hoiatus: See tööriist on hetkel arendamisel ***


## Paigaldamine

Tööriista saab paigaldada NPM-i kaudu:


```
    npm install -g autotranslatedoc
```

Veenduge, et olete seadistanud keskkonnamuutujad: `GITHUB_PERSONAL_ACCESS_TOKEN` ja `OPENAI_API_KEY`. Alternatiivselt saab neid tokeneid edastada parameetritena. Lisateabe saamiseks vaadake [GitHubi dokumentatsiooni](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token), et saada `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Kasutamine


### Abileht
Juurdepääs abilehele järgmise käsu abil:
```
 autotranslatedoc -h
```
### Dokumentatsiooni tõlkimine

Dokumentatsiooni tõlkimiseks sihtrepositooriumis prantsuse ja hispaania keelde kasutage järgmist käsku:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


See käsk loob `llama_index.json` faili määratud väljundkataloogi `run-lama` kausta (vaikimisi on `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Salvestusfail sisaldab kõiki tõlkeid ja seda saab kasutada dokumentatsiooni genereerimiseks sihtvormingus (hetkel ainult .md).

Tõlgitud dokumentatsiooni koostamiseks kasutage:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


See käsk genereerib `fr` ja `es` kaustad `buildPath`-is (vaikimisi on `./build`), mis sisaldavad tõlgitud dokumentatsioonifaile.

Tõlgitud dokumentatsiooni uuendamiseks lähtefailides tehtud muudatuste põhjal kasutage:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Dokumentatsiooni ülevaatamiseks serveri kaudu (eksperimentaalne funktsioon) kasutage:
```
    autotranslatedoc serve run-llama llama_index
```
### Docusaurus dokumentatsiooni tõlkimine

Docusaurusis majutatud dokumentatsiooni tõlkimiseks kasutage:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Ainult README.md tõlkimine

Ainult README faili tõlkimiseks kasutage režiimi `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Tõlkimine kõikidesse toetatud keeltesse

Kõikidesse toetatud keeltesse tõlkimiseks kasutage `-l all` valikut:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Teadaolevad probleemid

Hetkel toetatakse tõlget `-all` ainult inglise keelest kõikidesse teistesse keeltesse.

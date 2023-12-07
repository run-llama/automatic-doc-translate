
# OpenAI automaatne dokumentatsiooni tõlge

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [cat](/i18n/README_cat.md) 

```See dokumentatsioon on tõlgitud automaatselt ja võib sisaldada vigu. Ärge kartke avada Pull Request, et pakkuda muudatusi.```


 [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) |  [fr](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 


See tööriist kasutab OPEN AI GPT 3.5 / 4 võimalusi dokumentatsioonifailide (nt .md/.mdx failid) automaatseks tõlkimiseks GitHubi repositooriumis.

*** Hoiatus: See tööriist on hetkel arendamisel ***


## Paigaldamine 

Tööriista saab paigaldada NPM-i kaudu:


```
    npm install -g autotranslatedoc
```

Veenduge, et olete seadistanud keskkonnamuutujad: `GITHUB_PERSONAL_ACCESS_TOKEN` ja `OPENAI_API_KEY`. Alternatiivselt saab neid võtmeid edastada parameetritena. Lisateabe saamiseks vaadake [GitHubi dokumentatsiooni](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token), et saada `GITHUB_PERSONAL_ACCESS_TOKEN`.


 "
## Kasutamine


### Abileht
Juurdepääs abilehele järgmise käsu abil:
```
 autotranslatedoc -h
```
### Dokumentatsiooni tõlkimine

Autotranslatedoc võtab 3 argumenti ja mitmeid valikuid

```
    autotranslatedoc <käsk> <repo_org> <repo_name> (valikud)
```

- ```käsk``` võib olla kas: ```translate``` (tõlkimiseks), ```update``` (tõlke värskendamiseks), ```build``` (tõlke loomiseks)
- ```repo_org``` on sihtrepositooriumi org GitHubis
- ```repo_name``` on sihtrepositooriumi nimi GitHubis

Saadaval on järgmised peamised valikud:

- ```--language <lang_1>(, <lang_2>)*``` (või ```-l```) valitud tõlkekeele valimiseks.
- ```--docPath </url/path>``` (või ```-d```) tõlke piiramiseks konkreetse tee failidele.
- ```--savePath <./localPath>``` (või ```-s```) salvestusfaili salvestuskoha valimiseks (vaikimisi ```./save```).
- ```--outputPath <./localPath>``` (või ```-o```) kasutades ```build```, et määrata tõlgitud dokumendifailide väljundkoha (vaikimisi ```./build```)



Sihtrepositooriumi dokumentatsiooni tõlkimiseks prantsuse ja hispaania keelde kasutage:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


See käsk loob `llama_index.json` faili määratud väljundkataloogi `run-lama` kausta (vaikimisi on see `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Salvestusfail sisaldab kõiki tõlkeid ja seda saab kasutada dokumentatsiooni genereerimiseks sihtvormingus (praegu ainult .md).

Tõlgitud dokumentatsiooni loomiseks kasutage:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


See käsk genereerib `fr` ja `es` kaustad `buildPath`-is (vaikimisi on see `./build`), mis sisaldavad tõlgitud dokumentatsioonifaile.

Sihtdokumentatsiooni värskendamiseks originaalfailides tehtud muudatuste põhjal kasutage:

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

Ainult README faili tõlkimiseks kasutage `readme` režiimi:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Kõigi toetatud keelte tõlkimine

Kõigi toetatud keelte tõlkimiseks kasutage `-l all` valikut:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Teadaolevad probleemid

Hetkel toetatakse tõlget `-all` ainult inglise keelest kõikidele teistele keeltele.

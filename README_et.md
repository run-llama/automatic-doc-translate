
# Automaatne dokumentide tõlge OpenAI abil

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Catalan](./README_cat.md) 

```See dokumentatsioon on tõlgitud automaatselt ja võib sisaldada vigu. Ärge kartke avada Pull Request, et pakkuda muudatusi.```


Tööriist, mis automaatselt tõlgib dokumendid (kõik .md failid) GitHubi repositooriumis, kasutades OPEN AI GPT 3.5

*** Hoiatus: See tööriist on endiselt eksperimentaalne ***


## Kasutamine

Esmalt installige

```
    npm install -g autotranslatedoc
```

Veenduge, et olete seadistanud järgmised keskkonnamuutujad: ```GITHUB_PERSONAL_ACCESS_TOKEN``` ja ```OPENAI_API_KEY```. Võite selle võtme ka parameetrina edastada.

Abilehe nägemiseks
```
 autotranslatedoc -h
```

Seejärel tõlkige sihtrepositooriumi dokumentatsioon prantsuse ja hispaania keelde
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

See loob llama_index.json faili määratud väljundkataloogi run-lama kausta (vaikimisi=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

See salvestatud fail sisaldab kogu tõlget ja seda saab kasutada dokumentatsiooni genereerimiseks sihtvormingusse (hetkel ainult .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

See genereerib fr ja es repositooriumi buildPath (vaikimisi ./build), mis sisaldab tõlgitud dokumendifaile.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

See vaatab olemasoleva dokumendisalvestuse failis olevaid eelnevalt tõlgitud dokumente ja teostab diferentsiaalset tõlget iga faili kohta, mis on uuendatud.

```
    autotranslatedoc serve run-llama llama_index
```

Käivitab serveri, mis võimaldab dokumentatsiooni lihtsat ülevaatamist pordil 3000 või env.PORT. EKSPEERIMENTAALNE

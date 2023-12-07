
# Automaattinen asiakirjojen käännös OpenAI:lla

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Tämä dokumentaatio on käännetty automaattisesti ja se saattaa sisältää virheitä. Älä epäröi avata Pull Requestia ehdottaaksesi muutoksia.```


Työkalu, joka automaattisesti kääntää asiakirjat (kaikki .md-tiedostot) GitHub-repossa käyttäen OPEN AI GPT 3.5:ttä

*** Huomautus: Tämä työkalu on vielä kokeellinen ***


## Käyttö

Asenna ensin

```
    npm install -g autotranslatedoc
```

Varmista sitten, että olet määrittänyt seuraavat ympäristömuuttujat: ```GITHUB_PERSONAL_ACCESS_TOKEN``` ja ```OPENAI_API_KEY```. Vaihtoehtoisesti voit välittää tämän tunnuksen parametrina.

Nähdäksesi ohjesivun
```
 autotranslatedoc -h
```

Käännä sitten kohderepon asiakirja ranskaksi ja espanjaksi
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Tämä luo llama_index.json-tiedoston run-lama-hakemistoon määritettyyn tulostushakemistoon (oletusarvo=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Tämä tallennustiedosto sisältää kaikki käännökset ja sitä voidaan käyttää asiakirjan generoimiseen haluttuun muotoon (tällä hetkellä vain .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Tämä generoi fr- ja es-repositoriot buildPathiin (oletusarvo ./build), jotka sisältävät käännettyjen asiakirjojen tiedostot

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Tämä tarkastelee olemassa olevan asiakirjan tallennustiedostossa olevia ennalta käännettyjä tiedostoja ja suorittaa differentiaalisen käännöksen jokaiselle päivitetylle tiedostolle.

```
    autotranslatedoc serve run-llama llama_index
```

Käynnistää palvelimen, joka mahdollistaa asiakirjan helpon tarkastelun portissa 3000 tai env.PORT. KOKEELLINEN

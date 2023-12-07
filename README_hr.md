
# Automatsko prevođenje dokumenata pomoću OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Ova dokumentacija je automatski prevedena i može sadržavati greške. Ne ustručavajte se otvoriti Pull Request za predlaganje promjena.```


Alat koji automatski prevodi dokumentaciju (svaki .md file) u GitHub repozitoriju koristeći OPEN AI GPT 3.5

*** Napomena: Ovaj alat je još uvijek eksperimentalan ***


## Upotreba

Prvo instalirajte

```
    npm install -g autotranslatedoc
```

Zatim se pobrinite da postavite sljedeće varijable okruženja: ```GITHUB_PERSONAL_ACCESS_TOKEN``` i ```OPENAI_API_KEY```. Alternativno, možete proslijediti ovaj token kao parametar.

Za prikaz stranice s pomoći
```
 autotranslatedoc -h
```

Zatim prevedite dokumentaciju ciljnog repozitorija na francuski i španjolski jezik
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Ovo će stvoriti datoteku llama_index.json u direktoriju run-lama određenog izlaznog direktorija (zadano=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Ova spremljena datoteka sadrži sve prijevode i može se koristiti za generiranje dokumentacije u ciljanom formatu (trenutno samo .md)


```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Ovo će generirati francuski i španjolski repozitorij u buildPath-u (zadano ./build) koji će sadržavati prevedene datoteke dokumentacije.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Ovo će pregledati postojeće prijevode u postojećoj spremljenoj datoteci dokumentacije i izvršiti diferencijalno prevođenje svake datoteke koja je ažurirana.

```
    autotranslatedoc serve run-llama llama_index
```

Pokrenut će poslužitelj koji omogućuje jednostavan pregled dokumentacije na portu 3000 ili env.PORT. EKSPERIMENTALNO

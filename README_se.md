
# Automatsko prevođenje dokumenata pomoću OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Ova dokumentacija je automatski prevedena i može sadržati greške. Ne oklevajte da otvorite Pull Request za predlaganje izmena.```


Alat koji automatski prevodi dokumentaciju (svaki .md fajl) u GitHub repozitorijumu koristeći OpenAI GPT 3.5

*** Napomena: Ovaj alat je još uvek eksperimentalan ***


## Upotreba

Prvo instalirajte

```
    npm install -g autotranslatedoc
```

Zatim se uverite da ste postavili sledeće okružne promenljive: ```GITHUB_PERSONAL_ACCESS_TOKEN``` i ```OPENAI_API_KEY```. Alternativno, možete proslediti ovaj token kao parametar.

Da biste videli stranicu sa pomoći
```
 autotranslatedoc -h
```

Zatim prevedite dokumentaciju ciljnog repozitorijuma na francuski i španski jezik
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Ovo će kreirati fajl llama_index.json u direktorijumu run-lama u određenom izlaznom direktorijumu (podrazumevano=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Ovaj sačuvani fajl sadrži sve prevode i može se koristiti za generisanje dokumentacije u ciljanom formatu (trenutno samo .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Ovo će generisati repozitorijume fr i es u putanji buildPath (podrazumevano ./build) koji će sadržati prevedene fajlove dokumentacije.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Ovo će pregledati postojeće prevode u postojećem sačuvanom fajlu dokumentacije i izvršiti diferencijalno prevođenje svakog fajla koji je ažuriran.

```
    autotranslatedoc serve run-llama llama_index
```

Pokrenuće server koji omogućava jednostavan pregled dokumentacije na portu 3000 ili env.PORT. EKSPERIMENTALNO

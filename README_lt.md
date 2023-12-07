
# Automatinis dokumentacijos vertimas su OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Ši dokumentacija buvo automatiškai išversta ir gali turėti klaidų. Nedvejodami atidarykite Pull Request, jei norite pasiūlyti pakeitimus.```


Įrankis, kuris automatiškai verčia dokumentaciją (kiekvieną .md failą) naudojant OPEN AI GPT 3.5

*** Atsargiai: Šis įrankis vis dar yra eksperimentinis ***


## Naudojimas

Pirmiausia įdiekite

```
    npm install -g autotranslatedoc
```

Tada įsitikinkite, kad nustatėte šiuos aplinkos kintamuosius: ```GITHUB_PERSONAL_ACCESS_TOKEN``` ir ```OPENAI_API_KEY```. Alternatyviai, galite perduoti šį raktą kaip parametrą.

Norėdami pamatyti pagalbos puslapį
```
 autotranslatedoc -h
```

Tada išverčiame dokumentaciją iš tikslinio repozitorijos į prancūzų ir ispanų kalbas
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Tai sukurs llama_index.json failą run-lama direktorijoje nurodytoje išvesties direktorijoje (numatytoji=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Šis išsaugotas failas turi visus vertimus ir gali būti naudojamas generuoti dokumentaciją į tikslinį formatą (šiuo metu tik .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Tai sukurs fr ir es repozitoriją buildPath (numatytoji ./build), kuriame bus išverstos dokumentacijos failai.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Tai patikrins esamus vertimus esamame dokumentacijos išsaugotame faile ir atliks diferencinį vertimą kiekvienam failui, kuris buvo atnaujintas.

```
    autotranslatedoc serve run-llama llama_index
```

Paleis serverį, leidžiantį lengvai peržiūrėti dokumentaciją portu 3000 arba env.PORT. EKSPERIMENTINIS

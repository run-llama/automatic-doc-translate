
# Samodejni prevod dokumentacije z OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Ta dokumentacija je bila samodejno prevedena in lahko vsebuje napake. Ne oklevajte odpreti Pull Request za predlaganje sprememb.```


Orodje, ki samodejno prevaja dokumentacijo (vse .md datoteke) v repozitoriju na GitHubu z uporabo OpenAI GPT 3.5

*** Opozorilo: To orodje je še vedno v eksperimentalni fazi ***


## Uporaba

Najprej namestite

```
    npm install -g autotranslatedoc
```

Nato poskrbite, da nastavite naslednje okoljske spremenljivke: ```GITHUB_PERSONAL_ACCESS_TOKEN``` in ```OPENAI_API_KEY```. Lahko pa ta žeton prenesete tudi kot parameter.

Za ogled strani s pomočjo ukaza
```
 autotranslatedoc -h
```

Nato prevedite dokumentacijo ciljnega repozitorija v francoščino in španščino
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

To bo ustvarilo datoteko llama_index.json v mapi run-lama v določeni izhodni mapi (privzeto=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Ta shranjena datoteka vsebuje vse prevode in se lahko uporabi za generiranje dokumentacije v ciljnem formatu (trenutno samo .md)


```
    autotranslatedoc build run-llama llama_index -l fr,es
```

To bo ustvarilo fr in es repozitorij v buildPath (privzeto ./build), ki bosta vsebovala prevedene datoteke dokumentacije.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

To bo preverilo obstoječe prevode v obstoječi shranjeni datoteki dokumentacije in izvedlo diferencialni prevod vsake datoteke, ki je bila posodobljena.

```
    autotranslatedoc serve run-llama llama_index
```

Zažene strežnik, ki omogoča enostaven pregled dokumentacije na vratih 3000 ali env.PORT. EKSPERIMENTALNO

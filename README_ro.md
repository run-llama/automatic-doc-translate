
# Traducerea automată a documentației cu OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Această documentație a fost tradusă automat și poate conține erori. Nu ezitați să deschideți un Pull Request pentru a sugera modificări.```


Un instrument care traduce automat documentația (toate fișierele .md) dintr-un depozit GitHub folosind OPEN AI GPT 3.5

*** Notă: Acest instrument este încă experimental ***


## Utilizare

Instalați mai întâi

```
    npm install -g autotranslatedoc
```

Asigurați-vă apoi că ați configurat următoarele variabile de mediu: ```GITHUB_PERSONAL_ACCESS_TOKEN``` și ```OPENAI_API_KEY```. Alternativ, puteți trece acest token ca parametru

Pentru a vedea pagina de ajutor
```
 autotranslatedoc -h
```

Apoi traduceți documentația unui depozit țintă în franceză și spaniolă
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Acest lucru va crea un fișier llama_index.json în directorul run-lama al directorului de ieșire specificat (implicit=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Acest fișier de salvare conține toate traducerile și poate fi utilizat pentru a genera documentația într-un format țintă (în prezent doar .md)


```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Acest lucru va genera un depozit fr și es în buildPath (implicit ./build) care va conține fișierele traduse ale documentației

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Acesta va verifica traducerile preexistente în fișierul de salvare a documentației existente și va efectua o traducere diferențială a fiecărui fișier care a fost actualizat.

```
    autotranslatedoc serve run-llama llama_index
```

Va lansa un server care permite revizuirea ușoară a documentației pe portul 3000 sau env.PORT. EXPERIMENTAL

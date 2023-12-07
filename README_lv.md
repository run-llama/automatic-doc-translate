
# Automātiska dokumentācijas tulkošana ar OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Šis dokuments ir automātiski tulkots un var saturēt kļūdas. Nevilciniet atvērt Pull Request, lai ierosinātu izmaiņas.```


Rīks, kas automātiski tulko dokumentāciju (katru .md failu) GitHub repozitorijā, izmantojot OPEN AI GPT 3.5

*** Atsauksme: Šis rīks joprojām ir eksperimentāls ***


## Lietošana

Vispirms instalējiet

```
    npm install -g autotranslatedoc
```

Pēc tam pārliecinieties, ka iestatījāt šādas vides mainīgās: ```GITHUB_PERSONAL_ACCESS_TOKEN``` un ```OPENAI_API_KEY```. Alternatīvi, šo tokenu varat padot kā parametru.

Lai redzētu palīdzības lapu
```
 autotranslatedoc -h
```

Tad tulkojiet mērķa repozitorija dokumentāciju franču un spāņu valodā
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Tas izveidos llama_index.json failu norādītā izvades direktorijas (noklusējums=./save) run-lama direktorijā.

```
    ls ./save
        run-llama
            llama_index.json 
```

Šis saglabāšanas fails satur visu tulkojumu un var tikt izmantots, lai ģenerētu dokumentāciju mērķa formātā (pašlaik tikai .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Tas ģenerēs fr un es repozitoriju buildPath (noklusējums ./build), kas saturēs tulkojumus dokumentācijas failos.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Tas pārskatīs esošos tulkojumus esošajā dokumentācijas saglabāšanas failā un veiks diferenciālo tulkojumu katram failam, kas ir atjaunināts.

```
    autotranslatedoc serve run-llama llama_index
```

Palaidīs serveri, kas ļaus viegli pārskatīt dokumentāciju portā 3000 vai env.PORT. EKSPERIMENTĀLS

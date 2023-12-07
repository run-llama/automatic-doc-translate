
# Traduzione automatica della documentazione con OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Questa documentazione è stata tradotta automaticamente e può contenere errori. Non esitare ad aprire una Pull Request per suggerire modifiche.```


Uno strumento che traduce automaticamente la documentazione (ogni file .md) in un repository GitHub utilizzando OPEN AI GPT 3.5

*** Avviso: Questo strumento è ancora sperimentale ***


## Utilizzo

Prima di tutto, installa

```
    npm install -g autotranslatedoc
```

Poi assicurati di configurare le seguenti variabili d'ambiente: ```GITHUB_PERSONAL_ACCESS_TOKEN``` e ```OPENAI_API_KEY```. In alternativa, puoi passare questo token come parametro.

Per visualizzare la pagina di aiuto
```
 autotranslatedoc -h
```

Quindi traduci la documentazione di un repository di destinazione in francese e spagnolo
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Questo creerà un file llama_index.json nella directory run-lama della directory di output specificata (default=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Questo file di salvataggio contiene tutte le traduzioni e può essere utilizzato per generare la documentazione in un formato di destinazione (attualmente solo .md)


```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Questo genererà una repository fr e es nella buildPath (default ./build) che conterrà i file della documentazione tradotta

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Questo controllerà le traduzioni preesistenti nel file di salvataggio della documentazione esistente e eseguirà una traduzione differenziale di ogni file che è stato aggiornato.

```
    autotranslatedoc serve run-llama llama_index
```

Avvierà un server che permette la facile revisione della documentazione sulla porta 3000 o env.PORT. SPERIMENTALE

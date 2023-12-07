
# Traduzione automatica della documentazione di OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Questa documentazione è stata tradotta automaticamente e può contenere errori. Non esitare ad aprire una Pull Request per suggerire modifiche.```


Questo strumento sfrutta le capacità di OPEN AI GPT 3.5 / 4 per tradurre automaticamente i file di documentazione (ad esempio, file .md/.mdx) all'interno di un repository GitHub.

*** Avviso: Questo strumento è attualmente in fase di sviluppo ***


## Installazione 

Lo strumento può essere installato tramite NPM:


```
    npm install -g autotranslatedoc
```

Assicurati di configurare le variabili d'ambiente: `GITHUB_PERSONAL_ACCESS_TOKEN` e `OPENAI_API_KEY`. In alternativa, questi token possono essere passati come parametri. Consulta la [documentazione di GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) per ottenere un `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Utilizzo


### Pagina di aiuto
Accedi alla pagina di aiuto con il seguente comando:
```
 autotranslatedoc -h
```
### Traduzione della documentazione

Per tradurre la documentazione di un repository di destinazione in francese e spagnolo, utilizzare:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Questo comando crea un file `llama_index.json` nella directory `run-lama` della directory di output specificata (impostazione predefinita è `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Il file di salvataggio contiene tutte le traduzioni e può essere utilizzato per generare la documentazione in un formato di destinazione (attualmente solo .md).

Per compilare la documentazione tradotta, utilizzare:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Questo comando genera le directory `fr` e `es` nella `buildPath` (impostazione predefinita è `./build`) contenenti i file di documentazione tradotti.

Per aggiornare la documentazione tradotta in base alle modifiche nei file originali, utilizzare:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Per visualizzare la documentazione tramite un server (funzionalità sperimentale), utilizzare:
```
    autotranslatedoc serve run-llama llama_index
```
### Traduzione della documentazione di Docusaurus

Per tradurre la documentazione ospitata in Docusaurus, utilizzare:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Traduzione solo del file README.md

Per tradurre solo il file README, utilizzare la modalità `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Traduzione in Tutte le Lingue Supportate

Per tradurre in tutte le lingue supportate, utilizzare l'opzione `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Problemi noti

Attualmente, la traduzione con l'opzione `-all` è supportata solo dall'inglese a tutte le altre lingue.

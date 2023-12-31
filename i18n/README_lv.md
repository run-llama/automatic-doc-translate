
# OpenAI Automātiskā dokumentācijas tulkošana

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Šis dokuments ir automātiski tulkots un var saturēt kļūdas. Nevilciniet atvērt Pull Request, lai ierosinātu izmaiņas.```


## Instalācija 

Rīku var instalēt, izmantojot NPM:


```
    npm install -g autotranslatedoc
```

Pārliecinieties, ka iestatāt vides mainīgos: `GITHUB_PERSONAL_ACCESS_TOKEN` un `OPENAI_API_KEY`. Alternatīvi, šie atslēgas var tikt padoti kā parametri. Skatiet [GitHub dokumentāciju](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token), lai iegūtu `GITHUB_PERSONAL_ACCESS_TOKEN`.


 "
## Lietošana


### Palīdzības lapa
Lai piekļūtu palīdzības lapai, izmantojiet šo komandu:
```
 autotranslatedoc -h
```
### Dokumentācijas tulkošana

Autotranslatedoc pieņem 3 argumentus un daudzas opcijas

```
    autotranslatedoc <komanda> <repo_org> <repo_nosaukums> (opcijas)
```

- ```komanda``` var būt vai nu: ```translate``` (lai tulkotu), ```update``` (lai atjauninātu tulkojumu), ```build``` (lai veidotu tulkojumu)
- ```repo_org``` ir mērķa krātuves organizācija GitHub
- ```repo_nosaukums``` ir mērķa krātuves nosaukums GitHub

Galvenās pieejamās opcijas ir:

- ```--language <valoda_1>(, <valoda_2>)*``` (vai ```-l```) lai izvēlētos valodu, uz kuru vēlaties tulkot.
- ```--docPath </url/ceļš>``` (vai ```-d```) lai ierobežotu tulkojumu tikai failiem konkrētā ceļā.
- ```--savePath <./lokālaisCeļš>``` (vai ```-s```) lai izvēlētos direktoriju, kurā tiks saglabāts saglabāšanas fails (noklusējums ir ```./save```).
- ```--outputPath <./lokālaisCeļš>``` (vai ```-o```) izmantojot ```build```, lai norādītu, kur tiks izvietoti tulkojumu dokumentu faili (noklusējums ir ```./build```)



Lai tulkojumā dokumentāciju mērķa krātuvē franču un spāņu valodā, izmantojiet:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Šī komanda izveido `llama_index.json` failu norādītajā izvades direktorijā `run-lama` (noklusējums ir `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Saglabāšanas fails satur visus tulkojumus un to var izmantot, lai ģenerētu dokumentāciju mērķa formātā (pašlaik tikai .md).

Lai veidotu tulkojumu dokumentāciju, izmantojiet:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Šī komanda ģenerē `fr` un `es` direktorijus `buildPath` (noklusējums ir `./build`), kas satur tulkojumu dokumentācijas failus.

Lai atjauninātu tulkojumu dokumentāciju, pamatojoties uz izmaiņām oriģinālajos failos, izmantojiet:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Lai pārskatītu dokumentāciju, izmantojot serveri (eksperimentāla funkcija), izmantojiet:
```
    autotranslatedoc serve run-llama llama_index
```
### Docusaurus dokumentācijas tulkošana

Lai tulko dokumentāciju, kas ir uzglabāta Docusaurus, izmantojiet:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Tikai README.md tulkošana

Lai tikai tulko README failu, izmantojiet `readme` režīmu:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Tulkošana visās atbalstītajās valodās

Lai tulkošanai visās atbalstītajās valodās, izmantojiet `-l all` opciju:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Zināmas problēmas

Pašlaik tulkošana ar `-all` ir atbalstīta tikai no angļu valodas uz visām citām valodām.

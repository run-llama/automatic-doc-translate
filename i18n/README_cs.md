
# Automatický překlad dokumentace OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Tato dokumentace byla automaticky přeložena a může obsahovat chyby. Neváhejte otevřít Pull Request pro navrhování změn.```


## Instalace 

Nástroj lze nainstalovat pomocí NPM:


```
    npm install -g autotranslatedoc
```

Ujistěte se, že nastavíte proměnné prostředí: `GITHUB_PERSONAL_ACCESS_TOKEN` a `OPENAI_API_KEY`. Alternativně lze tyto tokeny předat jako parametry. Pro získání `GITHUB_PERSONAL_ACCESS_TOKEN` se odkazujte na [dokumentaci GitHubu](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).


 "
## Použití


### Stránka s nápovědou
Přístup ke stránce s nápovědou pomocí následujícího příkazu:
```
 autotranslatedoc -h
```
### Překlad dokumentace

Autotranslatedoc přijímá 3 argumenty a mnoho možností

```
    autotranslatedoc <příkaz> <repo_org> <repo_name> (možnosti)
```

- ```příkaz``` může být buď: ```translate``` (pro překlad), ```update``` (pro aktualizaci překladu), ```build``` (pro sestavení překladu)
- ```repo_org``` je organizace cílového repozitáře na GitHubu
- ```repo_name``` je název cílového repozitáře na GitHubu

Hlavní dostupné možnosti jsou:

- ```--language <lang_1>(, <lang_2>)*``` (nebo ```-l```) pro výběr jazyka, do kterého chcete přeložit.
- ```--docPath </url/path>``` (nebo ```-d```) pro omezení překladu na soubory v konkrétní cestě.
- ```--savePath <./localPath>``` (nebo ```-s```) pro výběr adresáře, kam bude uložen soubor se uložením (výchozí hodnota je ```./save```).
- ```--outputPath <./localPath>``` (nebo ```-o```) při použití ```build```, pro určení, kam budou výstupní soubory přeložené dokumentace umístěny (výchozí hodnota je ```./build```)



Pro přeložení dokumentace cílového repozitáře do francouzštiny a španělštiny použijte:

```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Tento příkaz vytvoří soubor `llama_index.json` v adresáři `run-lama` v určeném výstupním adresáři (výchozí je `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Uložený soubor obsahuje všechny překlady a může být použit k vygenerování dokumentace ve zvoleném formátu (v současné době pouze .md).

Pro sestavení přeložené dokumentace použijte:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Tento příkaz vytvoří adresáře `fr` a `es` v `buildPath` (výchozí je `./build`), které obsahují přeložené soubory dokumentace.

Pro aktualizaci přeložené dokumentace na základě změn v původních souborech použijte:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Pro zobrazení dokumentace pomocí serveru (experimentální funkce) použijte:
```
    autotranslatedoc serve run-llama llama_index
```
### Překlad dokumentace Docusaurus

Pro překlad dokumentace hostované v Docusaurus použijte:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Překlad pouze souboru README.md

Pro překlad pouze souboru README použijte režim `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Překlad do všech podporovaných jazyků

Pro překlad do všech podporovaných jazyků použijte volbu `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Známé problémy

V současné době je překlad s parametrem `-all` podporován pouze z angličtiny do všech ostatních jazyků.

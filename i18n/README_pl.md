
# Automatyczne tłumaczenie dokumentacji OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Ta dokumentacja została przetłumaczona automatycznie i może zawierać błędy. Nie wahaj się otworzyć Pull Request, aby zaproponować zmiany.```


## Instalacja 

Narzędzie można zainstalować za pomocą NPM:


```
    npm install -g autotranslatedoc
```

Upewnij się, że skonfigurowano zmienne środowiskowe: `GITHUB_PERSONAL_ACCESS_TOKEN` i `OPENAI_API_KEY`. Alternatywnie, te tokeny można przekazać jako parametry. Aby uzyskać `GITHUB_PERSONAL_ACCESS_TOKEN`, zapoznaj się z [dokumentacją GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).


 "
## Użycie


### Strona Pomocy
Aby uzyskać dostęp do strony pomocy, użyj następującej komendy:
```
 autotranslatedoc -h
```
### Tłumaczenie dokumentacji

Autotranslatedoc przyjmuje 3 argumenty i wiele opcji

```
    autotranslatedoc <command> <repo_org> <repo_name> (opcje)
```

- ```command``` może być: ```translate``` (do tłumaczenia), ```update``` (do aktualizacji tłumaczenia), ```build``` (do budowania tłumaczenia)
- ```repo_org``` to organizacja docelowego repozytorium na GitHub
- ```repo_name``` to nazwa docelowego repozytorium na GitHub

Dostępne główne opcje to:

- ```--language <lang_1>(, <lang_2>)*``` (lub ```-l```) do wyboru języka, na który chcesz przetłumaczyć.
- ```--docPath </url/path>``` (lub ```-d```) do ograniczenia tłumaczenia do plików w określonej ścieżce.
- ```--savePath <./localPath>``` (lub ```-s```) do wyboru katalogu, w którym zostanie zapisany plik zapisu (domyślnie ```./save```).
- ```--outputPath <./localPath>``` (lub ```-o```) przy użyciu ```build```, aby określić, gdzie będą zapisane przetłumaczone pliki dokumentacji (domyślnie ```./build```)



Aby przetłumaczyć dokumentację docelowego repozytorium na francuski i hiszpański, użyj:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


To polecenie tworzy plik `llama_index.json` w katalogu `run-lama` określonego katalogu wyjściowego (domyślnie `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Plik zapisu zawiera wszystkie tłumaczenia i może być używany do generowania dokumentacji w docelowym formacie (obecnie tylko .md).

Aby zbudować przetłumaczoną dokumentację, użyj:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


To polecenie generuje katalogi `fr` i `es` w `buildPath` (domyślnie `./build`), zawierające przetłumaczone pliki dokumentacji.

Aby zaktualizować przetłumaczoną dokumentację na podstawie zmian w oryginalnych plikach, użyj:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Aby przeglądać dokumentację za pomocą serwera (funkcja eksperymentalna), użyj:
```
    autotranslatedoc serve run-llama llama_index
```
### Tłumaczenie dokumentacji Docusaurus

Aby przetłumaczyć dokumentację hostowaną w Docusaurus, użyj:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Tłumaczenie tylko pliku README.md

Aby przetłumaczyć tylko plik README, użyj trybu `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Tłumaczenie na wszystkie obsługiwane języki

Aby przetłumaczyć na wszystkie obsługiwane języki, użyj opcji `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Znane problemy

Obecnie tłumaczenie z użyciem `-all` jest obsługiwane tylko z języka angielskiego na wszystkie inne języki.

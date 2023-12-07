
# Automatyczne tłumaczenie dokumentacji za pomocą OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Ta dokumentacja została przetłumaczona automatycznie i może zawierać błędy. Nie wahaj się otworzyć Pull Request, aby zaproponować zmiany.```


Narzędzie umożliwiające automatyczne tłumaczenie dokumentacji (plików .md) w repozytorium GitHub przy użyciu OpenAI GPT 3.5.

*** Ostrzeżenie: To narzędzie jest wciąż w fazie eksperymentalnej ***


## Użycie

Najpierw zainstaluj

```
    npm install -g autotranslatedoc
```

Następnie upewnij się, że skonfigurowałeś następujące zmienne środowiskowe: ```GITHUB_PERSONAL_ACCESS_TOKEN``` i ```OPENAI_API_KEY```. Alternatywnie, możesz przekazać ten token jako parametr.

Aby zobaczyć stronę pomocy
```
 autotranslatedoc -h
```

Następnie przetłumacz dokumentację docelowego repozytorium na język francuski i hiszpański
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Spowoduje to utworzenie pliku llama_index.json w katalogu run-lama w określonym katalogu wyjściowym (domyślnie=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Ten plik zapisuje wszystkie tłumaczenia i może być używany do wygenerowania dokumentacji w docelowym formacie (obecnie tylko .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Spowoduje to wygenerowanie repozytorium fr i es w ścieżce buildPath (domyślnie ./build), które będą zawierać przetłumaczone pliki dokumentacji.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Spowoduje to sprawdzenie istniejących tłumaczeń w istniejącym pliku zapisu dokumentacji i wykonanie różnicowego tłumaczenia każdego pliku, który został zaktualizowany.

```
    autotranslatedoc serve run-llama llama_index
```

Uruchomi serwer umożliwiający łatwe przeglądanie dokumentacji na porcie 3000 lub env.PORT. EKSPERYMENTALNE

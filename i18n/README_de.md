
# OpenAI Automatische Dokumentationsübersetzung

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Diese Dokumentation wurde automatisch übersetzt und kann Fehler enthalten. Zögern Sie nicht, einen Pull Request zu öffnen, um Änderungen vorzuschlagen.```


Dieses Tool nutzt die Fähigkeiten von OPEN AI GPT 3.5 / 4, um Dokumentationsdateien (d.h. .md/.mdx Dateien) innerhalb eines GitHub-Repositories automatisch zu übersetzen.

***Haftungsausschluss: Dieses Tool befindet sich derzeit in der Entwicklung.***

## Installation

Das Tool kann über NPM installiert werden:

```
    npm install -g autotranslatedoc
```

Stellen Sie sicher, dass die Umgebungsvariablen `GITHUB_PERSONAL_ACCESS_TOKEN` und `OPENAI_API_KEY` eingerichtet sind. Alternativ können diese Tokens als Parameter übergeben werden. Lesen Sie die [GitHub-Dokumentation](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) für die Erstellung eines `GITHUB_PERSONAL_ACCESS_TOKEN`.


"
## Verwendung

### Hilfeseite
Greifen Sie auf die Hilfeseite mit folgendem Befehl zu:
```
autotranslatedoc -h
```
### Übersetzung der Dokumentation

Um die Dokumentation eines Ziel-Repositories ins Französische und Spanische zu übersetzen, verwenden Sie:

```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Dieser Befehl erstellt eine `llama_index.json` Datei im `run-lama` Verzeichnis des angegebenen Ausgabeordners (Standard ist `./save`).

```
    ls ./save
        run-llama
            llama_index.json 
```

Die Speicherdatei enthält alle Übersetzungen und kann verwendet werden, um die Dokumentation in einem Zielformat zu generieren (derzeit nur .md).

Um die übersetzte Dokumentation zu erstellen, verwenden Sie:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Dieser Befehl generiert `fr` und `es` Verzeichnisse im `buildPath` (Standard ist `./build`), die die übersetzten Dokumentationsdateien enthalten.

Um die übersetzte Dokumentation basierend auf Änderungen in den Originaldateien zu aktualisieren, verwenden Sie:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Um die Dokumentation über einen Server zu überprüfen (experimentelles Feature), verwenden Sie:

```
    autotranslatedoc serve run-llama llama_index
```
### Übersetzung von Docusaurus-Dokumentation

Um die Dokumentation, die in Docusaurus gehostet wird, zu übersetzen, verwenden Sie:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Nur README.md übersetzen

Um nur die README-Datei zu übersetzen, verwenden Sie den `readme` Modus:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Übersetzung in alle unterstützten Sprachen

Um in alle unterstützten Sprachen zu übersetzen, verwenden Sie die Option `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Bekannte Probleme

Derzeit wird die Übersetzung mit `-all` nur von Englisch in alle anderen Sprachen unterstützt.

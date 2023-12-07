
# Automatische Dokumentenübersetzung mit OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Diese Dokumentation wurde automatisch übersetzt und kann Fehler enthalten. Zögern Sie nicht, einen Pull Request zu öffnen, um Änderungen vorzuschlagen.```


Ein Tool, das automatisch die Dokumentation (alle .md-Dateien) in einem GitHub-Repository mithilfe von OPEN AI GPT 3.5 übersetzt.

***Haftungsausschluss: Dieses Tool ist noch experimentell.***

## Verwendung

Zuerst installieren Sie

```
    npm install -g autotranslatedoc
```

Stellen Sie dann sicher, dass Sie die folgenden Umgebungsvariablen festgelegt haben: ```GITHUB_PERSONAL_ACCESS_TOKEN``` und ```OPENAI_API_KEY```. Alternativ können Sie diesen Token als Parameter übergeben.

Um die Hilfeseite anzuzeigen:

```
 autotranslatedoc -h
```

Dann übersetzen Sie die Dokumentation eines Ziel-Repositories in Französisch und Spanisch:

```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Dies erstellt eine llama_index.json-Datei im Verzeichnis run-lama des angegebenen Ausgabeverzeichnisses (Standardwert=./save).

```
    ls ./save
        run-llama
            llama_index.json 
```

Diese Speicherdatei enthält alle Übersetzungen und kann verwendet werden, um die Dokumentation in ein Zielformat zu generieren (derzeit nur .md).

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Dies generiert ein fr- und es-Repository im Build-Pfad (Standardwert ./build), das die übersetzten Dokumentationsdateien enthält.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Dies überprüft vorhandene Übersetzungen in der vorhandenen Dokumentenspeicherdatei und führt eine differenzielle Übersetzung für jede Datei durch, die aktualisiert wurde.

```
    autotranslatedoc serve run-llama llama_index
```

Startet einen Server, der die einfache Überprüfung der Dokumentation auf Port 3000 oder env.PORT ermöglicht. EXPERIMENTELL.

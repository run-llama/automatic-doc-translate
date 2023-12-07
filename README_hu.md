
# Automatikus dokumentumfordítás az OpenAI segítségével

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Ezt a dokumentációt automatikusan fordították le, és tartalmazhat hibákat. Ne habozzon nyitni egy Pull Requestet a változtatások javasolására.```


Egy eszköz, amely automatikusan lefordítja a dokumentációt (minden .md fájlt) egy GitHub repo-ban az OPEN AI GPT 3.5 segítségével

*** Megjegyzés: Ez az eszköz még mindig kísérleti jellegű ***


## Használat

Először telepítse

```
    npm install -g autotranslatedoc
```

Aztán győződjön meg róla, hogy beállította a következő környezeti változókat: ```GITHUB_PERSONAL_ACCESS_TOKEN``` és ```OPENAI_API_KEY```. Vagy átadhatja ezt a token-t paraméterként

A súgóoldal megtekintéséhez

```
 autotranslatedoc -h
```

Aztán fordítsa le a célrepo dokumentációját francia és spanyol nyelvre
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Ez létrehoz egy llama_index.json fájlt a megadott kimeneti könyvtár run-lama könyvtárában (alapértelmezett=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Ez a mentett fájl tartalmazza az összes fordítást, és használható a dokumentáció létrehozásához egy célnyelvi formátumban (jelenleg csak .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Ez létrehoz egy fr és es repository-t a buildPath-ben (alapértelmezett ./build), amely tartalmazza a lefordított dokumentációs fájlokat

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Ez ellenőrzi a meglévő dokumentáció mentett fájlban található előző fordításokat, és differenciális fordítást hajt végre minden olyan fájl esetén, amelyek frissítésre kerültek.

```
    autotranslatedoc serve run-llama llama_index
```

Elindít egy szervert, amely lehetővé teszi a dokumentáció könnyű áttekintését a 3000-es porton vagy az env.PORT-on. KÍSÉRLETI JELLEGGEL

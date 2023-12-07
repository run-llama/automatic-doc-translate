
# Automatický preklad dokumentácie s OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Táto dokumentácia bola automaticky preložená a môže obsahovať chyby. Neváhajte otvoriť Pull Request na navrhnutie zmien.```


Nástroj, ktorý automaticky prekladá dokumentáciu (každý .md súbor) v repozitári na GitHub-e pomocou OPEN AI GPT 3.5

*** Upozornenie: Tento nástroj je stále experimentálny ***


## Použitie

Najprv nainštalujte

```
    npm install -g autotranslatedoc
```

Potom sa uistite, že ste nastavili nasledujúce premenné prostredia: ```GITHUB_PERSONAL_ACCESS_TOKEN``` a ```OPENAI_API_KEY```. Alternatívne môžete tento token preniesť ako parameter.

Pre zobrazenie nápovedy

```
 autotranslatedoc -h
```

Potom preložte dokumentáciu cieľového repozitára do francúzštiny a španielčiny

```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Tým sa vytvorí súbor llama_index.json v priečinku run-lama v zadanom výstupnom priečinku (predvolené=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Tento súbor obsahuje všetky preklady a môže byť použitý na generovanie dokumentácie do cieľového formátu (v súčasnosti iba .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Tým sa vytvorí repozitár fr a es v buildPath (predvolené ./build), ktorý bude obsahovať preložené súbory dokumentácie.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Tým sa pozrie na existujúce preklady v existujúcom súbore s uloženou dokumentáciou a vykoná diferenciálny preklad každého súboru, ktorý bol aktualizovaný.

```
    autotranslatedoc serve run-llama llama_index
```

Spustí server, ktorý umožňuje jednoduché prezeranie dokumentácie na porte 3000 alebo env.PORT. EXPERIMENTÁLNE

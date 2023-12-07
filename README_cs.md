
# Automatický překlad dokumentace s OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Tato dokumentace byla automaticky přeložena a může obsahovat chyby. Neváhejte otevřít Pull Request pro navrhování změn.```


Nástroj, který automaticky překládá dokumentaci (všechny soubory .md) v repozitáři na GitHubu pomocí OPEN AI GPT 3.5

*** Upozornění: Tento nástroj je stále experimentální ***


## Použití

Nejprve nainstalujte

```
    npm install -g autotranslatedoc
```

Poté se ujistěte, že nastavíte následující prostředí proměnných: ```GITHUB_PERSONAL_ACCESS_TOKEN``` a ```OPENAI_API_KEY```. Alternativně můžete tento token předat jako parametr.

Pro zobrazení nápovědy použijte

```
 autotranslatedoc -h
```

Poté přeložte dokumentaci cílového repozitáře do francouzštiny a španělštiny

```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Tím se vytvoří soubor llama_index.json v adresáři run-lama v určeném výstupním adresáři (výchozí=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Tento soubor obsahuje veškerý překlad a může být použit k vygenerování dokumentace ve zvoleném formátu (v současné době pouze .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Tím se vytvoří francouzský a španělský repozitář v buildPath (výchozí ./build), který bude obsahovat přeložené soubory dokumentace.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Tím se prozkoumají existující překlady v existujícím souboru s uloženou dokumentací a provede se diferenciální překlad každého souboru, který byl aktualizován.

```
    autotranslatedoc serve run-llama llama_index
```

Spustí server umožňující snadné prohlížení dokumentace na portu 3000 nebo env.PORT. EXPERIMENTÁLNÍ

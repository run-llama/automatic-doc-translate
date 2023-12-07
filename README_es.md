
# Traducción automática de documentos con OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Esta documentación ha sido traducida automáticamente y puede contener errores. No dudes en abrir una Pull Request para sugerir cambios.```


Una herramienta que traduce automáticamente los documentos (todos los archivos .md) en un repositorio de GitHub utilizando OPEN AI GPT 3.5

*** Descargo de responsabilidad: Esta herramienta aún está en fase experimental ***


## Uso

Primero, instala

```
    npm install -g autotranslatedoc
```

Luego, asegúrate de configurar las siguientes variables de entorno: ```GITHUB_PERSONAL_ACCESS_TOKEN``` y ```OPENAI_API_KEY```. Alternativamente, puedes pasar este token como parámetro.

Para ver la página de ayuda
```
 autotranslatedoc -h
```

Luego, traduce la documentación de un repositorio objetivo en francés y español
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Esto creará un archivo llama_index.json en el directorio run-lama del directorio de salida especificado (por defecto=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Este archivo guardado contiene todas las traducciones y se puede utilizar para generar la documentación en un formato objetivo (actualmente solo .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Esto generará un repositorio en francés y español en la ruta de construcción (por defecto ./build) que contendrá los archivos de documentación traducidos.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Esto buscará las traducciones preexistentes en el archivo de guardado de documentación existente y realizará una traducción diferencial de cada archivo que haya sido actualizado.

```
    autotranslatedoc serve run-llama llama_index
```

Lanzará un servidor que permitirá revisar fácilmente la documentación en el puerto 3000 o env.PORT. EXPERIMENTAL


# Traducción Automática de Documentación de OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Esta documentación ha sido traducida automáticamente y puede contener errores. No dudes en abrir una Pull Request para sugerir cambios.```


## Instalación 

La herramienta se puede instalar a través de NPM:


```
    npm install -g autotranslatedoc
```

Asegúrese de configurar las variables de entorno: `GITHUB_PERSONAL_ACCESS_TOKEN` y `OPENAI_API_KEY`. Alternativamente, estos tokens se pueden pasar como parámetros. Consulte la [documentación de GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) para obtener un `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Uso


### Página de Ayuda
Accede a la página de ayuda con el siguiente comando:
```
 autotranslatedoc -h
```
### Traducción de Documentación

Autotranslatedoc toma 3 argumentos y muchas opciones

```
    autotranslatedoc <comando> <repo_org> <repo_name> (opciones)
```

- ```comando``` puede ser: ```translate``` (para traducir), ```update``` (para actualizar una traducción), ```build``` (para construir una traducción)
- ```repo_org``` es la organización del repositorio objetivo en GitHub
- ```repo_name``` es el nombre del repositorio objetivo en GitHub

Las principales opciones disponibles son:

- ```--language <lang_1>(, <lang_2>)*``` (o ```-l```) para seleccionar el idioma al que desea traducir.
- ```--docPath </url/path>``` (o ```-d```) para limitar la traducción a archivos en una ruta específica.
- ```--savePath <./localPath>``` (o ```-s```) para seleccionar el directorio donde se guardará el archivo de guardado (por defecto es ```./save```).
- ```--outputPath <./localPath>``` (o ```-o```) al usar ```build```, para especificar dónde se guardarán los archivos de documentación traducidos (por defecto es ```./build```)



Para traducir la documentación de un repositorio objetivo al francés y al español, use:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Este comando crea un archivo `llama_index.json` en el directorio `run-lama` del directorio de salida especificado (el valor predeterminado es `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
El archivo de guardado contiene todas las traducciones y se puede utilizar para generar la documentación en un formato objetivo (actualmente solo .md).

Para construir la documentación traducida, use:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Este comando genera los directorios `fr` y `es` en el `buildPath` (por defecto es `./build`) que contienen los archivos de documentación traducidos.

Para actualizar la documentación traducida en función de los cambios en los archivos originales, use:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Para revisar la documentación a través de un servidor (función experimental), use:
```
    autotranslatedoc serve run-llama llama_index
```
### Traducción de Documentación de Docusaurus

Para traducir documentación alojada en Docusaurus, utiliza:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Traducción solo del archivo README.md

Para traducir solo el archivo README, utiliza el modo `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Traducción a todos los idiomas admitidos

Para traducir a todos los idiomas admitidos, utiliza la opción `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Problemas Conocidos

Actualmente, la traducción con `-all` solo es compatible desde el inglés a todos los demás idiomas.

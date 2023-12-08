# Automatic Documentation Translation with LLMs

 [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) |  [fr](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 


This tool leverages the capabilities of OPEN AI GPT 3.5 / 4 to automatically translate documentation files (i.e., .md/.mdx files) within a GitHub repository.

*** Disclaimer: This tool is currently under development ***

## Installation 

The tool can be installed via NPM:


```
    npm install -g autotranslatedoc
```

Ensure to set up the environment variables: `GITHUB_PERSONAL_ACCESS_TOKEN` and `OPENAI_API_KEY`. Alternatively, these tokens can be passed as parameters. Refer to the [GitHub documentation](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) for obtaining a `GITHUB_PERSONAL_ACCESS_TOKEN`.

## Usage

### Help Page
Access the help page with the following command:
```
 autotranslatedoc -h
```

### Translating Documentation

Autotranslatedoc  take 3 arguments and many options

```
    autotranslatedoc <command> <repo_org> <repo_name> (options)
```

- ```command``` can be either: ```translate``` (to translate), ```update``` (to update a translation), ```build``` (to build a translation)
- ```repo_org``` is the org of the target repository on GitHub
- ```repo_name``` is the name of the target repository on GitHub

The main options available are:

- ```--language <lang_1>(, <lang_2>)*``` (or ```-l```) to select the language you want to translate to.
- ```--docPath </url/path>``` (or ```-d```) to limit translation to files in a specific path.
- ```--savePath <./localPath>``` (or ```-s```) to select the directory where the save file will be saved (default to ```./save```).
- ```--outputPath <./localPath>``` (or ```-o```) when using ```build```, to specified where the translated doc files will be output (default to ```./build```)



To translate the documentation of a target repository into French and Spanish, use:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


This command creates a `llama_index.json` file in the `run-lama` directory of the specified output directory (default is `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
The save file contains all translations and can be used to generate the documentation in a target format (currently only .md).

To build the translated documentation, use:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


This command generates `fr` and `es` directories in the `buildPath` (default is `./build`) containing the translated documentation files.

To update the translated documentation based on changes in the original files, use:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


To review the documentation via a server (experimental feature), use:
```
    autotranslatedoc serve run-llama llama_index
```


### Translating Docusaurus Documentation

For translating documentation hosted in Docusaurus, use:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```

### Translating README.md Only

To translate only the README file, use the `readme` mode:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```


### Translating to All Supported Languages

To translate to all supported languages, use the `-l all` option:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```


## Known Issues

Currently, translation with `-all` is only supported from English to all other languages.



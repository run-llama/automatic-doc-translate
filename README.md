# OpenAI Automatic Documentation Translation

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



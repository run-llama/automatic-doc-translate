# autotranslate doc

A tool that automatically transalte the doc (every .md files) in a github repo using OPEN AI GPT 3.5

*** Disclaimer: This tool is still experiemental ***

## Usage 

First install

```
    npm install -g autotranslatedoc
```

Then make sure you set up the following environment variables:
```GITHUB_PERSONAL_ACCESS_TOKEN``` and ```OPENAI_API_KEY```

Then translate the doc of a target repo in french and spanish
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

This will create a llama_index.json file it the run-lama directory of the specified output directory (default=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

This save file contain all the translation and can be used to generate the do to a target format (currently only .md)


```
    autotranslatedoc build run-llama llama_index -l fr,es
```

This will generate a fr and es repository in the buildPath (default ./build) that will contain the translated doc files

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

This will look at pre-existing translation in the existing doc save file and will perform a differential translation of every file that have been updated.

```
    autotranslatedoc serve run-llama llama_index
```

Will launch a server allowing the easy review of the doc on port 3000 or env.PORT. EXPERIMENTAL

# Traduction Automatique de la Documentation OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Cette documentation a été traduite automatiquement et peut contenir des erreurs. N'hésitez pas à ouvrir une Pull Request pour suggérer des modifications.```


## Installation

L'outil peut être installé via NPM :

```
    npm install -g autotranslatedoc
```

Assurez-vous de configurer les variables d'environnement : `GITHUB_PERSONAL_ACCESS_TOKEN` et `OPENAI_API_KEY`. Alternativement, ces jetons peuvent être transmis en tant que paramètres. Consultez la [documentation GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) pour obtenir un `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Utilisation


### Page d'aide
Accédez à la page d'aide avec la commande suivante :
```
 autotranslatedoc -h
```
### Traduction de la documentation

Autotranslatedoc prend 3 arguments et de nombreuses options

```
    autotranslatedoc <commande> <repo_org> <repo_name> (options)
```

- ```commande``` peut être soit : ```translate``` (pour traduire), ```update``` (pour mettre à jour une traduction), ```build``` (pour construire une traduction)
- ```repo_org``` est l'organisation du référentiel cible sur GitHub
- ```repo_name``` est le nom du référentiel cible sur GitHub

Les principales options disponibles sont :

- ```--language <lang_1>(, <lang_2>)*``` (ou ```-l```) pour sélectionner la langue vers laquelle vous souhaitez traduire.
- ```--docPath </url/path>``` (ou ```-d```) pour limiter la traduction aux fichiers d'un chemin spécifique.
- ```--savePath <./localPath>``` (ou ```-s```) pour sélectionner le répertoire où le fichier de sauvegarde sera enregistré (par défaut ```./save```).
- ```--outputPath <./localPath>``` (ou ```-o```) lors de l'utilisation de ```build```, pour spécifier où les fichiers de documentation traduits seront générés (par défaut ```./build```)



Pour traduire la documentation d'un référentiel cible en français et en espagnol, utilisez :
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Cette commande crée un fichier `llama_index.json` dans le répertoire `run-lama` du répertoire de sortie spécifié (par défaut `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Le fichier de sauvegarde contient toutes les traductions et peut être utilisé pour générer la documentation dans un format cible (actuellement uniquement .md).

Pour générer la documentation traduite, utilisez :

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Cette commande génère les répertoires `fr` et `es` dans le `buildPath` (par défaut `./build`) contenant les fichiers de documentation traduits.

Pour mettre à jour la documentation traduite en fonction des modifications apportées aux fichiers d'origine, utilisez :

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Pour consulter la documentation via un serveur (fonctionnalité expérimentale), utilisez :
```
    autotranslatedoc serve run-llama llama_index
```
### Traduction de la documentation Docusaurus

Pour traduire la documentation hébergée dans Docusaurus, utilisez :

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Traduction uniquement du fichier README.md

Pour traduire uniquement le fichier README, utilisez le mode `readme` :

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Traduction vers toutes les langues prises en charge

Pour traduire vers toutes les langues prises en charge, utilisez l'option `-l all` :

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Problèmes Connus

Actuellement, la traduction avec l'option `-all` est uniquement prise en charge de l'anglais vers toutes les autres langues.

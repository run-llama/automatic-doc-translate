
# Traduction automatique de la documentation OpenAI

[EN](./README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Cette documentation a été traduite automatiquement et peut contenir des erreurs. N'hésitez pas à ouvrir une Pull Request pour suggérer des modifications.```


Cet outil exploite les capacités d'OPEN AI GPT 3.5 / 4 pour traduire automatiquement les fichiers de documentation (c'est-à-dire les fichiers .md/.mdx) dans un référentiel GitHub.

*** Avertissement : Cet outil est actuellement en cours de développement ***


## Installation 

L'outil peut être installé via NPM:


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

Pour traduire la documentation d'un référentiel cible en français et en espagnol, utilisez la commande suivante :
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Cette commande crée un fichier `llama_index.json` dans le répertoire `run-lama` du répertoire de sortie spécifié (par défaut : `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Le fichier de sauvegarde contient toutes les traductions et peut être utilisé pour générer la documentation dans un format cible (actuellement uniquement .md).

Pour générer la documentation traduite, utilisez la commande suivante :

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Cette commande génère les répertoires `fr` et `es` dans le `buildPath` (par défaut : `./build`) contenant les fichiers de documentation traduits.

Pour mettre à jour la documentation traduite en fonction des modifications apportées aux fichiers d'origine, utilisez la commande suivante :

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Pour consulter la documentation via un serveur (fonctionnalité expérimentale), utilisez la commande suivante :
```
    autotranslatedoc serve run-llama llama_index
```
### Traduction de la documentation Docusaurus

Pour traduire la documentation hébergée dans Docusaurus, utilisez :

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Traduction de README.md uniquement

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
## Problèmes connus

Actuellement, la traduction avec l'option `-all` est uniquement prise en charge de l'anglais vers toutes les autres langues.

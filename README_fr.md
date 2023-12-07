
# Traduction automatique de documentation avec OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Cette documentation a été traduite automatiquement et peut contenir des erreurs. N'hésitez pas à ouvrir une Pull Request pour suggérer des modifications.```


Un outil qui traduit automatiquement la documentation (tous les fichiers .md) dans un dépôt GitHub en utilisant OPEN AI GPT 3.5

*** Avertissement : Cet outil est encore expérimental ***


## Utilisation

Tout d'abord, installez

```
    npm install -g autotranslatedoc
```

Ensuite, assurez-vous de configurer les variables d'environnement suivantes : ```GITHUB_PERSONAL_ACCESS_TOKEN``` et ```OPENAI_API_KEY```. Vous pouvez également passer ce jeton en paramètre.

Pour voir la page d'aide
```
 autotranslatedoc -h
```

Ensuite, traduisez la documentation d'un dépôt cible en français et en espagnol
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Cela créera un fichier llama_index.json dans le répertoire run-lama du répertoire de sortie spécifié (par défaut = ./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Ce fichier de sauvegarde contient toutes les traductions et peut être utilisé pour générer la documentation dans un format cible (actuellement uniquement .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Cela générera un dépôt fr et es dans le chemin de construction (par défaut = ./build) qui contiendra les fichiers de documentation traduits.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Cela examinera les traductions préexistantes dans le fichier de sauvegarde de la documentation existante et effectuera une traduction différentielle de chaque fichier qui a été mis à jour.

```
    autotranslatedoc serve run-llama llama_index
```

Lancera un serveur permettant de consulter facilement la documentation sur le port 3000 ou env.PORT. EXPÉRIMENTAL

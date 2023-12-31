
# Αυτόματη Μετάφραση Τεκμηρίωσης OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Αυτό το έγγραφο έχει μεταφραστεί αυτόματα και μπορεί να περιέχει λάθη. Μη διστάσετε να ανοίξετε ένα Pull Request για να προτείνετε αλλαγές.```


## Εγκατάσταση 

Το εργαλείο μπορεί να εγκατασταθεί μέσω του NPM:


```
    npm install -g autotranslatedoc
```

Βεβαιωθείτε ότι έχετε ρυθμίσει τις μεταβλητές περιβάλλοντος: `GITHUB_PERSONAL_ACCESS_TOKEN` και `OPENAI_API_KEY`. Εναλλακτικά, αυτά τα τοκεν μπορούν να περάσουν ως παράμετροι. Ανατρέξτε στην [τεκμηρίωση του GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) για την απόκτηση ενός `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Χρήση


### Σελίδα Βοήθειας
Αποκτήστε πρόσβαση στη σελίδα βοήθειας με την παρακάτω εντολή:
```
 autotranslatedoc -h
```
### Μετάφραση Τεκμηρίωσης

Το autotranslatedoc παίρνει 3 ορίσματα και πολλές επιλογές

```
    autotranslatedoc <command> <repo_org> <repo_name> (options)
```

- ```command``` μπορεί να είναι είτε: ```translate``` (για μετάφραση), ```update``` (για ενημέρωση μετάφρασης), ```build``` (για δημιουργία μετάφρασης)
- ```repo_org``` είναι το όνομα του οργανισμού του στόχου στο GitHub
- ```repo_name``` είναι το όνομα του στόχου αποθετηρίου στο GitHub

Οι κύριες διαθέσιμες επιλογές είναι:

- ```--language <lang_1>(, <lang_2>)*``` (ή ```-l```) για να επιλέξετε τη γλώσσα στην οποία θέλετε να γίνει η μετάφραση.
- ```--docPath </url/path>``` (ή ```-d```) για να περιορίσετε τη μετάφραση σε αρχεία σε συγκεκριμένη διαδρομή.
- ```--savePath <./localPath>``` (ή ```-s```) για να επιλέξετε τον κατάλογο όπου θα αποθηκευτεί το αρχείο αποθήκευσης (προεπιλογή ```./save```).
- ```--outputPath <./localPath>``` (ή ```-o```) όταν χρησιμοποιείτε την επιλογή ```build```, για να καθορίσετε πού θα εξαχθούν τα μεταφρασμένα αρχεία τεκμηρίωσης (προεπιλογή ```./build```)



Για να μεταφράσετε την τεκμηρίωση ενός στόχου αποθετηρίου στα Γαλλικά και Ισπανικά, χρησιμοποιήστε:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Αυτή η εντολή δημιουργεί ένα αρχείο `llama_index.json` στον κατάλογο `run-lama` του καθορισμένου καταλόγου εξόδου (προεπιλογή είναι `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Το αρχείο αποθήκευσης περιέχει όλες τις μεταφράσεις και μπορεί να χρησιμοποιηθεί για τη δημιουργία της τεκμηρίωσης σε μια στόχευση μορφή (αυτή τη στιγμή μόνο .md).

Για να δημιουργήσετε τη μεταφρασμένη τεκμηρίωση, χρησιμοποιήστε:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Αυτή η εντολή δημιουργεί τους καταλόγους `fr` και `es` στον `buildPath` (προεπιλογή είναι `./build`) που περιέχουν τα μεταφρασμένα αρχεία τεκμηρίωσης.

Για να ενημερώσετε τη μεταφρασμένη τεκμηρίωση βάσει των αλλαγών στα αρχικά αρχεία, χρησιμοποιήστε:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Για να ελέγξετε την τεκμηρίωση μέσω ενός διακομιστή (πειραματική λειτουργία), χρησιμοποιήστε:
```
    autotranslatedoc serve run-llama llama_index
```
### Μετάφραση Τεκμηρίωσης Docusaurus

Για τη μετάφραση της τεκμηρίωσης που φιλοξενείται στο Docusaurus, χρησιμοποιήστε:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Μετάφραση μόνο του README.md

Για να μεταφράσετε μόνο το αρχείο README, χρησιμοποιήστε τη λειτουργία `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Μετάφραση σε Όλες τις Υποστηριζόμενες Γλώσσες

Για να μεταφράσετε σε όλες τις υποστηριζόμενες γλώσσες, χρησιμοποιήστε την επιλογή `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Γνωστά Προβλήματα

Αυτή τη στιγμή, η μετάφραση με την παράμετρο `-all` υποστηρίζεται μόνο από τα Αγγλικά σε όλες τις άλλες γλώσσες.

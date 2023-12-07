
# Αυτόματη μετάφραση τεκμηρίωσης με το OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Αυτό το έγγραφο έχει μεταφραστεί αυτόματα και μπορεί να περιέχει λάθη. Μη διστάσετε να ανοίξετε ένα Pull Request για να προτείνετε αλλαγές.```


Ένα εργαλείο που μεταφράζει αυτόματα την τεκμηρίωση (κάθε αρχείο .md) σε ένα αποθετήριο του GitHub χρησιμοποιώντας το OPEN AI GPT 3.5

*** Αποποίηση ευθύνης: Αυτό το εργαλείο είναι ακόμα πειραματικό ***


## Χρήση

Πρώτα εγκαταστήστε

```
    npm install -g autotranslatedoc
```

Στη συνέχεια, βεβαιωθείτε ότι έχετε ρυθμίσει τις παρακάτω μεταβλητές περιβάλλοντος: ```GITHUB_PERSONAL_ACCESS_TOKEN``` και ```OPENAI_API_KEY```. Εναλλακτικά, μπορείτε να περάσετε αυτό το τοκέα σαν παράμετρο.

Για να δείτε τη σελίδα βοήθειας
```
 autotranslatedoc -h
```

Στη συνέχεια, μεταφράστε την τεκμηρίωση ενός στόχου στα γαλλικά και τα ισπανικά
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Αυτό θα δημιουργήσει ένα αρχείο llama_index.json στον κατάλογο run-lama του καθορισμένου καταλόγου εξόδου (προεπιλογή=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Αυτό το αρχείο αποθήκευσης περιέχει όλες τις μεταφράσεις και μπορεί να χρησιμοποιηθεί για τη δημιουργία της τεκμηρίωσης σε μια συγκεκριμένη μορφή (αυτή τη στιγμή μόνο .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Αυτό θα δημιουργήσει ένα αποθετήριο fr και es στη διαδρομή buildPath (προεπιλογή ./build) που θα περιέχει τα μεταφρασμένα αρχεία τεκμηρίωσης

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Αυτό θα ελέγξει τις υπάρχουσες μεταφράσεις στο αποθηκευμένο αρχείο τεκμηρίωσης και θα πραγματοποιήσει μια διαφορική μετάφραση κάθε αρχείου που έχει ενημερωθεί.

```
    autotranslatedoc serve run-llama llama_index
```

Θα ξεκινήσει έναν διακομιστή που θα επιτρέπει την εύκολη αναθεώρηση της τεκμηρίωσης στη θύρα 3000 ή στη μεταβλητή περιβάλλοντος PORT. ΠΕΙΡΑΜΑΤΙΚΟ

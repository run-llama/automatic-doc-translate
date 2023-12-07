
# תרגום אוטומטי של מסמך עם OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```התיעוד הזה תורגם באופן אוטומטי ועשוי להכיל טעויות. אל תהסס לפתוח בקשת משיכה כדי להציע שינויים.```


כלי שמתרגם באופן אוטומטי את המסמך (כל קובץ .md) במאגר GitHub באמצעות OPEN AI GPT 3.5

*** הבהרה: כלי זה עדיין בשלב ניסוי ***


## שימוש

התקן תחילה

```
    npm install -g autotranslatedoc
```

לאחר מכן, ודא שהגדרת את המשתנים הסביבתיים הבאים: ```GITHUB_PERSONAL_ACCESS_TOKEN``` ו-```OPENAI_API_KEY```. באופן אלטרנטיבי, ניתן להעביר את האסימון הזה כפרמטר

כדי לראות את דף העזרה
```
 autotranslatedoc -h
```

לאחר מכן, לתרגם את המסמך של מאגר יעד לצרפתית וספרדית
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

זה ייצור קובץ llama_index.json בתיקיית run-lama שבתיקיית הפלט המצוין (ברירת מחדל=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

קובץ השמירה הזה מכיל את כל התרגום וניתן להשתמש בו כדי ליצור את המסמך לפורמט יעד (כרגע רק .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

זה ייצור מאגר בצרפתית ובספרדית בנתיב הבנייה (ברירת מחדל ./build) שיכיל את קבצי המסמך המתורגמים

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

זה יבדוק את התרגום הקיים בקובץ השמירה של המסמך ויבצע תרגום חלקי של כל הקבצים שעודכנו.

```
    autotranslatedoc serve run-llama llama_index
```

יש להפעיל שרת שמאפשר בדיקה נוחה של המסמך בפורט 3000 או env.PORT. ניסיוני

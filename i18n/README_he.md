
# תרגום אוטומטי של מסמך OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```התיעוד הזה תורגם באופן אוטומטי ועשוי להכיל טעויות. אל תהסס לפתוח בקשת משיכה כדי להציע שינויים.```


 [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) |  [fr](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

כלי זה משתמש ביכולות של OPEN AI GPT 3.5 / 4 כדי לתרגם באופן אוטומטי קבצי תיעוד (כלומר, קבצי .md/.mdx) בתוך מאגר GitHub.

*** הצהרת כתב: כלי זה נמצא כרגע בפיתוח ***


## התקנה 

ניתן להתקין את הכלי באמצעות NPM:


```
    npm install -g autotranslatedoc
```

ודא שהגדרת את משתני הסביבה: `GITHUB_PERSONAL_ACCESS_TOKEN` ו- `OPENAI_API_KEY`. באופן אלטרנטיבי, ניתן להעביר את האסימונים הללו כפרמטרים. יש לעיין ב-[תיעוד GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) לקבלת `GITHUB_PERSONAL_ACCESS_TOKEN`.


"
## שימוש


### עמוד עזרה
ניתן לגשת לעמוד העזרה באמצעות הפקודה הבאה:
```
 autotranslatedoc -h
```
### תרגום התיעוד

Autotranslatedoc מקבל 3 ארגומנטים ואפשרויות רבות

```
    autotranslatedoc <command> <repo_org> <repo_name> (options)
```

- ```command``` יכול להיות או: ```translate``` (לתרגם), ```update``` (לעדכן תרגום), ```build``` (לבנות תרגום)
- ```repo_org``` הוא הארגון של המאגר היעד ב-GitHub
- ```repo_name``` הוא שם המאגר היעד ב-GitHub

האפשרויות העיקריות הזמינות הן:

- ```--language <lang_1>(, <lang_2>)*``` (או ```-l```) כדי לבחור את השפה שבה ברצונך לתרגם.
- ```--docPath </url/path>``` (או ```-d```) כדי להגביל את התרגום לקבצים בנתיב מסוים.
- ```--savePath <./localPath>``` (או ```-s```) כדי לבחור את התיקייה שבה יישמר הקובץ (ברירת המחדל היא ```./save```).
- ```--outputPath <./localPath>``` (או ```-o```) כאשר משתמשים ב-```build```, כדי לציין איפה יוצאים קבצי התיעוד המתורגמים (ברירת המחדל היא ```./build```)

כדי לתרגם את התיעוד של מאגר יעד לצרפתית וספרדית, השתמש בפקודה הבאה:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

פקודה זו יוצרת קובץ `llama_index.json` בתיקיית `run-lama` שבתיקיית הפלט המצוין (ברירת המחדל היא `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
הקובץ המצוין מכיל את כל התרגומים וניתן להשתמש בו כדי ליצור את התיעוד בפורמט יעד (כרגע רק .md).

כדי לבנות את התיעוד המתורגם, השתמש בפקודה הבאה:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

פקודה זו יוצרת תיקיות `fr` ו-`es` ב-`buildPath` (ברירת המחדל היא `./build`) המכילות את קבצי התיעוד המתורגמים.

כדי לעדכן את התיעוד המתורגם על סמך שינויים בקבצים המקוריים, השתמש בפקודה הבאה:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

כדי לסקור את התיעוד באמצעות שרת (תכונה ניסיונית), השתמש בפקודה הבאה:
```
    autotranslatedoc serve run-llama llama_index
```
### תרגום תיעוד Docusaurus

לתרגום תיעוד שמארח ב-Docusaurus, השתמש:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### תרגום של README.md בלבד

כדי לתרגם רק את קובץ ה-README, השתמש במצב `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### תרגום לכל השפות התומכות

כדי לתרגם לכל השפות התומכות, השתמש באפשרות `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## בעיות ידועות

כרגע, תרגום עם `-all` נתמך רק מאנגלית לשפות אחרות.

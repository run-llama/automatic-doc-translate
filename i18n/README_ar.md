
# ترجمة تلقائية لوثائق OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```تمت ترجمة هذه الوثيقة تلقائيًا وقد تحتوي على أخطاء. لا تتردد في فتح طلب سحب لاقتراح تغييرات.```


## التثبيت

يمكن تثبيت الأداة عبر NPM:

```
    npm install -g autotranslatedoc
```

تأكد من إعداد المتغيرات البيئية: `GITHUB_PERSONAL_ACCESS_TOKEN` و `OPENAI_API_KEY`. بدلاً من ذلك ، يمكن تمرير هذه الرموز كمعلمات. راجع [وثائق GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) للحصول على `GITHUB_PERSONAL_ACCESS_TOKEN`.
## الاستخدام


### صفحة المساعدة
يمكن الوصول إلى صفحة المساعدة باستخدام الأمر التالي:
```
 autotranslatedoc -h
```
### ترجمة التوثيق

تأخذ أوتوترانسلاتدوك 3 وسائط والعديد من الخيارات

```
    autotranslatedoc <command> <repo_org> <repo_name> (options)
```

- ```command``` يمكن أن يكون إما: ```translate``` (للترجمة)، ```update``` (لتحديث الترجمة)، ```build``` (لبناء الترجمة)
- ```repo_org``` هو اسم المنظمة للمستودع المستهدف على GitHub
- ```repo_name``` هو اسم المستودع المستهدف على GitHub

الخيارات الرئيسية المتاحة هي:

- ```--language <lang_1>(, <lang_2>)*``` (أو ```-l```) لتحديد اللغة التي ترغب في الترجمة إليها.
- ```--docPath </url/path>``` (أو ```-d```) لتحديد ترجمة الملفات في مسار محدد.
- ```--savePath <./localPath>``` (أو ```-s```) لتحديد المجلد الذي سيتم حفظ الملف فيه (الافتراضي هو ```./save```).
- ```--outputPath <./localPath>``` (أو ```-o```) عند استخدام ```build```، لتحديد مكان حفظ ملفات التوثيق المترجمة (الافتراضي هو ```./build```)



لترجمة وثائق مستودع مستهدف إلى الفرنسية والإسبانية، استخدم:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


تنشئ هذه الأمر ملف `llama_index.json` في دليل `run-lama` في المجلد المحدد للحفظ (الافتراضي هو `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
يحتوي الملف المحفوظ على جميع الترجمات ويمكن استخدامه لإنشاء التوثيق بتنسيق مستهدف (حاليًا فقط .md).

لبناء التوثيق المترجم، استخدم:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


ينشئ هذا الأمر مجلدين `fr` و `es` في `buildPath` (الافتراضي هو `./build`) يحتويان على ملفات التوثيق المترجمة.

لتحديث التوثيق المترجم استنادًا إلى التغييرات في الملفات الأصلية، استخدم:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


لمراجعة التوثيق عبر خادم (ميزة تجريبية)، استخدم:
```
    autotranslatedoc serve run-llama llama_index
```
### ترجمة توثيق Docusaurus

لترجمة التوثيق المستضاف في Docusaurus، استخدم:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### ترجمة README.md فقط

لترجمة ملف README فقط ، استخدم وضع `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### الترجمة إلى جميع اللغات المدعومة

لترجمة إلى جميع اللغات المدعومة، استخدم الخيار `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## المشاكل المعروفة

حاليًا، يتم دعم الترجمة بالاستخدام `-all` فقط من اللغة الإنجليزية إلى جميع اللغات الأخرى.

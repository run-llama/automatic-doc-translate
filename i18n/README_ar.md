
# ترجمة تلقائية لوثائق OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```تمت ترجمة هذه الوثيقة تلقائيًا وقد تحتوي على أخطاء. لا تتردد في فتح طلب سحب لاقتراح تغييرات.```


يستفيد هذا الأداة من قدرات OPEN AI GPT 3.5 / 4 لترجمة الملفات التوثيقية (ملفات .md/.mdx) تلقائيًا داخل مستودع GitHub.

*** تنويه: هذه الأداة قيد التطوير حاليًا ***


## التثبيت

يمكن تثبيت الأداة عبر NPM:


```
    npm install -g autotranslatedoc
```

تأكد من إعداد المتغيرات البيئية: `GITHUB_PERSONAL_ACCESS_TOKEN` و `OPENAI_API_KEY`. بدلاً من ذلك ، يمكن تمرير هذه الرموز المميزة كمعلمات. راجع [وثائق GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) للحصول على `GITHUB_PERSONAL_ACCESS_TOKEN`.


"
## الاستخدام


### صفحة المساعدة
يمكن الوصول إلى صفحة المساعدة باستخدام الأمر التالي:
```
 autotranslatedoc -h
```
### ترجمة التوثيق

لترجمة توثيق مستودع معين إلى اللغتين الفرنسية والإسبانية، استخدم الأمر التالي:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


ينشئ هذا الأمر ملف `llama_index.json` في دليل `run-lama` في دليل الإخراج المحدد (الافتراضي هو `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
يحتوي ملف الحفظ على جميع الترجمات ويمكن استخدامه لإنشاء التوثيق بتنسيق معين (حاليًا فقط .md).

لبناء التوثيق المترجم، استخدم الأمر التالي:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


ينشئ هذا الأمر مجلدين `fr` و `es` في `buildPath` (الافتراضي هو `./build`) يحتويان على ملفات التوثيق المترجمة.

لتحديث التوثيق المترجم استنادًا إلى التغييرات في الملفات الأصلية، استخدم الأمر التالي:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


لمراجعة التوثيق عبر خادم (ميزة تجريبية)، استخدم الأمر التالي:
```
    autotranslatedoc serve run-llama llama_index
```
### ترجمة وثائق Docusaurus

لترجمة الوثائق المستضافة في Docusaurus، استخدم:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### ترجمة README.md فقط

لترجمة ملف README فقط، استخدم وضع `readme`:

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

حاليًا، يتم دعم الترجمة بخيار `-all` فقط من اللغة الإنجليزية إلى جميع اللغات الأخرى.

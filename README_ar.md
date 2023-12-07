
# ترجمة تلقائية للوثائق باستخدام OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```تمت ترجمة هذه الوثيقة تلقائيًا وقد تحتوي على أخطاء. لا تتردد في فتح طلب سحب لاقتراح تغييرات.```


أداة تقوم بترجمة الوثائق تلقائيًا (كل ملفات .md) في مستودع GitHub باستخدام OPEN AI GPT 3.5

*** تنويه: هذه الأداة لا تزال تجريبية ***


## الاستخدام

قم بتثبيت الأداة أولاً

```
    npm install -g autotranslatedoc
```

ثم تأكد من تعيين المتغيرات البيئية التالية: ```GITHUB_PERSONAL_ACCESS_TOKEN``` و ```OPENAI_API_KEY```. بالإضافة إلى ذلك، يمكنك تمرير هذا الرمز المميز كمعلمة

لعرض صفحة المساعدة، استخدم الأمر التالي
```
 autotranslatedoc -h
```

ثم قم بترجمة وثائق مستودع معين إلى الفرنسية والإسبانية
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

سيتم إنشاء ملف llama_index.json في دليل run-lama في دليل الإخراج المحدد (الافتراضي=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

يحتوي هذا الملف المحفوظ على جميع الترجمات ويمكن استخدامه لإنشاء الوثائق بتنسيق مستهدف (حاليًا فقط .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

سيتم إنشاء مستودع باللغتين الفرنسية والإسبانية في مسار البناء (الافتراضي ./build) والذي سيحتوي على ملفات الوثائق المترجمة

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

سيقوم هذا بالبحث عن الترجمات الموجودة مسبقًا في ملف الوثائق المحفوظ وسيقوم بترجمة الفروق في كل ملف تم تحديثه.

```
    autotranslatedoc serve run-llama llama_index
```

سيقوم بتشغيل خادم يسمح بمراجعة الوثائق بسهولة على المنفذ 3000 أو env.PORT. تجريبي

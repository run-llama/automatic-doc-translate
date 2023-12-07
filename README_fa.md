
# ترجمه خودکار مستند با استفاده از OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```این مستند به طور خودکار ترجمه شده و ممکن است حاوی اشتباهات باشد. در صورت پیشنهاد تغییرات، دریغ نکنید از باز کردن یک Pull Request.```


ابزاری که به طور خودکار مستند (هر فایل .md) را در یک مخزن GitHub با استفاده از OPEN AI GPT 3.5 ترجمه می‌کند.

*** توجه: این ابزار هنوز تجربی است ***


## استفاده

ابتدا نصب کنید

```
    npm install -g autotranslatedoc
```

سپس مطمئن شوید که متغیرهای محیطی زیر را تنظیم کرده‌اید: ```GITHUB_PERSONAL_ACCESS_TOKEN``` و ```OPENAI_API_KEY```. به طور جایگزین می‌توانید این توکن را به عنوان پارامتر ارسال کنید.

برای مشاهده صفحه راهنما
```
 autotranslatedoc -h
```

سپس مستند یک مخزن هدف را به زبان فرانسوی و اسپانیایی ترجمه کنید
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

این عمل باعث ایجاد یک فایل llama_index.json در دایرکتوری run-lama در دایرکتوری خروجی مشخص شده می‌شود (پیش‌فرض=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

این فایل ذخیره شده شامل تمام ترجمه‌ها است و می‌تواند برای تولید مستند به یک فرمت هدف استفاده شود (فعلاً فقط .md)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

این عمل باعث ایجاد یک مخزن fr و es در مسیر buildPath (پیش‌فرض ./build) می‌شود که حاوی فایل‌های مستند ترجمه شده است.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

این عمل به ترجمه‌های قبلی در فایل ذخیره شده مستند نگاه می‌کند و ترجمه تفاضلی هر فایلی که به‌روز شده است را انجام می‌دهد.

```
    autotranslatedoc serve run-llama llama_index
```

یک سرور راه‌اندازی می‌کند که امکان مرور آسان مستند را در پورت 3000 یا env.PORT فراهم می‌کند. تجربی

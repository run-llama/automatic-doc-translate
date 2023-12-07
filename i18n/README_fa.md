
# ترجمه خودکار مستندات OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```این مستند به طور خودکار ترجمه شده و ممکن است حاوی اشتباهات باشد. در صورت پیشنهاد تغییرات، دریغ نکنید از باز کردن یک Pull Request.```


این ابزار از قابلیت های OPEN AI GPT 3.5 / 4 استفاده می کند تا به طور خودکار فایل های مستندات (به عنوان مثال، فایل های .md/.mdx) در یک مخزن GitHub را ترجمه کند.

*** توجه: این ابزار در حال حاضر در دست توسعه است ***


## نصب

این ابزار می تواند از طریق NPM نصب شود:


```
    npm install -g autotranslatedoc
```

مطمئن شوید که متغیرهای محیطی `GITHUB_PERSONAL_ACCESS_TOKEN` و `OPENAI_API_KEY` را تنظیم کرده اید. به طور جایگزین، این توکن ها می توانند به عنوان پارامترها منتقل شوند. برای کسب اطلاعات بیشتر، به [مستندات GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) مراجعه کنید تا `GITHUB_PERSONAL_ACCESS_TOKEN` را دریافت کنید.
## استفاده

### صفحه راهنما
با استفاده از دستور زیر، به صفحه راهنما دسترسی پیدا کنید:
```
 autotranslatedoc -h
```
### ترجمه مستندات

برای ترجمه مستندات یک مخزن هدف به زبان فرانسوی و اسپانیایی، از دستور زیر استفاده کنید:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


این دستور یک فایل `llama_index.json` در دایرکتوری `run-lama` در دایرکتوری خروجی مشخص شده ایجاد می کند (پیش فرض `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
فایل ذخیره شده شامل تمام ترجمه ها است و می تواند برای تولید مستندات در یک فرمت هدف (فقط .md در حال حاضر) استفاده شود.

برای ساخت مستندات ترجمه شده، از دستور زیر استفاده کنید:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


این دستور `fr` و `es` دایرکتوری ها را در `buildPath` (پیش فرض `./build`) ایجاد می کند که حاوی فایل های مستندات ترجمه شده است.

برای به روزرسانی مستندات ترجمه شده بر اساس تغییرات در فایل های اصلی، از دستور زیر استفاده کنید:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


برای مشاهده مستندات از طریق یک سرور (ویژگی آزمایشی)، از دستور زیر استفاده کنید:
```
    autotranslatedoc serve run-llama llama_index
```
### ترجمه مستندات Docusaurus

برای ترجمه مستندات میزبان شده در Docusaurus، از دستورات زیر استفاده کنید:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### ترجمه فقط فایل README.md

برای ترجمه فقط فایل README، از حالت `readme` استفاده کنید:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### ترجمه به تمام زبان های پشتیبانی شده

برای ترجمه به تمام زبان های پشتیبانی شده، از گزینه `-l all` استفاده کنید:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## مشکلات شناخته شده

در حال حاضر، ترجمه با `-all` فقط از انگلیسی به سایر زبان ها پشتیبانی می شود.

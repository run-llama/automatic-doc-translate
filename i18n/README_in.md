
# Terjemahan Otomatis Dokumentasi OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Dokumentasi ini telah diterjemahkan secara otomatis dan mungkin mengandung kesalahan. Jangan ragu untuk membuka Pull Request untuk mengusulkan perubahan.```


Alat ini memanfaatkan kemampuan OPEN AI GPT 3.5 / 4 untuk secara otomatis menerjemahkan file dokumentasi (yaitu file .md/.mdx) dalam repositori GitHub.

*** Disclaimer: Alat ini saat ini sedang dalam pengembangan ***


## Instalasi

Alat ini dapat diinstal melalui NPM:


```
    npm install -g autotranslatedoc
```

Pastikan untuk mengatur variabel lingkungan: `GITHUB_PERSONAL_ACCESS_TOKEN` dan `OPENAI_API_KEY`. Sebagai alternatif, token-token ini dapat dilewatkan sebagai parameter. Lihat [dokumentasi GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) untuk mendapatkan `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Penggunaan


### Halaman Bantuan
Akses halaman bantuan dengan menggunakan perintah berikut:
```
 autotranslatedoc -h
```
### Menerjemahkan Dokumentasi

Untuk menerjemahkan dokumentasi dari repositori target ke dalam bahasa Prancis dan Spanyol, gunakan:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Perintah ini akan membuat file `llama_index.json` di direktori `run-lama` dari direktori output yang ditentukan (default adalah `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
File save berisi semua terjemahan dan dapat digunakan untuk menghasilkan dokumentasi dalam format target (saat ini hanya .md).

Untuk membangun dokumentasi yang diterjemahkan, gunakan:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Perintah ini akan menghasilkan direktori `fr` dan `es` di `buildPath` (default adalah `./build`) yang berisi file-file dokumentasi yang diterjemahkan.

Untuk memperbarui dokumentasi yang diterjemahkan berdasarkan perubahan pada file asli, gunakan:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Untuk meninjau dokumentasi melalui server (fitur eksperimental), gunakan:
```
    autotranslatedoc serve run-llama llama_index
```
### Menerjemahkan Dokumentasi Docusaurus

Untuk menerjemahkan dokumentasi yang dihosting di Docusaurus, gunakan:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Menerjemahkan Hanya README.md

Untuk menerjemahkan hanya file README, gunakan mode `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Menerjemahkan ke Semua Bahasa yang Didukung

Untuk menerjemahkan ke semua bahasa yang didukung, gunakan opsi `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Masalah yang Diketahui

Saat ini, terjemahan dengan opsi `-all` hanya didukung dari Bahasa Inggris ke semua bahasa lainnya.

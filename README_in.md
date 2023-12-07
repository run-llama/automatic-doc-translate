
# Penerjemahan otomatis dokumen dengan OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Dokumentasi ini telah diterjemahkan secara otomatis dan mungkin mengandung kesalahan. Jangan ragu untuk membuka Pull Request untuk mengusulkan perubahan.```


Sebuah alat yang secara otomatis menerjemahkan dokumen (setiap file .md) dalam repositori GitHub menggunakan OPEN AI GPT 3.5

*** Disclaimer: Alat ini masih dalam tahap eksperimental ***


## Penggunaan

Pertama, pasang

```
    npm install -g autotranslatedoc
```

Pastikan Anda mengatur variabel lingkungan berikut: ```GITHUB_PERSONAL_ACCESS_TOKEN``` dan ```OPENAI_API_KEY```. Atau Anda dapat melewatkan token ini sebagai parameter

Untuk melihat halaman bantuan
```
 autotranslatedoc -h
```

Kemudian terjemahkan dokumen dari repositori target ke dalam bahasa Prancis dan Spanyol
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Ini akan membuat file llama_index.json di direktori run-lama dari direktori output yang ditentukan (default=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

File simpan ini berisi semua terjemahan dan dapat digunakan untuk menghasilkan dokumen dalam format target (saat ini hanya .md)


```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Ini akan menghasilkan repositori fr dan es di buildPath (default ./build) yang akan berisi file dokumen yang diterjemahkan

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Ini akan melihat terjemahan yang sudah ada dalam file simpan dokumen yang ada dan akan melakukan terjemahan diferensial dari setiap file yang telah diperbarui.

```
    autotranslatedoc serve run-llama llama_index
```

Akan meluncurkan server yang memungkinkan tinjauan dokumen dengan mudah di port 3000 atau env.PORT. EKSPERIMENTAL

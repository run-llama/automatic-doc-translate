
# Dịch Tự Động Tài Liệu OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Tài liệu này đã được dịch tự động và có thể chứa lỗi. Đừng ngần ngại mở một Pull Request để đề xuất thay đổi.```


Công cụ này tận dụng khả năng của OPEN AI GPT 3.5 / 4 để tự động dịch các tệp tài liệu (tức là tệp .md/.mdx) trong một kho lưu trữ GitHub.

*** Chú ý: Công cụ này hiện đang trong quá trình phát triển ***


## Cài Đặt 

Công cụ có thể được cài đặt thông qua NPM:


```
    npm install -g autotranslatedoc
```

Hãy đảm bảo thiết lập các biến môi trường: `GITHUB_PERSONAL_ACCESS_TOKEN` và `OPENAI_API_KEY`. Hoặc có thể truyền các mã thông báo này như là các tham số. Tham khảo [tài liệu GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) để lấy `GITHUB_PERSONAL_ACCESS_TOKEN`.


 "
## Sử Dụng


### Trang Trợ Giúp
Truy cập trang trợ giúp bằng lệnh sau:
```
 autotranslatedoc -h
```
### Dịch Tài liệu

Để dịch tài liệu của một kho lưu trữ mục tiêu sang tiếng Pháp và tiếng Tây Ban Nha, sử dụng lệnh sau:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Lệnh này tạo ra một tệp `llama_index.json` trong thư mục `run-lama` của thư mục đầu ra đã chỉ định (mặc định là `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
Tệp lưu chứa tất cả các bản dịch và có thể được sử dụng để tạo tài liệu trong định dạng mục tiêu (hiện chỉ hỗ trợ .md).

Để xây dựng tài liệu đã dịch, sử dụng:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Lệnh này tạo ra các thư mục `fr` và `es` trong `buildPath` (mặc định là `./build`) chứa các tệp tài liệu đã dịch.

Để cập nhật tài liệu đã dịch dựa trên các thay đổi trong các tệp gốc, sử dụng:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Để xem xét tài liệu thông qua một máy chủ (tính năng thử nghiệm), sử dụng:
```
    autotranslatedoc serve run-llama llama_index
```
### Dịch Tài Liệu Docusaurus

Để dịch tài liệu được lưu trữ trong Docusaurus, sử dụng:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Chỉ Dịch README.md

Để chỉ dịch tệp README, sử dụng chế độ `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Dịch Sang Tất Cả Các Ngôn Ngữ Được Hỗ Trợ

Để dịch sang tất cả các ngôn ngữ được hỗ trợ, sử dụng tùy chọn `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Vấn Đề Đã Biết

Hiện tại, chỉ hỗ trợ dịch với `-all` từ tiếng Anh sang tất cả các ngôn ngữ khác.

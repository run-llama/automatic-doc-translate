
# Dịch tài liệu tự động với OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Tài liệu này đã được dịch tự động và có thể chứa lỗi. Đừng ngần ngại mở một Pull Request để đề xuất thay đổi.```


Một công cụ tự động dịch tài liệu (mọi tệp .md) trong một kho github bằng cách sử dụng OPEN AI GPT 3.5

*** Lưu ý: Công cụ này vẫn đang trong giai đoạn thử nghiệm ***


## Sử dụng

Đầu tiên, cài đặt

```
    npm install -g autotranslatedoc
```

Sau đó, đảm bảo bạn thiết lập các biến môi trường sau: ```GITHUB_PERSONAL_ACCESS_TOKEN``` và ```OPENAI_API_KEY```. Hoặc bạn có thể truyền mã này dưới dạng tham số

Để xem trang trợ giúp
```
 autotranslatedoc -h
```

Sau đó, dịch tài liệu của một kho mục tiêu sang tiếng Pháp và tiếng Tây Ban Nha
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Điều này sẽ tạo ra một tệp llama_index.json trong thư mục run-lama của thư mục đầu ra đã chỉ định (mặc định=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Tệp lưu này chứa tất cả các bản dịch và có thể được sử dụng để tạo tài liệu theo định dạng mục tiêu (hiện chỉ hỗ trợ .md)


```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Điều này sẽ tạo ra một kho tiếng Pháp và tiếng Tây Ban Nha trong buildPath (mặc định ./build) chứa các tệp tài liệu đã được dịch

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Điều này sẽ xem xét các bản dịch đã tồn tại trong tệp lưu tài liệu hiện có và thực hiện dịch chênh lệch của mọi tệp đã được cập nhật.

```
    autotranslatedoc serve run-llama llama_index
```

Sẽ khởi chạy một máy chủ cho phép dễ dàng xem xét tài liệu trên cổng 3000 hoặc env.PORT. THỬ NGHIỆM


# การแปลเอกสารอัตโนมัติด้วย OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```เอกสารนี้ได้รับการแปลโดยอัตโนมัติและอาจมีข้อผิดพลาด อย่าลังเลที่จะเปิด Pull Request เพื่อแนะนำการเปลี่ยนแปลง.```


เครื่องมือที่แปลเอกสาร (ทุกไฟล์ .md) ในรีโป github โดยใช้ OPEN AI GPT 3.5 อัตโนมัติ

*** ข้อควรระวัง: เครื่องมือนี้ยังเป็นการทดลอง ***


## วิธีใช้

ติดตั้งก่อน

```
    npm install -g autotranslatedoc
```

แล้วตรวจสอบให้แน่ใจว่าคุณตั้งค่าตัวแปรสภาพแวดล้อมต่อไปนี้: ```GITHUB_PERSONAL_ACCESS_TOKEN``` และ ```OPENAI_API_KEY``` หรือคุณสามารถส่งโทเค็นนี้ผ่านพารามิเตอร์ได้

เพื่อดูหน้าช่วยเหลือ
```
 autotranslatedoc -h
```

จากนั้นแปลเอกสารของเรโพที่เป้าหมายเป็นภาษาฝรั่งเศสและสเปน
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

นี้จะสร้างไฟล์ llama_index.json ในไดเรกทอรี run-lama ของไดเรกทอรีเอาต์พุตที่ระบุ (ค่าเริ่มต้น=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

ไฟล์เซฟนี้จะเก็บการแปลทั้งหมดและสามารถใช้สร้างเอกสารเป็นรูปแบบเป้าหมาย (ในปัจจุบันเป็น .md เท่านั้น)

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

นี้จะสร้างเรโพ fr และ es ในเส้นทางการสร้าง (ค่าเริ่มต้น ./build) ซึ่งจะประกอบด้วยไฟล์เอกสารที่แปลแล้ว

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

นี้จะดูการแปลที่มีอยู่ล่วงหน้าในไฟล์เอกสารเซฟที่มีอยู่และจะดำเนินการแปลแบบส่วนต่างของทุกไฟล์ที่ได้รับการอัปเดต

```
    autotranslatedoc serve run-llama llama_index
```

จะเปิดเซิร์ฟเวอร์เพื่อให้สามารถตรวจสอบเอกสารได้อย่างง่ายดายที่พอร์ต 3000 หรือ env.PORT การทดลอง

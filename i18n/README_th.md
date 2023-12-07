
# การแปลเอกสารอัตโนมัติของ OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```เอกสารนี้ได้รับการแปลโดยอัตโนมัติและอาจมีข้อผิดพลาด อย่าลังเลที่จะเปิด Pull Request เพื่อแนะนำการเปลี่ยนแปลง.```


เครื่องมือนี้ใช้ประโยชน์จากความสามารถของ OPEN AI GPT 3.5 / 4 เพื่อแปลเอกสารอัตโนมัติ (ไฟล์ .md/.mdx) ภายในรีพอสิทอรี GitHub

*** ข้อควรระวัง: เครื่องมือนี้กำลังอยู่ในระหว่างการพัฒนา ***


## การติดตั้ง

เครื่องมือนี้สามารถติดตั้งผ่าน NPM ได้:

```
    npm install -g autotranslatedoc
```

ตรวจสอบให้แน่ใจว่าตั้งค่าตัวแปรสภาพแวดล้อม: `GITHUB_PERSONAL_ACCESS_TOKEN` และ `OPENAI_API_KEY` หรือสามารถส่งโทเค็นเหล่านี้เป็นพารามิเตอร์ได้ ดูรายละเอียดเพิ่มเติมที่ [เอกสาร GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) เพื่อขอรับ `GITHUB_PERSONAL_ACCESS_TOKEN`


"
## วิธีใช้


### หน้าช่วยเหลือ
เข้าถึงหน้าช่วยเหลือด้วยคำสั่งต่อไปนี้:
```
 autotranslatedoc -h
```
### การแปลเอกสาร

ในการแปลเอกสารของรีพอสิทอรีเป้าหมายเป็นภาษาฝรั่งเศสและสเปน ให้ใช้คำสั่ง:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


คำสั่งนี้จะสร้างไฟล์ `llama_index.json` ในไดเรกทอรี `run-lama` ของไดเรกทอรีเอาต์พุตที่ระบุ (ค่าเริ่มต้นคือ `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
ไฟล์เซฟจะประกอบด้วยการแปลทั้งหมดและสามารถใช้สร้างเอกสารในรูปแบบเป้าหมายได้ (ในปัจจุบันรองรับเฉพาะ .md เท่านั้น)

ในการสร้างเอกสารที่แปลแล้ว ให้ใช้คำสั่ง:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


คำสั่งนี้จะสร้างไดเรกทอรี `fr` และ `es` ใน `buildPath` (ค่าเริ่มต้นคือ `./build`) ที่ประกอบด้วยไฟล์เอกสารที่แปลแล้ว

ในการอัปเดตเอกสารที่แปลแล้วตามการเปลี่ยนแปลงในไฟล์ต้นฉบับ ให้ใช้คำสั่ง:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


ในการตรวจสอบเอกสารผ่านเซิร์ฟเวอร์ (คุณลักษณะทดลองใช้), ให้ใช้คำสั่ง:
```
    autotranslatedoc serve run-llama llama_index
```
### การแปลเอกสาร Docusaurus

สำหรับการแปลเอกสารที่เก็บอยู่ใน Docusaurus ให้ใช้คำสั่ง:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### การแปลเฉพาะ README.md เท่านั้น

ในการแปลเฉพาะไฟล์ README เท่านั้น ให้ใช้โหมด `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### การแปลเป็นภาษาทั้งหมดที่รองรับ

ในการแปลเป็นภาษาทั้งหมดที่รองรับ ให้ใช้ตัวเลือก `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## ปัญหาที่รู้จัก

ในปัจจุบัน การแปลด้วย `-all` รองรับเฉพาะภาษาอังกฤษเท่านั้น จากภาษาอังกฤษไปยังภาษาอื่น ๆ

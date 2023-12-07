
# ओपनएआई के साथ स्वचालित दस्तावेज़ अनुवाद

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```इस दस्तावेज़ का अनुवाद स्वचालित रूप से किया गया है और इसमें त्रुटियाँ हो सकती हैं। परिवर्तन सुझाने के लिए पुल रिक्वेस्ट खोलने में संकोच न करें।```


एक उपकरण जो OPEN AI GPT 3.5 का उपयोग करके गिटहब रेपो (हर .md फ़ाइल) के दस्तावेज़ को स्वचालित रूप से अनुवाद करता है

*** अस्वीकरण: यह उपकरण अभी भी प्रायोगिक है ***


## उपयोग 

पहले स्थापित करें

```
    npm install -g autotranslatedoc
```

फिर सुनिश्चित करें कि आप निम्नलिखित पर्यावरण चरों को सेट कर रहे हैं: ```GITHUB_PERSONAL_ACCESS_TOKEN``` और ```OPENAI_API_KEY```। वैकल्पिक रूप से आप इस टोकन को पैरामीटर में पास कर सकते हैं

हेल्प पेज देखने के लिए
```
 autotranslatedoc -h
```

फिर एक लक्षित रेपो के दस्तावेज़ को फ्रेंच और स्पेनिश में अनुवाद करें
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

इससे एक llama_index.json फ़ाइल बनाई जाएगी जो निर्दिष्ट आउटपुट निर्देशिका (डिफ़ॉल्ट=./save) के run-lama निर्देशिका में होगी

```
    ls ./save
        run-llama
            llama_index.json 
```

यह सेव फ़ाइल सभी अनुवाद को संग्रहीत करती है और इसका उपयोग लक्षित प्रारूप (वर्तमान में केवल .md) के लिए दस्तावेज़ उत्पन्न करने के लिए किया जा सकता है


```
    autotranslatedoc build run-llama llama_index -l fr,es
```

इससे एक फ्रेंच और स्पेनिश रेपो उत्पन्न होगा जो अनुवादित दस्तावेज़ फ़ाइलों को संग्रहीत करेगा और इसे बिल्डपैथ (डिफ़ॉल्ट ./build) में रखेगा

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

इससे मौजूदा दस्तावेज़ सेव फ़ाइल में पूर्व मौजूदा अनुवाद को देखेगा और उन फ़ाइलों का अंतरालिक अनुवाद करेगा जिनमें अद्यतित किया गया है।

```
    autotranslatedoc serve run-llama llama_index
```

पोर्ट 3000 या env.PORT पर दस्तावेज़ की आसान समीक्षा करने के लिए एक सर्वर लॉन्च करेगा। प्रायोगिक

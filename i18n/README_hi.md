
# OpenAI स्वचालित दस्तावेज़ अनुवाद

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```इस दस्तावेज़ का अनुवाद स्वचालित रूप से किया गया है और इसमें त्रुटियाँ हो सकती हैं। परिवर्तन सुझाने के लिए पुल रिक्वेस्ट खोलने में संकोच न करें।```


## स्थापना

यह उपकरण NPM के माध्यम से स्थापित किया जा सकता है:

```
    npm install -g autotranslatedoc
```

`GITHUB_PERSONAL_ACCESS_TOKEN` और `OPENAI_API_KEY` जैसे पर्यावरण चरों को सेट करने का ध्यान दें। वैकल्पिक रूप से, इन टोकन को पैरामीटर के रूप में पास किया जा सकता है। `GITHUB_PERSONAL_ACCESS_TOKEN` प्राप्त करने के लिए [GitHub दस्तावेज़ीकरण](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) का संदर्भ लें।
## उपयोग


### सहायता पृष्ठ
निम्नलिखित कमांड के साथ सहायता पृष्ठ तक पहुंचें:
```
 autotranslatedoc -h
```
### दस्तावेज़ीकरण का अनुवाद

Autotranslatedoc 3 तर्क और कई विकल्प लेता है

```
    autotranslatedoc <command> <repo_org> <repo_name> (options)
```

- ```command``` या तो ```translate``` (अनुवाद करने के लिए), ```update``` (अनुवाद को अपडेट करने के लिए), ```build``` (अनुवाद बनाने के लिए) हो सकता है
- ```repo_org``` गिटहब पर लक्षित रिपॉजिटरी का संगठन है
- ```repo_name``` गिटहब पर लक्षित रिपॉजिटरी का नाम है

मुख्य उपलब्ध विकल्प हैं:

- ```--language <lang_1>(, <lang_2>)*``` (या ```-l```) जिस भाषा में आप अनुवाद करना चाहते हैं, उसे चुनने के लिए।
- ```--docPath </url/path>``` (या ```-d```) अनुवाद को केवल एक विशिष्ट पथ में फ़ाइलों से सीमित करने के लिए।
- ```--savePath <./localPath>``` (या ```-s```) सहेजने वाली फ़ाइल को सहेजने के लिए निर्दिष्ट निर्देशिका का चयन करने के लिए (```./save``` को डिफ़ॉल्ट रूप से चुनता है)।
- ```--outputPath <./localPath>``` (या ```-o```) ```build``` का उपयोग करते समय, अनुवादित दस्तावेज़ीकरण फ़ाइलों को आउटपुट करने के लिए निर्दिष्ट करने के लिए (```./build``` को डिफ़ॉल्ट रूप से चुनता है)।

एक लक्षित रिपॉजिटरी के दस्तावेज़ीकरण को फ़्रेंच और स्पेनिश में अनुवाद करने के लिए, निम्नलिखित का उपयोग करें:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

यह कमांड निर्दिष्ट आउटपुट निर्देशिका (डिफ़ॉल्ट रूप से ```./save```) के ```run-lama``` निर्देशिका में ```llama_index.json``` फ़ाइल बनाता है।
```
    ls ./save
        run-llama
            llama_index.json 
```
सहेजने वाली फ़ाइल में सभी अनुवाद होते हैं और इसका उपयोग लक्षित प्रारूप में दस्तावेज़ीकरण उत्पन्न करने के लिए किया जा सकता है (वर्तमान में केवल .md फ़ाइलें हैं)।

अनुवादित दस्तावेज़ीकरण को बनाने के लिए, निम्नलिखित का उपयोग करें:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

यह कमांड अनुवादित दस्तावेज़ीकरण फ़ाइलों को समावेश करने वाले ```buildPath``` (डिफ़ॉल्ट रूप से ```./build```) में ```fr``` और ```es``` निर्देशिकाएँ उत्पन्न करता है।

मूल फ़ाइलों में परिवर्तनों के आधार पर अनुवादित दस्तावेज़ीकरण को अपडेट करने के लिए, निम्नलिखित का उपयोग करें:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

दस्तावेज़ीकरण की समीक्षा सर्वर के माध्यम से करने के लिए (प्रायोगिक सुविधा), निम्नलिखित का उपयोग करें:
```
    autotranslatedoc serve run-llama llama_index
```
### डोक्यूसोरस दस्तावेज़ीकरण का अनुवाद करना

डोक्यूसोरस में होस्ट किए जाने वाले दस्तावेज़ीकरण के लिए, निम्न का उपयोग करें:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### केवल README.md का अनुवाद करना

केवल README फ़ाइल का अनुवाद करने के लिए, `readme` मोड का उपयोग करें:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### सभी समर्थित भाषाओं में अनुवाद करना

सभी समर्थित भाषाओं में अनुवाद करने के लिए, `-l all` विकल्प का उपयोग करें:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## ज्ञात समस्याएँ

वर्तमान में, `-all` के साथ अनुवाद केवल अंग्रेजी से अन्य सभी भाषाओं के लिए समर्थित है।

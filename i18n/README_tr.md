
# OpenAI Otomatik Belgelerin Çevirisi

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Bu belge otomatik olarak çevrilmiştir ve hatalar içerebilir. Değişiklik önermek için bir Pull Request açmaktan çekinmeyin.```


## Kurulum

Araç, NPM aracılığıyla kurulabilir:


```
    npm install -g autotranslatedoc
```

`GITHUB_PERSONAL_ACCESS_TOKEN` ve `OPENAI_API_KEY` ortam değişkenlerinin ayarlandığından emin olun. Alternatif olarak, bu belirteçler parametre olarak geçirilebilir. Bir `GITHUB_PERSONAL_ACCESS_TOKEN` elde etmek için [GitHub belgelerine](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) başvurun.


"
## Kullanım

### Yardım Sayfası
Aşağıdaki komutla yardım sayfasına erişin:
```
 autotranslatedoc -h
```
### Belgelerin Çevirilmesi

Autotranslatedoc, 3 argüman ve birçok seçenek alır

```
    autotranslatedoc <komut> <repo_org> <repo_adı> (seçenekler)
```

- ```komut```, ```translate``` (çeviri yapmak için), ```update``` (bir çeviriyi güncellemek için), ```build``` (bir çeviri oluşturmak için) olabilir
- ```repo_org```, GitHub'daki hedef deposunun org'unu temsil eder
- ```repo_adı```, GitHub'daki hedef deposunun adını temsil eder

Kullanılabilir ana seçenekler şunlardır:

- ```--language <dil_1>(, <dil_2>)*``` (veya ```-l```) çevrilmek istenen dili seçmek için.
- ```--docPath </url/yol>``` (veya ```-d```) belirli bir yol içindeki dosyalara sınırlı çeviri yapmak için.
- ```--savePath <./yerelYol>``` (veya ```-s```) kaydedilecek dosyanın dizinini seçmek için (varsayılan olarak ```./save```).
- ```--outputPath <./yerelYol>``` (veya ```-o```) ```build``` kullanılıyorsa, çevrilen belge dosyalarının çıktı yapılacağı yeri belirtmek için (varsayılan olarak ```./build```)

Hedef bir depodaki belgeleri Fransızca ve İspanyolca'ya çevirmek için şunu kullanın:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Bu komut, belirtilen çıktı dizininde (`./save` varsayılan olarak) `run-llama` dizininde bir `llama_index.json` dosyası oluşturur.
```
    ls ./save
        run-llama
            llama_index.json 
```
Kaydedilen dosya, tüm çevirileri içerir ve hedef bir formatta (şu anda sadece .md) belgeyi oluşturmak için kullanılabilir.

Çevrilen belgeleri oluşturmak için şunu kullanın:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Bu komut, çevrilen belge dosyalarını içeren `fr` ve `es` dizinlerini `buildPath` (varsayılan olarak `./build`) içinde oluşturur.

Orijinal dosyalardaki değişikliklere dayanarak çevrilen belgeleri güncellemek için şunu kullanın:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Belgeleri bir sunucu üzerinden incelemek için (deneysel özellik), şunu kullanın:
```
    autotranslatedoc serve run-llama llama_index
```
### Docusaurus Belgelerini Çevirme

Docusaurus'ta barındırılan belgeleri çevirmek için şunu kullanın:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Sadece README.md Çevirisi

Yalnızca README dosyasını çevirmek için `readme` modunu kullanın:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Tüm Desteklenen Dillere Çevirme

Tüm desteklenen dillere çevirmek için `-l all` seçeneğini kullanın:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Bilinen Sorunlar

Şu anda, `-all` ile yapılan çeviri yalnızca İngilizce'den diğer tüm dillere desteklenmektedir.

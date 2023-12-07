
# OpenAI ile Otomatik Belge Çevirisi

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Bu belge otomatik olarak çevrilmiştir ve hatalar içerebilir. Değişiklik önermek için bir Pull Request açmaktan çekinmeyin.```


OPEN AI GPT 3.5 kullanarak bir github deposundaki belgeleri (her .md dosyasını) otomatik olarak çeviren bir araç.

*** Not: Bu araç hala deneyseldir ***


## Kullanım

Öncelikle yükleyin

```
    npm install -g autotranslatedoc
```

Ardından aşağıdaki ortam değişkenlerini ayarladığınızdan emin olun: ```GITHUB_PERSONAL_ACCESS_TOKEN``` ve ```OPENAI_API_KEY```. Alternatif olarak, bu belirteci parametre olarak iletebilirsiniz.

Yardım sayfasını görmek için
```
 autotranslatedoc -h
```

Ardından hedef bir depodaki belgeleri Fransızca ve İspanyolca olarak çevirin
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Bu, belirtilen çıktı dizininin (varsayılan=./save) run-lama dizininde llama_index.json adlı bir dosya oluşturur.

```
    ls ./save
        run-llama
            llama_index.json 
```

Bu kayıt dosyası, tüm çevirileri içerir ve hedef bir formata (şu anda sadece .md) dönüştürmek için kullanılabilir.

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Bu, çevrilmiş belge dosyalarını içerecek olan buildPath (varsayılan ./build) içinde fr ve es adında bir depo oluşturur.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Bu, mevcut belge kayıt dosyasındaki mevcut çevirilere bakacak ve güncellenen her dosyanın farklı bir çevirisini gerçekleştirecektir.

```
    autotranslatedoc serve run-llama llama_index
```

Belgelerin kolayca gözden geçirilebilmesi için 3000 numaralı bağlantı noktasında veya env.PORT üzerinde bir sunucu başlatacaktır. DENEYSEL


"

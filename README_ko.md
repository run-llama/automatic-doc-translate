
# OpenAI를 사용한 자동 문서 번역

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Portuguese](./README_pt.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```이 문서는 자동 번역되었으며 오류가 포함될 수 있습니다. 변경 사항을 제안하려면 Pull Request를 열어 주저하지 마십시오.```


OPEN AI GPT 3.5를 사용하여 깃허브 저장소의 모든 .md 파일을 자동으로 번역하는 도구입니다.

*** 고지: 이 도구는 여전히 실험적입니다. ***


## 사용법

먼저 설치하세요.

```
    npm install -g autotranslatedoc
```

그런 다음 다음 환경 변수를 설정해야 합니다: ```GITHUB_PERSONAL_ACCESS_TOKEN``` 및 ```OPENAI_API_KEY```. 또는 이 토큰을 매개변수로 전달할 수도 있습니다.

도움말 페이지를 보려면 다음을 실행하세요.

```
 autotranslatedoc -h
```

그런 다음 대상 저장소의 문서를 프랑스어와 스페인어로 번역하세요.

```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

이렇게 하면 지정된 출력 디렉토리(run-lama 디렉토리의 기본값=./save)에 llama_index.json 파일이 생성됩니다.

```
    ls ./save
        run-llama
            llama_index.json 
```

이 저장 파일에는 모든 번역이 포함되어 있으며 대상 형식(.md만 현재 지원)의 문서를 생성하는 데 사용할 수 있습니다.

```
    autotranslatedoc build run-llama llama_index -l fr,es
```

이렇게 하면 번역된 문서 파일이 포함된 빌드 경로(기본값 ./build)에 fr 및 es 저장소가 생성됩니다.

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

이렇게 하면 기존 문서 저장 파일에서 기존 번역을 확인하고 업데이트된 모든 파일에 대해 차이점 번역을 수행합니다.

```
    autotranslatedoc serve run-llama llama_index
```

이 명령은 3000번 포트 또는 env.PORT에서 문서를 쉽게 검토할 수 있는 서버를 시작합니다. 실험적입니다.

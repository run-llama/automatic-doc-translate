
# OpenAI 자동 문서 번역

[EN](./README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [pt](/i18n/README_pt.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```이 문서는 자동 번역되었으며 오류가 포함될 수 있습니다. 변경 사항을 제안하려면 Pull Request를 열어 주저하지 마십시오.```


이 도구는 OPEN AI GPT 3.5 / 4의 기능을 활용하여 GitHub 저장소 내의 문서 파일(.md/.mdx 파일)을 자동으로 번역합니다.

*** 고지: 이 도구는 현재 개발 중입니다. ***


## 설치

이 도구는 NPM을 통해 설치할 수 있습니다:


```
    npm install -g autotranslatedoc
```

`GITHUB_PERSONAL_ACCESS_TOKEN`과 `OPENAI_API_KEY` 환경 변수를 설정해야 합니다. 또는 이러한 토큰을 매개변수로 전달할 수도 있습니다. `GITHUB_PERSONAL_ACCESS_TOKEN`을 얻는 방법에 대해서는 [GitHub 문서](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)를 참조하십시오.


"
## 사용법


### 도움말 페이지
다음 명령어로 도움말 페이지에 접근할 수 있습니다:
```
 autotranslatedoc -h
```
### 문서 번역

대상 저장소의 문서를 프랑스어와 스페인어로 번역하려면 다음을 사용하세요:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


이 명령은 지정된 출력 디렉토리(기본값은 `./save`)의 `run-lama` 디렉토리에 `llama_index.json` 파일을 생성합니다.
```
    ls ./save
        run-llama
            llama_index.json 
```
저장된 파일에는 모든 번역이 포함되어 있으며 대상 형식(현재는 .md만 가능)의 문서를 생성하는 데 사용할 수 있습니다.

번역된 문서를 빌드하려면 다음을 사용하세요:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


이 명령은 번역된 문서 파일이 포함된 `fr` 및 `es` 디렉토리를 `buildPath`(기본값은 `./build`)에 생성합니다.

원본 파일의 변경 내용을 기반으로 번역된 문서를 업데이트하려면 다음을 사용하세요:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


서버를 통해 문서를 검토하려면(실험적인 기능), 다음을 사용하세요:
```
    autotranslatedoc serve run-llama llama_index
```
### Docusaurus 문서 번역

Docusaurus에서 호스팅된 문서를 번역하려면 다음을 사용하세요:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### README.md만 번역하기

README 파일만 번역하려면 `readme` 모드를 사용하세요:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### 모든 지원 언어로 번역하기

모든 지원 언어로 번역하려면 `-l all` 옵션을 사용하세요:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## 알려진 문제점

현재, `-all`을 사용한 번역은 영어에서 다른 모든 언어로만 지원됩니다.


# Tradução automática de documentos com OpenAI

[English](./README.md)| [Simplified Chinese](./README_zh-Hans.md) | [Spanish](./README_es.md) | [Russian](./README_ru.md) | [German](./README_de.md) | [French](./README_fr.md) | [Japanese](./README_ja.md) | [Korean](./README_ko.md) | [Italian](./README_it.md) | [Arabic](./README_ar.md) | [Turkish](./README_tr.md) | [Polish](./README_pl.md) | [Dutch](./README_nl.md) | [Vietnamese](./README_vi.md) | [Thai](./README_th.md) | [Persian](./README_fa.md) | [Romanian](./README_ro.md) | [Swedish](./README_sv.md) | [Hungarian](./README_hu.md) | [Czech](./README_cs.md) | [Greek](./README_el.md) | [Danish](./README_da.md) | [Finnish](./README_fi.md) | [Hebrew](./README_he.md) | [Norwegian](./README_no.md) | [Hindi](./README_hi.md) | [Traditional Chinese](./README_zh_tw.md) | [Indonesian](./README_in.md) | [Slovak](./README_sl.md) | [Serbian](./README_se.md) | [Slovenian](./README_sk.md) | [Ukrainian](./README_uk.md) | [Bulgarian](./README_bg.md) | [Croatian](./README_hr.md) | [Lithuanian](./README_lt.md) | [Latvian](./README_lv.md) | [Estonian](./README_et.md) | [Catalan](./README_cat.md) 

```Esta documentação foi traduzida automaticamente e pode conter erros. Não hesite em abrir um Pull Request para sugerir alterações.```


Uma ferramenta que traduz automaticamente a documentação (todos os arquivos .md) em um repositório do GitHub usando o OPEN AI GPT 3.5

*** Aviso: Esta ferramenta ainda é experimental ***


## Uso

Primeiro, instale

```
    npm install -g autotranslatedoc
```

Em seguida, certifique-se de configurar as seguintes variáveis de ambiente: ```GITHUB_PERSONAL_ACCESS_TOKEN``` e ```OPENAI_API_KEY```. Alternativamente, você pode passar esse token como parâmetro.

Para ver a página de ajuda
```
 autotranslatedoc -h
```

Em seguida, traduza a documentação de um repositório de destino em francês e espanhol
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```

Isso criará um arquivo llama_index.json no diretório run-lama do diretório de saída especificado (padrão=./save)

```
    ls ./save
        run-llama
            llama_index.json 
```

Este arquivo de salvamento contém todas as traduções e pode ser usado para gerar a documentação em um formato de destino (atualmente apenas .md)


```
    autotranslatedoc build run-llama llama_index -l fr,es
```

Isso irá gerar um repositório fr e es no buildPath (padrão ./build) que conterá os arquivos de documentação traduzidos

```
    autotranslatedoc update run-llama llama_index -l fr,es
```

Isso verificará as traduções pré-existentes no arquivo de salvamento da documentação existente e realizará uma tradução diferencial de cada arquivo que foi atualizado.

```
    autotranslatedoc serve run-llama llama_index
```

Iniciará um servidor que permite a fácil revisão da documentação na porta 3000 ou env.PORT. EXPERIMENTAL

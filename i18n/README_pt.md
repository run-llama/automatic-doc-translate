
# Tradução Automática de Documentação OpenAI

[en](../README.md)| [zh-Hans](/i18n/README_zh-Hans.md) | [es](/i18n/README_es.md) | [ru](/i18n/README_ru.md) | [de](/i18n/README_de.md) | [fr](/i18n/README_fr.md) | [ja](/i18n/README_ja.md) | [ko](/i18n/README_ko.md) | [it](/i18n/README_it.md) | [ar](/i18n/README_ar.md) | [tr](/i18n/README_tr.md) | [pl](/i18n/README_pl.md) | [nl](/i18n/README_nl.md) | [vi](/i18n/README_vi.md) | [th](/i18n/README_th.md) | [fa](/i18n/README_fa.md) | [ro](/i18n/README_ro.md) | [sv](/i18n/README_sv.md) | [hu](/i18n/README_hu.md) | [cs](/i18n/README_cs.md) | [el](/i18n/README_el.md) | [da](/i18n/README_da.md) | [fi](/i18n/README_fi.md) | [he](/i18n/README_he.md) | [no](/i18n/README_no.md) | [hi](/i18n/README_hi.md) | [zh_tw](/i18n/README_zh_tw.md) | [in](/i18n/README_in.md) | [sl](/i18n/README_sl.md) | [se](/i18n/README_se.md) | [sk](/i18n/README_sk.md) | [uk](/i18n/README_uk.md) | [bg](/i18n/README_bg.md) | [hr](/i18n/README_hr.md) | [lt](/i18n/README_lt.md) | [lv](/i18n/README_lv.md) | [et](/i18n/README_et.md) | [cat](/i18n/README_cat.md) 

```Esta documentação foi traduzida automaticamente e pode conter erros. Não hesite em abrir um Pull Request para sugerir alterações.```


## Instalação

A ferramenta pode ser instalada via NPM:

```
    npm install -g autotranslatedoc
```

Certifique-se de configurar as variáveis de ambiente: `GITHUB_PERSONAL_ACCESS_TOKEN` e `OPENAI_API_KEY`. Alternativamente, esses tokens podem ser passados como parâmetros. Consulte a [documentação do GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) para obter um `GITHUB_PERSONAL_ACCESS_TOKEN`.
## Uso


### Página de Ajuda
Acesse a página de ajuda com o seguinte comando:
```
 autotranslatedoc -h
```
### Traduzindo Documentação

O Autotranslatedoc recebe 3 argumentos e várias opções

```
    autotranslatedoc <comando> <repo_org> <repo_name> (opções)
```

- ```comando``` pode ser: ```translate``` (para traduzir), ```update``` (para atualizar uma tradução), ```build``` (para construir uma tradução)
- ```repo_org``` é a organização do repositório de destino no GitHub
- ```repo_name``` é o nome do repositório de destino no GitHub

As principais opções disponíveis são:

- ```--language <lang_1>(, <lang_2>)*``` (ou ```-l```) para selecionar o idioma para o qual você deseja traduzir.
- ```--docPath </url/path>``` (ou ```-d```) para limitar a tradução a arquivos em um caminho específico.
- ```--savePath <./localPath>``` (ou ```-s```) para selecionar o diretório onde o arquivo de salvamento será salvo (padrão é ```./save```).
- ```--outputPath <./localPath>``` (ou ```-o```) ao usar ```build```, para especificar onde os arquivos de documentação traduzidos serão salvos (padrão é ```./build```)



Para traduzir a documentação de um repositório de destino para francês e espanhol, use:
```
    autotranslatedoc translate run-llama llama_index -l fr,es
```


Este comando cria um arquivo `llama_index.json` no diretório `run-lama` do diretório de saída especificado (o padrão é `./save`).
```
    ls ./save
        run-llama
            llama_index.json 
```
O arquivo de salvamento contém todas as traduções e pode ser usado para gerar a documentação em um formato de destino (atualmente apenas .md).

Para construir a documentação traduzida, use:

```
    autotranslatedoc build run-llama llama_index -l fr,es
```


Este comando gera os diretórios `fr` e `es` no `buildPath` (padrão é `./build`) contendo os arquivos de documentação traduzidos.

Para atualizar a documentação traduzida com base em alterações nos arquivos originais, use:

```
    autotranslatedoc update run-llama llama_index -l fr,es
```


Para revisar a documentação por meio de um servidor (recurso experimental), use:
```
    autotranslatedoc serve run-llama llama_index
```
### Traduzindo Documentação do Docusaurus

Para traduzir a documentação hospedada no Docusaurus, use:

```
    autotranslatedoc translate run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
    autotranslatedoc build run-llama LlamaIndexTS --docPath /apps/docs/docs -l fr,es -m docusaurus
```
### Traduzindo apenas o README.md

Para traduzir apenas o arquivo README, use o modo `readme`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l fr,es -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l fr,es -m readme
```
### Traduzindo para Todos os Idiomas Suportados

Para traduzir para todos os idiomas suportados, use a opção `-l all`:

```
    autotranslatedoc translate run-llama LlamaIndexTS -l all -m readme
    autotranslatedoc build run-llama LlamaIndexTS  -l all -m readme
```
## Problemas Conhecidos

Atualmente, a tradução com `-all` é suportada apenas do inglês para todos os outros idiomas.
